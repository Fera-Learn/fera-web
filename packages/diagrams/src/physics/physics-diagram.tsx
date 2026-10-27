import type { PhysicsDiagramProps } from "../shared/physics-diagram";
import { getPhysicsDiagram, type PhysicsDiagramSlug } from "./registry";

export type RegisteredPhysicsDiagramProps = PhysicsDiagramProps & {
  slug: PhysicsDiagramSlug;
};

export function PhysicsDiagram({ slug, ...props }: RegisteredPhysicsDiagramProps) {
  const definition = getPhysicsDiagram(slug);

  if (!definition) {
    throw new Error(`Unknown physics diagram slug: ${slug}`);
  }

  const Diagram = definition.component;
  return <Diagram {...props} />;
}
