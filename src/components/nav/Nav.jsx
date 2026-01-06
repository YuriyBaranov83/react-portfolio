import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { i18n } from "@components";
import "./Nav.css";
import { navItems } from "@/data/navId";

const Nav = ({ isMenuOpen, handleMenuClick }) => {
  const { t } = useTranslation();


  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className={isMenuOpen ? "nav active" : "nav "}>
      <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
        {navItems.map((item, index) => (
          <Link
            to={item}
            key={index}
            className="nav-link"
            onClick={handleMenuClick}
          >
            {t(`nav.${item}`)}
          </Link>
        ))}
        <div className="lang-switch">
          <a href="" className="logo">
            My Logo
          </a>
          <button
            className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
            onClick={() => changeLang("en")}
          >
            EN
          </button>
          <button
            className={`lang-btn ${i18n.language === "ua" ? "active" : ""}`}
            onClick={() => changeLang("ua")}
          >
            UA
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
