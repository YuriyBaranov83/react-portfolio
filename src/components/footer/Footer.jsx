import { infoLinks, followLinks } from "@/data/footerData";
import FooterLinkGroup from "./FooterLinkGroup";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>Yuriy</h2>
          <p>{t("footer.role")}</p>
          <a href="#about">{t("nav.about")}</a>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title={t("footer.more")} links={infoLinks} />
        <div className="hr"></div>
        <FooterLinkGroup title={t("footer.follow")} links={followLinks} isSocial />
      </div>
      <p className="footer-copyright">
        {t("footer.copyright", { year: currentYear })}
      </p>
    </footer>
  );
};

export default Footer;
