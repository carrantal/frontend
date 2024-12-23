"use client";
import React from "react";
import { IoGridOutline } from "react-icons/io5";
const RentACar = () => {
  return (
    <>
      <div className=" py-3 position-relative container-dropdown">
        <button
          className="rounded-small px-3 py-2 border-0 bg-brand-primary d-flex align-items-center fs-16 header-rent-car-btn rent-a-car-new-menu"
          id="rent-car-dropdown-btn"
        >
          <i className=" color-shades-white icon-min-width-16">
            <IoGridOutline />
          </i>
          <span className="fs-16 font-weight-semibold color-shades-white ml-2 mr-1">
            Rent a car
          </span>
        </button>

        <div
          className="p-0 drop-item rounded-lg mt-2  "
          aria-labelledby="rent-car-dropdown-btn"
          data-toggle="dropdown"
          role="menu"
          aria-expanded="true"
        >
          <div
            className="d-grid bg-black"
            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <div className="p-3 flex-grow-1 border-shades-200 border-right">
              <span className="d-block fs-9 px-2 color-shades-500 letter-spacing-0_5 text-uppercase bg-transparent">
                Categories
              </span>
              <div className="d-flex flex-column mt-2">
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Popular car rental"
                >
                  Popular car rental
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Electric (EV)"
                >
                  Electric (EV)
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Luxury"
                >
                  Luxury
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Classic"
                >
                  Classic
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Business"
                >
                  Business
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Prestige"
                >
                  Prestige
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Sports"
                >
                  Sports
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="VIP"
                >
                  VIP
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Economy"
                >
                  Economy
                </a>
              </div>
            </div>

            <div className="p-3 bg-shades-100 flex-grow-1 rounded-right">
              <span className="d-block fs-9 px-2 color-shades-500 letter-spacing-0_5 text-uppercase bg-transparent">
                Rental by period
              </span>
              <div className="d-flex flex-column mt-2">
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Hourly rental"
                >
                  Hourly rental
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Weekly rental"
                >
                  Weekly rental
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Monthly rental"
                >
                  Monthly rental
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="Car leasing"
                >
                  Car leasing
                </a>
              </div>
              <span className="d-block fs-9 px-2 color-shades-500 letter-spacing-0_5 text-uppercase bg-transparent mt-4">
                Special offers
              </span>
              <div className="d-flex flex-column mt-2">
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="/"
                  title="All special offers"
                >
                  All special offers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentACar;
