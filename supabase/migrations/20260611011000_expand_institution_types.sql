alter table public.institutions
  drop constraint if exists institutions_type_check;

alter table public.institutions
  add constraint institutions_type_check
  check (
    type in (
      'university',
      'sixth_form',
      'a_levels',
      't_levels',
      'further_education_college',
      'college',
      'secondary_school',
      'school',
      'independent_school',
      'international_school',
      'apprenticeship_provider',
      'vocational_provider',
      'training_provider',
      'online_provider',
      'tutoring_centre',
      'language_school',
      'adult_education'
    )
  );
