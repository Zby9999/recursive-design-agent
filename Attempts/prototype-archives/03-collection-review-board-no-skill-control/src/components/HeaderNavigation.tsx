import { EditorialText } from "./EditorialText";

export type HeaderNavLink = {
  label: string;
  href: string;
  disabled?: boolean;
};

type HeaderNavigationProps = {
  brand: string;
  links: HeaderNavLink[];
};

export function HeaderNavigation({ brand, links }: HeaderNavigationProps) {
  return (
    <nav
      className="header-navigation"
      aria-label="Primary"
      data-node-id="0:82"
      data-name="Header Navigation"
    >
      <EditorialText as="p" variant="navLink">
        {brand}
      </EditorialText>

      <div className="header-navigation__links" data-name="Links">
        {links.map((link, index) => (
          <a
            key={link.label}
            className="header-navigation__link"
            href={link.href}
            aria-disabled={link.disabled || undefined}
            data-node-id={`I0:82;1:${385 + index}`}
          >
            <EditorialText as="span" variant="navLink" align="right">
              {link.label}
            </EditorialText>
          </a>
        ))}
      </div>
    </nav>
  );
}
