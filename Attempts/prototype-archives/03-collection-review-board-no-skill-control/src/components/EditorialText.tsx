import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type EditorialVariant =
  | "navLink"
  | "pageTitle"
  | "projectMeta"
  | "footerMeta"
  | "editorialBody"
  | "footerInitial";

type EditorialTone = "primary" | "inverse";
type EditorialAlign = "left" | "center" | "right";

type EditorialTextProps<T extends ElementType> = {
  as?: T;
  variant: EditorialVariant;
  tone?: EditorialTone;
  align?: EditorialAlign;
  className?: string;
  dataNodeId?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClass: Record<EditorialVariant, string> = {
  navLink: "editorial-text editorial-text--nav-link",
  pageTitle: "editorial-text editorial-text--page-title",
  projectMeta: "editorial-text editorial-text--project-meta",
  footerMeta: "editorial-text editorial-text--footer-meta",
  editorialBody: "editorial-text editorial-text--body",
  footerInitial: "editorial-text editorial-text--footer-initial",
};

export function EditorialText<T extends ElementType = "p">({
  as,
  variant,
  tone = "primary",
  align = "left",
  className,
  dataNodeId,
  children,
  ...props
}: EditorialTextProps<T>) {
  const Component = as ?? "p";
  const classes = [
    variantClass[variant],
    `editorial-text--${tone}`,
    `editorial-text--align-${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} data-node-id={dataNodeId} {...props}>
      {children}
    </Component>
  );
}
