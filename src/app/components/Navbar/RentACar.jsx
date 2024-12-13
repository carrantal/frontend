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
          className="p-0 drop-item "
          aria-labelledby="rent-car-dropdown-btn"
          data-toggle="dropdown"
          role="menu"
          aria-expanded="true"
        >
          <div
            className="d-grid"
            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
          >
            <div className="p-3 flex-grow-1 border-shades-200 border-right">
              <span className="d-block fs-9 px-2 color-shades-500 letter-spacing-0_5 text-uppercase bg-transparent">
                Categories
              </span>
              <div className="d-flex flex-column mt-2">
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/popular-car-rental"
                  title="Popular car rental"
                >
                  Popular car rental
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/types/electric-ev-cars"
                  title="Electric (EV)"
                >
                  Electric (EV)
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/types/luxury"
                  title="Luxury"
                >
                  Luxury
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/types/classic-cars-rental"
                  title="Classic"
                >
                  Classic
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/types/business"
                  title="Business"
                >
                  Business
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/types/prestige"
                  title="Prestige"
                >
                  Prestige
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/types/sport"
                  title="Sports"
                >
                  Sports
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/types/vip"
                  title="VIP"
                >
                  VIP
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/types/economy-cars"
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
                  href="https://renty.ae/hourly-car-rental"
                  title="Hourly rental"
                >
                  Hourly rental
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/weekly/dubai"
                  title="Weekly rental"
                >
                  Weekly rental
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/monthly/dubai"
                  title="Monthly rental"
                >
                  Monthly rental
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/car-leasing/dubai"
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
                  href="https://renty.ae/all-special-offers"
                  title="All special offers"
                >
                  All special offers
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/all-special-offers/new-arrivals"
                  title="🌟 NEW ARRIVALS"
                >
                  🌟 NEW ARRIVALS
                </a>
                <a
                  className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  href="https://renty.ae/all-special-offers/exclusive"
                  title="👑 Exclusive"
                >
                  👑 Exclusive
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
