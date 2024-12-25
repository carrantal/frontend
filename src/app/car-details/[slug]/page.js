import Breadcrumb from "@/app/components/Breadcrumb";
import CarDetailSlider from "@/app/components/CarDetailSlider";
import Footer from "@/app/components/Footer/Footer";
import TopHeader from "@/app/components/TopHeader";
import React, { Suspense } from "react";

import BookOnlineMobile from "@/app/components/Forms/BookOnlineMobile";
import DetailpageComponent from "@/app/components/DetailpageComponent/DetailpageComponent";
import axios from "axios";
import { URL } from "@/app/utils";
import { FaInfoCircle, FaCheckSquare } from "react-icons/fa";
import BookingForm from "@/app/components/Forms/BookingForm";

export default async function Page(props) {
  const { slug } = props.params;
  console.log("prodid from params", slug);
  const response = await axios.get(
    `${URL}/api/cars?populate=*&filters[slug]=${slug}`
  );
  const product = response?.data?.data[0];
  const title = product?.attributes?.title;
  const images = product?.attributes?.images?.data || [];
  const videos = product?.attributes?.videos?.data || [];
  const price = product?.attributes?.price;
  const carImages = images.map((image) => ({
    url: image.attributes.url,
  }));
  const carVideos = videos.map((video) => ({
    url: video.attributes.url,
  }));
  console.log("carVideos", carVideos);

  return (
    <>
      <div class="bg-black">
        <div class="homepage  ">
          <TopHeader />
          <Breadcrumb breadcrumbTitle={"Car Title"} />
          <div class=" pt-lg-4 single-car special-offer">
            <div className="container">
              <div class="pb-3 pt-3 mt-0 pt-lg-0 d-flex align-items-center mt-lg-0">
                <h1 class="fs-m-18 fs-30 font-weight-normal text-white">
                  Rent {title}, 2023 - hourly in Dubai
                </h1>
              </div>
              <div className="my-3"></div>
              <div
                class="d-flex position-relative justify-content-between overflow-lg-hidden"
                style={{ columnGap: "60px" }}
              >
                <div class="col-12 col-lg-6 p-0 gallery flex-lg-grow-1">
                  <CarDetailSlider images={carImages} carVideos={carVideos} />

                  <DetailpageComponent />
                </div>
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
                          <span class="font-weight-semibold fs-14  text-white line-height-20">
                            $<span>746</span>
                          </span>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between fs-14">
                        <span class="color-shades-900">VAT Tax Applicable</span>
                        <span class="font-weight-semibold text-white">+5%</span>
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
                            {price} AED
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
                    <div className="d-none d-lg-block ">
                      <BookingForm price={price} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BookOnlineMobile price={price} />
          </div>
          <div className="mt-6 mb-6"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
// Static params for generating product pages
export async function generateStaticParams() {
  const response = await axios.get(`${URL}/api/cars`);
  const products = response.data.data;

  // console.log("products", products);

  return products
    .map((product) => {
      if (!product.attributes.slug) {
        console.error("Product missing slug:", product);
        return null; // Or handle this gracefully
      }
      return {
        slug: product.attributes.slug,
      };
    })
    .filter(Boolean); // Remove null values
}
