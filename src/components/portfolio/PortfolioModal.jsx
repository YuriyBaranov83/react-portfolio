import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

const PortfolioModal = ({ item, isModalOpen, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  return (
    <div
      className={`portfolio-model ${isModalOpen ? "active" : ""}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="portfolio-model-body">
        <button
          type="button"
          className="portfolio-close-btn"
          onClick={closeModal}
          aria-label="Close portfolio details"
        >
          <FaXmark />
        </button>
        <h3>{item.title}</h3>
        <img
          src={item.imgSrc}
          alt={item.title}
          loading="lazy"
          decoding="async"
        />
        <p>{item.description}</p>
      </div>
    </div>
  );
};
export default PortfolioModal;
