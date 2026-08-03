create table public.staff_invitations (
  id uuid primary key default gen_random_uuid(),
  institution_id uuid not null references public.institutions(id) on delete cascade,
  invited_email text not null,
  invited_display_name text,
  role text not null check (role in ('admin', 'department_admin', 'programme_lead', 'module_lead', 'lecturer', 'teaching_assistant', 'department_staff', 'viewer')),
  permissions text[] not null default '{}',
  token_hash text not null unique,
  status text not null default 'pending' check (status in ('pending', 'accepted', 'revoked', 'expired')),
  invited_by_user_id uuid references auth.users(id) on delete set null,
  accepted_by_user_id uuid references auth.users(id) on delete set null,
  accepted_at timestamptz,
  expires_at timestamptz not null default (now() + interval '14 days'),
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz,
  constraint staff_invitations_email_format check (invited_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')
);

create index staff_invitations_institution_idx
on public.staff_invitations(institution_id, created_at desc);

create index staff_invitations_email_idx
on public.staff_invitations(institution_id, lower(invited_email));

create unique index staff_invitations_pending_email_idx
on public.staff_invitations(institution_id, lower(invited_email))
where status = 'pending' and archived_at is null;

create trigger staff_invitations_set_updated_at
before update on public.staff_invitations
for each row execute function public.set_updated_at();

create or replace function public.default_staff_permissions(p_role text)
returns text[]
language sql
immutable
as $$
  select case p_role
    when 'admin' then array[
      'institution.manage_settings',
      'staff.invite',
      'staff.manage_roles',
      'staff.view',
      'students.create',
      'students.import',
      'students.update',
      'courses.create',
      'courses.update',
      'modules.create',
      'modules.update',
      'reports.view',
      'audit.view'
    ]::text[]
    when 'department_admin' then array[
      'staff.view',
      'students.update',
      'courses.create',
      'courses.update',
      'modules.create',
      'modules.update',
      'reports.view'
    ]::text[]
    when 'programme_lead' then array[
      'staff.view',
      'students.update',
      'courses.update',
      'modules.update',
      'reports.view'
    ]::text[]
    when 'module_lead' then array[
      'staff.view',
      'modules.update',
      'reports.view'
    ]::text[]
    when 'lecturer' then array[
      'staff.view',
      'modules.update',
      'reports.view'
    ]::text[]
    when 'teaching_assistant' then array[
      'staff.view',
      'reports.view'
    ]::text[]
    when 'department_staff' then array[
      'staff.view',
      'reports.view'
    ]::text[]
    when 'viewer' then array[
      'staff.view'
    ]::text[]
    else '{}'::text[]
  end;
$$;

create or replace function public.has_staff_permission(
  p_institution_id uuid,
  p_permission text
)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.staff_institution_memberships membership
    where membership.institution_id = p_institution_id
      and membership.user_id = auth.uid()
      and membership.status = 'active'
      and membership.archived_at is null
      and (
        membership.role in ('owner', 'admin')
        or p_permission = any(membership.permissions)
        or p_permission = any(public.default_staff_permissions(membership.role))
      )
  );
$$;

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

create or replace function public.get_staff_invitation_by_token(p_token text)
returns table (
  invitation_id uuid,
  institution_id uuid,
  institution_name text,
  invited_email text,
  invited_display_name text,
  role text,
  status text,
  expires_at timestamptz,
  accepted_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select
    invitation.id,
    invitation.institution_id,
    institution.name,
    invitation.invited_email,
    invitation.invited_display_name,
    invitation.role,
    case
      when invitation.status = 'pending' and invitation.expires_at < now() then 'expired'
      else invitation.status
    end,
    invitation.expires_at,
    invitation.accepted_at
  from public.staff_invitations invitation
  join public.institutions institution on institution.id = invitation.institution_id
  where invitation.token_hash = encode(extensions.digest(coalesce(p_token, ''), 'sha256'), 'hex')
    and invitation.archived_at is null
  limit 1;
$$;

create or replace function public.accept_staff_invitation(p_token text)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  invitation public.staff_invitations%rowtype;
  auth_email text;
  auth_display_name text;
begin
  if auth.uid() is null then
    raise exception 'Sign in before accepting this invitation';
  end if;

  select * into invitation
  from public.staff_invitations
  where token_hash = encode(extensions.digest(coalesce(p_token, ''), 'sha256'), 'hex')
    and archived_at is null
  for update;

  if invitation.id is null then
    raise exception 'This invitation link is invalid';
  end if;

  if invitation.status <> 'pending' then
    raise exception 'This invitation is no longer pending';
  end if;

  if invitation.expires_at < now() then
    update public.staff_invitations
    set status = 'expired',
        archived_at = now()
    where id = invitation.id;

    raise exception 'This invitation has expired';
  end if;

  select
    lower(coalesce(auth_user.email, '')),
    coalesce(
      auth_user.raw_user_meta_data ->> 'display_name',
      invitation.invited_display_name,
      split_part(coalesce(auth_user.email, 'staff'), '@', 1)
    )
  into auth_email, auth_display_name
  from auth.users auth_user
  where auth_user.id = auth.uid();

  if auth_email <> lower(invitation.invited_email) then
    raise exception 'Sign in with % to accept this invitation', invitation.invited_email;
  end if;

  insert into public.user_accounts (id, email, display_name)
  values (auth.uid(), auth_email, auth_display_name)
  on conflict (id) do update
  set email = excluded.email,
      display_name = excluded.display_name,
      status = 'active',
      updated_at = now();

  insert into public.staff_institution_memberships (
    institution_id,
    user_id,
    role,
    permissions,
    status,
    joined_at
  )
  values (
    invitation.institution_id,
    auth.uid(),
    invitation.role,
    invitation.permissions,
    'active',
    now()
  )
  on conflict (institution_id, user_id) do update
  set role = excluded.role,
      permissions = excluded.permissions,
      status = 'active',
      joined_at = coalesce(public.staff_institution_memberships.joined_at, now()),
      left_at = null,
      archived_at = null,
      updated_at = now();

  update public.staff_invitations
  set status = 'accepted',
      accepted_by_user_id = auth.uid(),
      accepted_at = now()
  where id = invitation.id;

  insert into public.audit_logs (
    institution_id,
    actor_user_id,
    action,
    entity_type,
    entity_id,
    after
  )
  values (
    invitation.institution_id,
    auth.uid(),
    'staff.invitation.accepted',
    'staff_invitation',
    invitation.id,
    jsonb_build_object('email', invitation.invited_email, 'role', invitation.role)
  );

  return invitation.institution_id;
end;
$$;

alter table public.staff_invitations enable row level security;

grant usage on schema public to anon, authenticated;

grant select on table public.staff_invitations to authenticated;
grant insert, update on table public.staff_invitations to authenticated;

grant execute on function public.default_staff_permissions(text) to authenticated;
grant execute on function public.has_staff_permission(uuid, text) to authenticated;
grant execute on function public.create_staff_invitation(uuid, text, text, text) to authenticated;
grant execute on function public.get_staff_invitation_by_token(text) to anon, authenticated;
grant execute on function public.accept_staff_invitation(text) to authenticated;

create policy "Members can read accounts in their institutions"
on public.user_accounts for select
to authenticated
using (
  id = auth.uid()
  or exists (
    select 1
    from public.staff_institution_memberships membership
    where membership.user_id = user_accounts.id
      and membership.status = 'active'
      and membership.archived_at is null
      and public.is_institution_member(membership.institution_id)
  )
  or exists (
    select 1
    from public.student_institution_memberships membership
    where membership.user_id = user_accounts.id
      and membership.status = 'active'
      and membership.archived_at is null
      and public.is_institution_member(membership.institution_id)
  )
);

create policy "Institution admins can read staff invitations"
on public.staff_invitations for select
to authenticated
using (public.has_staff_permission(institution_id, 'staff.invite'));

create policy "Institution admins can insert staff invitations"
on public.staff_invitations for insert
to authenticated
with check (public.has_staff_permission(institution_id, 'staff.invite'));

create policy "Institution admins can update staff invitations"
on public.staff_invitations for update
to authenticated
using (public.has_staff_permission(institution_id, 'staff.invite'))
with check (public.has_staff_permission(institution_id, 'staff.invite'));
