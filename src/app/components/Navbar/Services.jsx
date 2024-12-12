import React from "react";

const Services = () => {
  return (
    <>
      <div className="container-dropdown py-3 position-relative">
        <button
          className="rounded-small px-3 py-2 border-0 bg-transparent"
          id="services-dropdown-btn1"
        >
          <span className="fs-16 font-weight-semibold color-shades-white">
            Services
          </span>
        </button>

        <div
          role="menu"
          aria-labelledby="services-dropdown-btn"
          className=" p-0 drop-item rounded-lg"
          aria-expanded="true"
        >
          <a
            className="dropdown-item cursor-pointer fs-12"
            href="https://renty.ae/airport-transfer/dubai"
          >
            Airport Transfer
          </a>
        </div>
      </div>
    </>
  );
};

export default Services;
