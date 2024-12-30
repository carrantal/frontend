"use client";

import React, { useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { FaSearch, FaListUl } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { LiaServicestack } from "react-icons/lia";
import { IoCarSportSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdLocalAirport } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { MdPayment } from "react-icons/md";

import { BiSolidVideos } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const Tooglebutton = ({ response }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("main");
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearchModal = () => {
    setSearchModalOpen(!searchModalOpen);
  };
  return (
    <div>
      <div className="d-lg-none w-100 navbar-mobile bg-black py-1 px-5">
        <button
          className="btn btn-medium btn-modal-close left text-reset position-absolute"
          id="mobileMenu"
          aria-label="Main menu"
          type="button"
          onClick={toggleMenu}
        >
          <span className="fs-24 color-shades-white">
            <IoIosMenu />
          </span>
        </button>
        <div className="d-flex mx-auto">
          <Link href="/" className=" mx-auto bg-transparent">
            <Image src="/images/desig.avif" width={50} height={22} alt="Logo" />
          </Link>
        </div>

        {menuOpen && (
          <div
            className="menu-container position-fixed top-0 left-0 w-100 h-100 d-flex flex-column"
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
              {currentMenu !== "main" ? (
                <button
                  className="btn text-reset fs-24 me-3"
                  onClick={() => setCurrentMenu("main")}
                >
                  <MdKeyboardArrowLeft />
                </button>
              ) : (
                <button
                  className="btn text-reset fs-24 me-3"
                  onClick={toggleMenu}
                >
                  X
                </button>
              )}
              <span className="fs-18 text-white">
                {currentMenu === "main" ? (
                  <></>
                ) : currentMenu === "categories" ? (
                  "Categories"
                ) : currentMenu === "rentalPeriods" ? (
                  "Rental by Period"
                ) : currentMenu === "services" ? (
                  "Services"
                ) : (
                  "Main Menu"
                )}
              </span>
            </div>

            <div
              className="menu-content flex-grow-1 d-flex flex-column justify-content-left p-4"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {currentMenu === "main" && (
                <>
                  <button
                    className=" d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                    onClick={() => setCurrentMenu("categories")}
                  >
                    <span
                      className="d-flex align-items-center gap-2 "
                      style={{
                        color: "white",
                      }}
                    >
                      <FaListUl color="#ec7421" /> Categories
                    </span>
                    <MdKeyboardArrowRight />
                  </button>
                  <button
                    className="d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                    onClick={() => setCurrentMenu("services")}
                  >
                    <span
                      className="d-flex align-items-center gap-2"
                      style={{
                        color: "white",
                      }}
                    >
                      <RiCustomerService2Fill color="#ec7421" /> Services
                    </span>
                    <MdKeyboardArrowRight />
                  </button>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href="/gallery"
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                  >
                    <span
                      className="d-flex align-items-center gap-2"
                      style={{
                        color: "white",
                      }}
                    >
                      <BiSolidVideos color="#ec7421" /> Gallery
                    </span>
                  </Link>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href="/terms-and-conditions"
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                  >
                    <span
                      className="d-flex align-items-center gap-2"
                      style={{
                        color: "white",
                      }}
                    >
                      <IoIosDocument color="#ec7421" /> Terms and condition
                    </span>
                  </Link>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href="/refund-policy"
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                  >
                    <span
                      className="d-flex align-items-center gap-2"
                      style={{
                        color: "white",
                      }}
                    >
                      <MdPayment color="#ec7421" /> Refund Policy
                    </span>
                  </Link>
                </>
              )}

              {currentMenu === "services" && (
                <>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href={"/chauffer-services"}
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                  >
                    <span
                      className="d-flex align-items-center gap-2"
                      style={{
                        color: "white",
                      }}
                    >
                      <IoIosPerson color="#ec7421" /> Chauffeur Services
                    </span>
                  </Link>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href={"/airport-services"}
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                  >
                    <span
                      className="d-flex align-items-center gap-2"
                      style={{
                        color: "white",
                      }}
                    >
                      <MdLocalAirport color="#ec7421" /> Arrive in style -
                      Luxury Cars ready at the airport
                    </span>
                  </Link>
                </>
              )}

              {currentMenu === "categories" && (
                <>
                  {response?.map((cat, index) => (
                    <Link
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      href={`/search?category=${cat.attributes.slug}`}
                      className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                    >
                      <span
                        className="d-flex align-items-center gap-2"
                        style={{
                          color: "white",
                        }}
                      >
                        <span className="color-brand-primary">
                          {index + 1}{" "}
                        </span>{" "}
                        {cat.attributes.name}
                      </span>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes slideIn {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .menu-container {
            animation: slideIn 0.5s ease-in-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Tooglebutton;
