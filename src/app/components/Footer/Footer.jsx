import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" border-top border-shades-200 p-4 mt-4">
      <div className="row ">
        {/* Inquiries & Support */}
        <div className="col-lg-6 col-12 d-flex flex-column lg:pl-[190px] mb-4">
          <div>
            <span className="font-weight-bold letter-spacing-1 text-uppercase color-shades-600 fs-11">
              Inquiries &amp; Support
            </span>
            <div className="d-flex flex-column mt-3-custom line-height-25 gap-10">
              <a
                href="tel:+971528888746"
                className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
              >
                <div className="mr-2 d-flex align-items-center justify-content-center">
                  <MdOutlineLocalPhone />
                </div>
                <span className="direction-ltr">+971-528888746</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=971528888746"
                title="Contact Renty.ae car rental Whatsapp"
                className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
                target="blank"
              >
                <img
                  width="16"
                  height="16"
                  className="mr-2-custom"
                  loading="lazy"
                  src="https://renty.ae/assets-nd/icons/site/social-whatsapp-icon.svg"
                  alt="Contact by Whatsapp"
                />
                <span className="direction-ltr ml-1">WhatsApp</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61569025370790"
                title="Contact Renty.ae car rental Telegram"
                className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
                target="blank"
              >
                <FaFacebookF className="text-[#1359ba]" />

                <span className="direction-ltr ml-1">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@naylrentalsdxb?_t=8rLvJBDLAK9&_r=1"
                title="Contact Renty.ae car rental Telegram"
                className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
                target="blank"
              >
                <FaTiktok className="text-[#1359ba]" />

                <span className="direction-ltr ml-1">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="col-lg-6 col-12 d-flex flex-column  mb-4">
          <span className="fs-11 font-weight-bold letter-spacing-1 text-uppercase color-shades-600">
            Address
          </span>
          <div className="d-flex flex-column mt-3-custom">
            <span className="fs-14 color-shades-black mb-1 letter-spacing-0_2">
              Azizi Riviera 4 Retail 8 Meydan Dubai,
              <br /> United Arab Emirates,
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
