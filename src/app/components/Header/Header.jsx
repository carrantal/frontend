import React from "react";
import RentACar from "../Navbar/RentACar";
import Services from "../Navbar/Services";
import Profile from "../Navbar/Profile";
import Search from "../Search/Search";
import Categories from "../Catergories/Categories";
import Brands from "../Brands/Brands";
import CarImsges from "../CarImsges";
import WhyRentus from "../WhyRentUs/WhyRentus";
import OffSale from "../OffSale/OffSale";

const Header = () => {
  return (
    <>
      <div className="homepage">
        <header className="sticky-header">
          <div className="d-none d-lg-block bg-brand-primary-darker position-relative header-main-menu-container desc-header-panel">
            <div className="container d-flex position-relative">
              <div className="d-flex mx-auto">
                <a
                  href="https://renty.ae/"
                  aria-label="Home page"
                  className="header-home-link d-flex align-items-center"
                >
                  <img
                    loading="lazy"
                    src="https://renty.ae/assets-nd/icons/site/logo-dark.svg"
                    alt="Renty.ae"
                    title="Renty.ae"
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
            <button
              className="btn btn-medium btn-modal-close left text-reset position-absolute"
              id="mobileMenu"
              aria-label="Main menu"
              data-target="#modalMenu"
              data-toggle="modal"
              type="button"
            >
              <span className="fs-24 icon-menu color-shades-white"></span>
            </button>
            <button
              className="btn btn-medium bg-transparent mobile-search-btn text-reset position-absolute"
              aria-label="Search"
              id="mobileModalSearchButton"
              type="button"
            >
              <span className="fs-24 icon-search color-shades-white"></span>
            </button>
            <div className="d-flex mx-auto">
              <a
                href="https://renty.ae/"
                aria-label="Home page"
                className="header-home-link mx-auto bg-transparent"
              >
                <img
                  loading="lazy"
                  src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/logo-dark.svg"
                  alt="Renty.ae"
                  title="Renty.ae"
                />
              </a>
            </div>
            <button
              className="btn btn-medium bg-transparent btn-modal-close right text-reset position-absolute"
              aria-label="Account"
              data-toggle="modal"
              data-target="#modalMobileUserAccount"
              type="button"
            >
              <img
                src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/not-logged-in.png"
                alt="not-logged-in-profile-icon"
                title="Profile"
                height="24"
                width="24"
              />
            </button>
          </div>
        </header>
        <div
          className="modal fade default-modal"
          id="modalMenu"
          // tabindex="-1"
          //   style="display: none"
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
              <div
                className="modal-body p-0 bg-white flex-grow-1"
                id="modalMenuBody"
              >
                <div className="d-flex border-bottom border-shades-300 py-1 px-3 bg-brand-primary">
                  <div className="border-right-small border-brand-primary-lighter flex-grow-1">
                    <div
                      className="bg-transparent rounded-small color-shades-white border-0 pr-1 py-2 d-flex align-items-center"
                      data-current-city="dubai"
                      data-toggle="modal"
                      id="modalCities_btn"
                      role="button"
                      data-target="#modalCities"
                    >
                      <img
                        src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae.svg"
                        alt="location-icon"
                        title="Dubai"
                        height="12"
                        width="12"
                        className="mr-1 city-menu-icon"
                      />
                      <span className="fs-12 flex-grow-1">Dubai</span>
                      <i className="fs-18 icon-carret---down"></i>
                    </div>
                  </div>
                  <div className="border-right-small border-brand-primary-lighter">
                    <div
                      className="color-shades-white h-100 d-flex align-items-center pl-2 pr-2 py-2"
                      data-toggle="modal"
                      data-target="#modalLanguages"
                      role="button"
                    >
                      <span className="fs-12 icon-globe color-brand-accent mr-2"></span>
                      <span className="fs-12 mr-2">English</span>
                      <i className="fs-18 icon-carret---down"></i>
                    </div>
                  </div>
                  <div>
                    <div
                      className="color-shades-white h-100 d-flex align-items-center pl-2 py-2"
                      data-toggle="modal"
                      data-target="#modalCurrencies"
                      id="currency-dropdown-btn-mobile"
                      role="button"
                    >
                      <span className="fs-12 mr-2"> USD</span>
                      <i className="fs-18 icon-carret---down"></i>
                    </div>
                  </div>
                </div>
                <ul className="nav flex-column border-bottom border-shades-300 p-2">
                  <li className="nav-item">
                    <div
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#modalCategories"
                      id="modalCategories_btn"
                      role="button"
                    >
                      <span className="fs-18 icon-search mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black line-height-25">
                        Categories
                      </span>
                      <span className="color-shades-500 fs-18 icon-chevron-right ml-auto"></span>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#modalBodies"
                      id="modalBodies_btn"
                      role="button"
                    >
                      <span className="fs-18 icon-bodytype mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black line-height-25">
                        Body types
                      </span>
                      <span className="color-shades-500 fs-18 icon-chevron-right ml-auto"></span>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#modalByPeriod"
                      id="modalPeriod_btn"
                      role="button"
                    >
                      <span className="fs-18 icon-clock mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black line-height-25">
                        Rental by period
                      </span>
                      <span className="color-shades-500 fs-18 icon-chevron-right ml-auto"></span>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#modalAllBrands"
                      role="button"
                    >
                      <span className="fs-18 icon-star mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black">Brands</span>
                      <span className="color-shades-500 fs-18 icon-chevron-right ml-auto"></span>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#modalServices"
                      role="button"
                    >
                      <span className="fs-18 icon-driver mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black">Services</span>
                      <span className="color-shades-500 fs-18 icon-chevron-right ml-auto"></span>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#modalBuggyTours"
                      role="button"
                    >
                      <span className="fs-18 icon-helmet mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black">
                        Buggy tours
                      </span>
                      <span className="color-shades-500 fs-18 icon-chevron-right ml-auto"></span>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#modalYachts"
                      role="button"
                    >
                      <span className="fs-18 icon-ship mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black">Yachts</span>
                      <span className="color-shades-500 fs-18 icon-chevron-right ml-auto"></span>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://renty.ae/lease-to-own-calculator"
                      role="button"
                    >
                      <span className="fs-18 icon-shopping-cart mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black">
                        Lease to own
                      </span>
                      <sup className="pl-1 text-uppercase color-brand-accent">
                        NEW
                      </sup>
                    </a>
                  </li>
                  <li className="nav-item">
                    <div
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#modalPromotions"
                      role="button"
                    >
                      <span className="fs-18 icon-time mr-3 mr-lg-2 color-brand-accent"></span>
                      <span className="mr-1 color-shades-black">
                        Special offers
                      </span>
                      <sup className="pl-1 text-uppercase color-brand-accent">
                        NEW
                      </sup>
                      <span className="color-shades-500 fs-18 icon-chevron-right ml-auto"></span>
                    </div>
                  </li>
                </ul>
                <ul className="nav flex-column p-2">
                  <li className="nav-item">
                    <a
                      className="nav-link pl-3"
                      href="https://renty.ae/pages/support"
                    >
                      <span className="mr-1 color-shades-black line-height-25">
                        Support
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pl-3"
                      href="https://renty.ae/contact"
                    >
                      <span className="mr-1 color-shades-black line-height-25">
                        Contact us
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pl-3"
                      href="https://renty.ae/pages/terms-conditions"
                    >
                      <span className="mr-1 color-shades-black line-height-25">
                        Terms &amp; conditions
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pl-3"
                      href="https://renty.ae/pages/privacy-policy"
                    >
                      <span className="mr-1 color-shades-black line-height-25">
                        Privacy Policy
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalLanguages"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Language
                </span>
              </div>
              <div className="modal-body p-3 bg-white flex-grow-1">
                <div className="nav flex-column">
                  <a
                    className="nav-link link-disabled"
                    rel="alternate"
                    hrefLang="en"
                    href="https://renty.ae/"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      English
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    rel="alternate"
                    hrefLang="ae"
                    href="https://renty.ae/ae"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      &rlm;العربية&rlm;
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    rel="alternate"
                    hrefLang="ru"
                    href="https://renty.ae/ru"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      русский
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    rel="alternate"
                    hrefLang="fr"
                    href="https://renty.ae/fr"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      Français
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    rel="alternate"
                    hrefLang="de"
                    href="https://renty.ae/de"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      Deutsch
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    rel="alternate"
                    hrefLang="it"
                    href="https://renty.ae/it"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      Italiano
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    rel="alternate"
                    hrefLang="nl"
                    href="https://renty.ae/nl"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      Nederlands
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    rel="alternate"
                    hrefLang="es"
                    href="https://renty.ae/es"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      Español
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    rel="alternate"
                    hrefLang="zh"
                    href="https://renty.ae/cn"
                  >
                    <i className="icon-globe fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25 fs-12 line-height-20">
                      中文
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade default-modal"
          id="modalCategories"
          // tabindex="-1"
          //   style="display: none"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Categories
                </span>
              </div>
              <div className="modal-body p-3 bg-white flex-grow-1">
                <div className="nav flex-column">
                  <a
                    className="nav-link"
                    href="https://renty.ae/popular-car-rental"
                  >
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Popular car rental
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/types/electric-ev-cars"
                  >
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Electric (EV)
                    </span>
                  </a>
                  <a className="nav-link" href="https://renty.ae/types/luxury">
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Luxury
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/types/classic-cars-rental"
                  >
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Classic
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/types/business"
                  >
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Business
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/types/prestige"
                  >
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Prestige
                    </span>
                  </a>
                  <a className="nav-link" href="https://renty.ae/types/sport">
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Sports
                    </span>
                  </a>
                  <a className="nav-link" href="https://renty.ae/types/vip">
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      VIP
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/types/economy-cars"
                  >
                    <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Economy
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalBodies"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Body types
                </span>
              </div>
              <div className="modal-body p-3 bg-white flex-grow-1">
                <div className="nav flex-column">
                  <a className="nav-link" href="https://renty.ae/tour/buggy">
                    <span className="color-shades-black fs-14 line-height-25">
                      Buggy
                      <sup className="pl-1 text-uppercase color-brand-accent">
                        NEW
                      </sup>
                    </span>
                    <i className="ml-auto fs-24 icon-body-buggy color-shades-500"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/body-types/compact"
                  >
                    <span className="color-shades-black fs-14 line-height-25">
                      Compact
                    </span>
                    <i className="ml-auto fs-24 icon-body-compact color-shades-500"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/body-types/convertible"
                  >
                    <span className="color-shades-black fs-14 line-height-25">
                      Convertible
                    </span>
                    <i className="ml-auto fs-24 icon-body-convertible color-shades-500"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/body-types/coupe"
                  >
                    <span className="color-shades-black fs-14 line-height-25">
                      Coupe
                    </span>
                    <i className="ml-auto fs-24 icon-body-coupe color-shades-500"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/body-types/hatchback"
                  >
                    <span className="color-shades-black fs-14 line-height-25">
                      Hatchback
                    </span>
                    <i className="ml-auto fs-24 icon-body-hatchback color-shades-500"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/body-types/pickup"
                  >
                    <span className="color-shades-black fs-14 line-height-25">
                      Pickup
                    </span>
                    <i className="ml-auto fs-24 icon-body-pickup color-shades-500"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/body-types/sedan"
                  >
                    <span className="color-shades-black fs-14 line-height-25">
                      Sedan
                    </span>
                    <i className="ml-auto fs-24 icon-body-sedan color-shades-500"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/body-types/suv"
                  >
                    <span className="color-shades-black fs-14 line-height-25">
                      SUV
                    </span>
                    <i className="ml-auto fs-24 icon-body-suv color-shades-500"></i>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/body-types/van"
                  >
                    <span className="color-shades-black fs-14 line-height-25">
                      VAN
                    </span>
                    <i className="ml-auto fs-24 icon-body-van color-shades-500"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalByPeriod"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Rental by period
                </span>
              </div>
              <div className="modal-body p-3 bg-white flex-grow-1">
                <div className="nav flex-column">
                  <a
                    className="nav-link"
                    href="https://renty.ae/hourly-car-rental"
                  >
                    <i className="icon-clock fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Hourly car rental
                    </span>
                    <sup className="pl-1 text-uppercase color-brand-accent">
                      NEW
                    </sup>
                  </a>
                  <a className="nav-link" href="https://renty.ae/weekly/dubai">
                    <i className="icon-clock fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Weekly rental
                    </span>
                  </a>
                  <a className="nav-link" href="https://renty.ae/monthly/dubai">
                    <i className="icon-clock fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Monthly rental
                    </span>
                  </a>
                  <a
                    className="nav-link"
                    href="https://renty.ae/car-leasing/dubai"
                  >
                    <i className="icon-clock fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Car leasing
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalCurrencies"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Currency
                </span>
              </div>
              <div className="modal-body p-3 bg-white flex-grow-1">
                <div className="nav flex-column">
                  <span
                    className="nav-link"
                    // onclick="currencyChange('AED')"
                    role="button"
                  >
                    <i className="icon-16 fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      AED
                    </span>
                  </span>
                  <span
                    className="nav-link"
                    // onclick="currencyChange('EUR')"
                    role="button"
                  >
                    <i className="icon-16 fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      EUR
                    </span>
                  </span>
                  <span
                    className="nav-link disabled"
                    // onclick="currencyChange('USD')"
                    role="button"
                  >
                    <i className="icon-16 fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      USD
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalAllBrands"
          data-name="All brands"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  All brands
                </span>
              </div>
              <div className="modal-body p-0 bg-white flex-grow-1">
                <div className="align-items-center justify-content-between">
                  <div className="w-100 border-bottom border-shades-200 px-2">
                    <div className="form-group mb-0 d-flex align-items-center pl-2 brandsSearch">
                      <span className="fs-18 icon-search color-shades-black mr-2"></span>

                      <input
                        className="form-control border-0 search_brand"
                        placeholder="Search a brand ..."
                        type="text"
                      />

                      <button
                        // onclick="clearInput()"
                        className="btn btn-medium"
                        type="button"
                      >
                        <span className="fs-16 icon-x"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row px-2 py-3 p-lg-2 m-1 flex-wrap allBrands">
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Alfa Romeo"
                    data-brand-slug="alfa-romeo"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Alfa Romeo"
                      href="https://renty.ae/brands/alfa-romeo"
                    >
                      <i className="icon-30 icon-brand-alfa-romeo mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Alfa Romeo
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          3
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Aston Martin"
                    data-brand-slug="aston-martin"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Aston Martin"
                      href="https://renty.ae/brands/aston-martin"
                    >
                      <i className="icon-30 icon-brand-aston-martin mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Aston Martin
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          4
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Audi"
                    data-brand-slug="audi"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Audi"
                      href="https://renty.ae/brands/audi"
                    >
                      <i className="icon-30 icon-brand-audi mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Audi
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          151
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Bentley"
                    data-brand-slug="bentley"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Bentley"
                      href="https://renty.ae/brands/bentley"
                    >
                      <i className="icon-30 icon-brand-bentley mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Bentley
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          37
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="BMW"
                    data-brand-slug="bmw"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="BMW"
                      href="https://renty.ae/brands/bmw"
                    >
                      <i className="icon-30 icon-brand-bmw mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          BMW
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          137
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Cadillac"
                    data-brand-slug="cadillac"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Cadillac"
                      href="https://renty.ae/brands/cadillac"
                    >
                      <i className="icon-30 icon-brand-cadillac mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Cadillac
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          37
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Chevrolet"
                    data-brand-slug="chevrolet"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Chevrolet"
                      href="https://renty.ae/brands/chevrolet"
                    >
                      <i className="icon-30 icon-brand-chevrolet mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Chevrolet
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          145
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Dodge"
                    data-brand-slug="dodge"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Dodge"
                      href="https://renty.ae/brands/dodge"
                    >
                      <i className="icon-30 icon-brand-dodge mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Dodge
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          24
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Ferrari"
                    data-brand-slug="ferrari"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Ferrari"
                      href="https://renty.ae/brands/ferrari"
                    >
                      <i className="icon-30 icon-brand-ferrari mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Ferrari
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          52
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Fiat"
                    data-brand-slug="fiat"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Fiat"
                      href="https://renty.ae/brands/fiat"
                    >
                      <i className="icon-30 icon-brand-fiat mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Fiat
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          6
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Ford"
                    data-brand-slug="ford"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Ford"
                      href="https://renty.ae/brands/ford"
                    >
                      <i className="icon-30 icon-brand-ford mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Ford
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          54
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="GMC"
                    data-brand-slug="gmc"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="GMC"
                      href="https://renty.ae/brands/gmc"
                    >
                      <i className="icon-30 icon-brand-gmc mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          GMC
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          31
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Honda"
                    data-brand-slug="honda"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Honda"
                      href="https://renty.ae/brands/honda"
                    >
                      <i className="icon-30 icon-brand-honda mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Honda
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          6
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Hyundai"
                    data-brand-slug="hyundai"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Hyundai"
                      href="https://renty.ae/brands/hyundai"
                    >
                      <i className="icon-30 icon-brand-hyundai mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Hyundai
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          125
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Infiniti"
                    data-brand-slug="infiniti"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Infiniti"
                      href="https://renty.ae/brands/infiniti"
                    >
                      <i className="icon-30 icon-brand-infiniti mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Infiniti
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          16
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="JAC"
                    data-brand-slug="jac"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="JAC"
                      href="https://renty.ae/brands/jac"
                    >
                      <i className="icon-30 icon-brand-jac mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          JAC
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          10
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Jaguar"
                    data-brand-slug="jaguar"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Jaguar"
                      href="https://renty.ae/brands/jaguar"
                    >
                      <i className="icon-30 icon-brand-jaguar mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Jaguar
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          9
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Jeep"
                    data-brand-slug="jeep"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Jeep"
                      href="https://renty.ae/brands/jeep"
                    >
                      <i className="icon-30 icon-brand-jeep mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Jeep
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          11
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="KIA"
                    data-brand-slug="kia"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="KIA"
                      href="https://renty.ae/brands/kia"
                    >
                      <i className="icon-30 icon-brand-kia mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          KIA
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          117
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Lamborghini"
                    data-brand-slug="lamborghini"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Lamborghini"
                      href="https://renty.ae/brands/lamborghini"
                    >
                      <i className="icon-30 icon-brand-lamborghini mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Lamborghini
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          146
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Lexus"
                    data-brand-slug="lexus"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Lexus"
                      href="https://renty.ae/brands/lexus"
                    >
                      <i className="icon-30 icon-brand-lexus mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Lexus
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          15
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Lincoln"
                    data-brand-slug="lincoln"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Lincoln"
                      href="https://renty.ae/brands/lincoln"
                    >
                      <i className="icon-30 icon-brand-lincoln mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Lincoln
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          1
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Maserati"
                    data-brand-slug="maserati"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Maserati"
                      href="https://renty.ae/brands/maserati"
                    >
                      <i className="icon-30 icon-brand-maserati mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Maserati
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          13
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Mazda"
                    data-brand-slug="mazda"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Mazda"
                      href="https://renty.ae/brands/mazda"
                    >
                      <i className="icon-30 icon-brand-mazda mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Mazda
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          49
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="McLaren"
                    data-brand-slug="mclaren"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="McLaren"
                      href="https://renty.ae/brands/mclaren"
                    >
                      <i className="icon-30 icon-brand-mclaren mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          McLaren
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          28
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Mercedes"
                    data-brand-slug="mercedes"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Mercedes"
                      href="https://renty.ae/brands/mercedes"
                    >
                      <i className="icon-30 icon-brand-mercedes mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Mercedes
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          349
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="MG"
                    data-brand-slug="mg"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="MG"
                      href="https://renty.ae/brands/mg"
                    >
                      <i className="icon-30 icon-brand-mg mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          MG
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          6
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Mini"
                    data-brand-slug="mini"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Mini"
                      href="https://renty.ae/brands/mini"
                    >
                      <i className="icon-30 icon-brand-mini mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Mini
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          23
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Mitsubishi"
                    data-brand-slug="mitsubishi"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Mitsubishi"
                      href="https://renty.ae/brands/mitsubishi"
                    >
                      <i className="icon-30 icon-brand-mitsubishi mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Mitsubishi
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          17
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Nissan"
                    data-brand-slug="nissan"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Nissan"
                      href="https://renty.ae/brands/nissan"
                    >
                      <i className="icon-30 icon-brand-nissan mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Nissan
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          155
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Peugeot"
                    data-brand-slug="peugeot"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Peugeot"
                      href="https://renty.ae/brands/peugeot"
                    >
                      <i className="icon-30 icon-brand-peugeot mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Peugeot
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          2
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Porsche"
                    data-brand-slug="porsche"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Porsche"
                      href="https://renty.ae/brands/porsche"
                    >
                      <i className="icon-30 icon-brand-porsche mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Porsche
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          69
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Range Rover"
                    data-brand-slug="range-rover"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Range Rover"
                      href="https://renty.ae/brands/range-rover"
                    >
                      <i className="icon-30 icon-brand-range-rover mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Range Rover
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          153
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Renault"
                    data-brand-slug="renault"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Renault"
                      href="https://renty.ae/brands/renault"
                    >
                      <i className="icon-30 icon-brand-renault mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Renault
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          11
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Rolls Royce"
                    data-brand-slug="rolls-royce"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Rolls Royce"
                      href="https://renty.ae/brands/rolls-royce"
                    >
                      <i className="icon-30 icon-brand-rolls-royce mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Rolls Royce
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          110
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Suzuki"
                    data-brand-slug="suzuki"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Suzuki"
                      href="https://renty.ae/brands/suzuki"
                    >
                      <i className="icon-30 icon-brand-suzuki mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Suzuki
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          12
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Tesla"
                    data-brand-slug="tesla"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Tesla"
                      href="https://renty.ae/brands/tesla"
                    >
                      <i className="icon-30 icon-brand-tesla mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Tesla
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          17
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Toyota"
                    data-brand-slug="toyota"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Toyota"
                      href="https://renty.ae/brands/toyota"
                    >
                      <i className="icon-30 icon-brand-toyota mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Toyota
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          81
                        </span>
                      </div>
                    </a>
                  </div>
                  <div
                    className="col-12 col-sm-4 col-md-3 col-lg-2 px-1 mb-1 brandname"
                    data-brand="Volkswagen"
                    data-brand-slug="volkswagen"
                  >
                    <a
                      className="d-flex p-2 align-items-center rounded-small"
                      title="Volkswagen"
                      href="https://renty.ae/brands/volkswagen"
                    >
                      <i className="icon-30 icon-brand-volkswagen mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Volkswagen
                        </span>
                        <span className="fs-14 color-shades-500 bg-transparent">
                          10
                        </span>
                      </div>
                    </a>
                  </div>

                  <div
                    className="col-12 brand-no-results"
                    // style="display: none"
                  >
                    <div className="d-flex py-2 px-1 align-items-center rounded-small">
                      <i className="fs-24 icon-search mr-2 flex-shrink-0"></i>
                      <div className="ml-1">
                        <span className="fs-14 color-shades-black">
                          No results found. Please change your request.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalServices"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-clowhatsappApiModalse left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Services
                </span>
              </div>
              <div className="modal-body p-3 bg-white flex-grow-1">
                <a
                  className="nav-link"
                  href="https://renty.ae/car-leasing/dubai"
                >
                  <i className="icon-clock fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    Car leasing
                  </span>
                  <sup className="pl-1 text-uppercase color-brand-accent">
                    NEW
                  </sup>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/chauffeur-service/dubai"
                >
                  <i className="icon-driver fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    Chauffeur Service
                  </span>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/airport-transfer/dubai"
                >
                  <i className="icon-search fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    Airport Transfer
                  </span>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/car-towing/dubai"
                >
                  <i className="icon-alert-octagon fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    Car towing
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalBuggyTours"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Buggy tours
                </span>
              </div>
              <div className="modal-body p-3 bg-white flex-grow-1">
                <a className="nav-link" href="https://renty.ae/tour/buggy">
                  <i className="icon-helmet fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    All tours
                  </span>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/tour/buggy#early-bird"
                >
                  <i className="icon-helmet fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    Early Bird
                  </span>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/tour/buggy#1-seater"
                >
                  <i className="icon-helmet fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    1-seater
                  </span>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/tour/buggy#2-seater"
                >
                  <i className="icon-helmet fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    2-seater
                  </span>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/tour/buggy#4-seater"
                >
                  <i className="icon-helmet fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    4-seater
                  </span>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/tour/buggy#night-tours"
                >
                  <i className="icon-helmet fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    Night tours
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalPromotions"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Special offers
                </span>
              </div>

              <div className="modal-body p-3 bg-white flex-grow-1">
                <a
                  className="nav-link"
                  href="https://renty.ae/all-special-offers"
                >
                  <i className="icon-time fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    All special offers
                  </span>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/all-special-offers/new-arrivals"
                >
                  <i className="icon-time fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    🌟 NEW ARRIVALS
                  </span>
                  <sup className="pl-1 text-uppercase color-brand-accent">
                    NEW
                  </sup>
                </a>
                <a
                  className="nav-link"
                  href="https://renty.ae/all-special-offers/exclusive"
                >
                  <i className="icon-time fs-18 color-shades-500 mr-3"></i>
                  <span className="color-shades-black fs-14 line-height-25">
                    👑 Exclusive
                  </span>
                  <sup className="pl-1 text-uppercase color-brand-accent">
                    NEW
                  </sup>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          //       style="
          //     opacity: 0;
          //     pointer-events: none;
          //     position: fixed;
          //     left: 50px;
          //     top: 18px;
          //   "
          className="js_car_mobile-search-container d-lg-none"
        >
          <form>
            <input
              type="text"
              className="border-0 search-input fs-14 color-shades-black w-100"
              id="js_car_mobile-search-1"
              //   style="z-index: 1051"
              placeholder="Search"
            />
          </form>
        </div>
        <div aria-hidden="true" className="modal fade" id="modalMobileSearch">
          <div className="modal-dialog modal-lg modal-full fixed-top">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header align-items-center align-items-center rounded-0 color-shades-white py-0 pr-5">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close position-absolute right"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-18 icon-x"></span>
                </button>
                <div className="d-flex align-items-center w-100 mobile-search-input-container">
                  <button
                    data-dismiss="modal"
                    type="button"
                    className="btn btn-cleared btn-modal-close btn-back-mobile-search btn-medium text-left justify-content-start"
                    // style="display: none"
                  >
                    <i className="fs-18 icon-chevron-left color-brand-black"></i>
                  </button>
                  <button className="btn btn-medium text-left justify-content-start">
                    <i className="fs-18 icon-search icon-search-input color-shades-500"></i>
                  </button>

                  <form className="m-0 p-0 w-100">
                    <div
                      className="easy-autocomplete eac-square"
                      //   style="width: 0px"
                    >
                      <input
                        type="text"
                        className="border-0 search-input fs-14 color-shades-black w-100"
                        id="js_car_mobile-search"
                        name="search_mobile"
                        placeholder="Search"
                      />
                      <div
                        className="easy-autocomplete-container"
                        id="eac-container-js_car_mobile-search"
                      >
                        <ul></ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="modal-body p-0" id="modalMobileSearchBody">
                <div className="bg-white position-fixed-bottom p-3 search-bottom-block w-100 border-top border-shades-300">
                  <div className="bg-shades-white d-flex flex-column rounded-medium">
                    <div className="my-3">
                      <div className="d-flex align-items-center">
                        <i className="fs-16 color-shades-500 icon-search mr-2"></i>
                        <span className="fs-14 color-shades-black font-weight-semibold">
                          Top searches
                        </span>
                      </div>
                      <div className="gap-col-5 d-flex mt-2 overflow-auto pb-2 mobile-search-suggests">
                        <a
                          href="https://renty.ae/types/luxury"
                          className="mobile-search-item-suggest text-nowrap border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small"
                        >
                          Luxury cars
                        </a>
                        <a
                          href="https://renty.ae/types/sport"
                          className="mobile-search-item-suggest text-nowrap border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small"
                        >
                          Sports cars
                        </a>
                        <a
                          className="mobile-search-item-suggest text-nowrap border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small"
                          href="https://renty.ae/monthly/dubai"
                        >
                          Monthly rental
                        </a>
                        <a
                          href="https://renty.ae/body-types/suv"
                          className="mobile-search-item-suggest text-nowrap border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small"
                        >
                          SUV
                        </a>
                        <a
                          className="mobile-search-item-suggest text-nowrap border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small"
                          href="https://renty.ae/car-leasing/dubai"
                        >
                          Car leasing
                        </a>
                        <a
                          className="mobile-search-item-suggest text-nowrap border-shades-200 font-weight-normal color-shades-black border py-1 px-2 fs-12 rounded-small"
                          href="https://renty.ae/hourly-car-rental"
                        >
                          Hourly car rental
                        </a>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-center">
                        <i className="fs-16 color-shades-500 icon-trending-up mr-2"></i>
                        <span className="fs-14 color-shades-black font-weight-semibold">
                          Trending brands
                        </span>
                      </div>
                      <div className="gap-col-5 gap-row-5 d-flex mt-2 overflow-auto pb-2 mobile-search-suggests">
                        <a
                          className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                          href="https://renty.ae/brands/audi"
                        >
                          <i className="d-block icon-30 icon-brand-audi mr-2"></i>
                          Audi
                        </a>
                        <a
                          className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                          href="https://renty.ae/brands/bmw"
                        >
                          <i className="d-block icon-30 icon-brand-bmw mr-2"></i>
                          BMW
                        </a>
                        <a
                          className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                          href="https://renty.ae/brands/ferrari"
                        >
                          <i className="d-block icon-30 icon-brand-ferrari mr-2"></i>
                          Ferrari
                        </a>
                        <a
                          className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                          href="https://renty.ae/brands/lamborghini"
                        >
                          <i className="d-block icon-30 icon-brand-lamborghini mr-2"></i>
                          Lamborghini
                        </a>
                        <a
                          className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                          href="https://renty.ae/brands/mercedes"
                        >
                          <i className="d-block icon-30 icon-brand-mercedes mr-2"></i>
                          Mercedes
                        </a>
                        <a
                          className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                          href="https://renty.ae/brands/porsche"
                        >
                          <i className="d-block icon-30 icon-brand-porsche mr-2"></i>
                          Porsche
                        </a>
                        <a
                          className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                          href="https://renty.ae/brands/range-rover"
                        >
                          <i className="d-block icon-30 icon-brand-range-rover mr-2"></i>
                          Range Rover
                        </a>
                        <a
                          className="text-nowrap border-shades-200 border py-1 px-2 rounded-small d-flex align-items-center color-shades-black fs-12 font-weight-normal"
                          href="https://renty.ae/brands/rolls-royce"
                        >
                          <i className="d-block icon-30 icon-brand-rolls-royce mr-2"></i>
                          Rolls Royce
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-results-not-found d-none">
          <div className="desktop-results-not-found">
            <ul className="h-100 d-flex align-items-center justify-content-center bg-white">
              <li className="d-flex flex-column align-items-center p-3 pl-lg-5">
                <span className="icon-search fs-24 mb-3 color-shades-500"></span>
                <span className="fs-14 color-shades-500 font-weight-normal mb-2 text-center">
                  No results found. Please change your request.
                </span>
              </li>
            </ul>
          </div>

          <div className="desktop-results-start">
            <ul className="h-100 d-flex align-items-center justify-content-center bg-white">
              <li className="d-flex flex-column align-items-center p-2">
                <span className="fs-14 color-shades-500 font-weight-normal">
                  Start typing to see suggestions
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          aria-hidden="true"
          aria-labelledby="modalPolicies"
          className="modal fade modal-policies"
          id="modalPolicies"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-full">
            <div className="modal-content border-0 rounded-0 h-100 h-100">
              <div className="modal-header modal-header--sticky modal-header modal-header--sticky--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-arrow-left d-none d-lg-block"></span>
                  <span className="fs-24 icon-x d-block d-lg-none"></span>
                </button>
                <span
                  className="h5 font-weight-normal mx-auto"
                  id="modalPoliciesLabel"
                >
                  Policy
                </span>
              </div>
              <div
                className="modal-body p-3 bg-white flex-grow-1 bg-white flex-grow-1"
                id="policyBody"
              ></div>
              <div className="modal-footer modal-footer--sticky d-flex border-top border-shades-300 rounded-0 px-4 bg-white pt-2 pb-2">
                <div className="px-2 m-0 d-flex justify-content-center flex-grow-1 py-1">
                  <button
                    className="btn btn-large btn-brand-accent px-lg-5 flex-grow-1 flex-lg-grow-0"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="font-weight-bold text-uppercase">
                      {" "}
                      Close{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade modal-whatsapp"
          id="whatsappApiModal"
          // tabindex="-1"
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
        <div
          aria-hidden="true"
          className="modal fade default-modal"
          id="modalMobileUserAccount"
          data-name="Account"
          // tabindex="-1"
        >
          <div className="modal-dialog modal-lg modal-full">
            <div className="modal-content border-0 rounded-0 h-100">
              <div className="modal-header modal-header--sticky align-items-center bg-brand-primary-darker border-0 rounded-0 color-shades-white">
                <button
                  aria-label="Close"
                  className="btn btn-medium btn-modal-close left text-reset position-absolute"
                  data-dismiss="modal"
                  type="button"
                >
                  <span className="fs-24 icon-chevron-left"></span>
                </button>
                <span className="fs-16 font-weight-semibold mx-auto">
                  Account
                </span>
              </div>
              <div className="modal-body p-3 bg-white flex-grow-1">
                <div className="nav flex-column">
                  <span
                    className="nav-link"
                    // onclick="goToCar(event, 'https://renty.ae/login')"
                  >
                    <i className="icon-log-in fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Log in
                    </span>
                  </span>
                  <span
                    className="nav-link"
                    // onclick="goToCar(event, 'https://renty.ae/register')"
                  >
                    <i className="icon-book-open fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      Sign up
                    </span>
                  </span>
                  <div className="border-top border-shades-300 my-1"></div>
                  <a
                    className="nav-link"
                    href="https://renty.ae/pages/support#partners_rc"
                  >
                    <i className="icon-about-us-partners fs-18 color-shades-500 mr-3"></i>
                    <span className="color-shades-black fs-14 line-height-25">
                      For partnership
                    </span>
                  </a>
                </div>
              </div>
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
          //    style="display: block; opacity: 1; transition: opacity 0.3s"
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
              src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/home-page-section-sm.jpg"
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
            <div className="d-lg-none d-flex mb-2 justify-content-center home-search-dropdown-mobile-section align-items-center">
              <div className="default-dropdown-container">
                <div
                  className="bg-transparent rounded-small color-shades-white border-0 px-0 d-flex align-items-center justify-content-center"
                  data-toggle="dropdown"
                  role="button"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae.svg"
                      alt="location-icon"
                      title="Dubai"
                      height="14"
                      width="14"
                      className="mr-2 city-menu-icon"
                    />
                    <span
                      className="fs-14 font-weight-semibold lh-20 color-shades-white text-truncate home-location-dropdown-select"
                      data-city-slug="dubai"
                    >
                      Dubai
                    </span>
                  </div>
                  <i className="fs-20 icon-chevron-down color-brand-accent mx-2 font-weight-bold"></i>
                </div>
                <div
                  aria-labelledby="cities-dropdown-btn"
                  className="dropdown-menu dropdown-menu-left default-dropdown dropdown-city-location-switcher-header home-location-dropdown"
                >
                  <span
                    className="dropdown-item fs-12 text-truncate disabled"
                    data-city-slug="dubai"
                  >
                    <img
                      src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae(1).svg"
                      alt="location-icon"
                      height="14"
                      title="Dubai"
                      width="14"
                      className="mr-1 city-menu-icon"
                      loading="lazy"
                    />
                    Dubai
                  </span>
                  <span
                    className="dropdown-item fs-12 text-truncate"
                    data-city-slug="abu-dhabi"
                  >
                    <img
                      src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae(1).svg"
                      alt="location-icon"
                      height="14"
                      title="Dubai"
                      width="14"
                      className="mr-1 city-menu-icon"
                      loading="lazy"
                    />
                    Abu Dhabi
                  </span>
                  <span
                    className="dropdown-item fs-12 text-truncate"
                    data-city-slug="sharjah"
                  >
                    <img
                      src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae(1).svg"
                      alt="location-icon"
                      height="14"
                      title="Dubai"
                      width="14"
                      className="mr-1 city-menu-icon"
                      loading="lazy"
                    />
                    Sharjah
                  </span>
                  <span
                    className="dropdown-item fs-12 text-truncate"
                    data-city-slug="ras-al-khaimah"
                  >
                    <img
                      src="./Rent a Car in Dubai, Car Rental Service - Renty.ae_files/ae(1).svg"
                      alt="location-icon"
                      height="14"
                      title="Dubai"
                      width="14"
                      className="mr-1 city-menu-icon"
                      loading="lazy"
                    />
                    Ras Al Khaimah
                  </span>
                </div>
              </div>
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

        <div className="bg-shades-white p-0 default-list-filter">
          <div
            aria-hidden="true"
            className="modal fade"
            id="modalSearch"
            // tabindex="-1"
          >
            <div className="modal-dialog modal-lg modal-right">
              <form
                className="filter-modal-form d-none"
                action="https://renty.ae/"
                method="get"
              >
                <input type="hidden" name="type" value="" />
                <input type="hidden" name="body" value="" />
                <input type="hidden" name="brand" value="" />
                <input type="hidden" name="model" value="" />
                <input
                  type="hidden"
                  name="price"
                  data-min-max="16,1917"
                  value=""
                />

                <input type="hidden" name="seats" value="" />
                <input type="hidden" name="engine" value="" />
                <input type="hidden" name="age" value="" />
                <input type="hidden" name="deposit" value="no" />
                <input type="hidden" name="company" value="" />
                <input
                  type="hidden"
                  className="city_id"
                  name="city_id"
                  value="1"
                />
                <input type="hidden" className="lang" name="lang" value="en" />
                <input
                  type="hidden"
                  className="base_url"
                  name="base_url"
                  value="https://renty.ae"
                />
                <input type="hidden" name="from" value="" />
                <input type="hidden" name="to" value="" />
              </form>
              <div
                className="d-none"
                data-translate="select_brand"
                data-value="Select brand"
              ></div>
              <div
                className="d-none"
                data-translate="select_model"
                data-value="Select model"
              ></div>
              <div
                className="d-none"
                data-translate="all_models"
                data-value="All models"
              ></div>
              <div
                className="d-none"
                data-translate="all_brands"
                data-value="All brands"
              ></div>

              <div className="modal-content border-0 rounded-0 filter_modal_content h-100">
                <div className="modal-header bg-white modal-header--sticky align-items-center rounded-0 color-shades-black border-bottom border-shades-200">
                  <span
                    className="font-weight-semibold fs-18 mx-auto"
                    id="modalAllBrandsLabel"
                  >
                    Filter
                  </span>
                  <button
                    aria-label="Close"
                    className="btn btn-medium btn-modal-close left text-reset position-absolute"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span className="fs-24 icon-x"></span>
                  </button>
                  <button
                    className="btn btn-medium btn-modal-close right text-reset position-absolute d-lg-none btn-clear-all"
                    type="button"
                  >
                    <span className="fs-24 icon-rotate-ccw"></span>
                  </button>
                </div>
                <div className="modal-body pt-4 pb-3 px-3 px-lg-4 bg-white flex-grow-1 overflow-auto d-flex align-items-center justify-content-center filters-modal-loader">
                  <div className="loader loader-blue"></div>
                </div>
                <div
                  className="modal-body pt-3 pb-3 px-3 px-lg-4 bg-white flex-grow-1 overflow-auto d-none"
                  //   style="max-height: 100vh"
                  id="daterange-plp"
                >
                  <div className="px-lg-2">
                    <div>
                      <div className="mb-0 py-3 py-lg-0 py-0 border-shades-200 border-bottom border-lg-0 mb-lg-4">
                        <div className="filter-type-label filter-label mb-0 mb-lg-2 d-flex justify-content-between align-items-center">
                          <span className="fs-14 font-weight-semibold">
                            Category
                          </span>
                          <div className="filter-select-value d-flex align-items-center d-lg-none">
                            <span className="fs-14 color-shades-500 category-placeholder">
                              All categories
                            </span>
                            <span
                              className="fs-14 color-shades-black font-weight-semibold category-value"
                              data-value=""
                              //   style="display: none"
                            ></span>
                            <span className="fs-16 ml-2 icon-chevron-down color-brand-accent"></span>
                          </div>
                        </div>
                        <div
                          className="filter-values filter-type-values mt-2 d-lg-block"
                          //   style="display: none"
                        >
                          <div className="d-flex flex-wrap gap-row-5 gap-col-5">
                            <div
                              data-value=""
                              className="filter-item filter-empty d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer active"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                All
                              </span>
                            </div>
                            <div
                              data-name="Business"
                              data-value="business"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Business
                              </span>
                            </div>
                            <div
                              data-name="Classic"
                              data-value="classic-cars-rental"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer disabled"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Classic
                              </span>
                            </div>
                            <div
                              data-name="Economy"
                              data-value="economy-cars"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Economy
                              </span>
                            </div>
                            <div
                              data-name="Electric (EV)"
                              data-value="electric-ev-cars"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Electric (EV)
                              </span>
                            </div>
                            <div
                              data-name="Luxury"
                              data-value="luxury"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Luxury
                              </span>
                            </div>
                            <div
                              data-name="Prestige"
                              data-value="prestige"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Prestige
                              </span>
                            </div>
                            <div
                              data-name="Sports"
                              data-value="sport"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Sports
                              </span>
                            </div>
                            <div
                              data-name="VIP"
                              data-value="vip"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                VIP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-0 py-3 py-lg-0 py-0 border-shades-200 border-bottom border-lg-0 mb-lg-4">
                        <div className="filter-label filter-body-label mb-0 mb-lg-2 d-flex justify-content-between align-items-center">
                          <span className="fs-14 font-weight-semibold">
                            Body type
                          </span>
                          <div className="filter-select-value d-flex align-items-center d-lg-none">
                            <span className="fs-14 color-shades-500 category-placeholder">
                              All body types
                            </span>
                            <span
                              className="fs-14 color-shades-black font-weight-semibold category-value"
                              data-value=""
                              //   style="display: none"
                            ></span>
                            <span className="fs-16 ml-2 icon-chevron-down color-brand-accent"></span>
                          </div>
                        </div>
                        <div
                          className="filter-values filter-body-values mt-2 d-lg-block"
                          //   style="display: none"
                        >
                          <div className="d-flex flex-wrap gap-row-5 gap-col-5">
                            <div
                              data-name="All body types"
                              data-value=""
                              className="filter-item filter-empty d-flex justify-content-center rounded-small p-2 cursor-pointer border-shades-200 border-all flex-column align-items-center active"
                            >
                              <i className="fs-24 icon-body-any color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                All
                              </span>
                            </div>

                            <div
                              data-name="Compact"
                              data-value="compact"
                              className="filter-item d-flex flex-column align-items-center p-2 rounded-medium border-shades-200 border-all cursor-pointer"
                            >
                              <i className="fs-24 icon-body-compact color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black text-center">
                                Compact
                              </span>
                            </div>
                            <div
                              data-name="Convertible"
                              data-value="convertible"
                              className="filter-item d-flex flex-column align-items-center p-2 rounded-medium border-shades-200 border-all cursor-pointer"
                            >
                              <i className="fs-24 icon-body-convertible color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black text-center">
                                Convertible
                              </span>
                            </div>
                            <div
                              data-name="Coupe"
                              data-value="coupe"
                              className="filter-item d-flex flex-column align-items-center p-2 rounded-medium border-shades-200 border-all cursor-pointer"
                            >
                              <i className="fs-24 icon-body-coupe color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black text-center">
                                Coupe
                              </span>
                            </div>
                            <div
                              data-name="Hatchback"
                              data-value="hatchback"
                              className="filter-item d-flex flex-column align-items-center p-2 rounded-medium border-shades-200 border-all cursor-pointer"
                            >
                              <i className="fs-24 icon-body-hatchback color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black text-center">
                                Hatchback
                              </span>
                            </div>
                            <div
                              data-name="Pickup"
                              data-value="pickup"
                              className="filter-item d-flex flex-column align-items-center p-2 rounded-medium border-shades-200 border-all cursor-pointer disabled"
                            >
                              <i className="fs-24 icon-body-pickup color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black text-center">
                                Pickup
                              </span>
                            </div>
                            <div
                              data-name="Sedan"
                              data-value="sedan"
                              className="filter-item d-flex flex-column align-items-center p-2 rounded-medium border-shades-200 border-all cursor-pointer"
                            >
                              <i className="fs-24 icon-body-sedan color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black text-center">
                                Sedan
                              </span>
                            </div>
                            <div
                              data-name="SUV"
                              data-value="suv"
                              className="filter-item d-flex flex-column align-items-center p-2 rounded-medium border-shades-200 border-all cursor-pointer"
                            >
                              <i className="fs-24 icon-body-suv color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black text-center">
                                SUV
                              </span>
                            </div>
                            <div
                              data-name="VAN"
                              data-value="van"
                              className="filter-item d-flex flex-column align-items-center p-2 rounded-medium border-shades-200 border-all cursor-pointer"
                            >
                              <i className="fs-24 icon-body-van color-shades-500"></i>

                              <span className="fs-12 letter-spacing-0_2 color-shades-black text-center">
                                VAN
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-0 py-3 py-lg-0 border-shades-200 border-bottom border-lg-0 mb-lg-4">
                        <div className="mb-2">
                          <span className="fs-14 font-weight-semibold">
                            Brand and model
                          </span>
                        </div>
                        <div className="filter-selects d-flex flex-wrap border-shades-200 border-left border-right border-top border-bottom rounded-small">
                          <div className="mb-0 w-50 border-shades-200 border-right d-flex fs-14">
                            <div
                              className="cursor-pointer filters-selected-brand w-100 d-flex justify-content-between align-items-center mb-0 py-2 px-2"
                              //   style="min-height: 46px"
                            >
                              <div className="d-flex align-items-center">
                                <i className=""></i>

                                <span className="pl-2"> All brands </span>
                              </div>
                              <i className="fs-18 icon-chevron-down color-shades-500"></i>
                            </div>
                          </div>

                          <div className="w-50 mb-0 border-0 d-flex flex-grow-1 fs-14">
                            <div className="filters-selected-model w-100 d-flex justify-content-between align-items-center mb-0 py-2 px-2 disabled">
                              <div className="d-flex align-items-center">
                                <span className="pl-2"> All models </span>
                              </div>
                              <i className="fs-18 icon-chevron-down color-shades-500"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-0 py-3 py-lg-0 border-shades-200 border-bottom border-lg-0 mb-lg-4">
                        <div className="mb-2 d-flex justify-content-between">
                          <span className="fs-14 font-weight-semibold d-flex align-items-center">
                            Price per day
                          </span>
                          <div className="d-flex font-weight-semibold fs-14 d-flex align-items-center">
                            <div className="price-input">
                              <span className="price-range-min-val">16</span>—
                              <span className="price-range-max-val">1917</span>
                            </div>
                            <div className="dropdown default-dropdown-container">
                              <button
                                className="btn fs-14 color-brand-accent"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span> USD </span>
                                <i className="fs-14 icon-chevron-down"></i>
                              </button>
                              <div
                                className="dropdown-menu default-dropdown mb-0"
                                // style="min-width: auto"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a
                                  className="dropdown-item fs-14 color-shades-black change-currency-btn"
                                  data-value="USD"
                                  data-main="1"
                                  role="button"
                                  //   style="display: none"
                                >
                                  USD
                                </a>

                                <a
                                  className="dropdown-item fs-14 color-shades-black change-currency-btn"
                                  data-value="aed"
                                  data-main="0"
                                  role="button"
                                >
                                  AED
                                </a>
                                <a
                                  className="dropdown-item fs-14 color-shades-black change-currency-btn"
                                  data-value="eur"
                                  data-main="0"
                                  role="button"
                                >
                                  EUR
                                </a>
                                <a
                                  className="dropdown-item fs-14 color-shades-black change-currency-btn disabled"
                                  data-value="usd"
                                  data-main="0"
                                  role="button"
                                >
                                  USD
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex flex-wrap bg-shades-100 p-3 px-4 px-lg-3 rounded-small overflow-hidden">
                          <div className="filter-content-item w-100 slider-container">
                            <div
                              id="slider-filter"
                              data-min="16"
                              data-max="1917"
                              data-min-val="16"
                              data-max-val="1917"
                              className="default-noui-slider"
                            ></div>
                          </div>
                        </div>
                        <div className="d-flex mt-2 gap-col-5">
                          <div
                            data-value="0"
                            className="filter-item filter-deposit filter-empty w-50 d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                          >
                            <span className="fs-12 letter-spacing-0_2 color-shades-black">
                              Any deposit
                            </span>
                          </div>
                          <div
                            data-value="no"
                            className="filter-item filter-empty filter-deposit w-50 d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer active"
                          >
                            <span className="fs-12 letter-spacing-0_2 color-shades-black">
                              No deposit needed
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-0 py-3 py-lg-0 border-shades-200 border-bottom border-lg-0 mb-lg-4">
                        <div className="filter-label filter-seats-label mb-0 mb-lg-2 d-flex justify-content-between align-items-center">
                          <span className="fs-14 font-weight-semibold text-capitalize">
                            seats
                          </span>
                          <div className="filter-select-value d-flex align-items-center d-lg-none">
                            <span className="fs-14 color-shades-500 category-placeholder">
                              All
                            </span>
                            <span
                              className="fs-14 color-shades-black font-weight-semibold category-value"
                              data-value=""
                              //   style="display: none"
                            ></span>
                            <span className="fs-16 ml-2 icon-chevron-down color-brand-accent"></span>
                          </div>
                        </div>

                        <div
                          className="filter-values filter-seats-values mt-2 d-lg-block"
                          //   style="display: none"
                        >
                          <div className="d-flex flex-wrap gap-row-5 gap-col-5">
                            <div
                              data-value=""
                              className="filter-item filter-empty d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer active"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                All
                              </span>
                            </div>
                            <div
                              data-name="2"
                              data-value="2"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                2
                              </span>
                            </div>
                            <div
                              data-name="4"
                              data-value="4"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                4
                              </span>
                            </div>
                            <div
                              data-name="5"
                              data-value="5"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                5
                              </span>
                            </div>
                            <div
                              data-name="6"
                              data-value="6"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                6
                              </span>
                            </div>
                            <div
                              data-name="7"
                              data-value="7"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                7
                              </span>
                            </div>
                            <div
                              data-name="8"
                              data-value="8"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                8
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-0 py-3 py-lg-0 border-shades-200 border-bottom border-lg-0 mb-lg-4">
                        <div className="filter-label filter-engine-label mb-0 mb-lg-2 d-flex justify-content-between align-items-center">
                          <span className="fs-14 font-weight-semibold">
                            Fuel type
                          </span>
                          <div className="filter-select-value d-flex align-items-center d-lg-none">
                            <span className="fs-14 color-shades-500 category-placeholder">
                              All
                            </span>
                            <span
                              className="fs-14 color-shades-black font-weight-semibold category-value"
                              data-value=""
                              //   style="display: none"
                            ></span>
                            <span className="fs-16 ml-2 icon-chevron-down color-brand-accent"></span>
                          </div>
                        </div>

                        <div
                          className="filter-values filter-engine-values mt-2 d-lg-block"
                          //   style="display: none"
                        >
                          <div className="d-flex flex-wrap gap-row-5 gap-col-5">
                            <div
                              data-value=""
                              className="filter-item filter-empty d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer active"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                All
                              </span>
                            </div>
                            <div
                              data-name="Electric"
                              data-value="electric"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Electric
                              </span>
                            </div>
                            <div
                              data-name="Hybrid"
                              data-value="hybrid"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Hybrid
                              </span>
                            </div>
                            <div
                              data-name="Petrol"
                              data-value="petrol"
                              className="filter-item d-flex justify-content-center rounded-small bg-shades-100 p-2 cursor-pointer"
                            >
                              <span className="fs-12 letter-spacing-0_2 color-shades-black">
                                Petrol
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        id="filter-datepicker-container"
                        className="mb-0 py-3 py-lg-0 border-shades-200 border-bottom border-lg-0 mb-lg-4"
                      >
                        <span className="fs-14 font-weight-semibold d-block pb-2">
                          Rental period
                        </span>
                        <div
                          className="datetime-picker-block mt-1 mb-3 mt-lg-2 mb-lg-4 w-100"
                          id="filter-picker"
                          data-picker-id="filter"
                          data-is-bot=""
                        >
                          <div className="d-flex fs-14 w-100">
                            <div
                              className="datetime-picker-field form-label-group in-border mb-0 w-50 h-fit-content"
                              role="button"
                              tabindex="0"
                              aria-label="Start date"
                            >
                              <input
                                type="text"
                                className="datetime-picker-input form-control form-control-sm border-right-0 rounded-left"
                                id="filter-start-date"
                                readonly=""
                              />
                              <label for="booking-start">Pick-Up Date</label>
                            </div>
                            <div
                              className="datetime-picker-field form-label-group in-border mb-0 w-50 h-fit-content"
                              role="button"
                              tabindex="0"
                              aria-label="End date"
                            >
                              <input
                                type="text"
                                className="datetime-picker-input form-control form-control-sm rounded-right"
                                id="filter-end-date"
                                readonly=""
                              />
                              <label for="booking-end">Drop-Off Date</label>
                            </div>
                            <a
                              className="datetime-picker-button btn bg-transparent border ml-xs-1-custom ml-3 d-none"
                              id="filter-picker-button"
                            >
                              <span className="fs-18 font-weight-semibold icon-search"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer modal-footer--sticky d-flex border-top border-shades-300 rounded-0 px-4 bg-white pt-2 pb-2">
                  <div
                    className="px-2 w-100 text-center mb-2 filter-results-not-found"
                    // style="display: none"
                  >
                    <span className="fs-14 color-semantic-danger">
                      No results found. Please change your request.
                    </span>
                  </div>
                  <div className="px-2 m-0 d-flex justify-content-between flex-grow-1 py-1">
                    <button
                      className="btn btn-medium btn-brand-accent flex-grow-1 flex-lg-grow-0 btn-submit-filters"
                      type="submit"
                    >
                      <span className="fs-14 font-weight-bold text-uppercase color-shades-white">
                        Show result <span className="cars-count"></span>
                      </span>
                      <i
                        className="loader position-absolute"
                        // style="display: none"
                      ></i>
                    </button>
                    <button
                      className="border-all border-shades-200 btn btn-medium btn_clear d-none d-lg-flex btn-clear-all btn-outline-brand-primary"
                      type="reset"
                    >
                      <span className="font-weight-bold text-uppercase letter-spacing-0_2 color-brand-primary px-4">
                        Clear all
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="modal fade"
            id="modalSearchBrand"
            data-backdrop="false"
            // tabindex="-1"
          >
            <div className="modal-dialog modal-lg modal-right">
              <div
                className="modal-content border-0 rounded-0 h-100"
                // style="max-width: 490px"
              >
                <div className="modal-header bg-white modal-header--sticky align-items-center rounded-0 color-shades-black border-bottom border-shades-200">
                  <span
                    className="font-weight-semibold fs-18 mx-auto"
                    id="modalAllBrandsLabel"
                  >
                    Select brand
                  </span>
                  <button
                    aria-label="Back"
                    className="btn btn-medium btn-modal-back left text-reset position-absolute"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span className="fs-24 icon-chevron-left"></span>
                  </button>
                </div>
                <div
                  className="modal-body pt-3 pb-3 px-3 px-lg-4 bg-white flex-grow-1 overflow-auto filter-brand-list"
                  //   style="max-height: 100vh"
                >
                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="null"
                    data-brand-slug="null"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="All brands"
                      data-slug="null"
                    >
                      <i className="fs-30 icon-shield mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          All brands
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Audi"
                    data-brand-slug="audi"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Audi"
                      data-slug="audi"
                    >
                      <i className="icon-30 icon-brand-audi mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Audi
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="BMW"
                    data-brand-slug="bmw"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="BMW"
                      data-slug="bmw"
                    >
                      <i className="icon-30 icon-brand-bmw mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          BMW
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Bentley"
                    data-brand-slug="bentley"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Bentley"
                      data-slug="bentley"
                    >
                      <i className="icon-30 icon-brand-bentley mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Bentley
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Cadillac"
                    data-brand-slug="cadillac"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Cadillac"
                      data-slug="cadillac"
                    >
                      <i className="icon-30 icon-brand-cadillac mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Cadillac
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Chevrolet"
                    data-brand-slug="chevrolet"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Chevrolet"
                      data-slug="chevrolet"
                    >
                      <i className="icon-30 icon-brand-chevrolet mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Chevrolet
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Dodge"
                    data-brand-slug="dodge"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Dodge"
                      data-slug="dodge"
                    >
                      <i className="icon-30 icon-brand-dodge mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Dodge
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Ferrari"
                    data-brand-slug="ferrari"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Ferrari"
                      data-slug="ferrari"
                    >
                      <i className="icon-30 icon-brand-ferrari mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Ferrari
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Ford"
                    data-brand-slug="ford"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Ford"
                      data-slug="ford"
                    >
                      <i className="icon-30 icon-brand-ford mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Ford
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="GMC"
                    data-brand-slug="gmc"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="GMC"
                      data-slug="gmc"
                    >
                      <i className="icon-30 icon-brand-gmc mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          GMC
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Hyundai"
                    data-brand-slug="hyundai"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Hyundai"
                      data-slug="hyundai"
                    >
                      <i className="icon-30 icon-brand-hyundai mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Hyundai
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Jeep"
                    data-brand-slug="jeep"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Jeep"
                      data-slug="jeep"
                    >
                      <i className="icon-30 icon-brand-jeep mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Jeep
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="KIA"
                    data-brand-slug="kia"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="KIA"
                      data-slug="kia"
                    >
                      <i className="icon-30 icon-brand-kia mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          KIA
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Lamborghini"
                    data-brand-slug="lamborghini"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Lamborghini"
                      data-slug="lamborghini"
                    >
                      <i className="icon-30 icon-brand-lamborghini mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Lamborghini
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Lexus"
                    data-brand-slug="lexus"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Lexus"
                      data-slug="lexus"
                    >
                      <i className="icon-30 icon-brand-lexus mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Lexus
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Maserati"
                    data-brand-slug="maserati"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Maserati"
                      data-slug="maserati"
                    >
                      <i className="icon-30 icon-brand-maserati mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Maserati
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Mazda"
                    data-brand-slug="mazda"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Mazda"
                      data-slug="mazda"
                    >
                      <i className="icon-30 icon-brand-mazda mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Mazda
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Mercedes"
                    data-brand-slug="mercedes"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Mercedes"
                      data-slug="mercedes"
                    >
                      <i className="icon-30 icon-brand-mercedes mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Mercedes
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Mini"
                    data-brand-slug="mini"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Mini"
                      data-slug="mini"
                    >
                      <i className="icon-30 icon-brand-mini mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Mini
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Mitsubishi"
                    data-brand-slug="mitsubishi"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Mitsubishi"
                      data-slug="mitsubishi"
                    >
                      <i className="icon-30 icon-brand-mitsubishi mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Mitsubishi
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Nissan"
                    data-brand-slug="nissan"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Nissan"
                      data-slug="nissan"
                    >
                      <i className="icon-30 icon-brand-nissan mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Nissan
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Peugeot"
                    data-brand-slug="peugeot"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Peugeot"
                      data-slug="peugeot"
                    >
                      <i className="icon-30 icon-brand-peugeot mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Peugeot
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Porsche"
                    data-brand-slug="porsche"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Porsche"
                      data-slug="porsche"
                    >
                      <i className="icon-30 icon-brand-porsche mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Porsche
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Range Rover"
                    data-brand-slug="range-rover"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Range Rover"
                      data-slug="range-rover"
                    >
                      <i className="icon-30 icon-brand-range-rover mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Range Rover
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Rolls Royce"
                    data-brand-slug="rolls-royce"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Rolls Royce"
                      data-slug="rolls-royce"
                    >
                      <i className="icon-30 icon-brand-rolls-royce mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Rolls Royce
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Tesla"
                    data-brand-slug="tesla"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Tesla"
                      data-slug="tesla"
                    >
                      <i className="icon-30 icon-brand-tesla mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Tesla
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Toyota"
                    data-brand-slug="toyota"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Toyota"
                      data-slug="toyota"
                    >
                      <i className="icon-30 icon-brand-toyota mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Toyota
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-100 px-1 mb-1 brandname"
                    data-brand="Volkswagen"
                    data-brand-slug="volkswagen"
                  >
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-brand-item"
                      data-title="Volkswagen"
                      data-slug="volkswagen"
                    >
                      <i className="icon-30 icon-brand-volkswagen mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Volkswagen
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-alfa-romeo mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Alfa Romeo
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-aston-martin mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Aston Martin
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-fiat mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Fiat
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-honda mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Honda
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-infiniti mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Infiniti
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-jac mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          JAC
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-jaguar mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Jaguar
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-lincoln mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Lincoln
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-mg mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          MG
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-mclaren mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          McLaren
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-renault mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Renault
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-100 px-1 mb-1">
                    <div className="d-flex p-2 align-items-center rounded-small filters-brand-item disabled">
                      <i className="icon-30 icon-brand-suzuki mr-2 flex-shrink-0"></i>
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          Suzuki
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer modal-footer--sticky d-flex border-top border-shades-300 rounded-0 px-4 bg-white pt-2 pb-2">
                  <div className="px-2 m-0 d-flex justify-content-between flex-grow-1 py-1">
                    <button
                      className="btn btn-medium btn-brand-accent px-4 flex-grow-1"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fs-14 icon-chevron-left color-shades-white"></i>
                      <span className="fs-14 font-weight-bold text-uppercase ml-2 color-shades-white">
                        Back
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="modal fade"
            id="modalSearchModel"
            data-backdrop="false"
            // tabindex="-1"
          >
            <div className="modal-dialog modal-lg modal-right">
              <div
                className="modal-content border-0 rounded-0 h-100"
                // style="max-width: 490px"
              >
                <div className="modal-header bg-white modal-header--sticky align-items-center rounded-0 color-shades-black border-bottom border-shades-200">
                  <span
                    className="font-weight-semibold fs-18 mx-auto"
                    id="modalAllBrandsLabel"
                  >
                    Select model
                  </span>
                  <button
                    aria-label="Back"
                    className="btn btn-medium btn-modal-back left text-reset position-absolute"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span className="fs-24 icon-chevron-left"></span>
                  </button>
                </div>
                <div
                  className="modal-body pt-3 pb-3 px-3 px-lg-4 bg-white flex-grow-1 filter-model-list overflow-auto"
                  //   style="max-height: 100vh"
                >
                  <div className="w-100 px-1 mb-1">
                    <div
                      className="cursor-pointer d-flex p-2 align-items-center rounded-small filters-model-item"
                      data-title="All models"
                      data-slug="null"
                      //   style="height: 46px"
                    >
                      <div className="ml-1 d-flex flex-row">
                        <span className="fs-14 color-shades-black bg-transparent mr-2">
                          All models
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer modal-footer--sticky d-flex border-top border-shades-300 rounded-0 px-4 bg-white pt-2 pb-2">
                  <div className="px-2 m-0 d-flex justify-content-between flex-grow-1 py-1">
                    <button
                      className="btn btn-medium btn-brand-accent px-4 flex-grow-1"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fs-14 icon-chevron-left color-shades-white"></i>
                      <span className="fs-14 font-weight-bold text-uppercase ml-2 color-shades-white">
                        Back
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CarImsges />
      <WhyRentus />
      <CarImsges />
      <CarImsges />
      <OffSale />
      <CarImsges />
    </>
  );
};

export default Header;
