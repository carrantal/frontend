"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const OurBrands = () => {
  const clientLogos = [
    "images/client-logo-1.svg",
    "images/client-logo-2.svg",
    "images/client-logo-3.svg",
    "images/client-logo-4.svg",
    "images/client-logo-5.svg",
    "images/client-logo-6.svg",
    "images/client-logo-5.svg",
    "images/client-logo-4.svg",
  ];

  return (
    <div>
      <div className="intro-video bg-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="client-slider">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={30}
                  slidesPerView={5}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                  }}
                  className="swiper client_logo_slider"
                >
                  {clientLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                      <div className="company-logo">
                        <img src={logo} alt={`Client logo ${index + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
