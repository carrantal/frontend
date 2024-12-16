"use client";
import React, { useState } from "react";
import RentACar from "../Navbar/RentACar";
import Services from "../Navbar/Services";
import Profile from "../Navbar/Profile";
import Search from "../Search/Search";
import Categories from "../Catergories/Categories";
import Brands from "../Brands/Brands";
import CarImsges from "../CarImsges";
import WhyRentus from "../WhyRentUs/WhyRentus";
import OffSale from "../OffSale/OffSale";
import Reviews from "../Reviews/Reviews";
import Maps from "../Map/Maps";
import LeadingCompany from "../LeadingCompany/LeadingCompany";
import Faq from "../FAQ/Faq";
import Footer from "../Footer/Footer";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { LiaServicestack } from "react-icons/lia";
import { FaListUl, FaCalendarAlt } from "react-icons/fa";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("main"); // "main", "services", or "rentacar"

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const openSubmenu = (menu) => {
    setSubmenu(submenu === menu ? "" : menu); // Toggle submenu
  };

  return (
    <>
      <div className="homepage ">
        <header className="sticky-header">
          <div className="d-none d-lg-block bg-brand-primary-darker position-relative header-main-menu-container desc-header-panel">
            <div className="container d-flex position-relative">
              <div className="d-flex mx-auto">
                <a
                  href="https://renty.ae/"
                  aria-label="Home page"
                  className=" d-flex align-items-center"
                >
                  <Image
                    src="/images/desig.avif"
                    width={60}
                    height={70}
                    alt="Picture of the author"
                  />
                </a>
              </div>
              <nav className="d-flex gap-col-5 flex-grow-1 justify-content-center">
                <RentACar />
                <Services />
              </nav>
              <Profile />
            </div>
          </div>
          <div className="d-lg-none w-100 navbar-mobile bg-brand-primary-darker py-1 px-5">
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
            <button
              className="btn btn-medium bg-transparent mobile-search-btn text-reset position-absolute"
              aria-label="Search"
              id="mobileModalSearchButton"
              type="button"
            >
              <span className="fs-24 color-shades-white">
                <FaSearch />
              </span>
            </button>

            {/* Logo */}
            <div className="d-flex mx-auto">
              <a
                href="https://renty.ae/"
                aria-label="Home page"
                className="header-home-link mx-auto bg-transparent"
              >
                <img
                  src="/images/desig.avif"
                  width={98}
                  height={22}
                  alt="Renty Logo"
                />
              </a>
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

                  {/* Categories Submenu */}
                  {currentMenu === "categories" && (
                    <div className="submenu  py-3 rounded">
                      <a
                        className="dropdown-item fs-14 mb-3"
                        href="https://renty.ae/popular-car-rental"
                      >
                        <FaSearch className="d-inline " />
                        <span className="ms-4">Popular car rental</span>
                      </a>
                      <a
                        className="dropdown-item fs-14 mb-3"
                        href="https://renty.ae/types/electric-ev-cars"
                      >
                        <FaSearch className="d-inline" />{" "}
                        <span className="ms-4">Electric (EV)</span>
                      </a>
                      <a
                        className="dropdown-item fs-14 mb-3"
                        href="https://renty.ae/types/electric-ev-cars"
                      >
                        <FaSearch className="d-inline" />{" "}
                        <span className="ms-4">Luxury</span>
                      </a>
                      <a
                        className="dropdown-item fs-14 mb-3"
                        href="https://renty.ae/types/electric-ev-cars"
                      >
                        <FaSearch className="d-inline" />{" "}
                        <span className="ms-4">Classic</span>
                      </a>
                      <a
                        className="dropdown-item fs-14 mb-3"
                        href="https://renty.ae/types/electric-ev-cars"
                      >
                        <FaSearch className="d-inline" />{" "}
                        <span className="ms-4">Business</span>
                      </a>
                      <a
                        className="dropdown-item fs-14 mb-3"
                        href="https://renty.ae/types/electric-ev-cars"
                      >
                        <FaSearch className="d-inline" />{" "}
                        <span className="ms-4">Sports</span>
                      </a>
                      <a
                        className="dropdown-item fs-14 mb-3"
                        href="https://renty.ae/types/electric-ev-cars"
                      >
                        <FaSearch className="d-inline" />{" "}
                        <span className="ms-4">Economy</span>
                      </a>
                    </div>
                  )}

                  {/* Rental by Period Submenu */}
                  {currentMenu === "rentalPeriods" && (
                    <div className="submenu py-3 rounded">
                      <a
                        className="dropdown-item fs-14 mb-3"
                        href="https://renty.ae/hourly-car-rental"
                      >
                        <FaSearch className="d-inline " />
                        <span className="ms-4"> Hourly rental</span>
                      </a>
                      <a
                        className="dropdown-item fs-14"
                        href="https://renty.ae/weekly/dubai"
                      >
                        <FaSearch className="d-inline " />
                        <span className="ms-4"> Weekly rental</span>
                      </a>
                      {/* Add more rental options here */}
                    </div>
                  )}

                  {/* Services Submenu */}
                  {currentMenu === "services" && (
                    <div className="submenu  py-3 rounded">
                      <a
                        className="dropdown-item fs-14"
                        href="https://renty.ae/airport-transfer/dubai"
                      >
                        <FaSearch className="d-inline " />
                        <span className="ms-4"> Airport Transfer</span>
                      </a>
                      {/* Add more service links here */}
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
        </header>
        <div
          className="modal fade default-modal"
          id="modalMenu"
          tabindex="-1"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100 h-100">
              <div className="modal-header modal-header--sticky modal-header modal-header--sticky--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-x"></span>
                </button>
                <a className="mx-auto bg-transparent" href="https://renty.ae/">
                  <img
                    loading="lazy"
                    src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/logo-dark.svg"
                    width="98"
                    height="22"
                    alt="Renty.ae"
                    title="Renty.ae"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalLanguages"
          // tabindex="-1"
        ></div>

        <div
          className="modal fade default-modal"
          id="modalCategories"
          tabindex="-1"
          style={{ display: "none" }}
          aria-hidden="true"
        ></div>

        <div
          className="modal fade modal-whatsapp"
          id="whatsappApiModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <form
                className="modal-body rc_validate"
                action="https://renty.ae/"
                method="POST"
                data-validate="true"
              >
                <input type="hidden" id="car_id_lead" name="car_id" />
                <input type="hidden" id="source_lead" name="source" />
                <input
                  type="hidden"
                  id="special_offer_id_lead"
                  name="special_offer_id"
                />
                <input
                  type="hidden"
                  name="recaptcha"
                  id="recaptchaChargeLead"
                />
              </form>
            </div>
          </div>
        </div>

        <input
          type="hidden"
          id="text-no_results"
          value="No results found. Please change your request."
        />
        <div className="home-page-section-main position-relative d-flex flex-column">
          <picture
            style={{ display: "block", opacity: 1, transition: "opacity 0.3s" }}
          >
            <source
              media="(min-width: 769px)"
              srcSet="
            https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=2560,height=540,sharpen=0/https://renty.ae/assets-nd/images/home-page/home-page-section-lg.png
          "
            />
            <source
              media="(min-width: 576px) and (max-width: 768px)"
              srcSet="
            https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=768,height=540,sharpen=0/https://renty.ae/assets-nd/images/home-page/home-page-section-md.png
          "
            />
            <img
              src="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=768,height=540,sharpen=0/https://renty.ae/assets-nd/images/home-page/home-page-section-md.png"
              alt="Responsive Image"
              className="home-page-banner position-absolute w-100 h-100"
              fetchPriority="high"
            />
          </picture>
          <div className="container home-page-top-main-container d-flex flex-column px-4-custom">
            <div className="d-flex home-page-title-section flex-column text-center">
              <h1 className="color-shades-white home-page-main-title font-weight-600">
                Rent a car in Dubai
              </h1>
              <h2 className="color-shades-white home-page-main-desc font-weight-semibold">
                Find a car of your dream in 60 seconds
              </h2>
            </div>

            <Search />
          </div>
          <div className="justify-content-center d-none d-md-flex home-page-popular-car-type-title">
            <span className="fs-11 lh-15 font-weight-bold color-shades-white letter-spacing-1 text-uppercase">
              Popular car rental categories in Dubai
            </span>
          </div>

          <Categories />
        </div>
        <Brands />
      </div>

      <CarImsges />
      <WhyRentus />
      <CarImsges />
      <CarImsges />
      <OffSale />
      <CarImsges />
      <Reviews />
      <Maps />
      <LeadingCompany />
      <Faq />
      <Footer />
    </>
  );
};

export default Header;
