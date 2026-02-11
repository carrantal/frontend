import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import Reviews from "../Reviews/Reviews";

const DetailpageComponent = ({
  features,
  desc,
  specs,
  deliveryTerms,
  price,
}) => {
  const column1 = features;
  return (
    <>
      <div className="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div className="">
          <div className="d-flex flex-wrap align-items-center">
            <h2 className="h4 pr-3 mb-3 text-white">Rental pricing</h2>
          </div>
          <div>
            <div className="d-flex flex-row border-bottom border-shades-500 py-lg-2">
              <div className="col-md-6 p-0">
                <span className="fs-11 color-shades-900 font-weight-bold text-uppercase letter-spacing-1 line-height-15">
                  Rental period
                </span>
              </div>
              <div className="col-md-6 p-0 text-right  text-lg-left">
                <span className="fs-11 color-shades-900 font-weight-bold text-uppercase letter-spacing-1 line-height-15">
                  Price per day
                </span>
              </div>
            </div>
            <div className="d-flex flex-row border-bottom py-1 py-lg-2">
              <div className="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                1 day
              </div>
              <div className="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                {price} AED
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div className="">
          <div className="d-flex flex-wrap align-items-center">
            <h2 className="h4 pr-3 mb-3 text-white">Specifications</h2>
          </div>
          <div>
            {specs?.map((each, index) => (
              <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                <div className="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                  {each.title}
                </div>
                <div className="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                  {each.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div className="">
          <div className="d-flex flex-wrap align-items-center">
            <h2 className="h4 pr-3 mb-3 text-white">Features</h2>
          </div>
        </div>
        <div className="row gap-row-5">
          {/* First column */}
          {(features || []).map(
            (feature) =>
              feature?.title && ( // Exclude null titles
                <div className="col-12 col-lg-6 line-height-25">
                  <div
                    key={feature.id}
                    className="w-100 d-flex align-items-center"
                  >
                    <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
                    <span className="pl-2 fs-14 color-shades-black">
                      {feature.title}
                    </span>
                  </div>
                </div>
              )
          )}

          {/* Second column */}
          {/* <div className="col-12 col-lg-6 line-height-25">
            {column2.map(
              (feature) =>
                feature?.title && (
                  <div
                    key={feature.id}
                    className="w-100 d-flex align-items-center"
                  >
                    <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
                    <span className="pl-2 fs-14 color-shades-black">
                      {feature.title}
                    </span>
                  </div>
                )
            )}
          </div> */}
        </div>
      </div>

      <div className="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div className="">
          <div className="d-flex flex-wrap align-items-center">
            <h2 className="h4 pr-3 mb-3 text-white">Description</h2>
          </div>
          <p className="fs-14 text-white text-justify">{desc}</p>
        </div>
      </div>

      <Reviews />

      <div className="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div className="">
          <div className="d-flex flex-wrap align-items-center">
            <h2 className="h4 pr-3 mb-3 text-white">Delivery terms</h2>
          </div>
          <div>
            {deliveryTerms?.map((each, index) => (
              <div className="d-flex flex-row border-bottom py-1 py-lg-2">
                <div className="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                  {each.title}
                </div>
                <div className="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                  {each.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailpageComponent;
