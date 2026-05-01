import { aboutImg } from "@images";
import { FaDownload } from "react-icons/fa6";
import { SectionTitle } from "@components";
import { useTranslation, Trans } from "react-i18next";
import { slideInVariants } from "@/utils/animation";
import { motion as Motion } from "framer-motion";
import aboutStats from "@/data/about";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SectionTitle
          title={t("about.titleAbout")}
          subtitle={t("about.titleAbout")}
        />
        <div className="about-wrapper">
          <Motion.div
            className="about-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={slideInVariants("left", 0.7, 100, false)}
        >
            <img src={aboutImg} alt="about" loading="lazy" decoding="async" />
          </Motion.div>
          <div className="about-info">
            <div className="description">
            <Motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={0}
                variants={slideInVariants("right", 0.5, 50, true)}
              >
                {t("about.name")}
              </Motion.h3>
              <Motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={1}
                variants={slideInVariants("right", 0.5, 100, true)}
              >
                <Trans i18nKey="about.devLine">
                  <span>Front-End Developer</span>
                  <span>Ukraine</span>
                </Trans>
              </Motion.h4>
              <Motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                custom={2}
                variants={slideInVariants("right", 0.6, 100, true)}
              >
                {t("about.paragraphAbout")}
              </Motion.p>
            </div>
            <ul className="professional-list">
              {aboutStats.map(({ id, number, textKey }) => (
                <Motion.li
                  className="list-item"
                  key={id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.7 }}
                  custom={2}
                  variants={slideInVariants("right", 0.75, 50, true)}
                >
                  <span className="number">{number}</span>
                  <span className="text">{t(textKey)}</span>
                </Motion.li>
              ))}
            </ul>
            <Motion.a
              href="#contacts"
              aria-label="Go to contact section to request CV"
              className="inner-info-link"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              custom={2}
              variants={slideInVariants("right", 0.8, 50, true)}
            >
              {t("about.downloadButton")}
              <FaDownload />
            </Motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

