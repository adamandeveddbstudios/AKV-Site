// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function SliderAtulye() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="atulyaSwiper"
      >
        <SwiperSlide>
          <h3>
            High-Quality
            <br />
            Saplings
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Soil & Water
            <br />
            Assessment
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Training
            <br />
            Programs
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Soil & Water
            <br />
            Assessment
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Training
            <br />
            Programs
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Soil & Water
            <br />
            Assessment
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Training
            <br />
            Programs
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Soil & Water
            <br />
            Assessment
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h3>
            Training
            <br />
            Programs
          </h3>
          <p>Region-appropriate, hardy, and disease-free planting stock.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
