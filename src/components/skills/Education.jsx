import education from "../../data/education";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="education">
      <h4 className="label">{t("skills.education")}</h4>
      <ul className="education-list">
        {education.map((item) => (
          <li className="item" key={item.id}>
            <span className="year">{item.year}</span>
            <p>
              {t(item.degreeKey)} - {t(item.institutionKey)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Education;
