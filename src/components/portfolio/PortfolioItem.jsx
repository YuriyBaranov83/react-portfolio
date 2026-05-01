import { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

const PortfolioItem = ({ item, index }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const translatedItem = {
    ...item,
    title: t(item.titleKey),
    category: t(item.categoryKey),
    description: t(item.descriptionKey),
  };

  return (
    <Motion.div
      className="portfolio-img-card"
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: false, amount: 0.5 }}
      variants={slideInVariants("top", 0.5, 70, true)}
    >
      <button
        type="button"
        className="img-card"
        onClick={openModal}
        aria-label={`Open portfolio item ${translatedItem.title}`}
        aria-haspopup="dialog"
      >
        <div className="overlay"></div>
        <div className="info">
          <h3>{translatedItem.title}</h3>
          <span>{translatedItem.category}</span>
        </div>
        <img
          src={item.imgSrc}
          alt={translatedItem.title}
          loading="lazy"
          decoding="async"
        />
      </button>
      {isModalOpen && (
        <PortfolioModal
          item={translatedItem}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </Motion.div>
  );
};
export default PortfolioItem;

