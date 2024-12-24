"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { URL } from "@/app/utils";
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";

const Luxury = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    // Fetch data from Strapi API
    axios
      .get(`${URL}/api/cars?populate=*`)
      .then((response) => {
        const luxuryCars = response.data.data.filter((car) => {
          // Check if any category matches "luxury"
          return car.attributes.categories.data.some((category) =>
            category.attributes.name?.toLowerCase().includes("luxury")
          );
        });
        setCarsData(luxuryCars);
      })
      .catch((error) => {
        console.error("Error fetching cars data:", error);
      });
  }, []);

  return (
    <div className="bg-shades-white home-page-section-body overflow-hidden pt-4 pb-4">
      <div className="container slider-container home-page-container-p-t">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black">
            {" "}
            Luxury Cars
          </span>
        </div>
        {/* Swiper Integration */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 }, // Mobile view
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
                <a href="/" title={car.attributes.title}>
                  <div className="cars-slider-header position-relative">
                    <div className="d-flex overflow-hidden rounded-medium position-relative img-block-to-hover">
                      <img
                        src={car.attributes.images.data[0]?.attributes.url}
                        className="cars-slider-image rounded-medium"
                        title={car.attributes.title}
                        alt={car.attributes.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="cars-slider-footer d-flex flex-column justify-content-between mt-sm-2 mt-1">
                    <span className="fs-16 line-height-25 font-weight-normal color-shades-black text-truncate slider-card-title">
                      {car.attributes.title}
                    </span>
                    <div className="d-flex align-items-center">
                      <span className="fs-18 lh-30 color-shades-black mr-1 font-weight-semibold slider-card-main-price">
                        {car.attributes.price} AED
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
