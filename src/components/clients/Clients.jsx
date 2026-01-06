import clientData from "@/data/clientsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SectionTitle } from "@components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { slideInVariants } from "@/utils/animation";

import "./Clients.css";

const Clients = () => {
  const { t } = useTranslation();

  return (
    <section className="section our-client" id="clients">
      <div className="container flex-center">
        <SectionTitle
          title={t("clients.title")}
          subtitle={t("clients.subtitle")}
        />
        <motion.div
          className="our-client-wrapper"
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: false, amount: 0.5 }}
          variants={slideInVariants("top", 0.7, 100, false)}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="client-swiper"
          >
            {clientData.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="swiper-slide swiper-client-block">
                  <div className="client-img">
                    <img
                      src={client.imgSrc}
                      alt={client.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="client-details">
                    <p>{t(client.descriptionKey)}</p>
                    <h3>{client.name}</h3>
                    <span>{t(client.positionKey)}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
export default Clients;
