import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-top border-shades-200 p-4 mt-4">
      <div className="row text-center">
        {/* Inquiries & Support */}
        <div className="col-lg-4 col-6 d-flex flex-column align-items-center mb-4">
          <div>
            <span className="font-weight-bold letter-spacing-1 text-uppercase color-shades-600 fs-11">
              Inquiries &amp; Support
            </span>
            <div className="d-flex flex-column mt-3-custom line-height-25 gap-10">
              <a
                href="tel:+971504617277"
                className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
              >
                <div className="mr-2 d-flex align-items-center justify-content-center">
                  <MdOutlineLocalPhone />
                </div>
                <span className="direction-ltr">+971 50 461 7277</span>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=971558569266"
                title="Contact Renty.ae car rental Whatsapp"
                className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
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
                href="https://t.me/Renty_official"
                title="Contact Renty.ae car rental Telegram"
                className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
              >
                <img
                  width="16"
                  height="16"
                  className="mr-2-custom"
                  loading="lazy"
                  src="https://renty.ae/assets-nd/icons/site/telegram.svg"
                  alt="Contact Renty.ae car rental Telegram"
                />
                <span className="direction-ltr ml-1">Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* For Partnership */}
        <div className="col-lg-4 col-6 d-flex flex-column align-items-center mb-4">
          <span className="fs-11 font-weight-bold letter-spacing-1 text-uppercase color-shades-600">
            For Partnership
          </span>
          <div className="d-flex flex-column mt-3-custom line-height-25 gap-10">
            <a
              href="tel:+971504617277"
              className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
            >
              <div className="mr-2 d-flex align-items-center justify-content-center">
                <MdOutlineLocalPhone />
              </div>
              <span className="direction-ltr">+971 50 461 7277</span>
            </a>
            <a
              href="https://renty.ae/pages/support#partners_rc"
              className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
            >
              <div className="mr-2 d-flex align-items-center justify-content-center">
                <FaRegMessage />
              </div>
              <span className="direction-ltr">Send Message</span>
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="col-lg-4 col-12 d-flex flex-column align-items-center mb-4">
          <span className="fs-11 font-weight-bold letter-spacing-1 text-uppercase color-shades-600">
            Address
          </span>
          <div className="d-flex flex-column mt-3-custom">
            <span className="fs-14 color-shades-black mb-1 letter-spacing-0_2">
              Warehouse 4, 5th Street,
              <br /> Al Quoz, Al Quoz 3, Dubai
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
