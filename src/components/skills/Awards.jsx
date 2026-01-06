import "./Skills.css";
import awards from "../../data/awards";
import { useTranslation } from "react-i18next";

const Awards = () => {
  const { t } = useTranslation();

  return (
    <div className="education">
      <h4 className="label">{t("skills.awards")}</h4>
      <ul className="education-list">
        {awards.map((item, index) => (
          <li className="item" key={index}>
            <span className="year">{item.year}</span>
            <p>
              <span>{t(item.titleKey)}</span> - {t(item.institutionKey)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
