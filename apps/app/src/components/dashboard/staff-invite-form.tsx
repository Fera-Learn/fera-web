"use client";

import { Button } from "@/components/untitled-ui/base/buttons/button";
import { Input } from "@/components/untitled-ui/base/input/input";
import { Select } from "@/components/untitled-ui/base/select/select";
import { createStaffInvitation } from "@/lib/dashboard/actions";
import { STAFF_INVITE_ROLE_OPTIONS } from "@/lib/dashboard/institutions";

interface StaffInviteFormProps {
  defaults?: {
    displayName?: string;
    email?: string;
    role?: string;
  };
  institutionId: string;
}

export function StaffInviteForm({ defaults, institutionId }: StaffInviteFormProps) {
  return (
    <form action={createStaffInvitation} className="grid gap-4">
      <input name="institutionId" type="hidden" value={institutionId} />

      <Input
        autoComplete="name"
        defaultValue={defaults?.displayName}
        label="Full name"
        name="displayName"
        placeholder="Alex Morgan"
      />

      <Input
        autoComplete="email"
        defaultValue={defaults?.email}
        isRequired
        label="Email"
        name="email"
        placeholder="alex@institution.ac.uk"
        type="email"
      />

      <Select
        defaultSelectedKey={defaults?.role ?? "lecturer"}
        isRequired
        label="Role"
        name="role"
      >
        {STAFF_INVITE_ROLE_OPTIONS.map((role) => (
          <Select.Item id={role.value} key={role.value} label={role.label} />
        ))}
      </Select>

      <Button size="md" type="submit">
        Create invitation
      </Button>
    </form>
  );
}
