import React from "react";

const WhyRentus = () => {
  return (
    <div className="pt-lg-5-custom pt-4-custom">
      <div className="container d-flex gap-row-lg-15 flex-column home-page-company-partner-section mt-4">
        <div className="d-flex home-page-company-section gap-15 gap-sm-30 p-3-custom justify-content-between align-items-lg-center w-100 flex-column flex-lg-row with-partner-section p-3">
          <div className="d-flex flex-column home-page-company-title-section align-items-center align-items-lg-start mb-0 mb-lg-3-custom mr-0-custom ml-0-custom mr-sm-3-custom ml-lg-4-custom">
            <span className="color-brand-primary-darker h-p-sub-title-main font-weight-semibold">
              Why you should rent a car with us?
            </span>
            <span className="h-p-sub-title-second-part d-flex justify-content-center color-shades-700 fs-14 fs-lg-16 line-height-25 font-weight-normal mt-1">
              #1 car rental company in Dubai on Google
            </span>
          </div>
          <div className="d-flex align-items-center bg-shades-white home-page-companies-section cursor-pointer">
            <a
              className="company-review-section p-4-custom px-xs-2-custom px-sm-2-custom d-flex flex-column h-100 justify-content-center align-items-center border-right-company-logo p-4"
              href="https://www.trustpilot.com/review/renty.ae?languages=all"
              target="_blank"
              rel="noopener noreferrer"
              title="Check us out in Trustpilot"
            >
              <div className="d-flex align-items-center company-review-icons-block">
                <div className="company-review-icon">
                  <img
                    loading="lazy"
                    src="https://renty.ae/assets-nd/icons/company-reviews/trustpilot-reviews.svg"
                    title="Company reviews"
                    alt="Company reviews"
                  />
                </div>
              </div>
              <div className="company-review-statistics-block px-xs-1-custom d-flex align-items-center direction-ltr">
                <div className="font-weight-normal company-review-score color-shades-black">
                  4.7
                </div>
                <div className="company-review-stars-block px-sm-1-custom pb-1-custom pb-xs-0-custom pb-sm-0-custom">
                  <div className="d-flex trustpilot-icons-block">
                    <img
                      className="icon-star-filled fs-20 fs-sm-22"
                      alt="Trustpilot star"
                      loading="lazy"
                      src="https://renty.ae/assets-nd/icons/company-reviews/trustpilot-star-5.svg"
                    />
                    <img
                      className="icon-star-filled fs-20 fs-sm-22"
                      alt="Trustpilot star"
                      loading="lazy"
                      src="https://renty.ae/assets-nd/icons/company-reviews/trustpilot-star-5.svg"
                    />
                    <img
                      className="icon-star-filled fs-20 fs-sm-22"
                      alt="Trustpilot star"
                      loading="lazy"
                      src="https://renty.ae/assets-nd/icons/company-reviews/trustpilot-star-5.svg"
                    />
                    <img
                      className="icon-star-filled fs-20 fs-sm-22"
                      alt="Trustpilot star"
                      loading="lazy"
                      src="https://renty.ae/assets-nd/icons/company-reviews/trustpilot-star-5.svg"
                    />
                    <img
                      className="icon-star-filled fs-20 fs-sm-22"
                      alt="Trustpilot star"
                      loading="lazy"
                      src="https://renty.ae/assets-nd/icons/company-reviews/trustpilot-star-4.5.svg"
                    />
                  </div>
                </div>
                <div className="company-review-amount color-shades-500">84</div>
              </div>
            </a>
            <a
              className="company-review-section p-4-custom px-xs-2-custom px-sm-2-custom d-flex flex-column h-100 justify-content-center align-items-center p-4"
              href="https://www.google.com/maps/place/Renty+-+Rent+Luxury+Car+in+Dubai/@25.1608085,55.2372231,17z"
              target="_blank"
              rel="noopener noreferrer"
              title="Find us on Google Maps in Al Quoz, Dubai."
            >
              <div className="d-flex align-items-center company-review-icons-block">
                <div className="company-review-icon">
                  <img
                    loading="lazy"
                    src="https://renty.ae/assets-nd/icons/company-reviews/google-reviews.svg"
                    title="Company reviews"
                    alt="Company reviews"
                  />
                </div>
              </div>
              <div className="company-review-statistics-block px-xs-1-custom d-flex align-items-center direction-ltr">
                <div className="font-weight-normal company-review-score color-shades-black">
                  4.9
                </div>
                <div className="company-review-stars-block px-sm-1-custom pb-1-custom pb-xs-0-custom pb-sm-0-custom">
                  <div className="google-stars-block d-flex align-items-center">
                    <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-100"></span>
                    <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-100"></span>
                    <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-100"></span>
                    <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-100"></span>
                    <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-90"></span>
                  </div>
                </div>
                <div className="company-review-amount color-shades-500">
                  1760
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRentus;