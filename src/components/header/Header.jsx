import { FaXing } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { RemoveScroll } from "react-remove-scroll";
import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(
    typeof window !== "undefined" ? window.scrollY > 0 : false
  );

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isSticky ? "header sticky" : "header"}>
      <div className="container">
        <div className="header-wrapper">
          <a href="#home" className="logo" aria-label="Go to home section">
            My Logo
          </a>
          <RemoveScroll enabled={isMenuOpen}>
            <Nav isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
          </RemoveScroll>
          <button
            type="button"
            className="nav-menu-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
          >
            {isMenuOpen ? <FaXing /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
