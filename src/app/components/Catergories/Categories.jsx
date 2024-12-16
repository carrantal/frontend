import React from "react";

const Categories = () => {
  return (
    <>
      <div className="position-absolute container home-page-popular-car-type-container slider-container overflow-hidden ">
        <div className="swiper-container pop_rent_cat_slider mobile_overflow_visible swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
          <div
            className="swiper-wrapper d-flex justify-content-center gap-5"
            id="swiper-wrapper-d547c164d1f68c60"
            aria-live="polite"
          >
            <div
              className=" "
              role="group"
              aria-label="1 / 8"
              // style={{ width: "134.375px", marginRight: "5px" }}
            >
              <a
                className="bg-brand-primary d-flex flex-column align-items-center rounded-small home-page-slide-car-type"
                href="https://renty.ae/types/luxury"
              >
                <img
                  src="https://renty.ae/assets-nd/icons/desc-car-types/luxury.svg"
                  className="home-page-pop-rent-cat-img mt-3"
                  alt="Luxury"
                />
                <span className="home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 color-shades-white text-center px-2 overflow-hidden">
                  Luxury
                </span>
              </a>
            </div>
            <div
              className=" "
              role="group"
              aria-label="2 / 8"
              //   style="width: 134.375px; margin-right: 5px"
            >
              <a
                className="bg-brand-primary d-flex flex-column align-items-center rounded-small home-page-slide-car-type"
                href="https://renty.ae/types/economy-cars"
              >
                <img
                  src="https://renty.ae/assets-nd/icons/desc-car-types/economy-cars.svg"
                  className="home-page-pop-rent-cat-img mt-3"
                  alt="Economy"
                />
                <span className="home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 color-shades-white text-center px-2 overflow-hidden">
                  Economy
                </span>
              </a>
            </div>
            <div
              className=""
              role="group"
              aria-label="3 / 8"
              //   style="width: 134.375px; margin-right: 5px"
            >
              <a
                className="bg-brand-primary d-flex flex-column align-items-center rounded-small home-page-slide-car-type"
                href="https://renty.ae/types/sport"
              >
                <img
                  src="https://renty.ae/assets-nd/icons/desc-car-types/economy-cars.svg"
                  className="home-page-pop-rent-cat-img mt-3"
                  alt="Sports"
                />
                <span className="home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 color-shades-white text-center px-2 overflow-hidden">
                  Sports
                </span>
              </a>
            </div>
            <div
              className=""
              role="group"
              aria-label="4 / 8"
              //   style="width: 134.375px; margin-right: 5px"
            >
              <a
                className="bg-brand-primary d-flex flex-column align-items-center rounded-small home-page-slide-car-type"
                href="https://renty.ae/body-types/suv"
              >
                <img
                  src="https://renty.ae/assets-nd/icons/desc-car-types/economy-cars.svg"
                  className="home-page-pop-rent-cat-img mt-3"
                  alt="SUV"
                />
                <span className="home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 color-shades-white text-center px-2 overflow-hidden">
                  SUV
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
