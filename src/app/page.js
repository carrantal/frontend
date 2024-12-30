import React from "react";

import Brands from "./components/Brands/Brands";
import OffSale from "./components/OffSale/OffSale";
import Reviews from "./components/Reviews/Reviews";
import LeadingCompany from "./components/LeadingCompany/LeadingCompany";
import Faq from "./components/FAQ/Faq";

import CarSlider from "./components/CarSlider/CarSlider";
import { URL } from "@/app/utils";
import axios from "axios";

import Search from "./components/Search/Search";
import Categories from "./components/Catergories/Categories";

const Home = async ({ newdata }) => {
  const response = await axios.get(
    `${URL}/api/info?populate=*&[faqs][populate]=*`
  );
  const data = response?.data?.data;
  const title = data?.attributes?.title;
  const subTitle = data?.attributes?.subTitle;

  const catResponse = await axios.get(`${URL}/api/categories?populate=*`);
  const specialOfferResponse = await axios.get(
    `${URL}/api/cars?filters[discountedPrice][$gt]=0&populate=*`
  );
  const carOffers = specialOfferResponse?.data?.data || [];

  const luxuryCarData = await axios.get(
    `${URL}/api/cars?populate=*&filters[categories][slug]=luxury`
  );
  const economyCarData = await axios.get(
    `${URL}/api/cars?populate=*&filters[categories][slug]=economy`
  );
  const sportsCarData = await axios.get(
    `${URL}/api/cars?populate=*&filters[categories][slug]=sports`
  );
  const suvCarData = await axios.get(
    `${URL}/api/cars?populate=*&filters[categories][slug]=suv`
  );

  return (
    <>
      <div className="home-page-section-main position-relative d-flex flex-column">
        <picture>
          <source
            media="(min-width: 769px)"
            srcSet={data?.attributes?.mainImage?.data?.attributes?.url}
          />
          <source
            media="(min-width: 576px) and (max-width: 768px)"
            srcSet={data?.attributes?.mainImage?.data?.attributes?.url}
          />
          <img
            src={data?.attributes?.mainImage?.data?.attributes?.url}
            alt="Responsive Image"
            className="home-page-banner position-absolute w-100 h-100"
            fetchPriority="high"
          />
        </picture>
        <div className="container home-page-top-main-container d-flex flex-column px-4-custom">
          <div className="d-flex home-page-title-section flex-column text-center">
            <h1 className="color-shades-white home-page-main-title font-weight-600">
              {title}
            </h1>
            <h2 className="color-shades-white home-page-main-desc font-weight-semibold">
              {subTitle}
            </h2>
          </div>

          <Search />
        </div>

        <Categories response={catResponse} />
      </div>
      <div className="mt-4"></div>
      <Brands />
      <OffSale carOffers={carOffers} />
      <CarSlider
        type="Luxury"
        luxuryCarData={luxuryCarData?.data?.data || []}
      />
      <CarSlider
        type="economy"
        luxuryCarData={economyCarData?.data?.data || []}
      />
      <CarSlider
        type="sports"
        luxuryCarData={sportsCarData?.data?.data || []}
      />
      <CarSlider type="suv" luxuryCarData={suvCarData?.data?.data || []} />

      <div className="bg-shades-white home-page-section-body overflow-hidden pt-4 pb-4 mt-2 mb-2">
        <div className="container slider-container home-page-container-p-t">
          <Reviews />
        </div>
      </div>
      <LeadingCompany />
      <Faq FaqData={data} />
    </>
  );
};

export default Home;
