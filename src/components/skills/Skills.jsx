import "./Skills.css";
import skills from "../../data/skills";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="education">
      <h4 className="label">{t("skills.skills")}</h4>
      <ul className="bars">
        {skills.map((item) => (
          <li className="bar" key={item.id}>
            <div className="info">
              <span>{t(item.nameKey)}</span>
              <span>{item.percent}</span>
            </div>
            <div className="line"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
