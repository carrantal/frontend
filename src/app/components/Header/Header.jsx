"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand w-[116px] h-[124px]" href="./">
                <img src="images/mainlogo.avif" alt="Logo" />
              </a>

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
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="service.html">
                        Book now
                      </a>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-btn d-inline-flex">
                  <a href="#" className="btn-default">
                    book a rental
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
