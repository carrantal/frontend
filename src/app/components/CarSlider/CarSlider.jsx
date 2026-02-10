"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { URL } from "@/app/utils";
import axios from "axios";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import Loader from "../Loader/indes";

const CarSlider = ({ luxuryCarData, type, id }) => {
  // const [carsData, setCarsData] = useState([]);
  // const [loading, setLoading] = useState([]);
  const router = useRouter();
  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(
  //       `${URL}/api/cars?populate=*&filters[categories][slug]=${type}`
  //     );
  //     console.log([data]);
  //     setCarsData(data?.data || []);
  //   } catch (error) {
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   // getData();
  // }, []);

  return (
    <>
      <div
        id={id}
        className="bg-shades-white home-page-section-body overflow-hidden pt-4 pb-4 mt-2 mb-2"
      >
        <div className="container slider-container home-page-container-p-t">
          <div className="d-flex justify-content-between align-items-center">
            <span
              style={{
                textTransform: "capitalize",
              }}
              className="fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black"
            >
              {type} Cars
            </span>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 2 }, // Mobile view
              768: { slidesPerView: 2 }, // Tablets
              1024: { slidesPerView: 4 }, // Desktop view
            }}
            className="cars-slider mt-sm-4 mt-3"
          >
            {luxuryCarData.map((car) => (
              <SwiperSlide key={car.id}>
                <div
                  className="cars-slider-card d-flex flex-column"
                  style={{ width: "100%", cursor: "pointer" }}
                  onClick={() => {
                    router.push(`/car-details/${car.attributes.slug}`);
                  }}
                >
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CarSlider;
