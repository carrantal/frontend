"use client";
import React, { useState } from "react";
import BookingForm from "./BookingForm";

export default function BookOnlineMobile({ price }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div class="p-3 text-white d-lg-none position-fixed-bottom bg-shades-900 w-100 mobile_footer_content active">
        <div class=" align-items-center mx-n1">
          <div class="col-12 row align-items-center m-0 py-2 justify-content-between flex-grow-1">
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center priceText fs-9 text-uppercase color-shades-500 letter-spacing-0_5">
                <span>
                  Price for a <span>1 day</span>
                </span>
              </div>
              <span class="fs-16 font-weight-normal priceVal color-shades-black">
                $ 210
              </span>
            </div>
            <div class="d-flex flex-row mobile-contact-btns gap-col-5">
              <button
                type="button"
                class=" btn-medium contact_btn btn btn-semantic-success d-flex d-lg-none w-100"
              >
                <span class="fs-14 lh-20 font-weight-bold text-uppercase text-nowrap letter-spacing-0_2 company_phone_5307">
                  Contact
                </span>
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                class="text-white btn-medium contact_btn btn bg-brand-primary d-flex d-lg-none w-100"
              >
                <span class="fs-14 lh-20 font-weight-bold  text-uppercase text-nowrap letter-spacing-0_2 ">
                  Book Online
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="menu-container position-fixed top-0 left-0 w-100 h-100 bg-black d-flex flex-column"
          style={{
            zIndex: 1050,
            animation: "slideDown 0.3s ease-in-out",
            backgroundColor: "black",
          }}
        >
          <div
            className="text-white d-flex align-items-center px-4"
            style={{ backgroundColor: "#ec7421", height: "60px" }}
          >
            <span className="fs-18 text-white">
              <button
                className="btn text-white fs-24 "
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ✕
              </button>
            </span>
            <span className="fs-18 text-white">Book Online</span>
          </div>

          <div
            className="menu-content flex-grow-1 d-flex flex-column justify-content-left p-4"
            style={{ fontFamily: "Roboto, sans-serif", overflow: "scroll" }}
          >
            <div class="d-flex mb-4 justify-content-center border-center-horizontal border-shades-300 or-book-online">
              <span class="fs-14 color-shades-500 text-uppercase position-relative bg-shades-100 px-2">
                Booking Form
              </span>
            </div>

            <BookingForm price={price} />
          </div>
        </div>
      )}
    </>
  );
}
