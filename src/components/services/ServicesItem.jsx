import { useState } from "react";
import { ImArrowRight } from "react-icons/im";
import ServicesModal from "./ServicesModal";
import "./Services.css";
import { useTranslation } from "react-i18next";
import { slideInVariants } from "@/utils/animation";
import { motion } from "framer-motion";

const ServicesItem = ({ services }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index);
  };
  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <>
      {services.map((item, index) => {
        const translatedList = t(item.listKey, { returnObjects: true });
        const translatedItem = {
          ...item,
          title: t(item.titleKey),
          subtitle: t(item.subtitleKey),
          description: t(item.descriptionKey),
          list: Array.isArray(translatedList) ? translatedList : [],
        };

        return (
          <motion.li
            className="services-container"
            key={index}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("top", 0.5, 70, true)}
          >
            <div className="service-card">
              <item.icon />
              <h3>{translatedItem.subtitle}</h3>
              <div className="learn-more-btn" onClick={() => openModal(index)}>
                {t("services.learnMore")}
                <ImArrowRight className="learn-more-icon" />
              </div>
            </div>
            <ServicesModal
              item={translatedItem}
              isActive={activeIndex === index}
              closeModal={closeModal}
            />
          </motion.li>
        );
      })}
    </>
  );
};
export default ServicesItem;
