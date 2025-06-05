import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";

export default function SliderEnvirement() {
  return (
    <>
      <Swiper
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        className="swiperApplication"
      >
        <SwiperSlide>
          <h2>Pollinator Support</h2>
          <p>
            Shrubs offer nectar and shelter for bees, moths, and butterflies.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Carbon Sequestration</h2>
          <p>Even small shrubs contribute to biomass and carbon storage.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Soil Health</h2>
          <p>Root systems bind soil, prevent erosion, and improve structure.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Soil Health</h2>
          <p>Root systems bind soil, prevent erosion, and improve structure.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
