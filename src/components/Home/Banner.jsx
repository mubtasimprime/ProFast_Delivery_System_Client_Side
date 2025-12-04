import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Banner1 from "../../assets/banner/banner1.png";
import Banner2 from "../../assets/banner/banner2.png";
import Banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="px-4 md:px-4 py-6 md:py-15">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        className="rounded-4xl overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          <img
            src={Banner1}
            alt="Banner 1"
            className="object-cover w-full xl:h-[650px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner2}
            alt="Banner 2"
            className="object-cover w-full xl:h-[650px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner3}
            alt="Banner 3"
            className="object-cover w-full xl:h-[650px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
