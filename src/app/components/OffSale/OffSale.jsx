"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const OffSale = () => {
  const carOffers = [
    {
      id: 1,
      title: "Rolls Royce Cullinan (White), 2019",
      price: "$80",
      priceDescription: "per hour",
      availability: "Available tomorrow",
      imageSrc:
        "https://renty.ae/uploads/car/photo/l/grey_mercedes-sl-amg_2022_5384_main_21fd1e6ebcca208c1cc71fa52d0a0e42.jpg",
      imageSrcSet:
        "https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0.8/https://renty.ae/uploads/car/photo/l/white_rolls-royce-cullinan_2019_3835_main_8d32bc33a3e35240595cb9db317296ab.jpg 2x",
      altText: "Rolls Royce Cullinan (White), 2019 for rent in Dubai",
      href: "/",
    },
    {
      id: 2,
      title: "Rolls Royce Cullinan (White), 2019",
      price: "$80",
      priceDescription: "per hour",
      availability: "Available tomorrow",
      imageSrc:
        "https://renty.ae/uploads/car/photo/l/grey_mercedes-sl-amg_2022_5384_main_21fd1e6ebcca208c1cc71fa52d0a0e42.jpg",
      imageSrcSet:
        "https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0.8/https://renty.ae/uploads/car/photo/l/white_rolls-royce-cullinan_2019_3835_main_8d32bc33a3e35240595cb9db317296ab.jpg 2x",
      altText: "Rolls Royce Cullinan (White), 2019 for rent in Dubai",
      href: "/",
    },
    {
      id: 2,
      title: "Rolls Royce Cullinan (White), 2019",
      price: "$80",
      priceDescription: "per hour",
      availability: "Available tomorrow",
      imageSrc:
        "https://renty.ae/uploads/car/photo/l/grey_mercedes-sl-amg_2022_5384_main_21fd1e6ebcca208c1cc71fa52d0a0e42.jpg",
      imageSrcSet:
        "https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0.8/https://renty.ae/uploads/car/photo/l/white_rolls-royce-cullinan_2019_3835_main_8d32bc33a3e35240595cb9db317296ab.jpg 2x",
      altText: "Rolls Royce Cullinan (White), 2019 for rent in Dubai",
      href: "/",
    },
    {
      id: 2,
      title: "Rolls Royce Cullinan (White), 2019",
      price: "$80",
      priceDescription: "per hour",
      availability: "Available tomorrow",
      imageSrc:
        "https://renty.ae/uploads/car/photo/l/grey_mercedes-sl-amg_2022_5384_main_21fd1e6ebcca208c1cc71fa52d0a0e42.jpg",
      imageSrcSet:
        "https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0.8/https://renty.ae/uploads/car/photo/l/white_rolls-royce-cullinan_2019_3835_main_8d32bc33a3e35240595cb9db317296ab.jpg 2x",
      altText: "Rolls Royce Cullinan (White), 2019 for rent in Dubai",
      href: "/",
    },
    {
      id: 2,
      title: "Rolls Royce Cullinan (White), 2019",
      price: "$80",
      priceDescription: "per hour",
      availability: "Available tomorrow",
      imageSrc:
        "https://renty.ae/uploads/car/photo/l/grey_mercedes-sl-amg_2022_5384_main_21fd1e6ebcca208c1cc71fa52d0a0e42.jpg",
      imageSrcSet:
        "https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0.8/https://renty.ae/uploads/car/photo/l/white_rolls-royce-cullinan_2019_3835_main_8d32bc33a3e35240595cb9db317296ab.jpg 2x",
      altText: "Rolls Royce Cullinan (White), 2019 for rent in Dubai",
      href: "/",
    },
  ];

  return (
    <div>
      <div className="container home-page-container-p-t hourly-offers-section mt-5">
        <div
          className="hourly-offers-container bg-shades-100 overflow-hidden"
          // style={{
          //   backgroundImage:
          //     "url(https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=351,height=486,sharpen=0,quality=85/https://renty.ae/assets-nd/images/special-offers-bg.png)",
          // }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <span className="text-[#ec7421] hourly-offers-container-title">
                Get up to 40% off
              </span>
              <span className="text-[#ec7421] hourly-offers-container-sub-title">
                Rent hourly and save with limited time offers
              </span>
            </div>
            <a
              className="color-shades-white bg-brand-primary d-sm-flex d-none align-items-center rounded-small view-all-hourly"
              href="/"
              title="Hourly rental"
            >
              <span className="fs-14 font-weight-bold lh-20 letter-spacing-0_2 text-uppercase">
                View hourly offers
              </span>
              <div className=" fs-16 px-2 d-flex align-items-center justify-content-center">
                <FaAngleRight />
              </div>
            </a>
          </div>
          <div className="swiper-container hourly-offers-slider mt-sm-4 mt-3 position-relative">
            <div
              className="swiper-wrapper d-flex"
              id="swiper-wrapper-d101fe82611ca8632"
              aria-live="polite"
            >
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".hourly-offer-arrow-left",
                  nextEl: ".hourly-offer-arrow-right",
                }}
                spaceBetween={10}
                slidesPerView="auto"
              >
                {carOffers.map((car) => (
                  <SwiperSlide
                    key={car.id}
                    className="swiper-slide hourly-offer-card d-flex flex-column rounded-medium bg-shades-white"
                    role="group"
                    aria-label="1 / 8"
                    style={{ width: "268.846px", marginRight: "10px" }}
                  >
                    <div className="position-absolute offer-pin rounded-small d-flex align-items-center hourly-offer-pin">
                      <div className="d-flex availability-feature-label-mobile align-items-center"></div>
                    </div>
                    <a href={car.href} title={`Hiring ${car.title} in Dubai`}>
                      <div className="cars-slider-header position-relative">
                        <div className="d-flex overflow-hidden rounded-medium position-relative img-block-to-hover">
                          <img
                            src={car.imageSrc}
                            srcSet={car.imageSrcSet}
                            className="hourly-offer-slider-image rounded-medium w-100"
                            title={`Hiring ${car.title} in Dubai`}
                            alt={car.altText}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="hourly-offer-slider-footer d-flex flex-column justify-content-between mt-sm-2 mt-1 mb-sm-2">
                        <span className="fs-16 line-height-25 font-weight-normal color-shades-black text-truncate slider-card-title">
                          {car.title}
                        </span>
                        <div className="d-flex">
                          <div className="price-per-hour-block d-flex align-items-center">
                            <span className="color-shades-black font-weight-semibold hourly-card-main-price">
                              {car.price}
                            </span>
                            <span className="fs-12 lh-20 font-weight-normal letter-spacing-0_2 color-shades-600">
                              {car.priceDescription}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div
              className="position-absolute justify-content-center align-items-center hourly-offer-arrow-left hourly-offer-arrow bg-brand-primary cursor-pointer rounded-small p-2 d-lg-flex d-none swiper-button-disabled"
              tabIndex="-1"
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-d101fe82611ca8632"
              aria-disabled="true"
            >
              <span className=" fs-24 color-shades-white not-rtl">
                <FaAngleLeft />
              </span>
            </div>
            <div
              className="position-absolute justify-content-center align-items-center hourly-offer-arrow-right hourly-offer-arrow bg-brand-primary cursor-pointer rounded-small p-2 d-lg-flex d-none"
              tabIndex="0"
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-d101fe82611ca8632"
              aria-disabled="false"
            >
              <span className=" fs-24 color-shades-white not-rtl">
                <FaAngleRight />
              </span>
            </div>
          </div>
          <div className="d-sm-none d-flex mt-3">
            <a
              className="d-flex align-items-center justify-content-center w-100 mobile-view-all-hourly rounded-small bg-brand-primary color-shades-white"
              href="https://renty.ae/hourly-car-rental"
              title="Hourly rental"
            >
              <span className="view-all-text fs-12 font-weight-bold lh-20 letter-spacing-1 text-uppercase text-center">
                View hourly offers
              </span>

              <FaAngleRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffSale;
