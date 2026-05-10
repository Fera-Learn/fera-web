import type { ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import { cn } from "@repo/ui/lib/utils";

type DocsExampleBlockProps = {
  children: ReactNode;
  code: string;
  title: string;
  description?: string;
  className?: string;
};

export function DocsExampleBlock({
  children,
  code,
  title: _title,
  description: _description,
  className,
}: DocsExampleBlockProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2rem] border border-border/80 bg-background",
        className,
      )}
    >
      <Tabs defaultValue="preview" className="w-full">
        <TabsContent
          className="mt-0 border-b border-border/70 p-0"
          value="preview"
        >
          <div className="flex min-h-[280px] items-center justify-center p-6 md:p-8 [&>[data-slot=accordion]]:max-w-2xl [&>[data-slot=breadcrumb]]:max-w-2xl">
            {children}
          </div>
        </TabsContent>
        <TabsContent
          className="mt-0 border-b border-border/70 p-0"
          value="code"
        >
          <pre className="overflow-x-auto bg-subtle-surface px-4 py-4 text-sm leading-6 text-foreground">
            <code>{code}</code>
          </pre>
        </TabsContent>
        <div className="flex items-center justify-center p-4">
          <TabsList className="rounded-2xl border border-border/80 bg-background p-1">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </div>
  );
}
