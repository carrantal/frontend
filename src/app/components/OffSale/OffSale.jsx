"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";

const OffSale = ({ carOffers, id }) => {
  // offerresponse = response?.data?.data;
  // const [carOffers, setCarOffers] = useState([]);

  // useEffect(() => {
  //   const fetchCarOffers = async () => {
  //     try {
  //       const response = await axios.get(`${URL}/api/cars?populate=*`);
  //       const

  //       const filteredOffers = offerresponse.filter(
  //         (car) => car.attributes.discountedPrice !== null
  //       );

  //       filteredOffers.forEach((car) => {
  //         console.log("Images for car:", car.attributes.title);
  //         console.log("image", car.attributes.images.data[0].attributes.url);
  //       });

  //       setCarOffers(filteredOffers);
  //     } catch (error) {
  //       console.error("Error fetching car offers:", error);
  //     }
  //   };

  //   fetchCarOffers();
  // }, []);

  return (
    <>
      {carOffers.length !== 0 && (
        <div id={id}>
          <div className="container home-page-container-p-t hourly-offers-section mt-5">
            <div className="hourly-offers-container bg-shades-100 overflow-hidden">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <span className="text-[#ec7421] hourly-offers-container-title">
                    Special Valentine&apos;s Day Offer
                  </span>
                  <span className="text-[#ec7421] hourly-offers-container-sub-title">
                    Rent hourly and save with limited time offers
                  </span>
                </div>
                <Link
                  className="color-shades-white bg-brand-primary d-sm-flex d-none align-items-center rounded-small view-all-hourly"
                  href="/search?offer=true"
                  title="special offers"
                >
                  <span className="fs-14 font-weight-bold lh-20 letter-spacing-0_2 text-uppercase">
                    View all offers
                  </span>
                  <div className=" fs-16 px-2 d-flex align-items-center justify-content-center">
                    <FaAngleRight />
                  </div>
                </Link>
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
                        className="swiper-slide hourly-offer-card d-flex flex-column rounded-medium bg-shades-white cursor-pointer"
                        role="group"
                        aria-label="1 / 8"
                        style={{ width: "268.846px", marginRight: "10px" }}
                      >
                        <div className="position-absolute offer-pin rounded-small d-flex align-items-center hourly-offer-pin">
                          <div className="d-flex availability-feature-label-mobile align-items-center"></div>
                        </div>
                        <Link
                          href={`/car-details/${car.attributes.slug}`}
                          title={`${car.attributes.title} in Dubai`}
                        >
                          <div className="cars-slider-header position-relative">
                            <div className="d-flex overflow-hidden rounded-medium position-relative img-block-to-hover">
                              <img
                                src={
                                  car.attributes.images.data[0].attributes.url
                                }
                                srcSet={car.attributes.imageSrcSet}
                                className="hourly-offer-slider-image rounded-medium w-100 "
                                title={`${car.attributes.title} in Dubai`}
                                alt={car.attributes.altText}
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="hourly-offer-slider-footer d-flex flex-column justify-content-between mt-sm-2 mt-1 mb-sm-2">
                            <span className="fs-16 line-height-25 font-weight-normal color-shades-black text-truncate slider-card-title">
                              {car.attributes.title}
                            </span>
                            <div className="d-flex">
                              <div className="price-per-hour-block d-flex align-items-center">
                                <span className="color-shades-black font-weight-semibold hourly-card-main-price">
                                  {car.attributes.discountedPrice} AED
                                </span>
                                <span
                                  className="fs-12 lh-20 font-weight-normal letter-spacing-0_2 color-shades-600"
                                  style={{
                                    textDecoration: "line-through",
                                  }}
                                >
                                  {car.attributes.price} AED
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
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
                <Link
                  className="d-flex align-items-center justify-content-center w-100 mobile-view-all-hourly rounded-small bg-brand-primary color-shades-white"
                  href="/search?offer=true"
                  title="special offers"
                >
                  <span className="view-all-text fs-12 font-weight-bold lh-20 letter-spacing-1 text-uppercase text-center">
                    View all offers
                  </span>

                  <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OffSale;
