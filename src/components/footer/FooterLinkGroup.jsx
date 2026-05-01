import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const FooterLinkGroup = ({ title, links, isSocial }) => {
  const { t } = useTranslation();

  return (
    <div className={isSocial ? "follow-group" : "info-group"}>
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            {isSocial ? (
              link.href ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                >
                  <link.label />
                </a>
              ) : (
                <span aria-hidden="true">
                  <link.label />
                </span>
              )
            ) : (
              <Link to={link.href} smooth={true} duration={500}>
                {link.labelKey ? t(link.labelKey) : link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinkGroup;
