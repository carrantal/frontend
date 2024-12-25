import React from "react";

export default function Billing({ price, watch }) {
  const noOfDays = watch("data.numberOfDays") || 1;
  const cost = noOfDays * price;
  const VATTax = cost * 0.05;
  const Total = cost + VATTax;

  return (
    <div className="bg-shades-100 rounded-small mx-3 py-2 ">
      <div className="d-flex justify-content-between mb-1">
        <span className="text-white fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1">
          Booking summary
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between fs-14 mb-2">
        <span className="text-white text-truncate" id="rental_days_summary">
          Rental {noOfDays} day
        </span>
        <span className="text-white  font-weight-normal flex-shrink-0">
          {cost} AED
        </span>
      </div>

      <div className="d-flex align-items-center justify-content-between fs-16 pb-2">
        <span className="text-white text-truncate fs-14">VAT Tax (5%)</span>
        <span className="text-white  font-weight-normal flex-shrink-0 fs-14">
          + {VATTax} AED
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between border-top border-shades-300 border-top-dotted border-top-medium pt-2">
        <span className="color-primary fs-24 font-weight-normal text-truncate">
          Total
        </span>
        <span className="color-primary fs-24 font-weight-normal flex-shrink-0">
          {Total} AED
        </span>
      </div>
    </div>
  );
}
