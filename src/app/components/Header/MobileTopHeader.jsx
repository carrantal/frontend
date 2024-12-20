"use client";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { LiaServicestack } from "react-icons/lia";
import { FaListUl, FaCalendarAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function MobileTopHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("main");
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const toggleSearchModal = () => {
    setSearchModalOpen(!searchModalOpen);
  };

  return (
    <>
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

        <button
          className="btn btn-medium bg-transparent mobile-search-btn text-reset position-absolute"
          aria-label="Search"
          id="mobileModalSearchButton"
          type="button"
          onClick={toggleSearchModal}
        >
          <span className="fs-24 color-shades-white">
            <CiSearch />
          </span>
        </button>
        <div className="d-flex mx-auto">
          <a
            href="/"
            aria-label="Home page"
            className=" mx-auto bg-transparent"
          >
            <img
              src="/images/desig.avif"
              width={50}
              height={22}
              alt="Renty Logo"
            />
          </a>
        </div>

        {menuOpen && (
          <div
            className="menu-container position-fixed top-0 left-0 w-100 h-100 bg-white d-flex flex-column"
            style={{
              zIndex: 1050,
              animation: "slideDown 0.3s ease-in-out",
            }}
          >
            <div
              className="text-white d-flex align-items-center px-4"
              style={{ backgroundColor: "#13428d", height: "60px" }}
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
                  <button
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                    onClick={() => setCurrentMenu("rentalPeriods")}
                  >
                    <span className="d-flex align-items-center gap-2">
                      <FaCalendarAlt /> Rental by Period
                    </span>
                    <MdKeyboardArrowRight />
                  </button>
                  <button
                    className="text-dark d-flex justify-content-between align-items-center w-100 py-2 fs-16 font-weight-semibold"
                    onClick={() => setCurrentMenu("services")}
                  >
                    <span className="d-flex align-items-center gap-2">
                      <LiaServicestack /> Services
                    </span>
                    <MdKeyboardArrowRight />
                  </button>
                </>
              )}

              {currentMenu === "categories" && (
                <div className="submenu  py-3 rounded">
                  <a className="dropdown-item fs-14 mb-3" href="/">
                    <FaSearch className="d-inline " />
                    <span className="ms-4">Popular car rental</span>
                  </a>
                  <a className="dropdown-item fs-14 mb-3" href="/">
                    <FaSearch className="d-inline" />{" "}
                    <span className="ms-4">Electric (EV)</span>
                  </a>
                  <a className="dropdown-item fs-14 mb-3" href="/">
                    <FaSearch className="d-inline" />{" "}
                    <span className="ms-4">Luxury</span>
                  </a>
                  <a className="dropdown-item fs-14 mb-3" href="/">
                    <FaSearch className="d-inline" />{" "}
                    <span className="ms-4">Classic</span>
                  </a>
                  <a className="dropdown-item fs-14 mb-3" href="/">
                    <FaSearch className="d-inline" />{" "}
                    <span className="ms-4">Business</span>
                  </a>
                  <a className="dropdown-item fs-14 mb-3" href="/">
                    <FaSearch className="d-inline" />{" "}
                    <span className="ms-4">Sports</span>
                  </a>
                  <a className="dropdown-item fs-14 mb-3" href="/">
                    <FaSearch className="d-inline" />{" "}
                    <span className="ms-4">Economy</span>
                  </a>
                </div>
              )}

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
                </div>
              )}

              {currentMenu === "services" && (
                <div className="submenu  py-3 rounded">
                  <a className="dropdown-item fs-14" href="/">
                    <FaSearch className="d-inline " />
                    <span className="ms-4"> Airport Transfer</span>
                  </a>
                </div>
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
    </>
  );
}
