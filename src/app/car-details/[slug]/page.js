import Breadcrumb from "@/app/components/Breadcrumb";
import CarDetailSlider from "@/app/components/CarDetailSlider";
import Footer from "@/app/components/Footer/Footer";
import TopHeader from "@/app/components/TopHeader";
import React from "react";
import { FaInfoCircle, FaCheckSquare } from "react-icons/fa";
import CustomCalender from "@/app/components/CustomCalender";

export default async function Page({ params }) {
  const slug = (await params).slug;

  const carData = {
    images: [
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24783_4cca81da2c02d65e78c430aa5f7b737e.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24784_1211d8e36d14b79df7c8a2c59f3d63e7.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24785_b467470bdb015af5ee66ad074fa9ed93.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24786_b147d96e4a6c2d2eeaaf5beaf167dedc.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24787_79f5f2c1d6743cd4ffa2a753aa09d574.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24789_5e58c23d66052e354573192009f3bc3c.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24790_4cf92e739849b63430d887f7e6ac5b7f.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24791_1a074c827a3e357d7cb3fed9c0d3ad22.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24792_5d5310da361c4ab239b878832d4873be.jpg",
      },
      {
        url: "https://renty.ae/uploads/car/photo/l/black_lamborghini-evo-spyder_2023_5150_main_d4a4de60d6e19811843526b7dd9a31b3.jpg",
      },
    ],
    specifications: [
      { key: "Year", value: "2023" },
      { key: "Color", value: "Black" },
      { key: "0-100km/h", value: "2.9 Sec" },
      { key: "Transmission", value: "Automatic" },
      { key: "Engine", value: "5.2-Litre V10" },
      { key: "Max speed", value: "325" },
      { key: "Horse power", value: "640" },
      { key: "Seats", value: "2" },
      { key: "Fuel type", value: "Petrol" },
      { key: "Body type", value: "Convertible" },
    ],
  };

  return (
    <>
      <div class="bg-black">
        <div class="homepage  ">
          <TopHeader />
          <Breadcrumb breadcrumbTitle={"Car Title"} />
          <div class=" pt-lg-4 single-car special-offer">
            <div className="container">
              <div class="pb-3 pt-3 mt-0 pt-lg-0 d-flex align-items-center mt-lg-0">
                {/* <span class="mr-3 d-flex align-items-center">
                  <img
                    src="https://renty.ae/assets-nd/icons/site/brand_svg/lamborghini.svg"
                    width="60"
                    height="60"
                    loading="lazy"
                    alt=""
                  />
                </span> */}

                <h1 class="fs-m-18 fs-30 font-weight-normal text-white">
                  Rent Lamborghini Evo Spyder (Black), 2023 - hourly in Dubai
                </h1>
              </div>
              <div className="my-3"></div>
              <div
                class="d-flex position-relative justify-content-between overflow-lg-hidden"
                style={{ columnGap: "60px" }}
              >
                <div class="col-12 col-lg-6 p-0 gallery flex-lg-grow-1">
                  <CarDetailSlider images={carData.images} />
                  <div class="bg-shades-white d-lg-none d-flex flex-column gap-15 p-2 mt-2">
                    <div class="p-lg-3 d-flex flex-row justify-content-between">
                      <div class="d-flex flex-column">
                        <span class="fs-18 fs-lg-24 line-height-35 font-weight-50 font-weight-semibold color-shades-black">
                          Hourly rental
                        </span>
                        <div class="d-flex default-plp-feature-label-desk align-items-center p-0">
                          <i class="line-height-normal d-flex align-items-center">
                            <svg
                              width="14"
                              height="15"
                              viewBox="0 0 14 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                class="fill-primary"
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

                          <span class="fs-14 line-height-25 font-weight-normal text-nowrap text-white">
                            Available tomorrow
                          </span>
                        </div>
                      </div>
                      <div class="d-flex flex-column py-1">
                        <div class="d-flex flex-row justify-content-end">
                          <div class="fs-11 font-weight-bold text-uppercase text-white price-per-hour-color letter-spacing-1 line-height-15 text-right">
                            Price per hour
                          </div>
                        </div>
                        <span class="fs-24 font-weight-normal line-height-35 text-white text-right">
                          $<span>93</span>
                        </span>
                      </div>
                    </div>{" "}
                    <div class="p-3 mt-3 bg-shades-100 rounded-small">
                      <div class="d-flex flex-column gap-5">
                        <div class="d-flex align-items-center justify-content-between fs-14">
                          <span class="color-shades-900">
                            6 hours rental (minimum)
                          </span>
                          <span class="font-weight-semibold text-white">
                            $<span>560</span>
                          </span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between fs-14">
                          <span class="color-shades-900">12 hours rental</span>
                          <div class="d-flex gap-5">
                            {/* <span
                              class="color-shades-500 fs-14 font-weight-normal line-height-20"
                              style="text-decoration: line-through"
                            >
                              ${" "}
                              <span data-id="offer_price_12_hour_full">
                                1,120
                              </span>
                            </span> */}
                            {/* <span class="color-semantic-success fs-14 font-weight-normal line-height-20">
                              -33%
                            </span> */}
                            <span class="font-weight-semibold fs-14  text-white line-height-20">
                              $<span>746</span>
                            </span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between fs-14">
                          <span class="color-shades-900">
                            VAT Tax Applicable
                          </span>
                          <span class="font-weight-semibold text-white">
                            +5%
                          </span>
                        </div>
                        <div class="mt-2">
                          <button
                            data-source="whatsapp-special-offer"
                            title="Contact Renty.ae car rental Whatsapp"
                            data-company-id="1"
                            data-car-type="luxury"
                            class="w-100 d-flex mobile-main-cta-btn whatsapp_btn whatsapp_btn_js d-none btn btn-large btn-semantic-success d-none d-lg-flex"
                            type="button"
                            data-id="5150"
                          >
                            <span class=""></span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 448 512"
                              class="fs-20 icon-whatsapp icon-20"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                            </svg>
                            <span class="letter-spacing-0_2">WhatsApp</span>
                          </button>
                        </div>
                      </div>{" "}
                    </div>
                    <div class="mt-1 mb-5 d-flex flex-column gap-5">
                      <div class="d-flex align-items-center line-height-25 policyDesc">
                        {/* <span class="color-semantic-success icon-thumbs-up mr-2"></span> */}
                        <FaInfoCircle class="color-semantic-success icon-thumbs-up mr-2" />
                        <span class="fs-14 font-weight-normal color-shades-black">
                          <span>No deposit needed</span>
                        </span>
                      </div>
                      <span
                        class="d-flex align-items-center fs-14 line-height-25 font-weight-normal color-shades-700 text-truncate"
                        title="Minimum 6 hours rental"
                      >
                        {/* <i class="icon-info fs-18 d-lg-none d-flex color-shades-orange mr-2"></i> */}
                        <FaInfoCircle class="color-semantic-success icon-thumbs-up mr-2" />
                        <span class="color-shades-black">
                          Minimum 6 hours rental
                        </span>
                      </span>
                      <div class="d-flex align-items-center line-height-25">
                        {/* <span class="color-shades-500 icon-info mr-2"></span> */}
                        <FaInfoCircle class="color-semantic-success icon-thumbs-up mr-2" />
                        <span class="fs-14 font-weight-normal color-shades-black">
                          Mileage limit 90-150 km
                        </span>
                      </div>
                      <div class="d-flex align-items-center line-height-25">
                        {/* <span class="color-shades-500 icon-info mr-2"></span> */}
                        <FaInfoCircle class="color-semantic-success icon-thumbs-up mr-2" />
                        <span class="fs-14 font-weight-normal color-shades-black">
                          No delivery
                        </span>
                      </div>
                      {/* <div class="d-flex align-items-center line-height-25">
                        <span class="fs-14 font-weight-normal color-shades-black">
                          Pick-up and drop-off location
                          <a
                            class="border-0 bg-transparent color-brand-primary font-weight-semibold go_to_map_btn"
                            href="https://maps.app.goo.gl/MUc3mPtSUGAMcReq5"
                            target="_blank"
                            style={{ outline: "none" }}
                          >
                            View on map
                          </a>
                        </span>
                      </div> */}
                    </div>
                  </div>
                  {/* <div class="d-lg-none row">
                    <ul
                      class="nav justify-content-center justify-content-lg-start flex-grow-1 px-lg-3 mt-0"
                      id="car-details-tab"
                      role="tablist"
                    >
                      <li class="nav-item flex-grow-1" role="presentation">
                        <a class="btn btn-medium btn-filter-sort-by active justify-content-center shadow-none font-weight-semibold rounded-0 text-white">
                          <span class="text-truncate">Overview</span>
                        </a>
                      </li>
                      <li class="nav-item flex-grow-1" role="presentation">
                        <a class="btn btn-medium btn-filter-sort-by justify-content-center shadow-none font-weight-semibold rounded-0 text-white">
                          <span class="text-truncate">Reviews</span>
                        </a>
                      </li>
                      <li class="nav-item flex-grow-1" role="presentation">
                        <a class="btn btn-medium btn-filter-sort-by justify-content-center shadow-none font-weight-semibold rounded-0 text-white">
                          <span class="text-truncate">FAQ</span>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
                    <div class="">
                      <div class="d-flex flex-wrap align-items-center">
                        <h2 class="h4 pr-3 mb-3 text-white">Rental pricing</h2>
                      </div>
                      <div>
                        <div class="d-flex flex-row border-bottom border-shades-500 py-lg-2">
                          <div class="col-md-6 p-0">
                            <span class="fs-11 color-shades-900 font-weight-bold text-uppercase letter-spacing-1 line-height-15">
                              Rental period
                            </span>
                          </div>
                          <div class="col-md-6 p-0 text-right  text-lg-left">
                            <span class="fs-11 color-shades-900 font-weight-bold text-uppercase letter-spacing-1 line-height-15">
                              Price per day
                            </span>
                          </div>
                        </div>
                        <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                          <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                            1 day
                          </div>
                          <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                            $ 933
                          </div>
                        </div>{" "}
                        <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                          <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                            2 days
                          </div>
                          <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                            $ 933
                          </div>
                        </div>{" "}
                        <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                          <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                            3-6 days
                          </div>
                          <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                            $ 904
                          </div>
                        </div>{" "}
                        <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                          <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                            7-20 days
                          </div>
                          <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                            $ 875
                          </div>
                        </div>{" "}
                        <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                          <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                            21-29 days
                          </div>
                          <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                            $ 817
                          </div>
                        </div>
                        <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                          <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                            30+ days
                          </div>
                          <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                            $ 681
                          </div>
                        </div>
                        <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                          <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                            VAT Tax Applicable
                          </div>
                          <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                            +5%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
                    <div class="">
                      <div class="d-flex flex-wrap align-items-center">
                        <h2 class="h4 pr-3 mb-3 text-white">Specifications</h2>
                      </div>
                      <div>
                        {carData.specifications.map((each, index) => (
                          <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                            <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                              {each.key}
                            </div>
                            <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                              {each.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
                    <div class="">
                      <div class="d-flex flex-wrap align-items-center">
                        <h2 class="h4 pr-3 mb-3 text-white">Features</h2>
                      </div>
                    </div>
                    <div class="row gap-row-5 ">
                      <div class="col-12 col-lg-6 line-height-25">
                        <div class="w-100 d-flex align-items-center">
                          <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
                          <span class="pl-2 fs-14 color-shades-black">
                            Bluetooth
                          </span>
                        </div>
                        <div class="w-100 d-flex align-items-center">
                          <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
                          <span class="pl-2 fs-14 color-shades-black">
                            Climate control
                          </span>
                        </div>
                        <div class="w-100 d-flex align-items-center">
                          <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
                          <span class="pl-2 fs-14 color-shades-black">
                            Leather seats / fabric seats
                          </span>
                        </div>
                      </div>
                      <div class="col-12 col-lg-6 line-height-25">
                        <div class="w-100 d-flex align-items-center">
                          <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
                          <span class="pl-2 fs-14 color-shades-black">
                            Paddle shift (triptronic)
                          </span>
                        </div>
                        <div class="w-100 d-flex align-items-center">
                          <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
                          <span class="pl-2 fs-14 color-shades-black">
                            Parking sensors
                          </span>
                        </div>
                        <div class="w-100 d-flex align-items-center">
                          <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
                          <span class="pl-2 fs-14 color-shades-black">
                            Reverse camera
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
                    <div class="">
                      <div class="d-flex flex-wrap align-items-center">
                        <h2 class="h4 pr-3 mb-3 text-white">Description</h2>
                      </div>
                      <p className="fs-14 text-white text-justify">
                        You can rent Ford Mustang cabrio (Red), 2024 in Dubai,
                        UAE for the next price - $ 149 per day, $ 896 per week
                        or $ 3,570 per month. Rental cost includes basic
                        insurance and standard mileage limit of 250 km/day or
                        1400 km/week or 3500 km/month (with overlimit charge $ 1
                        per additional km). Security deposit no needed. So,
                        don't wait any longer. If you want to drive this car -
                        contact us for booking or any question right now.
                      </p>
                    </div>
                  </div>

                  <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
                    <div class="">
                      <div class="d-flex flex-wrap align-items-center">
                        <h2 class="h4 pr-3 mb-3 text-white">Reviews</h2>
                      </div>
                    </div>
                    <div class="tab-content pt-4" id="rates-tabContent">
                      <div
                        aria-labelledby="rates-google-tab"
                        class="tab-pane active"
                        id="rates-google"
                        role="tabpanel"
                      >
                        <div class="d-flex mb-4">
                          <div>
                            <img
                              alt="Rustem Akhmadeev"
                              class="rates-profile-image rounded-circle mr-3"
                              height="50"
                              width="64"
                              src="https://lh3.googleusercontent.com/a-/ALV-UjVaGvzCb9nQbQOr3gqvuRoJeNvQO05jhNs3daMbAgEukVldQ13hCQ=s120-c-rp-mo-br100"
                              loading="lazy"
                            />
                          </div>
                          <div class="w-100">
                            <div class="d-flex align-items-center flex-wrap justify-content-between">
                              <div class="d-flex align-items-center flex-wrap">
                                <span class="mr-2 fs-16 fs-lg-18 color-shades-900">
                                  Rustem Akhmadeev 5
                                </span>
                                <div class="google-stars-block d-flex align-items-center">
                                  {/* <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-90"></span> */}
                                </div>{" "}
                              </div>
                              <span class="fs-12 fs-lg-14 color-shades-900  ">
                                19.12.2024, 16:16
                              </span>
                            </div>
                            <div class="fs-14 text-white">
                              Брали ламборгини хуракейн ево спайдер на 2 суток,
                              всё было отлично без подводных камней. Отличный
                              сервис и незабываемый опыт.
                            </div>
                          </div>
                        </div>
                        <div class="d-flex mb-4">
                          <div>
                            <img
                              alt="Rustem Akhmadeev"
                              class="rates-profile-image rounded-circle mr-3"
                              height="50"
                              width="64"
                              src="https://lh3.googleusercontent.com/a-/ALV-UjVaGvzCb9nQbQOr3gqvuRoJeNvQO05jhNs3daMbAgEukVldQ13hCQ=s120-c-rp-mo-br100"
                              loading="lazy"
                            />
                          </div>
                          <div class="w-100">
                            <div class="d-flex align-items-center flex-wrap justify-content-between">
                              <div class="d-flex align-items-center flex-wrap">
                                <span class="mr-2 fs-16 fs-lg-18 color-shades-900">
                                  Rustem Akhmadeev 5
                                </span>
                                <div class="google-stars-block d-flex align-items-center">
                                  {/* <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-90"></span> */}
                                </div>{" "}
                              </div>
                              <span class="fs-12 fs-lg-14 color-shades-900  ">
                                19.12.2024, 16:16
                              </span>
                            </div>
                            <div class="fs-14 text-white">
                              Брали ламборгини хуракейн ево спайдер на 2 суток,
                              всё было отлично без подводных камней. Отличный
                              сервис и незабываемый опыт.
                            </div>
                          </div>
                        </div>
                        <div class="d-flex mb-4">
                          <div>
                            <img
                              alt="Rustem Akhmadeev"
                              class="rates-profile-image rounded-circle mr-3"
                              height="50"
                              width="64"
                              src="https://lh3.googleusercontent.com/a-/ALV-UjVaGvzCb9nQbQOr3gqvuRoJeNvQO05jhNs3daMbAgEukVldQ13hCQ=s120-c-rp-mo-br100"
                              loading="lazy"
                            />
                          </div>
                          <div class="w-100">
                            <div class="d-flex align-items-center flex-wrap justify-content-between">
                              <div class="d-flex align-items-center flex-wrap">
                                <span class="mr-2 fs-16 fs-lg-18 color-shades-900">
                                  Rustem Akhmadeev 5
                                </span>
                                <div class="google-stars-block d-flex align-items-center">
                                  {/* <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-100"></span>
                                  <span class="fs-lg-20 fs-16 google-star icon-star-filled filled-90"></span> */}
                                </div>{" "}
                              </div>
                              <span class="fs-12 fs-lg-14 color-shades-900  ">
                                19.12.2024, 16:16
                              </span>
                            </div>
                            <div class="fs-14 text-white">
                              Брали ламборгини хуракейн ево спайдер на 2 суток,
                              всё было отлично без подводных камней. Отличный
                              сервис и незабываемый опыт.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
                    <div class="">
                      <div class="d-flex flex-wrap align-items-center">
                        <h2 class="h4 pr-3 mb-3 text-white">Delivery terms</h2>
                      </div>
                      <div>
                        {[
                          { key: "From Office", value: "Free" },
                          {
                            key: "From Airport",
                            value: "Parking Charges",
                          },
                        ].map((each, index) => (
                          <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                            <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                              {each.key}
                            </div>
                            <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                              {each.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-5 p-0 d-none d-lg-block">
                  <div class="title-car-mobile   ">
                    <div class="d-none d-lg-block py-3 px-3 show-body show-body-modal">
                      <div class="d-flex align-items-start justify-content-between mb-3 flex-column">
                        <div class="d-flex flex-row pl-3 w-100">
                          <div class="d-flex align-items-start priceText text-nowrap flex-grow-1">
                            <span class="fs-12 color-shades-500 text-uppercase mr-2 text-white">
                              Price for a
                            </span>
                            <span class="fs-12 color-shades-white text-uppercase px-1 bg-brand-primary rounded-small">
                              1 day
                            </span>
                          </div>
                          <span class="text-white color-shades-500 fs-14 pl-2 d-block text-right line-height-normal">
                            Feel free to chat or call us directly
                          </span>
                        </div>
                        <div class="pl-3">
                          <span class="fs-30 text-white font-weight-semibold priceVal">
                            $ 933
                          </span>
                        </div>
                      </div>

                      <div class="mb-3">
                        <div class="d-flex align-items-center rounded-small py-1 availability-label min-height-35 color-semantic-success">
                          <span class="fs-14 line-height-25 ml-2">
                            Available now
                          </span>
                        </div>
                        <div class="d-flex align-items-center rounded-small min-height-35 policyDesc">
                          <FaInfoCircle class="color-semantic-success icon-info ml-2" />
                          <span class="fs-14 line-height-25 ml-2 color-shades-black">
                            No deposit needed
                          </span>
                        </div>
                        <div class="d-flex align-items-center rounded-small min-height-35 policyDesc">
                          <FaInfoCircle class="color-semantic-success icon-info ml-2" />
                          <span class="fs-14 line-height-25 ml-2 color-shades-black">
                            Mileage limit - 250 km for 1 day
                          </span>
                        </div>
                        <div class="d-flex align-items-center rounded-small min-height-35 policyDesc">
                          <FaInfoCircle class="color-semantic-success icon-info ml-2" />
                          <span class="fs-14 line-height-25 ml-2 color-shades-black">
                            Free delivery in Dubai
                          </span>
                        </div>
                        <div class="d-flex align-items-center rounded-small min-height-35 policyDesc">
                          <FaInfoCircle class="color-semantic-success icon-info ml-2" />
                          <span class="fs-14 line-height-25 ml-2 color-shades-black">
                            Cash, Crypto, Credit/debit cards accepted
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        data-company-id="1"
                        data-id="5356"
                        data-whatsapp="1"
                        data-telegram="1"
                        data-car-type="luxury"
                        title="Contact Renty.ae car rental"
                        class="w-100 mb-3 btn-medium contact_btn btn btn-semantic-success d-none d-lg-flex"
                      >
                        <span class="fs-14 lh-20 font-weight-bold text-uppercase text-nowrap letter-spacing-0_2 company_phone_5356">
                          Contact
                        </span>
                      </button>

                      <div class="d-flex justify-content-center border-center-horizontal border-shades-300 or-book-online">
                        <span class="fs-14 color-shades-500 text-uppercase position-relative bg-shades-100 px-2">
                          or book online
                        </span>
                      </div>
                    </div>

                    <div
                      class="d-none d-lg-block bg-shades-white rounded-small p-3 mx-3 mb-2 show-body-modal mt-3 mt-lg-0"
                      id="daterange"
                    >
                      <div class="d-flex justify-content-between pt-1 row">
                        <span class="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1 text-left col-8">
                          Rental date range
                        </span>
                        <span class="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1 text-right col-4">
                          Your rental
                        </span>
                      </div>

                      <CustomCalender />

                      <div class="rental-min-warning desktop">
                        <div class="d-flex align-items-center bg-badge-warning rounded-small color-semantic-warning px-2 py-1 mb-3">
                          <span class="fs-14">Minimum 1 day rental</span>
                        </div>
                      </div>
                      <div class="litepicker-backdrop"></div>
                    </div>

                    {/*                    <div id="personalInfo" class=" mx-3 mb-3 bg-shades-white">
                      <form
                        action="/api/booking/drivers_details"
                        method="post"
                        class="rc_validate"
                        data-validate="true"
                        id="drivers_details_form"
                      >
                        <input
                          type="hidden"
                          id="email_sent"
                          value="Email was sent"
                        />
                        <input
                          type="hidden"
                          id="send_email_error"
                          value="Error while sending email"
                        />
                        <input
                          type="hidden"
                          id="send_again"
                          value="Send again"
                        />
                        <input
                          type="hidden"
                          id="invalid_number"
                          value="Invalid number"
                        />
                        <input
                          type="hidden"
                          id="invalid_country_code"
                          value="Invalid country code"
                        />
                        <input
                          type="hidden"
                          id="phone_number_too_short"
                          value="Phone number is too short"
                        />
                        <input
                          type="hidden"
                          id="phone_number_too_long"
                          value="Phone number is too long"
                        />
                        <input type="hidden" name="sessions" value="" />

                        <div class=" p-3">
                          <div class="d-flex justify-content-between">
                            <span class="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1">
                              Personal information
                            </span>
                          </div>
                          <div class="d-flex align-items-center justify-content-between">
                            <h2 class="h4 mb-3 text-truncate font-weight-normal fs-24 ">
                              Your booking details
                            </h2>
                          </div>
                          <div class="mb-3">
                            <div
                              class="form-field-wrapper p-0 fs-14 d-flex justify-content-start flex-wrap rounded-small default-phone-input"
                              id="reservation_form_phone"
                              data-ip="2407:d000:1a:ecd5:545:24dc:cf8:6f96"
                            >
                              <label class="fs-9 pl-3 required pt-1 line-height-normal font-weight-bolder  letter-spacing-0_5 text-uppercase w-100 m-0 text-left ">
                                Phone number
                              </label>

                              <input
                                type="hidden"
                                id="reservation_form_phone-hidden"
                                class="phone"
                                name="reservation_form_phone"
                              />
                            </div>
                            <div
                              id="reservation_form_phone-error"
                              class="fs-14 font-weight-bolder line-height-25 color-semantic-danger w-100"
                              data-required="This field is required."
                              style="display: none"
                            >
                              This field is required.
                            </div>
                          </div>

                          <div class="single-fields-wrapper">
                            <div class="form-field-wrapper pr-1 d-flex justify-content-start flex-wrap rounded-small ">
                              <label
                                for="special_requests"
                                class="font-weight-bolder fs-9 letter-spacing-0_5 text-uppercase w-100 mb-1 d-block"
                              >
                                Special Requests
                              </label>
                              <textarea
                                class="fs-14 w-100 border-0"
                                id="special_requests"
                                name="form[special_request]"
                                placeholder="Eg. My flight number is XXX, and I will arrive at Terminal 1, DXB..."
                              ></textarea>
                            </div>
                          </div>
                          <strong
                            id="form-error"
                            class="pl-2 fs-14 mt-3 font-weight-bolder color-semantic-danger"
                            style="display: none"
                          >
                            Something went wrong. Try later.
                          </strong>
                        </div>
                      </form>
                    </div>

                    <div
                      class="d-none d-lg-block bg-shades-100  show-body-modal"
                      id="summary"
                    >
                      <input type="hidden" id="site-current-lang" value="en" />
                      <div
                        class="bg-shades-100 rounded-small mx-3 py-2 px-3"
                        id="booking_summary"
                      >
                        <div class="d-flex justify-content-between mb-1">
                          <span class="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1">
                            Booking summary
                          </span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between fs-14 mb-2">
                          <span class="text-truncate" id="rental_days_summary">
                            Rental 1 day
                          </span>
                          <span
                            class="font-weight-normal flex-shrink-0"
                            id="rental_price_summary"
                          >
                            $ 933
                          </span>
                        </div>

                        <div class="d-none align-items-center justify-content-between fs-16 border-top border-shades-300 border-top-dotted border-top-medium pt-3 mb-2">
                          <span class="text-truncate">Subtotal</span>
                          <span
                            class="font-weight-normal flex-shrink-0"
                            id="subtotal"
                          >
                            $ 933
                          </span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between fs-16 pb-2">
                          <span
                            class="text-truncate fs-14"
                            id="tax_text_summary"
                          >
                            VAT Tax (5%)
                          </span>
                          <span
                            class="font-weight-normal flex-shrink-0 fs-14"
                            id="total_tax_price"
                          >
                            + $ 47
                          </span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between border-top border-shades-300 border-top-dotted border-top-medium pt-2">
                          <span class="fs-24 font-weight-normal text-truncate">
                            Total
                          </span>
                          <span
                            class="fs-24 font-weight-normal flex-shrink-0"
                            id="total_price"
                          >
                            $ 980
                          </span>
                        </div>
                      </div>
                      <div class="fs-14 color-shades-400  mx-3 pb-2 px-3 pb-lg-2">
                        <small>
                          This site is protected by reCAPTCHA and the Google{" "}
                          <a href="https://policies.google.com/privacy">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="https://policies.google.com/terms">
                            Terms of service{" "}
                          </a>{" "}
                          apply.
                        </small>
                      </div>
                      <form
                        id="requestBookings"
                        method="POST"
                        class="rc_validate"
                        data-validate="true"
                        novalidate="novalidate"
                        data-company-id="1"
                      >
                        <input
                          type="hidden"
                          name="start_date"
                          value="21/12/2024"
                        />
                        <input type="hidden" name="from_time" value="12:00" />
                        <input
                          type="hidden"
                          name="end_date"
                          value="22/12/2024"
                        />
                        <input type="hidden" name="end_time" value="12:00" />

                        <div
                          class=" rounded-medium-bottom p-3"
                          id="reserve_booking"
                        >
                          <div class="d-flex align-items-center justify-content-between">
                            <span class="d-none d-lg-block fs-9 color-semantic-success font-weight-bold text-uppercase letter-spacing-0_5 pl-3">
                              {" "}
                              Your journey starts in …
                            </span>
                            <span
                              class="d-none d-lg-block fs-24 color-semantic-success text-uppercase"
                              id="countdown"
                            >
                              58:13
                            </span>
                            <button
                              type="submit"
                              data-car-type="luxury"
                              data-id="5356"
                              class="m-w-100 requestModal font-weight-bold text-uppercase btn btn-large bg-brand-primary color-shades-white btn-primary btn-reserve-main"
                            >
                              <i class="loader d-none"></i>
                              <span class="fs-15 letter-spacing-0_5">
                                Reserve
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 mb-6"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
