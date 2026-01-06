import { FaPaperPlane } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <form className="form contact-form">
      <motion.div
        className="first-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
        custom={1}
      >
        <input placeholder={t("contact.form.name")} type="text" />
      </motion.div>
      <motion.div
        className="second-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
        custom={2}
      >
        <input placeholder={t("contact.form.email")} type="email" />
        <input placeholder={t("contact.form.subject")} type="text" />
      </motion.div>
      <motion.div
        className="third-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
        custom={3}
      >
        <textarea placeholder={t("contact.form.message")}></textarea>
      </motion.div>
      <motion.button
        className="contact-btn inner-info-link"
        type="submit"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
        custom={4}
      >
        {t("contact.form.send")}
        <FaPaperPlane />
      </motion.button>
    </form>
  );
};
export default ContactForm;
