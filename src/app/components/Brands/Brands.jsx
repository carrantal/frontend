import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const Brands = () => {
  return (
    <>
      <div className="home-page-sub-main-section-container bg-shades-100 pb-5 pt-10">
        <div className="d-flex pt-lg-2-custom pt-3-custom pb-lg-4-custom">
          <div className="container d-flex flex-column gap-row-lg-30 gap-row-15">
            <div className="d-flex justify-content-between gap-col-lg-30">
              <span className="fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black">
                Most wanted car rental brands in Dubai
              </span>
              <a
                className="d-lg-flex d-none all-product-page-link py-2-custom rounded-small align-items-center"
                href="https://renty.ae/all-brands"
              >
                <span className="fs-13 lh-20 letter-spacing-0_2 font-weight-bold text-uppercase color-brand-primary">
                  All brands
                </span>
                <span className="  color-brand-primary">
                  {" "}
                  <FaAngleRight />
                </span>
              </a>
            </div>

            <div className="d-grid gap-10 grid-col-lg-6 grid-col-md-4 grid-col-2">
              <a
                className="d-flex flex-md-column flex-row gap-col-lg-0 gap-col-10 py-md-2-custom py-lg-2-custom px-md-1-custom px-lg-1-custom bg-shades-white p-2-custom align-items-center rounded-medium most-popular-brand-item"
                title="Ferrari"
                href="/"
              >
                <i className="icon-48 icon-brand-ferrari"></i>
                <span className="fs-14 lh-25 color-shades-black">Ferrari</span>
              </a>
              <a
                className="d-flex flex-md-column flex-row gap-col-lg-0 gap-col-10 py-md-2-custom py-lg-2-custom px-md-1-custom px-lg-1-custom bg-shades-white p-2-custom align-items-center rounded-medium most-popular-brand-item"
                title="Lamborghini"
                href="/"
              >
                <i className="icon-48 icon-brand-lamborghini"></i>
                <span className="fs-14 lh-25 color-shades-black">
                  Lamborghini
                </span>
              </a>
              <a
                className="d-flex flex-md-column flex-row gap-col-lg-0 gap-col-10 py-md-2-custom py-lg-2-custom px-md-1-custom px-lg-1-custom bg-shades-white p-2-custom align-items-center rounded-medium most-popular-brand-item"
                title="Mercedes"
                href="/"
              >
                <i className="icon-48 icon-brand-mercedes"></i>
                <span className="fs-14 lh-25 color-shades-black">Mercedes</span>
              </a>
              <a
                className="d-flex flex-md-column flex-row gap-col-lg-0 gap-col-10 py-md-2-custom py-lg-2-custom px-md-1-custom px-lg-1-custom bg-shades-white p-2-custom align-items-center rounded-medium most-popular-brand-item"
                title="Range Rover"
                href="/"
              >
                <i className="icon-48 icon-brand-range-rover"></i>
                <span className="fs-14 lh-25 color-shades-black">
                  Range Rover
                </span>
              </a>

              <a
                className="d-flex flex-md-column flex-row gap-col-lg-0 gap-col-10 py-md-2-custom py-lg-2-custom px-md-1-custom px-lg-1-custom bg-shades-white p-2-custom align-items-center rounded-medium most-popular-brand-item"
                title="Rolls Royce"
                href="/"
              >
                <i className="icon-48 icon-brand-rolls-royce"></i>
                <span className="fs-14 lh-25 color-shades-black">
                  Rolls Royce
                </span>
              </a>
              <a
                className="d-flex flex-md-column flex-row gap-col-lg-0 gap-col-10 py-md-2-custom py-lg-2-custom px-md-1-custom px-lg-1-custom bg-shades-white p-2-custom align-items-center rounded-medium most-popular-brand-item"
                title="Rolls Royce"
                href="/"
              >
                <i className="icon-48 icon-brand-rolls-Cadillac"></i>
                <span className="fs-14 lh-25 color-shades-black">Cadillac</span>
              </a>
            </div>

            <a
              className="d-lg-none d-flex all-product-page-link rounded-small py-2-custom align-items-center justify-content-center w-100"
              href="/"
            >
              <span className="fs-13 lh-20 letter-spacing-0_2 font-weight-bold text-uppercase color-brand-primary text-truncate">
                All brands
              </span>
              <FaAngleRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
