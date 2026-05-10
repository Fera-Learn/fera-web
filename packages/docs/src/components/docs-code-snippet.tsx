import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import { cn } from "@repo/ui/lib/utils";

type DocsCodeSnippetProps = {
  code: string;
  title?: string;
  description?: string;
  className?: string;
};

export function DocsCodeSnippet({
  code,
  title = "Snippet",
  description,
  className,
}: DocsCodeSnippetProps) {
  return (
    <Card className={cn("gap-4 rounded-3xl", className)}>
      <CardHeader className="gap-1">
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <pre className="overflow-x-auto rounded-3xl border border-border/80 bg-subtle-surface px-4 py-4 text-sm leading-6 text-foreground">
          <code>{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
}
