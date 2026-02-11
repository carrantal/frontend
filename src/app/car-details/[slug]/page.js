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
import Link from "next/link";
import Hover from "./Hover";

// export default async function Page(props) {
export default async function Page({ params }) {
  const { data } = await axios.get(`${URL}/api/info?fields=whatsapp`);
  const whatsapp = data?.data?.attributes?.whatsapp;

  // const { slug } = params;
  const slug = (await params).slug;
  const response = await axios.get(
    `${URL}/api/cars?populate=*&filters[slug]=${slug}`
  );
  const product = response?.data?.data[0];
  const title = product?.attributes?.title;
  const images = product?.attributes?.images?.data || [];
  const videos = product?.attributes?.videos?.data || [];
  const price = product?.attributes?.price;
  const discountedPrice = product?.attributes?.discountedPrice;
  const features = product?.attributes.features;
  const desc = product?.attributes?.description;
  const specs = product?.attributes?.specs;
  const deliveryTerms = product?.attributes?.deliveryTerms;
  const carImages = images.map((image) => ({
    url: image.attributes.url,
  }));
  const carVideos = videos.map((video) => ({
    url: video.attributes.url,
  }));

  const Footerresponse = await axios.get(
    `${URL}/api/info?populate=*&[faqs][populate]=*`
  );
  const Footerdata = Footerresponse?.data?.data;
  return (
    <>
      <div className="bg-black">
        <div className="homepage  ">
          <TopHeader />
          <Breadcrumb breadcrumbTitle={title} />
          <div className=" pt-lg-4 single-car special-offer">
            <div className="container">
              <div className="pb-3 pt-3 mt-0 pt-lg-0 d-flex align-items-center mt-lg-0">
                <h1 className="fs-m-18 fs-30 font-weight-normal text-white">
                  Rent {title}, in Dubai
                </h1>
              </div>
              <div className="my-3"></div>
              <div
                className="d-flex position-relative justify-content-between overflow-lg-hidden"
                style={{ columnGap: "60px" }}
              >
                <div className="col-12 col-lg-6 p-0 gallery flex-lg-grow-1">
                  <CarDetailSlider images={carImages} carVideos={carVideos} />

                  <DetailpageComponent
                    features={features}
                    desc={desc}
                    specs={specs}
                    deliveryTerms={deliveryTerms}
                    price={price}
                  />
                </div>

                <div className="col-12 col-lg-5 p-0 d-none d-lg-block">
                  <div className="title-car-mobile   ">
                    <div className="d-none d-lg-block py-3 px-3 show-body show-body-modal">
                      <div className="d-flex align-items-start justify-content-between mb-3 flex-column">
                        <div className="d-flex flex-row pl-3 w-100">
                          <div className="d-flex align-items-start priceText text-nowrap flex-grow-1">
                            <span className="fs-12 color-shades-500 text-uppercase mr-2 text-white">
                              Price for a
                            </span>
                            <span className="fs-12 color-shades-white text-uppercase px-1 bg-brand-primary rounded-small">
                              1 day
                            </span>
                          </div>
                          <span className="text-white color-shades-500 fs-14 pl-2 d-block text-right line-height-normal">
                            Feel free to chat or call us directly
                          </span>
                        </div>
                        <div className="pl-3">
                          <span className="fs-30 text-white font-weight-semibold priceVal">
                            {discountedPrice ? discountedPrice : price} AED
                          </span>
                          {discountedPrice && (
                            <span
                              className="ml-2 fs-20 color-shades-500 font-weight-semibold"
                              style={{
                                textDecoration: "line-through",
                              }}
                            >
                              {price} AED
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="d-flex align-items-center rounded-small py-1 availability-label min-height-35 color-semantic-success">
                          <span className="fs-14 line-height-25 ml-2">
                            Available now
                          </span>
                        </div>
                        <div className="d-flex align-items-center rounded-small min-height-35 policyDesc">
                          <FaInfoCircle className="color-semantic-success icon-info ml-2" />
                          <span className="fs-14 line-height-25 ml-2 color-shades-black">
                            No deposit needed
                          </span>
                        </div>
                        <Hover />
                        <div className="d-flex align-items-center rounded-small min-height-35 policyDesc">
                          <FaInfoCircle className="color-semantic-success icon-info ml-2" />
                          <span className="fs-14 line-height-25 ml-2 color-shades-black">
                            Free deliver in Dubai
                          </span>
                        </div>
                        <div className="d-flex align-items-center rounded-small min-height-35 policyDesc">
                          <FaInfoCircle className="color-semantic-success icon-info ml-2" />
                          <span className="fs-14 line-height-25 ml-2 color-shades-black">
                            Cash, Crypto, Credit/debit cards accepted
                          </span>
                        </div>
                      </div>

                      <Link
                        href={whatsapp}
                        target="_blank"
                        type="button"
                        className="w-100 mb-3 btn-medium contact_btn btn btn-semantic-success d-none d-lg-flex"
                      >
                        <span className="fs-14 lh-20 font-weight-bold text-uppercase text-nowrap letter-spacing-0_2 company_phone_5356">
                          Contact
                        </span>
                      </Link>
                      <div className="d-flex justify-content-center border-center-horizontal border-shades-300 or-book-online">
                        <span className="fs-14 color-shades-500 text-uppercase position-relative bg-shades-100 px-2">
                          or book online
                        </span>
                      </div>
                    </div>
                    <div className="d-none d-lg-block ">
                      <BookingForm
                        price={discountedPrice ? discountedPrice : price}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BookOnlineMobile
              price={discountedPrice ? discountedPrice : price}
              whatsapp={whatsapp}
            />
          </div>
          <div className="mt-6 mb-6"></div>
        </div>
      </div>
    </>
  );
}
// Static params for generating product pages
export async function generateStaticParams() {
  const response = await axios.get(`${URL}/api/cars`);
  const products = response.data.data;

  return products
    .map((product) => {
      if (!product.attributes.slug) {
        return null; // Or handle this gracefully
      }
      return {
        slug: product.attributes.slug,
      };
    })
    .filter(Boolean); // Remove null values
}
