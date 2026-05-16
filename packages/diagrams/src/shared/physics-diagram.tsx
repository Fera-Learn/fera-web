import type { ComponentType, CSSProperties, ReactNode } from "react";

export type PhysicsDiagramKind = "apparatus" | "field" | "graph" | "interaction" | "wave";

export type PhysicsDiagramMetadata = {
  kind: PhysicsDiagramKind;
  referenceImage?: string;
  slug: string;
  summary: string;
  tags: readonly string[];
  title: string;
  topic: string;
};

export type PhysicsDiagramProps = {
  className?: string;
  highlightedTag?: string;
  showCaption?: boolean;
  style?: CSSProperties;
};

export type PhysicsDiagramDefinition = PhysicsDiagramMetadata & {
  component: ComponentType<PhysicsDiagramProps>;
};

type DiagramFrameProps = {
  caption?: ReactNode;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  title?: ReactNode;
};

export function PhysicsDiagramFrame({ caption, children, className, style, title }: DiagramFrameProps) {
  return (
    <figure
      aria-label={typeof title === "string" ? title : undefined}
      className={["my-4 text-foreground", className].filter(Boolean).join(" ")}
      data-slot="diagram"
      style={style}
    >
      <div className="overflow-visible">{children}</div>
      {caption ? (
        <figcaption className="mt-1.5 text-[13px] leading-4 text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
