create or replace function public.create_staff_invitation(
  p_institution_id uuid,
  p_email text,
  p_role text,
  p_display_name text default null
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized_email text := lower(nullif(trim(p_email), ''));
  normalized_display_name text := nullif(trim(p_display_name), '');
  invitation_id uuid;
  invite_token text := encode(extensions.gen_random_bytes(32), 'hex');
  invite_token_hash text := encode(extensions.digest(invite_token, 'sha256'), 'hex');
  invite_permissions text[];
begin
  if auth.uid() is null then
    raise exception 'You must be signed in to invite staff';
  end if;

  if not public.has_staff_permission(p_institution_id, 'staff.invite') then
    raise exception 'You do not have permission to invite staff';
  end if;

  if normalized_email is null or normalized_email !~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' then
    raise exception 'Enter a valid staff email address';
  end if;

  if p_role not in ('admin', 'department_admin', 'programme_lead', 'module_lead', 'lecturer', 'teaching_assistant', 'department_staff', 'viewer') then
    raise exception 'Choose a valid staff role';
  end if;

  if exists (
    select 1
    from public.staff_institution_memberships membership
    join public.user_accounts account on account.id = membership.user_id
    where membership.institution_id = p_institution_id
      and lower(account.email) = normalized_email
      and membership.status = 'active'
      and membership.archived_at is null
  ) then
    raise exception 'That person is already an active staff member';
  end if;

  invite_permissions := public.default_staff_permissions(p_role);

  update public.staff_invitations
  set status = 'revoked',
      revoked_at = now(),
      archived_at = now()
  where institution_id = p_institution_id
    and lower(invited_email) = normalized_email
    and status = 'pending'
    and archived_at is null;

  insert into public.staff_invitations (
    institution_id,
    invited_email,
    invited_display_name,
    role,
    permissions,
    token_hash,
    invited_by_user_id
  )
  values (
    p_institution_id,
    normalized_email,
    normalized_display_name,
    p_role,
    invite_permissions,
    invite_token_hash,
    auth.uid()
  )
  returning id into invitation_id;

  insert into public.audit_logs (
    institution_id,
    actor_user_id,
    action,
    entity_type,
    entity_id,
    after
  )
  values (
    p_institution_id,
    auth.uid(),
    'staff.invitation.created',
    'staff_invitation',
    invitation_id,
    jsonb_build_object('email', normalized_email, 'role', p_role)
  );

  return invite_token;
end;
$$;

grant execute on function public.create_staff_invitation(uuid, text, text, text) to authenticated;
