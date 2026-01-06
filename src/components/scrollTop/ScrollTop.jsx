import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  const scrollTop = ()=> {
     window.scrollTo({
        top: 0,
        behavior: "smooth",
     })
  }

  return (
    <button className={`btn scrollTop flex-center ${isVisible ? "active" : ""}`} onClick={scrollTop}>
      <FaArrowUp />
    </button>
  );
};
export default ScrollTop;
