"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const breadcrumbTitle = searchParams.get("category");

  return (
    <>
      <div className="d-block bg-shades-white">
        <div className="container">
          <nav aria-label="breadcrumb">
            <div className="d-flex py-2-custom">
              <ol className="breadcrumb py-1-custom pl-0 bg-transparent">
                <li className="breadcrumb-item" aria-current="page">
                  <a className="text-white" href="https://renty.ae/">
                    Rent a car
                  </a>
                </li>
                {/* <i className="d-flex align-items-center px-1-custom color-shades-500 fs-12 not-rtl icon-chevron-right"></i> */}
                <li className="breadcrumb-item active color-brand-primary">
                  <span>{breadcrumbTitle}</span>
                </li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
      <div class="bg-shades-white  pt-3 pt-lg-4 ">
        <div class="container">
          <div class=" ">
            <div class="d-block pb-2">
              <h1 class="text-white d-inline">Rent a car in Dubai</h1>
            </div>
          </div>
        </div>
      </div>
      <div class=" mt-2 mb-2 ">
        <div class="container container-car-items p-4">
          <div class="row m-0-custom">
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
          </div>
          <div class="bg-shades-white pt-2 pb-2">
            <div class="container">
              <nav>
                <ul class="pagination justify-content-center my-0-custom">
                  <li class="page-item active">
                    <span class="page-link rounded-small">1</span>
                  </li>
                  <li class="page-item">
                    <span class="page-link rounded-small">2</span>
                  </li>
                  <li class="page-item">
                    <span class="page-link rounded-small">3</span>
                  </li>
                  <li class="page-item">
                    <span class="page-link rounded-small">4</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Car() {
  return (
    <>
      <div class="col-12 col-md-6 col-lg-12 car-list-item bg-shades-white mb-2">
        <div class="border-lg-bottom border-shades-200 ">
          <div class="row car-list-item-row">
            <a class="blend-mode-luminosity d-block col-lg-4 col-xl-3 car-image-link">
              <div class="mb-2-custom mb-lg-0-custom">
                <div class="swiper car-gallery-swiper car-gallery-swiper600121">
                  <div class="swiper-wrapper cars-swiper-wrapper-default">
                    <div class="swiper-slide swiper-slide-car-card img-block-to-hover">
                      <img
                        src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=408,height=258,sharpen=0/https://renty.ae/uploads/car/photo/l/dark-grey_ford-mustang-cabrio_2023_6001_main_9729a542c7225e02a2f32c3a3b34dfda.jpg"
                        class="w-100 car-item-img car-image-link h-100 "
                        style={{ objectFit: "cover" }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex position-absolute availability-plp-pin d-lg-none">
                <div class="d-flex availability-feature-label-mobile align-items-center">
                  <i class="mr-1 line-height-normal d-flex align-items-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        class="fill-success"
                        d="M3.5 1C3.5 0.723858 3.72386 0.5 4 0.5C4.27614 0.5 4.5 0.723858 4.5 1V1.5H7.5V1C7.5 0.723858 7.72386 0.5 8 0.5C8.27614 0.5 8.5 0.723858 8.5 1V1.5H9.5C10.3284 1.5 11 2.17157 11 3V10C11 10.8284 10.3284 11.5 9.5 11.5H2.5C1.67157 11.5 1 10.8284 1 10V3C1 2.17157 1.67157 1.5 2.5 1.5H3.5V1Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.5 4.64624C8.69536 4.8414 8.69552 5.15799 8.50035 5.35335L5.85373 8.15094C5.75998 8.24479 5.63278 8.29753 5.50013 8.29756C5.36747 8.2976 5.24025 8.24492 5.14645 8.15112L3.64645 6.65112C3.45118 6.45586 3.45118 6.13927 3.64645 5.94401C3.84171 5.74875 4.15829 5.74875 4.35355 5.94401L5.49982 7.09028L7.79289 4.64659C7.98806 4.45123 8.30464 4.45108 8.5 4.64624Z"
                        fill="white"
                      ></path>
                    </svg>
                  </i>
                  <span class="fs-12 lh-20 font-weight-normal text-nowrap color-shades-white">
                    Available now
                  </span>
                </div>
              </div>
            </a>

            <div
              class="d-flex flex-column col-lg-8 col-xl-9 list-main-car-info px-3 pl-lg-0 py-lg-3
                                  justify-content-center align-items-center list-car-features justify-content-between
                                  flex-column flex-lg-row "
            >
              <div class="d-flex flex-column flex-grow-1 w-100 plp-card-main-content pr-lg-3 gap-10">
                <div
                  class="d-flex flex-column flex-lg-row align-items-lg-center align-items-start
                                          px-lg-0-custom position-relative car-list-name-container blend-mode-luminosity"
                >
                  <div class="d-flex m-w-100 align-items-center overflow-hidden mr-auto">
                    <a class="px-1-custom text-truncate white_space car-main-link">
                      <span class="fs-16 fs-lg-18 lh-lg-30 line-height-25 color-shades-black car-title car-main-link font-weight-normal">
                        Ford Mustang cabrio (Dark Grey), 2023
                      </span>
                    </a>
                  </div>
                </div>
                <div class="d-lg-none d-flex px-1-custom pt-1-custom pb-2-custom blend-mode-luminosity gap-col-5">
                  <div class="d-flex d-lg-none flex-column overflow-hidden flex-grow-1">
                    <span
                      class="fs-14 line-height-25 font-weight-normal color-shades-700 text-truncate"
                      title="Free delivery in Dubai"
                    >
                      Free delivery in Dubai
                    </span>{" "}
                    <span class="fs-14 line-height-25 font-weight-normal color-shades-700 text-truncate">
                      250 km for 1 day
                    </span>
                  </div>
                  <div
                    class="d-lg-none d-flex flex-column align-items-end"
                    style={{ zIndex: 2 }}
                  >
                    <span class="fs-11 font-weight-bold text-uppercase color-shades-700 letter-spacing-1 lh-15">
                      Price per day
                    </span>{" "}
                    <span class="fs-24 line-height-35 color-shades-black font-weight-normal">
                      $ 146
                    </span>
                    <div class="d-flex position-relative align-items-center">
                      <div class="d-flex align-items-end price-block-mobile blend-mode-luminosity flex-column text-nowrap">
                        <div class="d-flex align-items-center">
                          <span class="fs-14 line-height-25 font-weight-normal color-shades-700 mr-1-custom">
                            3-6 days:
                          </span>
                          <span class="fs-14 line-height-25 font-weight-normal color-brand-primary-lighter">
                            $ 146
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center d-lg-none">
                  <div class="d-none d-flex m-w-100 car-list-item-buttons">
                    <button
                      type="button"
                      class="primary-button-color btn-medium 
                            btn btn-details font-weight-bolder position-relative align-items-center d-flex d-lg-none 
                            w-100"
                      style={{ padding: "10px 20px" }}
                    >
                      <span class="car-detail-btn-text text-nowrap text-uppercase lh-20 letter-spacing-0_2 fs-13 ">
                        Rental details
                      </span>
                    </button>
                  </div>
                </div>
                <div class="d-none d-lg-flex flex-lg-column overflow-hidden blend-mode-luminosity gap-10">
                  <div class="d-flex gap-5 car-list-default-features-first-row">
                    <div class="d-flex default-plp-feature-label-desk align-items-center bg-shades-100">
                      <i class="line-height-normal d-flex align-items-center">
                        <svg
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            class="fill-success"
                            d="M4.08332 1.22222C4.08332 0.900053 4.34449 0.638885 4.66666 0.638885C4.98882 0.638885 5.24999 0.900053 5.24999 1.22222V1.80555H8.74999V1.22222C8.74999 0.900053 9.01116 0.638885 9.33332 0.638885C9.65549 0.638885 9.91666 0.900053 9.91666 1.22222V1.80555H11.0833C12.0498 1.80555 12.8333 2.58905 12.8333 3.55555V11.7222C12.8333 12.6887 12.0498 13.4722 11.0833 13.4722H2.91666C1.95016 13.4722 1.16666 12.6887 1.16666 11.7222V3.55555C1.16666 2.58905 1.95016 1.80555 2.91666 1.80555H4.08332V1.22222Z"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.91665 5.47616C10.1446 5.70385 10.1447 6.07319 9.91706 6.30111L6.82933 9.56497C6.71995 9.67446 6.57155 9.73599 6.41679 9.73603C6.26203 9.73607 6.1136 9.67461 6.00417 9.56518L4.25417 7.81518C4.02636 7.58737 4.02636 7.21803 4.25417 6.99022C4.48197 6.76242 4.85132 6.76242 5.07913 6.99022L6.41644 8.32754L9.09169 5.47657C9.31938 5.24865 9.68873 5.24846 9.91665 5.47616Z"
                            fill="white"
                          ></path>
                        </svg>
                      </i>

                      <span class="fs-14 line-height-25 font-weight-normal text-nowrap color-semantic-success">
                        Available now
                      </span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center car-list-default-features-second-row">
                    <span class="fs-14 line-height-25 font-weight-normal color-shades-700 car-list-default-features-second-row-item text-nowrap">
                      Free delivery in Dubai
                    </span>
                  </div>
                  <div class="d-flex align-items-center car-list-default-features-third-row">
                    <div class="d-flex align-items-center default-plp-feature-label-desk">
                      <span class="fs-14 line-height-25 font-weight-normal color-shades-700 text-nowrap">
                        1 day rental available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column w-fit-content h-100 justify-content-between">
                <div
                  class="d-lg-flex d-none flex-column w-100 align-items-end blend-mode-luminosity"
                  style={{ zIndex: 2 }}
                >
                  <span class="fs-11 font-weight-bold text-uppercase color-shades-700 letter-spacing-1 lh-15">
                    Price per day
                  </span>{" "}
                  <span class="fs-24 line-height-35 color-shades-black font-weight-normal">
                    $ 146
                  </span>{" "}
                  <div class="d-flex position-relative align-items-center">
                    <div class="d-flex align-items-end price-block-mobile blend-mode-luminosity flex-column text-nowrap">
                      <div class="d-flex align-items-center">
                        <span class="fs-14 line-height-25 font-weight-normal color-shades-700 mr-1-custom">
                          3-6 days:
                        </span>
                        <span class="fs-14 line-height-25 font-weight-normal color-brand-primary-lighter">
                          $ 146
                        </span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="d-flex justify-content-end gap-col-5">
                  <button
                    type="button"
                    class=" btn-medium btn btn-details font-weight-bolder position-relative 
                          align-items-center d-none d-lg-flex primary-button-color"
                  >
                    <span class="text-nowrap text-uppercase lh-20 letter-spacing-0_2 fs-14 ">
                      Rental details
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
