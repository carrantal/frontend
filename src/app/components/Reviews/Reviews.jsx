import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
// Dummy review data
const ReviewSlider = [
  {
    id: 1,
    name: "Tahé Ayari",
    time: "20 hours ago",
    profileImage:
      "https://lh3.googleusercontent.com/a/ACg8ocLhEnfSWf8uiyQ5tx1efmRrm-L8Ux_EOjORxh4Ypy2UfU4XpA=s120-c-rp-mo-br100",
    rating: 5,
    reviewText:
      "Super Firma! Sehr hilfsbereit immer online, bringen dir das Auto vor die Haustür und holen es auch wieder egal wo ab. Super Service wirklich. Super service von muhamed bilal. Immer wieder gerne",
    reviewImages: [
      "https://lh5.googleusercontent.com/p/AF1QipOs0zoF8a57qU3g0DmDuNnYKreSn5Wbl1umOq6r",
      "https://lh5.googleusercontent.com/p/AF1QipPlnDAF8DLs_hGNAxFF06MtiYvVtzud-4hL6U9H",
    ],
  },
  // {
  //   id: 2,
  //   name: "John Doe",
  //   time: "1 day ago",
  //   profileImage:
  //     "https://lh3.googleusercontent.com/a/ACg8ocI1hGryGR6vjoOzEKtHLRbBtW_fHvQTXLS_xeVNm572GCRBXQ=s120-c-rp-mo-br100",
  //   rating: 4,
  //   reviewText:
  //     "Great service, but the car was slightly delayed. Will use it again!",
  //   reviewImages: [
  //     "https://lh5.googleusercontent.com/p/AF1QipOs0zoF8a57qU3g0DmDuNnYKreSn5Wbl1umOq6r",
  //     "https://lh5.googleusercontent.com/p/AF1QipPlnDAF8DLs_hGNAxFF06MtiYvVtzud-4hL6U9H",
  //   ],
  // },
];

const Reviews = () => {
  return (
    <div className="container home-page-container-p-t mt-4">
      <div className="d-flex slider-container flex-column gap-row-lg-30 gap-row-25">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black">
            Rent a car reviews
          </h2>
          {/* <div className="d-flex flex-row ">
            <div
              className="d-flex new-review-prev color-brand-primary swiper-button-disabled disabled"
              tabIndex="-1"
              role="button"
              aria-label="Previous slide"
            >
              <i className=" fs-lg-24 fs-20">
                <FaAngleLeft />
              </i>
            </div>
            <div
              className="d-flex new-review-next color-brand-primary"
              tabIndex="0"
              role="button"
              aria-label="Next slide"
            >
              <i className=" fs-lg-24 fs-20">
                <FaAngleRight />
              </i>
            </div>
          </div> */}
        </div>
        <div className="swiper-container new-reviews-slider position-relative swiper-initialized swiper-horizontal swiper-backface-hidden">
          <div className="swiper-wrapper d-flex">
            {ReviewSlider.map((review) => (
              <div
                key={review.id}
                className="swiper-slide new-review-card card-box-shadow rounded-large gap-row-lg-15 gap-row-30 d-flex flex-column"
                role="group"
              >
                <div className="d-flex flex-row gap-col-lg-15 gap-col-10 align-items-center">
                  <img
                    src={review.profileImage}
                    className="new-review-img"
                    alt={`${review.name} photo`}
                    loading="lazy"
                  />
                  <div className="d-flex w-100 flex-column gap-row-lg-5 overflow-hidden">
                    <div className="d-flex flex-row gap-col-lg-10 gap-col-5 align-items-center">
                      <span className="color-shades-black lh-25 fs-lg-16 fs-14 text-truncate">
                        {review.name}
                      </span>
                      <span className="color-shades-500 fs-lg-14 lh-lg-25 lh-20 fs-12 text-truncate">
                        {review.time}
                      </span>
                    </div>
                    <div className="google-stars-block d-flex align-items-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className="fs-20 fs-sm-24 google-star"
                          style={{
                            color: index < review.rating ? "gold" : "lightgray",
                          }}
                        >
                          {index < review.rating ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="d-grid grid-col-lg-5 grid-col-4 new-review-images-section"
                  data-review-id={review.id}
                >
                  {review.reviewImages.map((image, idx) => (
                    <div
                      key={idx}
                      className="cursor-pointer position-relative new-review-images-section-item"
                    >
                      <img
                        className="rounded-small"
                        src={image}
                        loading="lazy"
                        alt={`Review ${review.id} image ${idx + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="d-flex new-review-main-content flex-column gap-row-30">
                  <span className="new-review-main-text fs-14 color-shades-black">
                    {review.reviewText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
