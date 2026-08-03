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

grant execute on function public.create_institution_with_owner(text, text, text, text, text)
to authenticated;
