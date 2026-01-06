import { FaPaperPlane } from "react-icons/fa";
import "./getInTouch.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

const GetInTouch = () => {
  const { t } = useTranslation();

  return (
    <div className="get-in-touch sub-section">
      <div className="container flex-center">
        <div className="contact-card">
          <motion.div
            className="title"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.5, 90, false)}
          >
            <h4>{t("getInTouch.line1")}</h4>
            <h3>{t("getInTouch.line2")}</h3>
            <h2>{t("getInTouch.line3")}</h2>
          </motion.div>
          <motion.a
            href="#contacts"
            className="get-in-touch-link inner-info-link"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("right", 0.5, 90, false)}
          >
            {t("getInTouch.cta")}
            <FaPaperPlane />
          </motion.a>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
