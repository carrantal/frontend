"use client";

import React, { useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { FaSearch, FaListUl } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { LiaServicestack } from "react-icons/lia";
import { BiSolidVideos } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
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
        {/* Main Menu Button */}
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

        {/* Search Button */}
        {/* <button
          className="btn btn-medium bg-transparent mobile-search-btn text-reset position-absolute"
          aria-label="Search"
          id="mobileModalSearchButton"
          type="button"
          onClick={toggleSearchModal}
        >
          <span className="fs-24 color-shades-white">
            <CiSearch />
          </span>
        </button> */}
        {/* Logo */}
        <div className="d-flex mx-auto">
          <Link href="/" className=" mx-auto bg-transparent">
            <Image src="/images/desig.avif" width={50} height={22} alt="Logo" />
          </Link>
        </div>

        {/* Full-Screen Menu */}
        {menuOpen && (
          <div
            className="menu-container position-fixed top-0 left-0 w-100 h-100 bg-white d-flex flex-column"
            style={{
              zIndex: 1050,
              animation: "slideDown 0.3s ease-in-out",
            }}
          >
            {/* Header (Cancel/Back Button) */}
            <div
              className="text-white d-flex align-items-center px-4"
              style={{ backgroundColor: "#ec7421", height: "60px" }}
            >
              {currentMenu !== "main" ? (
                <button
                  className="btn text-reset fs-24 me-3"
                  onClick={() => setCurrentMenu("main")}
                  aria-label="Back to main menu"
                >
                  <MdKeyboardArrowLeft />
                </button>
              ) : null}
              <span className="fs-18 text-white">
                {currentMenu === "main" ? (
                  <button
                    className="btn text-white fs-24 "
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                ) : currentMenu === "categories" ? (
                  "Categories"
                ) : currentMenu === "rentalPeriods" ? (
                  "Rental by Period"
                ) : (
                  "Services"
                )}
              </span>
            </div>

            {/* Menu Content */}
            <div
              className="menu-content flex-grow-1 d-flex flex-column justify-content-left p-4"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {currentMenu === "main" && (
                <>
                  <button
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                    onClick={() => setCurrentMenu("categories")}
                  >
                    <span className="d-flex align-items-center gap-2">
                      <FaListUl /> Categories
                    </span>
                    <MdKeyboardArrowRight />
                  </button>
                  {/* <button
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                    onClick={() => setCurrentMenu("rentalPeriods")}
                  >
                    <span className="d-flex align-items-center gap-2">
                      <FaCalendarAlt /> Rental by Period
                    </span>
                    <MdKeyboardArrowRight />
                  </button> */}
                  <button
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                    onClick={() => setCurrentMenu("services")}
                  >
                    <span className="d-flex align-items-center gap-2">
                      <LiaServicestack /> Services
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
                    <span className="d-flex align-items-center gap-2">
                      <BiSolidVideos /> Gallery
                    </span>
                  </Link>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href="/terms-and-conditions"
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                  >
                    <span className="d-flex align-items-center gap-2">
                      <IoIosDocument /> Terms and condition
                    </span>
                  </Link>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href="/refund-policy"
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                  >
                    <span className="d-flex align-items-center gap-2">
                      <IoDocumentText /> Refund Policy
                    </span>
                  </Link>
                </>
              )}

              {/* Categories Submenu */}
              {currentMenu === "categories" && (
                <div className="submenu  py-3 rounded">
                  {response?.map((cat) => (
                    <Link
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className="dropdown-item fs-14 mb-3"
                      href={`/search?category=${cat.attributes.slug}`}
                    >
                      <span className="ms-4"> {cat.attributes.name}</span>
                    </Link>
                  ))}
                </div>
              )}

              {/* Rental by Period Submenu */}
              {currentMenu === "rentalPeriods" && (
                <div className="submenu py-3 rounded">
                  <a className="dropdown-item fs-14 mb-3" href="/">
                    <FaSearch className="d-inline " />
                    <span className="ms-4"> Hourly rental</span>
                  </a>
                  <a className="dropdown-item fs-14" href="/">
                    <FaSearch className="d-inline " />
                    <span className="ms-4"> Weekly rental</span>
                  </a>
                  {/* Add more rental options here */}
                </div>
              )}

              {/* Services Submenu */}
              {currentMenu === "services" && (
                <div className="submenu  py-3 rounded">
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href={"/chauffer-services"}
                    className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  >
                    <span className="ms-4 text-black"> Chauffer Services</span>
                  </Link>
                  <Link
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href={"/airport-services"}
                    className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                  >
                    <span className="ms-4 text-black">
                      Arrive in style - Luxury Cars ready at the airport
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Add CSS Animation */}
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
      {searchModalOpen && (
        <div className="modal-content border-0 rounded-0 h-100 position-fixed top-0 left-0 w-full bg-white">
          <div className="modal-header align-items-center rounded-0 color-shades-white py-0 pr-5">
            <button
              aria-label="Close"
              className="btn btn-medium btn-modal-close position-absolute right"
              type="button"
              onClick={toggleSearchModal} // Close the modal
            >
              <span className="fs-18 ">✕</span>
            </button>
            <div className="d-flex align-items-center w-100 mobile-search-input-container">
              <button
                type="button"
                className="btn btn-cleared btn-modal-close btn-back-mobile-search btn-medium text-left justify-content-start"
              >
                <i className="fs-18  color-brand-black">
                  <CiSearch className="d-inline " />
                </i>
              </button>

              <form className="m-0 p-0 w-100">
                <div className="easy-autocomplete eac-square">
                  <input
                    type="text"
                    className="border-0 search-input fs-14 color-shades-black w-100"
                    placeholder="Search"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooglebutton;
