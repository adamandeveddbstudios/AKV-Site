// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";

export default function SliderApplication() {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
        }}
        className="swiperApplication"
      >
        <SwiperSlide>
          <div className="box">
            <Link href="/">
              <Image
                src="/images/application1.png" // Replace with your image path
                alt="Background logs"
                width={0}
                height={0}
                sizes="100vw"
                priority
                quality={90}
                className="w-100"
              />
            </Link>
            <h3>
              <Link href="/">Medicinal Gardens</Link>
            </h3>
            <p>Public health parks, school gardens, and temple premises.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <Link href="/">
              <Image
                src="/images/application2.jpg" // Replace with your image path
                alt="Background logs"
                width={0}
                height={0}
                sizes="100vw"
                priority
                quality={90}
                className="w-100"
              />
            </Link>
            <h3>
              <Link href="/">Medicinal Gardens</Link>
            </h3>
            <p>Public health parks, school gardens, and temple premises.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <Link href="/">
              <Image
                src="/images/application1.png" // Replace with your image path
                alt="Background logs"
                width={0}
                height={0}
                sizes="100vw"
                priority
                quality={90}
                className="w-100"
              />
            </Link>
            <h3>
              <Link href="/">Medicinal Gardens</Link>
            </h3>
            <p>Public health parks, school gardens, and temple premises.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
