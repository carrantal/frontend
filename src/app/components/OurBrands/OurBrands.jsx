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
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">watch full video</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Discover the ease and convenience of renting with Us
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="intro-video-box">
                <div className="video-play-button">
                  <a
                    href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                    className="popup-video"
                    data-cursor-text="Play"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>

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
    </div>
  );
};

export default OurBrands;
