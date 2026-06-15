import { EditorialText } from "./EditorialText";

type FooterLink = {
  label: string;
  href: string;
};

type SiteFooterProps = {
  name: string;
  role: string;
  location: string;
  socialLinks: FooterLink[];
  madeByLabel: string;
  initials: [string, string, string];
};

export function SiteFooter({
  name,
  role,
  location,
  socialLinks,
  madeByLabel,
  initials,
}: SiteFooterProps) {
  return (
    <footer className="site-footer" data-node-id="0:133" data-name="Footer">
      <div className="site-footer__upper" data-name="Upper links">
        <EditorialText as="p" variant="footerMeta" tone="inverse">
          {name}
        </EditorialText>
        <EditorialText as="p" variant="footerMeta" tone="inverse" align="center">
          {role}
        </EditorialText>
        <EditorialText as="p" variant="footerMeta" tone="inverse" align="right">
          {location}
        </EditorialText>
      </div>

      <div className="site-footer__middle" data-name="Middle Links">
        <div className="site-footer__socials" data-name="Socials">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              className="site-footer__social-link"
              href={link.href}
              data-node-id={`I0:133;1:${412 + index}`}
            >
              <EditorialText
                as="span"
                variant="footerMeta"
                tone="inverse"
                align={index === 1 ? "center" : index === 2 ? "right" : "left"}
              >
                {link.label}
              </EditorialText>
            </a>
          ))}
        </div>
        <EditorialText as="p" variant="footerMeta" tone="inverse" align="center">
          {madeByLabel}
        </EditorialText>
      </div>

      <div className="site-footer__initials" data-name="Initials">
        {initials.map((initial, index) => (
          <EditorialText
            as="p"
            key={`${initial}-${index}`}
            variant="footerInitial"
            tone="inverse"
            align={index === 1 ? "center" : index === 2 ? "right" : "left"}
          >
            {initial}
          </EditorialText>
        ))}
      </div>
    </footer>
  );
}
