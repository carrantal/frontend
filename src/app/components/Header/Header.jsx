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
import Reviews from "../Reviews/Reviews";
import Maps from "../Map/Maps";
import LeadingCompany from "../LeadingCompany/LeadingCompany";
import Faq from "../FAQ/Faq";
import Footer from "../Footer/Footer";
import Image from "next/image";

import Gallery from "../Navbar/Gallery";
import Luxury from "../Luxury/Luxury";
import Economy from "../Economy/Economy";
import Tooglebutton from "../ToggleButton/Tooglebutton";
const Header = () => {
  return (
    <>
      <div className="homepage  ">
        <header className="sticky-header">
          <div className="d-none d-lg-block bg-brand-primary-darker position-relative header-main-menu-container desc-header-panel">
            <div className="container d-flex position-relative align-items-center">
              <div className="d-flex mx-auto">
                <a
                  href="/"
                  aria-label="Home page"
                  className=" d-flex align-items-center"
                >
                  <Image
                    src="/images/desig.avif"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                  />
                </a>
              </div>
              <nav className="d-flex gap-col-5 flex-grow-1 justify-content-center">
                <RentACar />
                <Services />
                <Gallery />
              </nav>
              <Profile />
            </div>
          </div>
          <Tooglebutton />
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
                <a className="mx-auto bg-transparent" href="/">
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
          <picture>
            <source
              media="(min-width: 769px)"
              srcSet="
/images/heropic.avif          "
            />
            <source
              media="(min-width: 576px) and (max-width: 768px)"
              srcSet="/images/heropic.avif
          "
            />
            <img
              src="/images/heropic.avif"
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

          <Categories />
        </div>
        <div className="mt-4"></div>
        {/* <Categories /> */}
        <Brands />

        {/* <Luxury /> */}
        <WhyRentus />
        {/* <CarImsges /> */}
        {/* <CarImsges /> */}
        <OffSale />
        <Economy />
        <Reviews />
        <Maps />
        <LeadingCompany />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Header;
