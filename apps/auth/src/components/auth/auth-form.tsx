import type { ReactNode } from "react";

import { Button } from "@/components/untitled-ui/base/buttons/button";
import { Input } from "@/components/untitled-ui/base/input/input";

export function Field({
  label,
  name,
  type = "text",
  autoComplete,
  defaultValue,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <Input
      autoComplete={autoComplete}
      defaultValue={defaultValue}
      isRequired={required}
      label={label}
      name={name}
      type={type}
    />
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <Button size="md" type="submit">
      {children}
    </Button>
  );
}
