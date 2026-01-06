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
              <a href={link.href} target="_blank">
                <link.label />
              </a>
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
