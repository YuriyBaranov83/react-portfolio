import { contactData } from "@/data/contactData";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

const ContactLeft = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-left">
      <Motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
      >
        {t("contact.heading")}
      </Motion.h2>
      <ul className="contact-list">
        {contactData.map((contact, index) => (
          <Motion.li
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
              {contact.link ? (
                <a href={contact.link}>{t(contact.valueKey)}</a>
              ) : (
                t(contact.valueKey)
              )}
            </span>
          </Motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ContactLeft;

