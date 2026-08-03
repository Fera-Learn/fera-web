create extension if not exists pgcrypto;

create table public.institutions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  type text not null default 'university' check (type in ('university', 'sixth_form', 'a_levels', 't_levels', 'further_education_college', 'college', 'secondary_school', 'school', 'independent_school', 'international_school', 'apprenticeship_provider', 'vocational_provider', 'training_provider', 'online_provider', 'tutoring_centre', 'language_school', 'adult_education')),
  status text not null default 'active' check (status in ('draft', 'active', 'suspended', 'archived')),
  primary_domain text,
  country_code text,
  timezone text not null default 'Europe/London',
  default_academic_year text not null default '2026/27',
  branding jsonb not null default '{}'::jsonb,
  settings jsonb not null default '{"defaultCreditsPerYear": 120, "moduleSelectionEnabled": true, "timetableAutoSchedulingEnabled": false, "studentSelfServeTransfersEnabled": false, "studentEmailDomainAllowlist": [], "staffEmailDomainAllowlist": []}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz
);

create table public.user_accounts (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  display_name text not null,
  given_name text,
  family_name text,
  avatar_url text,
  status text not null default 'active' check (status in ('invited', 'active', 'disabled', 'left')),
  last_signed_in_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz
);

create table public.staff_institution_memberships (
  id uuid primary key default gen_random_uuid(),
  institution_id uuid not null references public.institutions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  primary_department_id uuid,
  role text not null check (role in ('owner', 'admin', 'department_admin', 'programme_lead', 'module_lead', 'lecturer', 'teaching_assistant', 'department_staff', 'viewer')),
  permissions text[] not null default '{}',
  status text not null default 'active' check (status in ('invited', 'active', 'disabled', 'left')),
  joined_at timestamptz,
  left_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz,
  unique (institution_id, user_id)
);

create table public.student_institution_memberships (
  id uuid primary key default gen_random_uuid(),
  institution_id uuid not null references public.institutions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  student_number text not null,
  status text not null default 'active' check (status in ('invited', 'active', 'suspended', 'withdrawn', 'graduated', 'transferred')),
  joined_at timestamptz,
  left_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  archived_at timestamptz,
  unique (institution_id, user_id),
  unique (institution_id, student_number)
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  institution_id uuid not null references public.institutions(id) on delete cascade,
  actor_user_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid not null,
  before jsonb,
  after jsonb,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index institutions_slug_idx on public.institutions(slug);
create index staff_memberships_user_idx on public.staff_institution_memberships(user_id);
create index staff_memberships_institution_idx on public.staff_institution_memberships(institution_id);
create index student_memberships_user_idx on public.student_institution_memberships(user_id);
create index student_memberships_institution_idx on public.student_institution_memberships(institution_id);
create index audit_logs_institution_created_idx on public.audit_logs(institution_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger institutions_set_updated_at
before update on public.institutions
for each row execute function public.set_updated_at();

create trigger user_accounts_set_updated_at
before update on public.user_accounts
for each row execute function public.set_updated_at();

create trigger staff_memberships_set_updated_at
before update on public.staff_institution_memberships
for each row execute function public.set_updated_at();

create trigger student_memberships_set_updated_at
before update on public.student_institution_memberships
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_accounts (id, email, display_name)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(coalesce(new.email, 'user'), '@', 1))
  )
  on conflict (id) do update
  set email = excluded.email,
      display_name = excluded.display_name,
      updated_at = now();

  return new;
end;
$$;

create trigger auth_users_handle_new_user
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.is_institution_member(p_institution_id uuid)
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
  ) or exists (
    select 1
    from public.student_institution_memberships membership
    where membership.institution_id = p_institution_id
      and membership.user_id = auth.uid()
      and membership.status = 'active'
      and membership.archived_at is null
  );
$$;

create or replace function public.is_institution_admin(p_institution_id uuid)
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
      and membership.role in ('owner', 'admin')
  );
$$;

create or replace function public.create_institution_with_owner(
  p_name text,
  p_slug text,
  p_type text default 'university',
  p_timezone text default 'Europe/London',
  p_default_academic_year text default '2026/27'
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_institution_id uuid;
  normalized_name text := nullif(trim(p_name), '');
  normalized_slug text := lower(nullif(trim(p_slug), ''));
  normalized_timezone text := coalesce(nullif(trim(p_timezone), ''), 'Europe/London');
  normalized_default_academic_year text := coalesce(nullif(trim(p_default_academic_year), ''), '2026/27');
begin
  if auth.uid() is null then
    raise exception 'You must be authenticated to create an institution';
  end if;

  if normalized_name is null or length(normalized_name) < 3 then
    raise exception 'Institution name must be at least 3 characters';
  end if;

  if normalized_slug is null or normalized_slug !~ '^[a-z0-9][a-z0-9-]{1,62}[a-z0-9]$' then
    raise exception 'Institution slug must be 3-64 lower-case letters, numbers, or hyphens';
  end if;

  insert into public.user_accounts (id, email, display_name)
  select
    auth_user.id,
    coalesce(auth_user.email, ''),
    coalesce(
      auth_user.raw_user_meta_data ->> 'display_name',
      split_part(coalesce(auth_user.email, 'user'), '@', 1)
    )
  from auth.users auth_user
  where auth_user.id = auth.uid()
  on conflict (id) do update
  set email = excluded.email,
      display_name = excluded.display_name,
      updated_at = now();

  insert into public.institutions (name, slug, type, timezone, default_academic_year)
  values (
    normalized_name,
    normalized_slug,
    p_type,
    normalized_timezone,
    normalized_default_academic_year
  )
  returning id into new_institution_id;

  insert into public.staff_institution_memberships (
    institution_id,
    user_id,
    role,
    permissions,
    status,
    joined_at
  )
  values (
    new_institution_id,
    auth.uid(),
    'owner',
    array[
      'institution.manage_settings',
      'staff.invite',
      'staff.manage_roles',
      'students.create',
      'students.import',
      'students.update',
      'courses.create',
      'courses.update',
      'modules.create',
      'modules.update',
      'reports.view',
      'audit.view'
    ],
    'active',
    now()
  );

  insert into public.audit_logs (
    institution_id,
    actor_user_id,
    action,
    entity_type,
    entity_id,
    after
  )
  values (
    new_institution_id,
    auth.uid(),
    'institution.created',
    'institution',
    new_institution_id,
    jsonb_build_object('name', normalized_name, 'slug', normalized_slug, 'type', p_type)
  );

  return new_institution_id;
end;
$$;

grant execute on function public.create_institution_with_owner(text, text, text, text, text) to authenticated;

alter table public.institutions enable row level security;
alter table public.user_accounts enable row level security;
alter table public.staff_institution_memberships enable row level security;
alter table public.student_institution_memberships enable row level security;
alter table public.audit_logs enable row level security;

grant usage on schema public to authenticated;

grant select on table
  public.institutions,
  public.user_accounts,
  public.staff_institution_memberships,
  public.student_institution_memberships,
  public.audit_logs
to authenticated;

grant update on table
  public.institutions,
  public.user_accounts
to authenticated;

grant insert, update, delete on table
  public.staff_institution_memberships,
  public.student_institution_memberships
to authenticated;

grant insert on table public.audit_logs to authenticated;

create policy "Members can read their institutions"
on public.institutions for select
to authenticated
using (public.is_institution_member(id));

create policy "Institution admins can update institutions"
on public.institutions for update
to authenticated
using (public.is_institution_admin(id))
with check (public.is_institution_admin(id));

create policy "Users can read their own account"
on public.user_accounts for select
to authenticated
using (id = auth.uid());

create policy "Users can update their own account"
on public.user_accounts for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

create policy "Members can read staff memberships in their institutions"
on public.staff_institution_memberships for select
to authenticated
using (public.is_institution_member(institution_id));

create policy "Admins can manage staff memberships"
on public.staff_institution_memberships for all
to authenticated
using (public.is_institution_admin(institution_id))
with check (public.is_institution_admin(institution_id));

create policy "Members can read student memberships in their institutions"
on public.student_institution_memberships for select
to authenticated
using (public.is_institution_member(institution_id));

create policy "Admins can manage student memberships"
on public.student_institution_memberships for all
to authenticated
using (public.is_institution_admin(institution_id))
with check (public.is_institution_admin(institution_id));

create policy "Institution admins can read audit logs"
on public.audit_logs for select
to authenticated
using (public.is_institution_admin(institution_id));

create policy "Institution admins can insert audit logs"
on public.audit_logs for insert
to authenticated
with check (public.is_institution_admin(institution_id));
