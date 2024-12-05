"use client";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="./">
                <img src="images/logo.svg" alt="Logo" />
              </a>

              <div className=" navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="service.html">
                        Book now
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-btn d-inline-flex">
                  <a href="#" className="btn-default">
                    book a rental
                  </a>
                </div>
              </div>
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
