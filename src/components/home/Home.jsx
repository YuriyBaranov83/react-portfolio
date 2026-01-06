import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaCircleArrowRight,
  FaArrowDown,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { mainImg } from "@images";
import "./Home.css";
import { motion } from "framer-motion";
import { iconVariants, slideInVariants } from "@/utils/animation";

const icons = [
  { id: 1, href: "https://www.facebook.com/yuri.baranov.33", icon: <FaFacebookF /> },
  { id: 2, href: "https://www.instagram.com/yuriy__baranov?igsh=bHk4aWYwbXR1Njlq", icon: <FaInstagram /> },
  { id: 3, href: "https://github.com/YuriyBaranov83", icon: <FaGithub /> },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((item, index) => (
            <motion.a
            target="_blank"
              href={item.href}
              key={item.id}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div className="home-info">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0}
            variants={slideInVariants("left", 0.5, 100, true)}
          >
            {t("home.titleHome")}
          </motion.h1>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideInVariants("left", 0.7, 50, true)}
          >
            Front-end Developer
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideInVariants("left", 0.9, 50, true)}
          >
            {t("home.paragraphHome")}
          </motion.p>
          <motion.a
            href="https://t.me/+380689777710"
            target="_blank"
            className="home-info-link inner-info-link"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.9, 60, true)}
          >
            {t("home.contactMe")}
            <FaCircleArrowRight />
          </motion.a>
        </div>
        <motion.div
          className="home-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          custom={0}
          variants={slideInVariants("right", 0.7, 100, false)}
        >
          <img
            src={mainImg}
            alt="man"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </div>
      <a href="#about" className="scroll-down">
        {t("home.scrollButton")}
        <FaArrowDown />
      </a>
    </section>
  );
};
export default Home;
