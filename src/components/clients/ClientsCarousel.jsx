import clientData from "@/data/clientsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const ClientsCarousel = () => {
  const { t } = useTranslation();

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
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
  );
};

export default ClientsCarousel;
