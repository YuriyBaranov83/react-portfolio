import { SectionTitle } from "@components";
import "./Contact.css";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact section" id="contacts">
      <div className="container flex-center">
        <SectionTitle title={t("contact.title")} subtitle={t("contact.subtitle")}/>
        <div className="contact-wrapper">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};
export default Contact;
