import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
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
      className={`
        btn scrollTop flex-center
        ${isVisible ? "active" : ""}
        ${isInFooter ? "in-footer" : ""}
      `}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollTop;
