import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

const ContactRight = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-right">
      <Motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
      >
        {t("contact.right.text")} <span>{t("contact.right.highlight")}</span>
      </Motion.p>
      <ContactForm />
    </div>
  );
};
export default ContactRight;

