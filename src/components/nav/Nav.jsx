import { useTranslation } from "react-i18next";
import i18n from "@/components/i18n";
import "./Nav.css";
import { navItems } from "@/data/navId";

const Nav = ({ isMenuOpen, handleMenuClick }) => {
  const { t } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav
      id="site-navigation"
      className={isMenuOpen ? "nav active" : "nav"}
      aria-label="Primary navigation"
    >
      <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        {navItems.map((item) => (
          <a
            href={`#${item}`}
            key={item}
            className="nav-link"
            onClick={handleMenuClick}
          >
            {t(`nav.${item}`)}
          </a>
        ))}
        <div className="lang-switch">
          <a href="#home" className="logo" onClick={handleMenuClick}>
            My Logo
          </a>
          <button
            type="button"
            className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
            onClick={() => changeLang("en")}
            aria-pressed={i18n.language === "en"}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn ${i18n.language === "ua" ? "active" : ""}`}
            onClick={() => changeLang("ua")}
            aria-pressed={i18n.language === "ua"}
          >
            UA
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
