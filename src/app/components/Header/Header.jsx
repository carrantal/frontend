"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand w-[106px] h-[76px]" href="/">
              <img src="images/mainlogo.avif" alt="Logo" />
            </Link>
            {/* Toggle button for mobile devices */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`navbar-collapse main-menu ${isOpen ? "show" : ""}`}
            >
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/service">
                      Book Now
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-btn d-inline-flex">
                <Link href="/book" className="btn-default">
                  Book a Rental
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
