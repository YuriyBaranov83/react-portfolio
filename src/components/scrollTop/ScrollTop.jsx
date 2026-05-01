import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(
    typeof window !== "undefined" ? window.scrollY > 300 : false
  );
  const [isInFooter, setIsInFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInFooter(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`
        btn scrollTop flex-center
        ${isVisible ? "active" : ""}
        ${isInFooter ? "in-footer" : ""}
      `}
      onClick={scrollTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTop;
