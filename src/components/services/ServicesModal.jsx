import { useEffect } from "react";
import "./Services.css";
import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const ServicesModal = ({ item, isActive, closeModal }) => {
  useEffect(() => {
    if (!isActive) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, closeModal]);

  return (
    <>
      <div
        className={`service-modal ${isActive ? "active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isActive}
      >
        <div className="service-modal-body">
          <button
            type="button"
            className="modal-close-btn"
            onClick={closeModal}
            aria-label="Close service details"
          >
            <FaXmark />
          </button>
          <h3>{item.title}</h3>
          <h4>{item.subtitle}</h4>
          <p>{item.description}</p>

          <ul>
            {item.list.map((listItem, index) => (
              <li key={`${listItem}-${index}`}>
                <FaCheckCircle />
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ServicesModal;
