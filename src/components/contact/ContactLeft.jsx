import { contactData } from "@/data/contactData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

const ContactLeft = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-left">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
      >
        {t("contact.heading")}
      </motion.h2>
      <ul className="contact-list">
        {contactData.map((contact, index) => (
          <motion.li
            key={contact.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={index}
            variants={slideInVariants("top", 0.6, 50, true)}
          >
            <h3>
              <contact.icon /> {t(contact.titleKey)}
            </h3>
            <span>
              <a href={contact.link}>{t(contact.valueKey)}</a>
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLeft;
