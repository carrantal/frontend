"use client";
import React, { useState } from "react";
import BookingForm from "./BookingForm";
import Link from "next/link";

export default function BookOnlineMobile({ price, whatsapp }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="p-3 text-white d-lg-none position-fixed-bottom bg-shades-900 w-100 mobile_footer_content active">
        <div className=" align-items-center mx-n1">
          <div className="col-12 row align-items-center m-0 py-2 justify-content-between flex-grow-1">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center priceText fs-9 text-uppercase color-shades-500 letter-spacing-0_5">
                <span>
                  Price for a <span>1 day</span>
                </span>
              </div>
              <span className="fs-16 font-weight-normal priceVal color-shades-black">
                {price} AED
              </span>
            </div>
            <div className="d-flex flex-row mobile-contact-btns gap-col-5">
              <Link
                href={whatsapp}
                target="_blank"
                className=" btn-medium contact_btn btn btn-semantic-success d-flex d-lg-none w-100"
              >
                <span className="fs-14 lh-20 font-weight-bold text-uppercase text-nowrap letter-spacing-0_2 company_phone_5307">
                  Contact
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                className="text-white btn-medium contact_btn btn bg-brand-primary d-flex d-lg-none w-100"
              >
                <span className="fs-14 lh-20 font-weight-bold  text-uppercase text-nowrap letter-spacing-0_2 ">
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
            <div className="d-flex mb-4 justify-content-center border-center-horizontal border-shades-300 or-book-online">
              <span className="fs-14 color-shades-500 text-uppercase position-relative bg-shades-100 px-2">
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
