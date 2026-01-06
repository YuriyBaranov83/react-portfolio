import "./Portfolio.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioItem from "./PortfolioItem";
import { portfolioData } from "@/data/portfolioData";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="portfolio section" id="portfolio">
        <div className="container flex-center">
          <SectionTitle
            title={t("portfolio.title")}
            subtitle={t("portfolio.subtitle")}
          />
          <div className="portfolio-wrapper">
            {portfolioData.map((item, index) => (
              <PortfolioItem key={item.id} item={item} index={index}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
