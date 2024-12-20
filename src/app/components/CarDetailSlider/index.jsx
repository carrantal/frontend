"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function CarDetailSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Thumbs]}
        className="mySwiper2"
      >
        {images.map((each, index) => (
          <SwiperSlide key={index}>
            <img src={each.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        {images.map((each, index) => (
          <SwiperSlide key={index}>
            <img src={each.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
