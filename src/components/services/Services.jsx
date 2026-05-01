import ServicesItem from "./ServicesItem";
import "./Services.css";
import services from "../../data/services";
import { SectionTitle } from "@components";
import { useTranslation } from "react-i18next";
import { slideInVariants } from "@/utils/animation";
import { motion as Motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="services section" id="services">
      <div className="container flex-center">
        <SectionTitle
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />
        <div className="services-wrapper">
          <Motion.h3
            className="services-description"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("top", 0.5, 50, true)}
          >
            {t("services.description")}
          </Motion.h3>
          <ul className="services-list">
            <ServicesItem services={services} />
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Services;

