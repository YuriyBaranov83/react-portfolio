import { useTranslation } from "react-i18next";
import "./Skills.css";
import { SectionTitle } from "@components";
import Education from "./Education";
import Awards from "./Awards";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import { motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

const SkillsInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <SectionTitle
          title={t("skills.skills")}
          subtitle={t("skills.skills")}
        />
        <div className="inner-content">
          <motion.div
            className="skills-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideInVariants("top", 0.6, 50, true)}
          >
            <h3>{t("skills.educationSkills")}</h3>
            <p>{t("skills.educationSkillsParagraph")}</p>
          </motion.div>
          <div className="skills-info education-all">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={1}
              variants={slideInVariants("top", 0.6, 50, true)}
            >
              <Education />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={2}
              variants={slideInVariants("top", 0.6, 50, true)}
            >
              <Skills />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              custom={3}
              variants={slideInVariants("top", 0.6, 50, true)}
            >
              <Awards />
            </motion.div>
          </div>
          <WorkExperience />
        </div>
      </div>
    </section>
  );
};
export default SkillsInfo;
