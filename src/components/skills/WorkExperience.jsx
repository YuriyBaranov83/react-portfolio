import { motion } from "framer-motion";
import workExperience from "../../data/workExperience";
import { useTranslation } from "react-i18next";
import { slideInVariants } from "@/utils/animation";

const WorkExperience = () => {
  const { t } = useTranslation();

  return (
    <div className="education work-exp">
      <motion.h3
        className="work-exp-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        custom={2}
        variants={slideInVariants("top", 0.6, 50, true)}
      >
        {t("skills.workExperience")}
      </motion.h3>
      <div className="skills-info">
        {workExperience.map((item, index) => (
          <motion.div
            className="experience-card"
            key={index}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("top", 0.5, 70, true)}
          >
            <div className="upper">
              <h3>{t(item.titleKey)}</h3>
              <h5>{t(item.typeKey)}</h5>
              <span>{item.years}</span>
            </div>
            <div className="hr"></div>
            <h4 className="label">{t(item.companyKey)}</h4>
            <p>{t(item.descriptionKey)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default WorkExperience;
