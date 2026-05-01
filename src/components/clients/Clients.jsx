import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { SectionTitle } from "@components";
import { useTranslation } from "react-i18next";
import { motion as Motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";
import "./Clients.css";

const LazyClientsCarousel = lazy(() => import("./ClientsCarousel"));
const CLIENTS_ROOT_MARGIN = "300px 0px";

const Clients = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [shouldLoadCarousel, setShouldLoadCarousel] = useState(
    () =>
      typeof window !== "undefined" && !("IntersectionObserver" in window)
  );

  useEffect(() => {
    if (shouldLoadCarousel) {
      return;
    }

    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadCarousel(true);
          observer.disconnect();
        }
      },
      { rootMargin: CLIENTS_ROOT_MARGIN }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, [shouldLoadCarousel]);

  return (
    <section className="section our-client" id="clients" ref={sectionRef}>
      <div className="container flex-center">
        <SectionTitle
          title={t("clients.title")}
          subtitle={t("clients.subtitle")}
        />
        <Motion.div
          className="our-client-wrapper"
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: false, amount: 0.5 }}
          variants={slideInVariants("top", 0.7, 100, false)}
        >
          {shouldLoadCarousel ? (
            <Suspense
              fallback={
                <div className="client-swiper-placeholder" aria-hidden="true" />
              }
            >
              <LazyClientsCarousel />
            </Suspense>
          ) : (
            <div className="client-swiper-placeholder" aria-hidden="true" />
          )}
        </Motion.div>
      </div>
    </section>
  );
};

export default Clients;
