import React from "react";
import carsData from "../../../../src/data.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Categories = () => {
  return (
    <div className="bg-shades-white home-page-section-body overflow-hidden pt-4 pb-4">
      <div className="container slider-container home-page-container-p-t">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black">
            Categories
          </span>
        </div>
        {/* Swiper Integration */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 }, // Mobile view
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 4 }, // Desktop view
          }}
          className="cars-slider mt-sm-4 mt-3"
        >
          {[
            {
              id: 1,
              category: "luxury",
              picture: "/images/prod1.webp",
            },
            {
              id: 2,
              category: "Economy",
              picture: "/images/prod2.webp",
            },
            {
              id: 3,
              category: "Sports",
              picture: "/images/prod3.webp",
            },
            {
              id: 4,
              category: "SUV",
              picture: "/images/prod4.webp",
            },
          ].map((car) => (
            <SwiperSlide key={car.id}>
              <div
                className="cars-slider-card-category d-flex flex-column"
                style={{ width: "100%" }}
              >
                <a href="/" title={car.cartitle}>
                  <div className="cars-slider-header position-relative">
                    <div className="d-flex overflow-hidden rounded-medium position-relative img-block-to-hover">
                      <img
                        src={car.picture}
                        className="cars-slider-image rounded-medium"
                        title={car.cartitle}
                        alt={car.cartitle}
                        loading="lazy"
                      />
                      <span
                        class="fs-18 lh-30 color-shades-black mr-1 font-weight-semibold slider-card-main-price"
                        style={{
                          fontSize: "18px",
                          lineHeight: "30px",
                          color: "white",
                          marginRight: "4px",
                          fontWeight: "600",
                          position: "absolute",
                          top: "5px",
                          left: "5px",
                          backgroundColor: "#ec7421",
                          padding: "4px",
                          borderRadius: "10px",
                          textTransform: "capitalize",
                        }}
                      >
                        {car.category}
                      </span>
                    </div>
                  </div>
                  {/* <div className="cars-slider-footer d-flex flex-column justify-content-between mt-sm-2 mt-1">
                    <span className="fs-16 line-height-25 font-weight-normal color-shades-black text-truncate slider-card-title">
                      {car.cartitle}
                    </span>
                    <div className="d-flex align-items-center">
                      <span className="fs-18 lh-30 color-shades-black mr-1 font-weight-semibold slider-card-main-price">
                        {car.price}
                      </span>
                    </div>
                  </div> */}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;

// import React from "react";

// const Categories = () => {
//   return (
//     <>
//       <div className="position-absolute container home-page-popular-car-type-container slider-container ">
//         <div className="swiper-container pop_rent_cat_slider mobile_overflow_visible swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
//           <div
//             className="swiper-wrapper d-flex justify-content-center gap-5"
//             id="swiper-wrapper-d547c164d1f68c60"
//             aria-live="polite"
//           >
//             <div
//               className=" "
//               role="group"
//               aria-label="1 / 8"
//               // style={{ width: "134.375px", marginRight: "5px" }}
//             >
//               <a
//                 className="bg-brand-primary d-flex flex-column align-items-center rounded-small lg:w-[120px] w-[70px]"
//                 href="/"
//               >
//                 <img
//                   src="https://renty.ae/assets-nd/icons/desc-car-types/luxury.svg"
//                   className="home-page-pop-rent-cat-img mt-3"
//                   alt="Luxury"
//                 />
//                 <span className="home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 color-shades-white text-center px-2 overflow-hidden">
//                   Luxury
//                 </span>
//               </a>
//             </div>
//             <div
//               className=" "
//               role="group"
//               aria-label="2 / 8"
//               //   style="width: 134.375px; margin-right: 5px"
//             >
//               <a
//                 className="bg-brand-primary d-flex flex-column align-items-center rounded-small lg:w-[120px] w-[70px]"
//                 href="/"
//               >
//                 <img
//                   src="https://renty.ae/assets-nd/icons/desc-car-types/economy-cars.svg"
//                   className="home-page-pop-rent-cat-img mt-3"
//                   alt="Economy"
//                 />
//                 <span className="home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 color-shades-white text-center px-2 overflow-hidden">
//                   Economy
//                 </span>
//               </a>
//             </div>
//             <div
//               className=""
//               role="group"
//               aria-label="3 / 8"
//               //   style="width: 134.375px; margin-right: 5px"
//             >
//               <a
//                 className="bg-brand-primary d-flex flex-column align-items-center rounded-small lg:w-[120px] w-[70px]"
//                 href="/"
//               >
//                 <img
//                   src="https://renty.ae/assets-nd/icons/desc-car-types/economy-cars.svg"
//                   className="home-page-pop-rent-cat-img mt-3"
//                   alt="Sports"
//                 />
//                 <span className="home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 color-shades-white text-center px-2 overflow-hidden">
//                   Sports
//                 </span>
//               </a>
//             </div>
//             <div
//               className=""
//               role="group"
//               aria-label="4 / 8"
//               //   style="width: 134.375px; margin-right: 5px"
//             >
//               <a
//                 className="bg-brand-primary d-flex flex-column align-items-center rounded-small lg:w-[120px] w-[70px]"
//                 href="/"
//               >
//                 <img
//                   src="https://renty.ae/assets-nd/icons/desc-car-types/economy-cars.svg"
//                   className="home-page-pop-rent-cat-img mt-3"
//                   alt="SUV"
//                 />
//                 <span className="home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 color-shades-white text-center px-2 overflow-hidden">
//                   SUV
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Categories;
