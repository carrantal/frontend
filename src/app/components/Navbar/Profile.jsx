import React from "react";

const Profile = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="default-dropdown-container profile-dropdown-menu-container">
          <div
            className="color-shades-white d-flex align-items-center pl-2 py-2"
            data-toggle="dropdown"
            id="profile-dropdown-menu"
            role="button"
            aria-expanded="false"
          >
            <img
              src="https://renty.ae/assets-nd/images/placeholder/not-logged-in.png"
              alt="not-logged-in-profile-icon"
              height="24"
              width="24"
              title="Profile"
              loading="lazy"
            />
            <i className="fs-18 icon-carret---down icon-min-width-18"></i>
          </div>
          <div
            className="dropdown-menu dropdown-menu-right default-dropdown text-right"
            aria-labelledby="profile-dropdown-menu"
          >
            <span
              className="dropdown-item"
              // onclick="goToCar(event, 'https://renty.ae/login')"
            >
              Log in
            </span>
            <span
              className="dropdown-item"
              // onclick="goToCar(event, 'https://renty.ae/register')"
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
