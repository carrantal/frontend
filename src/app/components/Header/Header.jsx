"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="header-sticky bg-black shadow-md fixed w-full top-0 left-0 z-50">
        <nav className="flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Link className="navbar-brand w-[106px] h-[56px]" href="/">
            <img
              src="images/mainlogo.avif"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="text-white bg-[#ff3600] text-2xl focus:outline-none lg:hidden rounded-lg"
            onClick={handleMobileMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-12 text-lg mr-[150px]">
              <li>
                <Link
                  href="/"
                  className="nav-link text-gray-50 hover:text-[#f18b20]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="nav-link text-gray-50 hover:text-[#f18b20]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="nav-link text-gray-50 hover:text-[#f18b20]"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="nav-link text-gray-50 hover:text-[#f18b20]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="ml-6 ">
              <Link
                href="/book"
                className="btn-default bg-blue-600 text-white px-4 py-3 rounded-lg h-[50px] items-center justify-center"
              >
                Book a Rental
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black text-white z-40 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex flex-col items-start p-6 space-y-6">
            {/* Close Button */}
            <button
              className="text-white text-2xl self-end focus:outline-none bg-[#ff3600] rounded-lg"
              onClick={closeMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col space-y-8 text-lg">
              <li>
                <Link
                  href="/"
                  className="nav-link text-white hover:text-gray-400"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="nav-link text-white hover:text-gray-400"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="nav-link text-white hover:text-gray-400"
                  onClick={closeMobileMenu}
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="nav-link text-white hover:text-gray-400"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
