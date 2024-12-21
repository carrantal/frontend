// import React from "react";
// import carsData from "../../../../src/data.json";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const Categories = () => {
//   return (
//     <div className="bg-shades-white home-page-section-body overflow-hidden pt-4 pb-4">
//       <div className="container slider-container home-page-container-p-t">
//         <div className="d-flex justify-content-between align-items-center">
//           <span className="fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black">
//             Categories
//           </span>
//         </div>
//         {/* Swiper Integration */}
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={20}
//           loop={true}
//           breakpoints={{
//             0: { slidesPerView: 2 }, // Mobile view
//             768: { slidesPerView: 2 }, // Tablets
//             1024: { slidesPerView: 4 }, // Desktop view
//           }}
//           className="cars-slider mt-sm-4 mt-3"
//         >
//           {[
//             {
//               id: 1,
//               category: "luxury",
//               picture: "/images/prod1.webp",
//             },
//             {
//               id: 2,
//               category: "Economy",
//               picture: "/images/prod2.webp",
//             },
//             {
//               id: 3,
//               category: "Sports",
//               picture: "/images/prod3.webp",
//             },
//             {
//               id: 4,
//               category: "SUV",
//               picture: "/images/prod4.webp",
//             },
//           ].map((car) => (
//             <SwiperSlide key={car.id}>
//               <div
//                 className="cars-slider-card-category d-flex flex-column"
//                 style={{ width: "100%" }}
//               >
//                 <a href="/" title={car.cartitle}>
//                   <div className="cars-slider-header position-relative">
//                     <div className="d-flex overflow-hidden rounded-medium position-relative img-block-to-hover">
//                       <img
//                         src={car.picture}
//                         className="cars-slider-image rounded-medium"
//                         title={car.cartitle}
//                         alt={car.cartitle}
//                         loading="lazy"
//                       />
//                       <span
//                         class="fs-18 lh-30 color-shades-black mr-1 font-weight-semibold slider-card-main-price"
//                         style={{
//                           fontSize: "18px",
//                           lineHeight: "30px",
//                           color: "white",
//                           marginRight: "4px",
//                           fontWeight: "600",
//                           position: "absolute",
//                           top: "5px",
//                           left: "5px",
//                           backgroundColor: "#ec7421",
//                           padding: "4px",
//                           borderRadius: "10px",
//                           textTransform: "capitalize",
//                         }}
//                       >
//                         {car.category}
//                       </span>
//                     </div>
//                   </div>
//                   {/* <div className="cars-slider-footer d-flex flex-column justify-content-between mt-sm-2 mt-1">
//                     <span className="fs-16 line-height-25 font-weight-normal color-shades-black text-truncate slider-card-title">
//                       {car.cartitle}
//                     </span>
//                     <div className="d-flex align-items-center">
//                       <span className="fs-18 lh-30 color-shades-black mr-1 font-weight-semibold slider-card-main-price">
//                         {car.price}
//                       </span>
//                     </div>
//                   </div> */}
//                 </a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React from "react";

const Categories = () => {
  return (
    <>
      <div className="position-absolute container home-page-popular-car-type-container slider-container ">
        <div className="swiper-container pop_rent_cat_slider mobile_overflow_visible swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
          <div
            className="swiper-wrapper d-flex justify-content-center gap-5"
            id="swiper-wrapper-d547c164d1f68c60"
            aria-live="polite"
          >
            <div>
              <a
                className="bg-shades-white category-card d-flex flex-column align-items-center rounded-small lg:w-[120px] w-[70px]"
                href="/search?category=Luxury"
                style={{
                  backgroundImage: "url('images/luxury.jpeg')",
                  backgroundSize: "cover",
                }}
              >
                <svg
                  className="home-page-pop-rent-cat-img mt-3 invisible"
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="30"
                  viewBox="0 0 61 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.4561 16.2397C15.282 16.2397 16.0894 16.4846 16.7761 16.9435C17.4629 17.4023 17.9981 18.0545 18.3142 18.8176C18.6303 19.5807 18.713 20.4203 18.5519 21.2304C18.3907 22.0405 17.993 22.7846 17.409 23.3686C16.8249 23.9526 16.0808 24.3503 15.2708 24.5115C14.4607 24.6726 13.621 24.5899 12.858 24.2738C12.0949 23.9578 11.4427 23.4225 10.9838 22.7358C10.525 22.049 10.28 21.2416 10.28 20.4157C10.28 19.8673 10.388 19.3242 10.5978 18.8175C10.8077 18.3109 11.1153 17.8505 11.5031 17.4627C11.8908 17.0749 12.3512 16.7673 12.8579 16.5574C13.3646 16.3476 13.9076 16.2396 14.4561 16.2397ZM51.2585 10.4837L57.9358 8.67499C58.1259 8.62314 58.2308 8.82571 58.183 9.00939L57.1914 12.7927C57.1644 12.8854 57.1094 12.9674 57.0338 13.0274C56.9581 13.0874 56.8657 13.1224 56.7694 13.1275H50.566C50.525 13.1294 50.4841 13.1211 50.447 13.1033C50.4099 13.0856 50.3777 13.0591 50.3534 13.026C50.329 12.9929 50.3131 12.9543 50.3071 12.9136C50.3012 12.8729 50.3054 12.8314 50.3193 12.7927L50.8361 10.8197C50.871 10.7317 50.9284 10.6545 51.0026 10.5958C51.0767 10.537 51.165 10.4988 51.2585 10.4849V10.4837ZM20.3761 14.1082C21.2535 13.9234 22.3688 13.6352 22.071 14.9611C22.0474 15.0629 22.0143 15.1622 21.9721 15.2578C25.2735 15.6729 28.8953 15.4844 32.2434 15.2943C33.2687 15.2361 33.0806 15.3848 33.4894 14.4165C33.7988 13.681 34.1372 12.7964 34.3607 12.2558C34.5352 11.8349 34.8523 11.2976 34.1159 11.1814C33.2916 11.0516 30.1746 11.185 29.3483 11.2722C27.079 11.5134 20.8676 12.6083 19.0991 13.5632C18.9335 13.6525 20.1208 14.1613 20.3785 14.1074L20.3761 14.1082ZM55.2951 23.8417C55.8815 23.7637 56.8248 24.0025 57.0865 23.6609C57.5913 23.0001 58.1769 21.8522 58.0178 21.2376C57.9113 20.8257 57.0885 20.7991 57.1034 20.7593C57.5334 19.5881 57.5857 17.6243 57.7698 16.2791C57.9249 15.142 58.0913 14.9901 56.8453 14.7481C49.4901 13.3197 46.6183 13.771 38.9049 11.3755C31.0673 8.94107 20.44 11.5122 11.688 15.0504C8.12773 16.4901 5.30498 18.0897 2.44004 19.5781C2.37117 19.6236 2.31314 19.6837 2.27009 19.7541C2.22703 19.8245 2.20001 19.9036 2.19092 19.9856C2.18183 20.0677 2.1909 20.1507 2.21749 20.2288C2.24408 20.307 2.28754 20.3783 2.34479 20.4378C2.86017 21.2458 3.42981 22.018 4.04976 22.7489C4.65909 23.4016 4.98948 23.9852 5.78891 24.0101C6.56303 24.0346 7.51238 23.976 8.40144 24.0053C8.97017 24.0238 9.34115 23.9422 9.27764 23.349C9.22137 22.8204 9.0831 21.8035 9.03326 21.31C9.00489 21.0127 8.99149 20.7143 8.99307 20.4157C8.99307 19.7028 9.13348 18.9969 9.40629 18.3383C9.67909 17.6797 10.0789 17.0813 10.583 16.5772C11.0871 16.0731 11.6855 15.6733 12.3441 15.4005C13.0027 15.1277 13.7086 14.9873 14.4215 14.9873C15.1344 14.9873 15.8403 15.1277 16.4989 15.4005C17.1575 15.6733 17.7559 16.0731 18.26 16.5772C18.764 17.0813 19.1639 17.6797 19.4367 18.3383C19.7095 18.9969 19.8499 19.7028 19.8499 20.4157C19.8499 20.7059 19.8443 20.9908 19.8262 21.2686C19.7137 22.9969 18.8387 23.99 20.604 23.988L42.9037 23.9627C44.0086 23.9627 43.9358 22.769 43.8032 21.4832C43.7694 21.1284 43.7537 20.7721 43.7562 20.4157C43.7685 18.984 44.3459 17.6152 45.3626 16.6072C46.3793 15.5991 47.7531 15.0336 49.1848 15.0336C50.6165 15.0336 51.9903 15.5991 53.007 16.6072C54.0237 17.6152 54.6011 18.984 54.6134 20.4157C54.6157 20.74 54.6012 21.0643 54.57 21.3871C54.4623 22.4261 54.4531 23.9539 55.2987 23.8417H55.2951ZM49.257 16.2397C50.0829 16.2396 50.8903 16.4844 51.5771 16.9433C52.2639 17.4021 52.7992 18.0543 53.1154 18.8173C53.4315 19.5804 53.5143 20.4201 53.3532 21.2301C53.1921 22.0402 52.7944 22.7844 52.2104 23.3684C51.6264 23.9525 50.8823 24.3503 50.0722 24.5114C49.2621 24.6726 48.4224 24.5899 47.6594 24.2739C46.8963 23.9578 46.244 23.4226 45.7852 22.7358C45.3263 22.0491 45.0813 21.2416 45.0813 20.4157C45.0813 19.8673 45.1892 19.3243 45.3991 18.8176C45.6089 18.311 45.9165 17.8506 46.3042 17.4628C46.6919 17.075 47.1523 16.7674 47.6589 16.5576C48.1655 16.3477 48.7086 16.2397 49.257 16.2397ZM37.4765 14.7123L35.4648 14.9937C35.0629 15.05 35.1252 15.093 35.2594 14.6995C35.3602 14.4047 35.4611 14.1151 35.5621 13.8305C35.8233 13.093 35.583 13.181 36.2566 13.3603C36.5584 13.4406 38.9339 14.5086 37.4765 14.7119V14.7123Z"
                    fill="#ec7421"
                  />
                  <script xmlns="" />
                </svg>
                <span className="text-white home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 text-center px-2 overflow-hidden">
                  Luxury
                </span>
              </a>
            </div>
            <div>
              <a
                className="bg-shades-white category-card d-flex flex-column align-items-center rounded-small lg:w-[120px] w-[70px]"
                href="/search?category=Economy"
                style={{
                  backgroundImage: "url('images/economy.jpeg')",
                  backgroundSize: "cover",
                }}
              >
                <svg
                  className="home-page-pop-rent-cat-img mt-3 invisible"
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="30"
                  viewBox="0 0 60 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.5053 22.5508C50.8949 22.5171 51.2713 22.3909 51.6041 22.1823C52.1416 21.6745 51.9789 20.0906 51.9704 19.2792C51.9683 19.0815 51.4774 19.0801 51.464 18.8749C51.3935 17.6237 50.8621 15.3244 50.7279 14.0388C50.696 13.7063 50.5837 13.3869 50.4012 13.109C50.2187 12.8311 49.9715 12.6034 49.6816 12.446C48.7332 11.8501 46.019 10.2258 44.9878 9.78536C44.3074 9.49531 44.4733 9.42548 43.7429 9.31984C40.1154 8.79058 33.5163 8.16534 29.9618 9.31375C27.0388 10.2581 24.4939 11.6274 21.8544 13.2961C17.1852 14.1147 13.375 14.8098 11.107 15.43C10.698 15.5117 10.3133 15.6892 9.98353 15.9485C9.65377 16.2078 9.38801 16.5417 9.20736 16.9236C8.83933 17.6481 8.66466 18.0724 8.49597 18.4839C8.09202 18.5197 7.99446 18.8968 8.00291 19.4088C8.01453 20.2128 7.94093 20.7861 8.16104 21.5825C8.24522 21.8626 8.41743 22.1069 8.65127 22.278C8.8851 22.4491 9.16766 22.5375 9.45564 22.5296L10.5925 22.5654C11.1443 22.458 11.3137 22.4895 11.2665 21.7393C11.2503 21.4818 11.2465 21.2176 11.2465 20.9458C11.2465 19.6631 11.7476 18.4329 12.6396 17.5259C13.5316 16.6189 14.7415 16.1093 16.003 16.1093C17.2645 16.1093 18.4743 16.6189 19.3663 17.5259C20.2583 18.4329 20.7595 19.6631 20.7595 20.9458C20.7595 21.3193 20.7595 21.6827 20.7348 22.0319C20.6527 23.2225 20.2882 23.099 21.4131 23.1581L39.1941 23.1366C40.0115 23.0353 40.2306 23.1366 40.1172 22.0068C40.0858 21.6543 40.0718 21.3004 40.0753 20.9465C40.0861 19.6709 40.592 18.4514 41.4829 17.5533C42.3737 16.6552 43.5775 16.1513 44.832 16.1513C46.0865 16.1513 47.2902 16.6552 48.1811 17.5533C49.0719 18.4514 49.5778 19.6709 49.5886 20.9465C49.5886 21.1868 49.5886 21.4213 49.5805 21.6491C49.5502 22.5665 49.3513 22.752 50.5064 22.5508H50.5053ZM36.6063 13.7011C36.8994 11.2618 36.9353 10.5553 37.1607 9.96262C37.2021 9.88588 37.2604 9.81989 37.331 9.76978C37.4016 9.71966 37.4826 9.68676 37.5678 9.67364C39.2934 9.75779 39.8834 9.72807 41.5555 10.1223C42.1496 10.2914 43.3657 11.698 43.6685 12.1216C43.7862 12.2849 44.6596 13.3165 44.5191 13.5293C44.472 13.6085 44.4049 13.6736 44.3248 13.7177C44.2446 13.7617 44.1544 13.7832 44.0633 13.7799C41.4629 13.868 39.8929 14.1473 37.2966 14.1792C36.5687 14.1882 36.5261 14.3686 36.6063 13.7011ZM26.7324 14.5606C26.82 14.2876 26.8776 14.0056 26.9042 13.7198C26.9423 13.0752 25.5491 13.0265 24.8296 13.0752C26.5466 11.8817 28.4143 10.9294 30.382 10.2441C31.9104 9.72377 33.9678 9.7116 35.6058 9.67579C35.8904 9.67292 35.8805 9.79432 35.8446 10.0339C35.7301 10.7995 35.4512 12.4532 35.2811 13.5636C35.1998 14.1008 35.0751 14.2268 34.5362 14.2311C32.4087 14.2494 26.7049 14.6644 26.731 14.5609L26.7324 14.5606ZM44.8297 17.2262C45.5533 17.2262 46.2607 17.4444 46.8624 17.8532C47.4641 18.262 47.933 18.843 48.2099 19.5228C48.4868 20.2026 48.5593 20.9506 48.4181 21.6723C48.277 22.3939 47.9285 23.0568 47.4168 23.5771C46.9051 24.0974 46.2532 24.4517 45.5435 24.5953C44.8337 24.7388 44.0981 24.6651 43.4295 24.3836C42.761 24.102 42.1896 23.6251 41.7875 23.0134C41.3855 22.4016 41.1709 21.6823 41.1709 20.9465C41.1709 20.4579 41.2655 19.9741 41.4493 19.5228C41.6332 19.0714 41.9027 18.6612 42.2424 18.3158C42.5822 17.9703 42.9855 17.6963 43.4295 17.5093C43.8734 17.3224 44.3492 17.2262 44.8297 17.2262ZM16.0001 17.2262C16.7238 17.2262 17.4312 17.4444 18.0328 17.8532C18.6345 18.262 19.1035 18.843 19.3804 19.5228C19.6573 20.2026 19.7298 20.9506 19.5886 21.6723C19.4474 22.3939 19.099 23.0568 18.5873 23.5771C18.0756 24.0974 17.4237 24.4517 16.7139 24.5953C16.0042 24.7388 15.2685 24.6651 14.6 24.3836C13.9314 24.102 13.36 23.6251 12.958 23.0134C12.556 22.4016 12.3414 21.6823 12.3414 20.9465C12.3414 19.9598 12.7269 19.0136 13.413 18.3159C14.0992 17.6182 15.0298 17.2262 16.0001 17.2262Z"
                    fill="#ec7421"
                  />
                  <script xmlns="" />
                </svg>
                <span className="text-white home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 text-center px-2 overflow-hidden">
                  Economy
                </span>
              </a>
            </div>
            <div>
              <a
                className="bg-shades-white category-card d-flex flex-column align-items-center rounded-small lg:w-[120px] w-[70px]"
                href="/search?category=Sports"
                style={{
                  backgroundImage: "url('images/sports.jpeg')",
                  backgroundSize: "cover",
                }}
              >
                <svg
                  className="home-page-pop-rent-cat-img mt-3 invisible"
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="30"
                  viewBox="0 0 61 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0126 16.0352C13.8386 16.0352 14.646 16.28 15.3328 16.7388C16.0196 17.1977 16.5549 17.8498 16.8711 18.6129C17.1872 19.376 17.2699 20.2156 17.1088 21.0257C16.9478 21.8358 16.5501 22.58 15.9661 23.164C15.382 23.7481 14.638 24.1459 13.8279 24.307C13.0178 24.4682 12.1781 24.3855 11.415 24.0695C10.6519 23.7534 9.9997 23.2181 9.54081 22.5314C9.08193 21.8446 8.837 21.0372 8.837 20.2113C8.837 19.1038 9.27691 18.0417 10.06 17.2585C10.843 16.4754 11.9051 16.0353 13.0126 16.0352ZM54.8163 23.1851C56.313 22.9862 57.9686 22.0215 58.4441 20.7249C58.7974 19.7631 58.0912 19.0802 57.594 18.2165C57.4702 18.0007 57.3875 17.7639 57.35 17.518C57.0385 15.6096 60.0313 14.5992 56.9557 14.2093C54.0263 13.8832 51.1193 13.3809 48.2504 12.7049C47.4811 12.5196 46.672 12.2704 45.8408 11.9983C43.281 11.1595 40.5153 10.1024 38.0836 10.0192C34.5419 9.89862 30.9145 10.3379 27.8606 11.5678C25.984 12.3238 23.8156 13.3154 21.1886 14.5509C20.5054 14.2696 15.054 13.8733 12.5576 14.1185C9.5247 14.4163 5.2128 15.4593 2.96884 17.7085C2.20518 18.4749 2.32817 18.9786 2.85992 19.9524C3.70397 21.4954 5.32858 23.2293 7.13604 23.2884C8.20919 23.3234 7.84424 22.7892 7.73893 21.7386C7.70959 21.448 7.54641 20.5159 7.54641 20.2113C7.54024 19.4944 7.6761 18.7835 7.94615 18.1194C8.2162 17.4554 8.61509 16.8514 9.1198 16.3423C9.62451 15.8333 10.225 15.4292 10.8867 15.1534C11.5484 14.8777 12.2582 14.7357 12.975 14.7357C13.6919 14.7357 14.4016 14.8777 15.0633 15.1534C15.725 15.4292 16.3256 15.8333 16.8303 16.3423C17.335 16.8514 17.7339 17.4554 18.0039 18.1194C18.274 18.7835 18.4098 19.4944 18.4037 20.2113C18.4037 20.5015 18.398 20.7864 18.38 21.0642C18.267 22.7924 17.4824 23.3029 19.2477 23.3013L42.2709 23.276C43.3758 23.276 43.213 22.5646 43.0804 21.2788C43.0463 20.924 43.0305 20.5677 43.033 20.2113C43.0453 18.7796 43.6227 17.4108 44.6394 16.4027C45.6561 15.3947 47.0299 14.8291 48.4616 14.8291C49.8933 14.8291 51.2671 15.3947 52.2838 16.4027C53.3005 17.4108 53.8779 18.7796 53.8902 20.2113C53.8902 20.5497 53.879 21.4171 53.8468 21.7253C53.7391 22.7639 53.971 23.2973 54.8167 23.1851H54.8163ZM38.4241 14.3234C38.6372 13.2714 39.0055 12.2568 39.5169 11.313C39.6009 11.2037 39.7184 11.1248 39.8515 11.0885C39.9845 11.0522 40.1257 11.0605 40.2536 11.112C41.0408 11.2751 41.8071 11.5262 42.5382 11.8604C43.0306 12.1213 43.213 12.2197 42.7934 12.7531C42.0539 13.694 40.2074 14.5799 39.1222 14.9376C38.3734 15.184 38.2344 15.0807 38.4241 14.3246V14.3234ZM26.9627 15.1819C27.0462 14.9345 27.101 14.6783 27.1259 14.4183C27.1568 13.825 26.2356 13.9617 25.4639 14.0598C25.0949 14.1068 25.1617 13.9934 25.4205 13.8367C26.5206 13.1835 27.6775 12.6312 28.8771 12.1864C30.638 11.5235 32.4834 11.1115 34.359 10.9625C35.3827 10.8709 36.4128 10.8307 37.4301 10.8017C37.9197 10.7869 38.2741 10.8733 38.1278 11.2595C37.8602 11.9569 37.5165 12.9416 37.1037 13.7917C36.8296 14.3572 36.5262 15.1735 35.8533 15.276C33.7404 15.5975 28.1898 15.8074 27.111 15.4806C26.896 15.4155 26.9072 15.3721 26.9615 15.1807L26.9627 15.1819ZM48.5374 16.0352C49.3633 16.0352 50.1708 16.28 50.8576 16.7388C51.5444 17.1977 52.0797 17.8498 52.3958 18.6129C52.7119 19.376 52.7947 20.2156 52.6336 21.0257C52.4725 21.8358 52.0748 22.58 51.4908 23.164C50.9068 23.7481 50.1627 24.1459 49.3526 24.307C48.5425 24.4682 47.7029 24.3855 46.9398 24.0695C46.1767 23.7534 45.5244 23.2181 45.0656 22.5314C44.6067 21.8446 44.3617 21.0372 44.3617 20.2113C44.3617 19.1038 44.8017 18.0417 45.5847 17.2585C46.3678 16.4754 47.4299 16.0353 48.5374 16.0352Z"
                    fill="#ec7421"
                  />
                  <script xmlns="" />
                </svg>
                <span className="text-white home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 text-center px-2 overflow-hidden">
                  Sports
                </span>
              </a>
            </div>
            <div>
              <a
                className="bg-shades-white category-card d-flex flex-column align-items-center rounded-small lg:w-[120px] w-[70px]"
                href="/search?category=SUV"
                style={{
                  backgroundImage: "url('images/suv.jpeg')",
                  backgroundSize: "cover",
                }}
              >
                <svg
                  className="home-page-pop-rent-cat-img mt-3 invisible"
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="30"
                  viewBox="0 0 61 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.323 5.7658C25.7735 5.07985 26.539 4.66675 27.3596 4.66675H33.3544L51.415 4.7618C52.1419 4.76563 52.7777 5.25194 52.9718 5.95249L54.725 12.281V16.748L55.2853 16.8941C55.6429 16.9874 55.8925 17.3104 55.8925 17.68V19.3757C55.8925 20.15 55.3459 20.8167 54.5867 20.9685L53.3544 21.215L50.9149 16.808C50.4792 16.0211 49.6456 15.5382 48.7462 15.5518L45.1572 15.6062C44.1605 15.6213 43.2735 16.2421 42.9179 17.1734L41.3747 21.215L21.549 21.215C21.2536 21.215 20.9815 21.0546 20.8384 20.7961L18.6186 16.7862C18.1894 16.0108 17.3731 15.5297 16.4869 15.5297H12.9688C11.9248 15.5297 10.9969 16.1948 10.6614 17.1834L9.48061 20.6637C9.3688 20.9933 9.05948 21.215 8.71149 21.215H6.92081C6.48727 21.215 6.13016 20.8745 6.10954 20.4414L5.98385 17.8018C5.96179 17.3386 6.33139 16.951 6.79511 16.951H7.16161V14.5102C7.16161 13.2483 8.12511 11.5285 9.38206 11.4166L22.2708 10.3334L25.323 5.7658ZM27.5628 5.78348C27.1597 5.78348 26.7849 5.99044 26.5701 6.33156L24.3741 9.81929C25.158 9.6715 26.076 9.61052 26.2708 10.0001C26.4268 10.312 26.4383 10.7151 26.3988 11.0627H32.4876C32.9196 11.0627 33.2697 10.7125 33.2697 10.2806V6.56558C33.2697 6.13364 32.9196 5.78348 32.4876 5.78348H27.5628ZM35.6142 5.78348C35.1823 5.78348 34.8321 6.13364 34.8321 6.56558V10.2806C34.8321 10.7125 35.1823 11.0627 35.6142 11.0627H42.1377C42.6153 11.0627 42.9813 10.6384 42.9114 10.166L42.361 6.45097C42.3042 6.06748 41.975 5.78348 41.5873 5.78348H35.6142ZM43.9197 6.6802C43.8497 6.20777 44.2158 5.78348 44.6934 5.78348H50.1887C50.7233 5.78348 51.1902 6.1448 51.3243 6.66222L52.2115 10.0843C52.3399 10.5795 51.9661 11.0627 51.4545 11.0627H45.2438C44.8561 11.0627 44.5269 10.7787 44.4701 10.3952L43.9197 6.6802Z"
                    fill="#ec7421"
                  />
                  <path
                    d="M14.8771 24.6667C17.1199 24.6667 18.938 22.8486 18.938 20.6058C18.938 18.363 17.1199 16.5449 14.8771 16.5449C12.6343 16.5449 10.8162 18.363 10.8162 20.6058C10.8162 22.8486 12.6343 24.6667 14.8771 24.6667Z"
                    fill="#ec7421"
                  />
                  <path
                    d="M47.1614 24.6667C49.4042 24.6667 51.2224 22.8486 51.2224 20.6058C51.2224 18.363 49.4042 16.5449 47.1614 16.5449C44.9187 16.5449 43.1005 18.363 43.1005 20.6058C43.1005 22.8486 44.9187 24.6667 47.1614 24.6667Z"
                    fill="#ec7421"
                  />
                </svg>
                <span className="text-white home-page-slide-category-name d-flex align-items-center font-weight-semibold fs-13 fs-sm-14 text-center px-2 overflow-hidden">
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
