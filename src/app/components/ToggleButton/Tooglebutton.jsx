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
            className="menu-container position-fixed top-0 left-0 w-100 h-100 d-flex flex-column"
            style={{
              zIndex: 1050,
              animation: "slideDown 0.3s ease-in-out",
              backgroundColor: "black",
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
                      <IoDocumentText color="#ec7421" /> Refund Policy
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
                      style={{
                        color: "white",
                      }}
                      className="dropdown-item fs-14 mb-3 d-flex align-items-center gap-2"
                      href={`/search?category=${cat.attributes.slug}`}
                    >
                      <div>
                        {cat.attributes.name === "Sports" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.4561 16.2397C15.282 16.2397 16.0894 16.4846 16.7761 16.9435C17.4629 17.4023 17.9981 18.0545 18.3142 18.8176C18.6303 19.5807 18.713 20.4203 18.5519 21.2304C18.3907 22.0405 17.993 22.7846 17.409 23.3686C16.8249 23.9526 16.0808 24.3503 15.2708 24.5115C14.4607 24.6726 13.621 24.5899 12.858 24.2738C12.0949 23.9578 11.4427 23.4225 10.9838 22.7358C10.525 22.049 10.28 21.2416 10.28 20.4157C10.28 19.8673 10.388 19.3242 10.5978 18.8175C10.8077 18.3109 11.1153 17.8505 11.5031 17.4627C11.8908 17.0749 12.3512 16.7673 12.8579 16.5574C13.3646 16.3476 13.9076 16.2396 14.4561 16.2397ZM51.2585 10.4837L57.9358 8.67499C58.1259 8.62314 58.2308 8.82571 58.183 9.00939L57.1914 12.7927C57.1644 12.8854 57.1094 12.9674 57.0338 13.0274C56.9581 13.0874 56.8657 13.1224 56.7694 13.1275H50.566C50.525 13.1294 50.4841 13.1211 50.447 13.1033C50.4099 13.0856 50.3777 13.0591 50.3534 13.026C50.329 12.9929 50.3131 12.9543 50.3071 12.9136C50.3012 12.8729 50.3054 12.8314 50.3193 12.7927L50.8361 10.8197C50.871 10.7317 50.9284 10.6545 51.0026 10.5958C51.0767 10.537 51.165 10.4988 51.2585 10.4849V10.4837ZM20.3761 14.1082C21.2535 13.9234 22.3688 13.6352 22.071 14.9611C22.0474 15.0629 22.0143 15.1622 21.9721 15.2578C25.2735 15.6729 28.8953 15.4844 32.2434 15.2943C33.2687 15.2361 33.0806 15.3848 33.4894 14.4165C33.7988 13.681 34.1372 12.7964 34.3607 12.2558C34.5352 11.8349 34.8523 11.2976 34.1159 11.1814C33.2916 11.0516 30.1746 11.185 29.3483 11.2722C27.079 11.5134 20.8676 12.6083 19.0991 13.5632C18.9335 13.6525 20.1208 14.1613 20.3785 14.1074L20.3761 14.1082ZM55.2951 23.8417C55.8815 23.7637 56.8248 24.0025 57.0865 23.6609C57.5913 23.0001 58.1769 21.8522 58.0178 21.2376C57.9113 20.8257 57.0885 20.7991 57.1034 20.7593C57.5334 19.5881 57.5857 17.6243 57.7698 16.2791C57.9249 15.142 58.0913 14.9901 56.8453 14.7481C49.4901 13.3197 46.6183 13.771 38.9049 11.3755C31.0673 8.94107 20.44 11.5122 11.688 15.0504C8.12773 16.4901 5.30498 18.0897 2.44004 19.5781C2.37117 19.6236 2.31314 19.6837 2.27009 19.7541C2.22703 19.8245 2.20001 19.9036 2.19092 19.9856C2.18183 20.0677 2.1909 20.1507 2.21749 20.2288C2.24408 20.307 2.28754 20.3783 2.34479 20.4378C2.86017 21.2458 3.42981 22.018 4.04976 22.7489C4.65909 23.4016 4.98948 23.9852 5.78891 24.0101C6.56303 24.0346 7.51238 23.976 8.40144 24.0053C8.97017 24.0238 9.34115 23.9422 9.27764 23.349C9.22137 22.8204 9.0831 21.8035 9.03326 21.31C9.00489 21.0127 8.99149 20.7143 8.99307 20.4157C8.99307 19.7028 9.13348 18.9969 9.40629 18.3383C9.67909 17.6797 10.0789 17.0813 10.583 16.5772C11.0871 16.0731 11.6855 15.6733 12.3441 15.4005C13.0027 15.1277 13.7086 14.9873 14.4215 14.9873C15.1344 14.9873 15.8403 15.1277 16.4989 15.4005C17.1575 15.6733 17.7559 16.0731 18.26 16.5772C18.764 17.0813 19.1639 17.6797 19.4367 18.3383C19.7095 18.9969 19.8499 19.7028 19.8499 20.4157C19.8499 20.7059 19.8443 20.9908 19.8262 21.2686C19.7137 22.9969 18.8387 23.99 20.604 23.988L42.9037 23.9627C44.0086 23.9627 43.9358 22.769 43.8032 21.4832C43.7694 21.1284 43.7537 20.7721 43.7562 20.4157C43.7685 18.984 44.3459 17.6152 45.3626 16.6072C46.3793 15.5991 47.7531 15.0336 49.1848 15.0336C50.6165 15.0336 51.9903 15.5991 53.007 16.6072C54.0237 17.6152 54.6011 18.984 54.6134 20.4157C54.6157 20.74 54.6012 21.0643 54.57 21.3871C54.4623 22.4261 54.4531 23.9539 55.2987 23.8417H55.2951ZM49.257 16.2397C50.0829 16.2396 50.8903 16.4844 51.5771 16.9433C52.2639 17.4021 52.7992 18.0543 53.1154 18.8173C53.4315 19.5804 53.5143 20.4201 53.3532 21.2301C53.1921 22.0402 52.7944 22.7844 52.2104 23.3684C51.6264 23.9525 50.8823 24.3503 50.0722 24.5114C49.2621 24.6726 48.4224 24.5899 47.6594 24.2739C46.8963 23.9578 46.244 23.4226 45.7852 22.7358C45.3263 22.0491 45.0813 21.2416 45.0813 20.4157C45.0813 19.8673 45.1892 19.3243 45.3991 18.8176C45.6089 18.311 45.9165 17.8506 46.3042 17.4628C46.6919 17.075 47.1523 16.7674 47.6589 16.5576C48.1655 16.3477 48.7086 16.2397 49.257 16.2397ZM37.4765 14.7123L35.4648 14.9937C35.0629 15.05 35.1252 15.093 35.2594 14.6995C35.3602 14.4047 35.4611 14.1151 35.5621 13.8305C35.8233 13.093 35.583 13.181 36.2566 13.3603C36.5584 13.4406 38.9339 14.5086 37.4765 14.7119V14.7123Z"
                              fill="#ec7421"
                            />
                          </svg>
                        )}

                        {cat.attributes.name === "Luxury" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M45.2528 17.2366C45.9725 17.2365 46.676 17.4543 47.2744 17.8625C47.8728 18.2707 48.3392 18.8509 48.6146 19.5297C48.8901 20.2086 48.9622 20.9555 48.8218 21.6762C48.6815 22.3969 48.335 23.0589 47.8261 23.5785C47.3173 24.0981 46.6689 24.452 45.9631 24.5953C45.2573 24.7387 44.5257 24.6652 43.8608 24.384C43.1959 24.1028 42.6277 23.6266 42.2278 23.0157C41.828 22.4047 41.6146 21.6865 41.6146 20.9517C41.6146 19.9664 41.9979 19.0215 42.6802 18.3248C43.3625 17.6281 44.2879 17.2367 45.2528 17.2366ZM41.8703 10.6496L41.6276 13.8884C42.3403 13.8498 43.0285 13.8169 43.6677 13.7947C43.7583 13.7981 43.8481 13.7766 43.9278 13.7326C44.0076 13.6886 44.0743 13.6236 44.1212 13.5444C44.2964 13.2474 44.4434 12.934 44.5604 12.6086C44.6196 12.4298 44.607 12.3482 44.4571 12.1387C44.2564 11.8587 42.921 11.1471 41.8703 10.6493V10.6496ZM41.0868 13.9181L41.3852 10.4258C41.1531 10.3169 40.9151 10.2214 40.6725 10.1397C39.8579 9.88705 39.0135 9.74858 38.1624 9.72811L35.3809 9.69235C35.3061 9.68914 35.2318 9.70449 35.1641 9.73706C35.0965 9.76963 35.0376 9.81846 34.9924 9.87937C34.7683 10.4716 34.7161 11.2779 34.4247 13.7139C34.3449 14.3808 34.3876 14.2002 35.1119 14.1909C36.8959 14.1691 39.0642 14.0293 41.0868 13.9159V13.9181ZM50.8884 22.5955C51.6267 22.5376 52.4644 22.4668 53.1239 22.3509C53.5114 22.3176 53.8857 22.1915 54.2166 21.983C54.7514 21.4759 54.6901 19.8946 54.6807 19.0839C54.6786 18.8862 54.1904 18.8858 54.1774 18.6802C54.1073 17.4304 54.0205 16.0469 53.8867 14.7627C53.7263 13.2211 50.6296 13.1643 48.7334 12.5513C47.3843 12.1151 46.273 11.1803 44.5401 10.3979C42.6317 9.53608 40.966 8.74579 38.9595 8.74579C35.6989 8.74579 30.8524 8.34885 27.8169 9.33403C24.91 10.277 22.2616 11.9803 19.5045 13.3109C15.993 13.7108 12.5114 14.3486 9.08272 15.2201C8.67445 15.2909 8.2886 15.4601 7.95719 15.7137C7.62578 15.9672 7.35836 16.2978 7.17712 16.678C6.90774 17.2682 6.67164 17.8737 6.47 18.4914C6.20207 18.5136 6.19191 18.4442 6.10716 18.604C6.0481 18.8207 6.02816 19.0466 6.04832 19.2706C5.98745 19.9405 6.02797 20.6159 6.16845 21.2731C6.22742 21.6597 6.4197 22.012 6.71061 22.2666C6.91422 22.4319 7.1632 22.5284 7.42298 22.5426L8.66104 22.5837C9.40003 22.445 9.26063 22.3481 9.2137 21.3883C9.2067 21.2453 9.20332 21.0997 9.20355 20.9517C9.20355 19.6707 9.70191 18.4423 10.589 17.5365C11.4761 16.6308 12.6792 16.122 13.9338 16.122C15.1883 16.122 16.3914 16.6308 17.2785 17.5365C18.1656 18.4423 18.664 19.6707 18.664 20.9517C18.664 21.2227 18.6587 21.4881 18.6409 21.748C18.5298 23.3662 18.3824 23.0869 19.8194 23.1602L39.6659 23.138C40.7222 22.9893 40.6623 23.1248 40.5517 21.7698C40.5299 21.5038 40.5226 21.2302 40.5226 20.9517C40.5333 19.6779 41.0364 18.46 41.9224 17.5632C42.8083 16.6663 44.0054 16.1632 45.253 16.1632C46.5006 16.1632 47.6976 16.6663 48.5836 17.5632C49.4695 18.46 49.9726 19.6779 49.9834 20.9517C49.9834 21.1805 49.9771 21.408 49.9599 21.6311C49.8752 22.7397 50.1792 22.6492 50.8884 22.5938V22.5955ZM24.6053 14.5736C24.6924 14.301 24.7497 14.0194 24.7762 13.7339C24.814 13.0902 23.6604 13.0416 22.9449 13.0902C24.5692 11.8994 26.3495 10.9475 28.2333 10.2627C29.4191 9.94733 30.6356 9.76849 31.8603 9.72954L33.428 9.69378C33.7109 9.69056 33.7484 9.82502 33.6654 10.0514C33.3852 10.8159 33.2746 12.4673 33.1051 13.5762C33.0238 14.1126 32.8998 14.2381 32.364 14.2428C30.2482 14.2607 24.5759 14.6755 24.6018 14.5721L24.6053 14.5736ZM13.9345 17.2366C14.6541 17.2366 15.3576 17.4545 15.9559 17.8627C16.5543 18.2709 17.0207 18.8511 17.296 19.53C17.5714 20.2088 17.6435 20.9558 17.5031 21.6764C17.3627 22.3971 17.0162 23.0591 16.5073 23.5786C15.9984 24.0982 15.3501 24.452 14.6443 24.5954C13.9385 24.7387 13.2069 24.6651 12.5421 24.384C11.8772 24.1028 11.3089 23.6266 10.9091 23.0157C10.5093 22.4047 10.2959 21.6864 10.2959 20.9517C10.2959 19.9664 10.6793 19.0214 11.3616 18.3247C12.044 17.628 12.9695 17.2366 13.9345 17.2366Z"
                              fill="#ec7421"
                            />
                          </svg>
                        )}

                        {cat.attributes.name === "SUV" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="#ec7421"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M25.323 5.7658C25.7735 5.07985 26.539 4.66675 27.3596 4.66675H33.3544L51.415 4.7618C52.1419 4.76563 52.7777 5.25194 52.9718 5.95249L54.725 12.281V16.748L55.2853 16.8941C55.6429 16.9874 55.8925 17.3104 55.8925 17.68V19.3757C55.8925 20.15 55.3459 20.8167 54.5867 20.9685L53.3544 21.215L50.9149 16.808C50.4792 16.0211 49.6456 15.5382 48.7462 15.5518L45.1572 15.6062C44.1605 15.6213 43.2735 16.2421 42.9179 17.1734L41.3747 21.215L21.549 21.215C21.2536 21.215 20.9815 21.0546 20.8384 20.7961L18.6186 16.7862C18.1894 16.0108 17.3731 15.5297 16.4869 15.5297H12.9688C11.9248 15.5297 10.9969 16.1948 10.6614 17.1834L9.48061 20.6637C9.3688 20.9933 9.05948 21.215 8.71149 21.215H6.92081C6.48727 21.215 6.13016 20.8745 6.10954 20.4414L5.98385 17.8018C5.96179 17.3386 6.33139 16.951 6.79511 16.951H7.16161V14.5102C7.16161 13.2483 8.12511 11.5285 9.38206 11.4166L22.2708 10.3334L25.323 5.7658ZM27.5628 5.78348C27.1597 5.78348 26.7849 5.99044 26.5701 6.33156L24.3741 9.81929C25.158 9.6715 26.076 9.61052 26.2708 10.0001C26.4268 10.312 26.4383 10.7151 26.3988 11.0627H32.4876C32.9196 11.0627 33.2697 10.7125 33.2697 10.2806V6.56558C33.2697 6.13364 32.9196 5.78348 32.4876 5.78348H27.5628ZM35.6142 5.78348C35.1823 5.78348 34.8321 6.13364 34.8321 6.56558V10.2806C34.8321 10.7125 35.1823 11.0627 35.6142 11.0627H42.1377C42.6153 11.0627 42.9813 10.6384 42.9114 10.166L42.361 6.45097C42.3042 6.06748 41.975 5.78348 41.5873 5.78348H35.6142ZM43.9197 6.6802C43.8497 6.20777 44.2158 5.78348 44.6934 5.78348H50.1887C50.7233 5.78348 51.1902 6.1448 51.3243 6.66222L52.2115 10.0843C52.3399 10.5795 51.9661 11.0627 51.4545 11.0627H45.2438C44.8561 11.0627 44.5269 10.7787 44.4701 10.3952L43.9197 6.6802Z"
                              fill="#ec7421"
                            />
                            <path
                              d="M14.8771 24.6667C17.1199 24.6667 18.938 22.8486 18.938 20.6058C18.938 18.363 17.1199 16.5449 14.8771 16.5449C12.6343 16.5449 10.8162 18.363 10.8162 20.6058C10.8162 22.8486 12.6343 24.6667 14.8771 24.6667Z"
                              fill="#ec7421"
                            />
                            <path
                              d="M47.1614 24.6667C49.4042 24.6667 51.2224 22.8486 51.2224 20.6058C51.2224 18.363 49.4042 16.5449 47.1614 16.5449C44.9187 16.5449 43.1005 18.363 43.1005 20.6058C43.1005 22.8486 44.9187 24.6667 47.1614 24.6667Z"
                              fill="#ec7421"
                            />
                          </svg>
                        )}

                        {cat.attributes.name === "Economy" && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="30"
                            viewBox="0 0 60 30"
                            fill="#ec7421"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M50.5053 22.5508C50.8949 22.5171 51.2713 22.3909 51.6041 22.1823C52.1416 21.6745 51.9789 20.0906 51.9704 19.2792C51.9683 19.0815 51.4774 19.0801 51.464 18.8749C51.3935 17.6237 50.8621 15.3244 50.7279 14.0388C50.696 13.7063 50.5837 13.3869 50.4012 13.109C50.2187 12.8311 49.9715 12.6034 49.6816 12.446C48.7332 11.8501 46.019 10.2258 44.9878 9.78536C44.3074 9.49531 44.4733 9.42548 43.7429 9.31984C40.1154 8.79058 33.5163 8.16534 29.9618 9.31375C27.0388 10.2581 24.4939 11.6274 21.8544 13.2961C17.1852 14.1147 13.375 14.8098 11.107 15.43C10.698 15.5117 10.3133 15.6892 9.98353 15.9485C9.65377 16.2078 9.38801 16.5417 9.20736 16.9236C8.83933 17.6481 8.66466 18.0724 8.49597 18.4839C8.09202 18.5197 7.99446 18.8968 8.00291 19.4088C8.01453 20.2128 7.94093 20.7861 8.16104 21.5825C8.24522 21.8626 8.41743 22.1069 8.65127 22.278C8.8851 22.4491 9.16766 22.5375 9.45564 22.5296L10.5925 22.5654C11.1443 22.458 11.3137 22.4895 11.2665 21.7393C11.2503 21.4818 11.2465 21.2176 11.2465 20.9458C11.2465 19.6631 11.7476 18.4329 12.6396 17.5259C13.5316 16.6189 14.7415 16.1093 16.003 16.1093C17.2645 16.1093 18.4743 16.6189 19.3663 17.5259C20.2583 18.4329 20.7595 19.6631 20.7595 20.9458C20.7595 21.3193 20.7595 21.6827 20.7348 22.0319C20.6527 23.2225 20.2882 23.099 21.4131 23.1581L39.1941 23.1366C40.0115 23.0353 40.2306 23.1366 40.1172 22.0068C40.0858 21.6543 40.0718 21.3004 40.0753 20.9465C40.0861 19.6709 40.592 18.4514 41.4829 17.5533C42.3737 16.6552 43.5775 16.1513 44.832 16.1513C46.0865 16.1513 47.2902 16.6552 48.1811 17.5533C49.0719 18.4514 49.5778 19.6709 49.5886 20.9465C49.5886 21.1868 49.5886 21.4213 49.5805 21.6491C49.5502 22.5665 49.3513 22.752 50.5064 22.5508H50.5053ZM36.6063 13.7011C36.8994 11.2618 36.9353 10.5553 37.1607 9.96262C37.2021 9.88588 37.2604 9.81989 37.331 9.76978C37.4016 9.71966 37.4826 9.68676 37.5678 9.67364C39.2934 9.75779 39.8834 9.72807 41.5555 10.1223C42.1496 10.2914 43.3657 11.698 43.6685 12.1216C43.7862 12.2849 44.6596 13.3165 44.5191 13.5293C44.472 13.6085 44.4049 13.6736 44.3248 13.7177C44.2446 13.7617 44.1544 13.7832 44.0633 13.7799C41.4629 13.868 39.8929 14.1473 37.2966 14.1792C36.5687 14.1882 36.5261 14.3686 36.6063 13.7011ZM26.7324 14.5606C26.82 14.2876 26.8776 14.0056 26.9042 13.7198C26.9423 13.0752 25.5491 13.0265 24.8296 13.0752C26.5466 11.8817 28.4143 10.9294 30.382 10.2441C31.9104 9.72377 33.9678 9.7116 35.6058 9.67579C35.8904 9.67292 35.8805 9.79432 35.8446 10.0339C35.7301 10.7995 35.4512 12.4532 35.2811 13.5636C35.1998 14.1008 35.0751 14.2268 34.5362 14.2311C32.4087 14.2494 26.7049 14.6644 26.731 14.5609L26.7324 14.5606ZM44.8297 17.2262C45.5533 17.2262 46.2607 17.4444 46.8624 17.8532C47.4641 18.262 47.933 18.843 48.2099 19.5228C48.4868 20.2026 48.5593 20.9506 48.4181 21.6723C48.277 22.3939 47.9285 23.0568 47.4168 23.5771C46.9051 24.0974 46.2532 24.4517 45.5435 24.5953C44.8337 24.7388 44.0981 24.6651 43.4295 24.3836C42.761 24.102 42.1896 23.6251 41.7875 23.0134C41.3855 22.4016 41.1709 21.6823 41.1709 20.9465C41.1709 20.4579 41.2655 19.9741 41.4493 19.5228C41.6332 19.0714 41.9027 18.6612 42.2424 18.3158C42.5822 17.9703 42.9855 17.6963 43.4295 17.5093C43.8734 17.3224 44.3492 17.2262 44.8297 17.2262ZM16.0001 17.2262C16.7238 17.2262 17.4312 17.4444 18.0328 17.8532C18.6345 18.262 19.1035 18.843 19.3804 19.5228C19.6573 20.2026 19.7298 20.9506 19.5886 21.6723C19.4474 22.3939 19.099 23.0568 18.5873 23.5771C18.0756 24.0974 17.4237 24.4517 16.7139 24.5953C16.0042 24.7388 15.2685 24.6651 14.6 24.3836C13.9314 24.102 13.36 23.6251 12.958 23.0134C12.556 22.4016 12.3414 21.6823 12.3414 20.9465C12.3414 19.9598 12.7269 19.0136 13.413 18.3159C14.0992 17.6182 15.0298 17.2262 16.0001 17.2262Z"
                              fill="#ec7421"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="ms-4 fs-18"> {cat.attributes.name}</span>
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
                    style={{
                      color: "white",
                    }}
                    className="dropdown-item rounded-small fs-14 color-shades-black px-2"
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
                    style={{
                      color: "white",
                    }}
                    className="dropdown-item rounded-small fs-14 color-shades-black px-2"
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
