import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className="d-flex justify-content-center home-page-search-section mb-2">
        <div
          className="form-group mb-0 d-flex align-items-center"
          id="mainSearch"
        >
          <div className="d-flex bg-shades-white flex-grow-1 align-items-center mr-lg-2 rounded-small pl-3 position-relative">
            <span className="fs-18 icon-search-input icon-search color-shades-500 mr-2">
              <CiSearch />
            </span>

            <div
              className="easy-autocomplete eac-square"
              // style="width: 459.837px"
            >
              <input
                className="form-control border-0 text-truncate"
                id="car_search_input"
                placeholder="Search a car by brand or model"
                type="text"
                autocomplete="off"
              />
              <div
                className="easy-autocomplete-container"
                id="eac-container-car_search_input"
              >
                <ul></ul>
              </div>
            </div>

            <button
              className="btn btn-medium btn-cleared btn-clear-main-search"
              // style="display: none"
              type="button"
            >
              <span className="fs-16 icon-x"></span>
            </button>
            <div className="align-items-center default-dropdown-container d-none d-lg-flex">
              <div
                aria-labelledby="cities-dropdown-btn"
                className="dropdown-menu default-dropdown default-city-dropdown dropdown-menu-left dropdown-city-location-switcher-header home-search-dropdown home-location-dropdown dropdown-menu-without-arrow"
              >
                <span
                  className="dropdown-item fs-12 text-truncate disabled"
                  data-city-slug="dubai"
                >
                  <img
                    src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae(1).svg"
                    alt="location-icon"
                    height="12"
                    width="12"
                    title="Dubai"
                    className="mr-1 city-menu-icon"
                    loading="lazy"
                  />
                  Dubai
                </span>
                <span
                  className="dropdown-item fs-12 text-truncate"
                  data-city-slug="abu-dhabi"
                >
                  <img
                    src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae(1).svg"
                    alt="location-icon"
                    height="12"
                    title="Dubai"
                    width="12"
                    className="mr-1 city-menu-icon"
                    loading="lazy"
                  />
                  Abu Dhabi
                </span>
                <span
                  className="dropdown-item fs-12 text-truncate"
                  data-city-slug="sharjah"
                >
                  <img
                    src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae(1).svg"
                    alt="location-icon"
                    height="12"
                    title="Dubai"
                    width="12"
                    className="mr-1 city-menu-icon"
                    loading="lazy"
                  />
                  Sharjah
                </span>
                <span
                  className="dropdown-item fs-12 text-truncate"
                  data-city-slug="ras-al-khaimah"
                >
                  <img
                    src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae(1).svg"
                    alt="location-icon"
                    height="12"
                    title="Dubai"
                    width="12"
                    className="mr-1 city-menu-icon"
                    loading="lazy"
                  />
                  Ras Al Khaimah
                </span>
              </div>
            </div>
          </div>
          <button className="btn btn-large btn-brand-accent rounded-small btn-main-search d-none d-lg-flex home-btn-search">
            <span className="text-uppercase color-shades-white mx-auto fs-14 lh-20 letter-spacing-0_5 font-weight-600">
              Search
            </span>
          </button>
          <div className="search-top-searches d-none">
            <div className="bg-shades-white px-3 py-1 d-flex flex-column rounded-medium">
              <div className="my-3">
                <div className="d-flex align-items-center">
                  <i className="fs-16 color-shades-500 icon-search mr-2"></i>
                  <span className="fs-14 color-shades-black font-weight-semibold">
                    Top searches
                  </span>
                </div>
                <div className="gap-col-5 gap-row-5 d-flex mt-2 flex-wrap">
                  <a
                    href="https://renty.ae/types/luxury"
                    className="border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small white_space"
                  >
                    Luxury cars
                  </a>
                  <a
                    href="https://renty.ae/types/sport"
                    className="border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small white_space"
                  >
                    Sports cars
                  </a>
                  <a
                    className="border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small white_space"
                    href="https://renty.ae/monthly/dubai"
                  >
                    Monthly rental
                  </a>
                  <a
                    href="https://renty.ae/body-types/suv"
                    className="border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small white_space"
                  >
                    SUV
                  </a>
                  <a
                    className="border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small white_space"
                    href="https://renty.ae/car-leasing/dubai"
                  >
                    Car leasing
                  </a>
                  <a
                    className="border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small white_space"
                    href="https://renty.ae/hourly-car-rental"
                  >
                    Hourly car rental
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <i className="fs-16 color-shades-500 icon-trending-up mr-2"></i>
                  <span className="fs-14 color-shades-black font-weight-semibold">
                    Trending brands
                  </span>
                </div>
                <div className="gap-col-5 gap-row-5 d-flex mt-2 flex-wrap">
                  <a
                    className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                    href="https://renty.ae/brands/audi"
                  >
                    <i className="d-block icon-30 icon-brand-audi mr-2"></i>
                    Audi
                  </a>
                  <a
                    className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                    href="https://renty.ae/brands/bmw"
                  >
                    <i className="d-block icon-30 icon-brand-bmw mr-2"></i>
                    BMW
                  </a>
                  <a
                    className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                    href="https://renty.ae/brands/ferrari"
                  >
                    <i className="d-block icon-30 icon-brand-ferrari mr-2"></i>
                    Ferrari
                  </a>
                  <a
                    className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                    href="https://renty.ae/brands/lamborghini"
                  >
                    <i className="d-block icon-30 icon-brand-lamborghini mr-2"></i>
                    Lamborghini
                  </a>
                  <a
                    className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                    href="https://renty.ae/brands/mercedes"
                  >
                    <i className="d-block icon-30 icon-brand-mercedes mr-2"></i>
                    Mercedes
                  </a>
                  <a
                    className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                    href="https://renty.ae/brands/porsche"
                  >
                    <i className="d-block icon-30 icon-brand-porsche mr-2"></i>
                    Porsche
                  </a>
                  <a
                    className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                    href="https://renty.ae/brands/range-rover"
                  >
                    <i className="d-block icon-30 icon-brand-range-rover mr-2"></i>
                    Range Rover
                  </a>
                  <a
                    className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                    href="https://renty.ae/brands/rolls-royce"
                  >
                    <i className="d-block icon-30 icon-brand-rolls-royce mr-2"></i>
                    Rolls Royce
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
