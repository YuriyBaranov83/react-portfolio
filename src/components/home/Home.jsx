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
import { motion as Motion } from "framer-motion";
import { iconVariants, slideInVariants } from "@/utils/animation";

const icons = [
  {
    id: 1,
    href: "https://www.facebook.com/yuri.baranov.33",
    icon: <FaFacebookF />,
    ariaLabel: "Open Facebook profile",
  },
  {
    id: 2,
    href: "https://www.instagram.com/yuriy__baranov?igsh=bHk4aWYwbXR1Njlq",
    icon: <FaInstagram />,
    ariaLabel: "Open Instagram profile",
  },
  {
    id: 3,
    href: "https://github.com/YuriyBaranov83",
    icon: <FaGithub />,
    ariaLabel: "Open GitHub profile",
  },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          {icons.map((item, index) => (
            <Motion.a
              target="_blank"
              rel="noopener noreferrer"
              href={item.href}
              key={item.id}
              aria-label={item.ariaLabel}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {item.icon}
            </Motion.a>
          ))}
        </div>
        <div className="home-info">
          <Motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0}
            variants={slideInVariants("left", 0.5, 100, true)}
          >
            {t("home.titleHome")}
          </Motion.h1>
          <Motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={1}
            variants={slideInVariants("left", 0.7, 50, true)}
          >
            Front-end Developer
          </Motion.h3>
          <Motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={2}
            variants={slideInVariants("left", 0.9, 50, true)}
          >
            {t("home.paragraphHome")}
          </Motion.p>
          <Motion.a
            href="https://t.me/+380689777710"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on Telegram"
            className="home-info-link inner-info-link"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideInVariants("left", 0.9, 60, true)}
          >
            {t("home.contactMe")}
            <FaCircleArrowRight />
          </Motion.a>
        </div>
        <Motion.div
          className="home-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          custom={0}
          variants={slideInVariants("right", 0.7, 100, false)}
        >
          <img
            src={mainImg}
            alt="Portrait of Yuriy Baranov"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </Motion.div>
      </div>
      <a href="#about" className="scroll-down">
        {t("home.scrollButton")}
        <FaArrowDown />
      </a>
    </section>
  );
};
export default Home;

