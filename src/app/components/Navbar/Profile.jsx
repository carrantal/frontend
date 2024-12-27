"use client";
import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";

const Profile = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <div
          className="default-dropdown-container profile-dropdown-menu-container "
          onClick={toggleDropdown}
        >
          <div
            className="color-shades-white d-flex align-items-center pl-2 py-3 "
            id="profile-dropdown-menu"
            role="button"
            aria-expanded={isDropdownVisible}
          >
            <img
              alt="not-logged-in-profile-icon"
              height="24"
              width="24"
              title="Profile"
              loading="lazy"
            />
            <i className="fs-18 icon-min-width-18 ml-1 ">
              <FaSortDown />
            </i>
          </div>
          <div
            className={`dropdown-menu dropdown-menu-right default-dropdown text-right ${
              isDropdownVisible ? "show" : ""
            }`}
            aria-labelledby="profile-dropdown-menu"
          >
            <span className="dropdown-item">Log in</span>
            <span className="dropdown-item">Sign up</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
