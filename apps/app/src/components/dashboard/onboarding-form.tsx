"use client";

import { useState } from "react";

import { Button } from "@/components/untitled-ui/base/buttons/button";
import { Input } from "@/components/untitled-ui/base/input/input";
import { Select } from "@/components/untitled-ui/base/select/select";
import { createInstitution } from "@/lib/dashboard/actions";
import {
  ACADEMIC_YEAR_OPTIONS,
  INSTITUTION_TYPES,
  TIMEZONE_OPTIONS,
  slugifyInstitutionName,
} from "@/lib/dashboard/institutions";

interface OnboardingFormProps {
  defaults: {
    name?: string;
    slug?: string;
    type: string;
    timezone: string;
    defaultAcademicYear: string;
  };
}

export function OnboardingForm({ defaults }: OnboardingFormProps) {
  const [name, setName] = useState(defaults.name ?? "");
  const [slug, setSlug] = useState(
    defaults.slug || slugifyInstitutionName(defaults.name ?? ""),
  );
  const [slugEdited, setSlugEdited] = useState(Boolean(defaults.slug));

  function handleNameChange(value: string) {
    setName(value);

    if (!slugEdited) {
      setSlug(slugifyInstitutionName(value));
    }
  }

  function handleSlugChange(value: string) {
    const nextSlug = slugifyInstitutionName(value);

    setSlug(nextSlug);
    setSlugEdited(Boolean(nextSlug));
  }

  return (
    <form action={createInstitution} className="mt-8 grid gap-5">
      <Input
        autoComplete="organization"
        isRequired
        label="Institution name"
        name="name"
        onChange={handleNameChange}
        placeholder="Fera Institute"
        value={name}
      />

      <Input
        hint="Automatically generated from the institution name. Edit it if you need a different URL slug."
        label="Institution URL slug"
        name="slug"
        onChange={handleSlugChange}
        placeholder="fera-institute"
        value={slug}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          defaultSelectedKey={defaults.type}
          isRequired
          label="Institution type"
          name="type"
        >
          {INSTITUTION_TYPES.map((option) => (
            <Select.Item id={option.value} key={option.value} label={option.label} />
          ))}
        </Select>

        <Select
          defaultSelectedKey={defaults.defaultAcademicYear}
          isRequired
          label="Default academic year"
          name="defaultAcademicYear"
        >
          {ACADEMIC_YEAR_OPTIONS.map((academicYear) => (
            <Select.Item id={academicYear} key={academicYear} label={academicYear} />
          ))}
        </Select>
      </div>

      <Select
        defaultSelectedKey={defaults.timezone}
        isRequired
        label="Timezone"
        name="timezone"
      >
        {TIMEZONE_OPTIONS.map((option) => (
          <Select.Item id={option.value} key={option.value} label={option.label} />
        ))}
      </Select>

      <Button size="md" type="submit">
        Create institution workspace
      </Button>
    </form>
  );
}
