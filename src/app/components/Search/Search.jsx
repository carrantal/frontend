import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className="d-flex justify-content-center home-page-search-section mb-[120px]">
        <div
          className="form-group mb-0 d-flex align-items-center"
          id="mainSearch"
        >
          <div className="d-flex flex-grow-1 align-items-center mr-lg-2 rounded-small pl-3 position-relative bg-white">
            <span className="fs-18 icon-search-input color-shades-500 mr-2">
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
                autoComplete="off"
              />
              <div
                className="easy-autocomplete-container"
                id="eac-container-car_search_input"
              >
                <ul></ul>
              </div>
            </div>
          </div>
          <button className="btn btn-large  rounded-small btn-main-search d-none d-lg-flex home-btn-search bg-brand-primary">
            <span className="text-uppercase  mx-auto fs-14 lh-20 letter-spacing-0_5 font-weight-600 text-white">
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
