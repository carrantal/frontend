import React from "react";

const Maps = () => {
  return (
    <div className="bg-shades-white home-page-section-body overflow-hidden pt-4 pb-4">
      <div className="container h-[500px]">
        <div className="d-flex align-items-center mb-sm-4 mb-3">
          <h2
            className="
          fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black"
          >
            {" "}
            Rent a car near me
          </h2>
        </div>

        <iframe
          className="w-full h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.743912688695!2d55.270783!3d25.276987999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682e2feea11%3A0x6b3d80b00c5a1b!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1667432662739!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
