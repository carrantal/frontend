import React from "react";
import carsData from "../../../../src/data.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Luxury = () => {
  return (
    <div className="bg-shades-white home-page-section-body overflow-hidden pt-[60px] pb-4">
      <div className="container slider-container home-page-container-p-t">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-30 font-weight-semibold line-height-40 color-shades-900 home-page-sub-title-def">
            Luxury Cars
          </span>
        </div>
        {/* Swiper Integration */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile view
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 4 }, // Desktop view
          }}
          className="cars-slider mt-sm-4 mt-3"
        >
          {carsData.map((car) => (
            <SwiperSlide key={car.id}>
              <div
                className="cars-slider-card d-flex flex-column"
                style={{ width: "100%" }}
              >
                <a href="/" title={car.cartitle}>
                  <div className="cars-slider-header position-relative">
                    <div className="d-flex overflow-hidden rounded-medium position-relative img-block-to-hover">
                      <img
                        src={car.picture}
                        className="cars-slider-image rounded-medium"
                        title={car.cartitle}
                        alt={car.cartitle}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="cars-slider-footer d-flex flex-column justify-content-between mt-sm-2 mt-1">
                    <span className="fs-16 line-height-25 font-weight-normal color-shades-black text-truncate slider-card-title">
                      {car.cartitle}
                    </span>
                    <div className="d-flex align-items-center">
                      <span className="fs-18 lh-30 color-shades-black mr-1 font-weight-semibold slider-card-main-price">
                        {car.price}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Luxury;
