import { FaPaperPlane } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <form className="form contact-form" onSubmit={(event) => event.preventDefault()}>
      <Motion.div
        className="first-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
        custom={1}
      >
        <input
          placeholder={t("contact.form.name")}
          type="text"
          name="name"
          autoComplete="name"
          aria-label={t("contact.form.name")}
        />
      </Motion.div>
      <Motion.div
        className="second-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
        custom={2}
      >
        <input
          placeholder={t("contact.form.email")}
          type="email"
          name="email"
          autoComplete="email"
          aria-label={t("contact.form.email")}
        />
        <input
          placeholder={t("contact.form.subject")}
          type="text"
          name="subject"
          aria-label={t("contact.form.subject")}
        />
      </Motion.div>
      <Motion.div
        className="third-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideInVariants("top", 0.6, 50, false)}
        custom={3}
      >
        <textarea
          placeholder={t("contact.form.message")}
          name="message"
          aria-label={t("contact.form.message")}
        ></textarea>
      </Motion.div>
      <Motion.button
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
      </Motion.button>
    </form>
  );
};
export default ContactForm;

