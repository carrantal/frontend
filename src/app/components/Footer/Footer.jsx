import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp, FaPhoneFlip } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";

const Footer = ({ Footerdata }) => {
  const phone = Footerdata?.attributes?.phone;

  const data = {
    phone: "+971-528888746",
    whatsapp: "https://wa.me/971528888746",
    instagram: "https://www.instagram.com/naylrentalsdxb?igsh=bnAxOXp5Z3JraGN4",
    tiktok: "https://www.tiktok.com/@naylrentalsdxb?_t=8rLvJBDLAK9&_r=1",
    facebook: "https://www.facebook.com/share/15aY27odAJ/?mibextid=LQQJ4d",
    address: "Azizi Riviera 4 , Retail 8 ,Meydan , Dubai, UAE",
    policies: [
      {
        title: "Terms & Conditions",
        link: "#",
      },
      {
        title: "Booking Policy",
        link: "#",
      },
      {
        title: "Cancellation Policy",
        link: "#",
      },
    ],
    googlemap:
      "https://www.google.com/maps/place/Nayl+Luxury+Rentals/@25.1732612,55.299778,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f69943cf09df9:0x9241bd366c73e188!8m2!3d25.1732612!4d55.299778!16s%2Fg%2F11wq3gv6gw?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
  };

  return (
    <footer className="border-top border-shades-200">
      <div className="container px-4 px-lg-0">
        <div className="py-5 py-xs-3-custom footer-locations-container border-sm-bottom border-shades-200  with-areas ">
          <div>
            <div className="border-shades-200 pb-5-custom pb-xs-3-custom border-lg-0">
              <span className="fs-11 font-weight-bold letter-spacing-1 text-uppercase color-shades-900">
                Policies
              </span>
              <div className="footer-locations mt-3-custom mt-lg-2-custom line-height-25">
                <div className="d-none flex-column d-lg-flex">
                  {data.policies.map((each, index) => (
                    <a
                      key={index}
                      className="fs-12 fs-sm-14 color-shades-black mb-1"
                      title={each.title}
                      href={each.link}
                    >
                      {each.title}
                    </a>
                  ))}
                </div>
                <div class="d-flex flex-column d-lg-none">
                  {data.policies.map((each, index) => (
                    <a
                      key={index}
                      className="fs-12 fs-sm-14 color-shades-black mb-1"
                      title={each.title}
                      href={each.link}
                    >
                      {each.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer-support-partnership-block d-flex flex-row justify-content-between justify-content-sm-start flex-sm-column
                        pt-sm-3-custom pt-md-3-custom border-xs-bottom border-lg-bottom border-shades-200
                        pb-2-custom pb-xs-3-custom border-lg-0"
          >
            <div className="pt-lg-0 mt-xs-3-custom">
              <span className="font-weight-bold letter-spacing-1 text-uppercase color-shades-900 fs-11">
                Inquiries &amp; Support
              </span>
              <div className="d-flex flex-column mt-3-custom mt-lg-2-custom line-height-25 gap-10">
                <a
                  href={phone}
                  className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
                >
                  <FaPhoneFlip className="icon-16 icon-phone mr-2 d-flex align-items-center color-shades-900 justify-content-center" />
                  <span className="direction-ltr">{data.phone}</span>
                </a>{" "}
                <a
                  href={Footerdata?.attributes?.whatsapp}
                  className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
                >
                  <FaWhatsapp className="icon-16 icon-phone mr-2 d-flex align-items-center color-shades-900 justify-content-center" />
                  <span className="direction-ltr">WhatsApp</span>
                </a>
                <a
                  href={Footerdata?.attributes?.tiktok}
                  className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
                >
                  <FaTiktok className="icon-16 icon-phone mr-2 d-flex align-items-center color-shades-900 justify-content-center" />
                  <span className="direction-ltr">Tiktok</span>
                </a>
                <a
                  href={Footerdata?.attributes?.instagram}
                  className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
                >
                  <FaInstagram className="icon-16 icon-phone mr-2 d-flex align-items-center color-shades-900 justify-content-center" />
                  <span className="direction-ltr">Instagram</span>
                </a>
                <a
                  href={Footerdata?.attributes?.facebook}
                  className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
                >
                  <FaFacebook className="icon-16 icon-phone mr-2 d-flex align-items-center color-shades-900 justify-content-center" />
                  <span className="direction-ltr">Facebook</span>
                </a>
              </div>
            </div>

            <div className="d-none d-sm-block mt-4-custom">
              <span className="fs-11 font-weight-bold letter-spacing-1 text-uppercase color-shades-900">
                Address
              </span>
              <div className="d-flex flex-column mt-3-custom">
                <span className="fs-14 color-shades-black mb-1 letter-spacing-0_2">
                  {Footerdata?.attributes?.address}
                </span>
              </div>
            </div>
          </div>
          <div className="footer-map-reviews-block pt-sm-3-custom pt-md-3-custom">
            <div className="mt-3-custom mb-2-custom d-block d-sm-none">
              <span className="fs-11 font-weight-bold letter-spacing-1 text-uppercase color-shades-900">
                Address
              </span>
              <div className="d-flex flex-column mt-3-custom">
                <span className="fs-12 fs-sm-14 color-shades-black mb-1 letter-spacing-0_2">
                  {Footerdata?.attributes?.address}
                </span>
              </div>
            </div>
            <a
              target="_blank"
              className="fs-14 color-shades-black footer-map-link"
              href={data?.googlemap}
            >
              <div className="">
                <img
                  src={Footerdata?.attributes?.mapImage?.data?.attributes?.url}
                  loading="lazy"
                />
              </div>
            </a>
            <div className="footer-company-reviews-block w-100 d-flex justify-content-center  bg-shades-white my-3-custom">
              <a
                className="company-review-section p-4-custom px-xs-2-custom px-sm-2-custom d-flex flex-column h-100 justify-content-center align-items-center mobile"
                href={data?.googlemap}
                target="_blank"
                title="Find us on Google Maps in Dubai."
              >
                <div className="d-flex align-items-center company-review-icons-block">
                  <div className="company-review-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="132"
                      height="24"
                      viewBox="0 0 132 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_16428_252)">
                        <path
                          d="M22.6426 12.5634C22.6426 11.9108 22.5886 11.2547 22.4734 10.6127H13.2351V14.3095H18.5254C18.3059 15.5018 17.6005 16.5565 16.5677 17.2267V19.6254H19.7239C21.5773 17.9534 22.6426 15.4841 22.6426 12.5634Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M13.2328 21.9429C15.8744 21.9429 18.1021 21.0928 19.7252 19.6254L16.569 17.2267C15.6908 17.8123 14.5572 18.1438 13.2364 18.1438C10.6812 18.1438 8.51469 16.4542 7.73733 14.1825H4.48035V16.6552C6.14303 19.897 9.52957 21.9429 13.2328 21.9429Z"
                          fill="#34A853"
                        />
                        <path
                          d="M7.73691 14.1825C7.32664 12.9902 7.32664 11.6992 7.73691 10.5069V8.03413H4.48352C3.09436 10.7468 3.09436 13.9426 4.48352 16.6553L7.73691 14.1825Z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M13.2328 6.54181C14.6292 6.52064 15.9788 7.03565 16.99 7.98101L19.7864 5.24017C18.0157 3.61048 15.6656 2.71451 13.2328 2.74273C9.52957 2.74273 6.14303 4.78866 4.48035 8.03393L7.73373 10.5067C8.50749 8.23146 10.6776 6.54181 13.2328 6.54181Z"
                          fill="#EA4335"
                        />
                      </g>
                      <path
                        d="M34.9 18.3141C33.9208 18.3141 33.0184 18.0789 32.1928 17.6085C31.3672 17.1381 30.7096 16.4949 30.22 15.6789C29.74 14.8533 29.5 13.9365 29.5 12.9285C29.5 11.9205 29.74 11.0085 30.22 10.1925C30.7096 9.36686 31.3672 8.71886 32.1928 8.24846C33.0184 7.77806 33.9208 7.54286 34.9 7.54286C35.6776 7.54286 36.4024 7.68206 37.0744 7.96046C37.7464 8.23886 38.308 8.62766 38.7592 9.12686L37.636 10.2501C37.3 9.87566 36.8968 9.58766 36.4264 9.38606C35.9656 9.18446 35.452 9.08366 34.8856 9.08366C34.2232 9.08366 33.604 9.24206 33.028 9.55886C32.452 9.87566 31.9912 10.3269 31.6456 10.9125C31.3 11.4981 31.1272 12.1701 31.1272 12.9285C31.1272 13.6869 31.3 14.3589 31.6456 14.9445C31.9912 15.5301 32.452 15.9813 33.028 16.2981C33.604 16.6149 34.228 16.7733 34.9 16.7733C35.5144 16.7733 36.028 16.6821 36.4408 16.4997C36.8536 16.3173 37.2232 16.0725 37.5496 15.7653C37.7608 15.5541 37.9384 15.2901 38.0824 14.9733C38.236 14.6565 38.3368 14.3109 38.3848 13.9365H34.8856V12.4965H39.9112C39.9592 12.7653 39.9832 13.0437 39.9832 13.3317C39.9832 13.9845 39.8824 14.6133 39.6808 15.2181C39.4792 15.8133 39.1576 16.3317 38.716 16.7733C37.7464 17.8005 36.4744 18.3141 34.9 18.3141Z"
                        fill="white"
                      />
                      <path
                        d="M44.5251 18.3141C43.7859 18.3141 43.1235 18.1461 42.5379 17.8101C41.9523 17.4645 41.4963 16.9941 41.1699 16.3989C40.8435 15.8037 40.6803 15.1413 40.6803 14.4117C40.6803 13.6821 40.8435 13.0197 41.1699 12.4245C41.4963 11.8293 41.9523 11.3637 42.5379 11.0277C43.1235 10.6821 43.7859 10.5093 44.5251 10.5093C45.2643 10.5093 45.9267 10.6821 46.5123 11.0277C47.0979 11.3733 47.5539 11.8437 47.8803 12.4389C48.2067 13.0341 48.3699 13.6917 48.3699 14.4117C48.3699 15.1413 48.2067 15.8037 47.8803 16.3989C47.5539 16.9941 47.0979 17.4645 46.5123 17.8101C45.9267 18.1461 45.2643 18.3141 44.5251 18.3141ZM44.5251 16.8597C44.9283 16.8597 45.3027 16.7637 45.6483 16.5717C45.9939 16.3701 46.2675 16.0869 46.4691 15.7221C46.6803 15.3477 46.7859 14.9109 46.7859 14.4117C46.7859 13.9125 46.6803 13.4805 46.4691 13.1157C46.2675 12.7509 45.9939 12.4725 45.6483 12.2805C45.3027 12.0789 44.9283 11.9781 44.5251 11.9781C44.1219 11.9781 43.7475 12.0789 43.4019 12.2805C43.0563 12.4725 42.7779 12.7509 42.5667 13.1157C42.3651 13.4805 42.2643 13.9125 42.2643 14.4117C42.2643 14.9109 42.3651 15.3477 42.5667 15.7221C42.7779 16.0869 43.0563 16.3701 43.4019 16.5717C43.7475 16.7637 44.1219 16.8597 44.5251 16.8597Z"
                        fill="white"
                      />
                      <path
                        d="M52.8399 18.3141C52.1007 18.3141 51.4383 18.1461 50.8527 17.8101C50.2671 17.4645 49.8111 16.9941 49.4847 16.3989C49.1583 15.8037 48.9951 15.1413 48.9951 14.4117C48.9951 13.6821 49.1583 13.0197 49.4847 12.4245C49.8111 11.8293 50.2671 11.3637 50.8527 11.0277C51.4383 10.6821 52.1007 10.5093 52.8399 10.5093C53.5791 10.5093 54.2415 10.6821 54.8271 11.0277C55.4127 11.3733 55.8687 11.8437 56.1951 12.4389C56.5215 13.0341 56.6847 13.6917 56.6847 14.4117C56.6847 15.1413 56.5215 15.8037 56.1951 16.3989C55.8687 16.9941 55.4127 17.4645 54.8271 17.8101C54.2415 18.1461 53.5791 18.3141 52.8399 18.3141ZM52.8399 16.8597C53.2431 16.8597 53.6175 16.7637 53.9631 16.5717C54.3087 16.3701 54.5823 16.0869 54.7839 15.7221C54.9951 15.3477 55.1007 14.9109 55.1007 14.4117C55.1007 13.9125 54.9951 13.4805 54.7839 13.1157C54.5823 12.7509 54.3087 12.4725 53.9631 12.2805C53.6175 12.0789 53.2431 11.9781 52.8399 11.9781C52.4367 11.9781 52.0623 12.0789 51.7167 12.2805C51.3711 12.4725 51.0927 12.7509 50.8815 13.1157C50.6799 13.4805 50.5791 13.9125 50.5791 14.4117C50.5791 14.9109 50.6799 15.3477 50.8815 15.7221C51.0927 16.0869 51.3711 16.3701 51.7167 16.5717C52.0623 16.7637 52.4367 16.8597 52.8399 16.8597Z"
                        fill="white"
                      />
                      <path
                        d="M61.0252 21.4245C60.1228 21.4245 59.374 21.2181 58.7788 20.8053C58.1932 20.3925 57.7996 19.9029 57.598 19.3365L59.0812 18.7173C59.2348 19.1013 59.4796 19.4085 59.8156 19.6389C60.1612 19.8789 60.5644 19.9989 61.0252 19.9989C61.6972 19.9989 62.2204 19.7973 62.5948 19.3941C62.9788 19.0005 63.1708 18.4437 63.1708 17.7237V17.0469H63.0844C62.8444 17.3925 62.5228 17.6661 62.1196 17.8677C61.726 18.0597 61.27 18.1557 60.7516 18.1557C60.1372 18.1557 59.566 17.9973 59.038 17.6805C58.51 17.3637 58.0876 16.9173 57.7708 16.3413C57.4636 15.7557 57.31 15.0885 57.31 14.3397C57.31 13.5909 57.4636 12.9285 57.7708 12.3525C58.0876 11.7669 58.51 11.3157 59.038 10.9989C59.566 10.6725 60.1372 10.5093 60.7516 10.5093C61.2604 10.5093 61.7164 10.6101 62.1196 10.8117C62.5228 11.0133 62.8444 11.2869 63.0844 11.6325H63.1708V10.7397H64.6828V17.6805C64.6828 18.4773 64.5292 19.1541 64.222 19.7109C63.9148 20.2773 63.4828 20.7045 62.926 20.9925C62.3788 21.2805 61.7452 21.4245 61.0252 21.4245ZM61.0396 16.7157C61.4236 16.7157 61.7788 16.6245 62.1052 16.4421C62.4316 16.2501 62.6908 15.9765 62.8828 15.6213C63.0748 15.2565 63.1708 14.8293 63.1708 14.3397C63.1708 13.5909 62.9644 13.0101 62.5516 12.5973C62.1484 12.1749 61.6444 11.9637 61.0396 11.9637C60.646 11.9637 60.286 12.0597 59.9596 12.2517C59.6332 12.4341 59.374 12.7029 59.182 13.0581C58.99 13.4133 58.894 13.8405 58.894 14.3397C58.894 14.8389 58.99 15.2661 59.182 15.6213C59.374 15.9765 59.6332 16.2501 59.9596 16.4421C60.286 16.6245 60.646 16.7157 61.0396 16.7157Z"
                        fill="white"
                      />
                      <path
                        d="M66.1124 7.77326H67.6964V18.0837H66.1124V7.77326Z"
                        fill="white"
                      />
                      <path
                        d="M72.4106 18.3141C71.6907 18.3141 71.0427 18.1461 70.4667 17.8101C69.9002 17.4741 69.4538 17.0133 69.1275 16.4277C68.8106 15.8325 68.6523 15.1653 68.6523 14.4261C68.6523 13.7253 68.8059 13.0773 69.1131 12.4821C69.4299 11.8773 69.8666 11.3973 70.4235 11.0421C70.9803 10.6869 71.6138 10.5093 72.3242 10.5093C73.0634 10.5093 73.7019 10.6725 74.2395 10.9989C74.7867 11.3253 75.1995 11.7717 75.4779 12.3381C75.7659 12.9045 75.9099 13.5429 75.9099 14.2533C75.9099 14.3877 75.8954 14.5557 75.8666 14.7573H70.2362C70.2938 15.4389 70.5339 15.9669 70.9562 16.3413C71.3883 16.7061 71.8875 16.8885 72.4538 16.8885C72.905 16.8885 73.2939 16.7877 73.6203 16.5861C73.9563 16.3749 74.225 16.0917 74.4267 15.7365L75.7659 16.3701C75.4202 16.9749 74.9691 17.4501 74.4123 17.7957C73.8555 18.1413 73.1883 18.3141 72.4106 18.3141ZM74.2971 13.5477C74.2779 13.2885 74.1963 13.0341 74.0522 12.7845C73.9083 12.5253 73.6875 12.3093 73.3898 12.1365C73.1018 11.9637 72.7467 11.8773 72.3242 11.8773C71.8154 11.8773 71.3834 12.0309 71.0283 12.3381C70.6827 12.6357 70.4426 13.0389 70.3083 13.5477H74.2971Z"
                        fill="white"
                      />
                      <path
                        d="M80.1225 7.77326H83.7513C84.3657 7.77326 84.9273 7.90766 85.4361 8.17646C85.9449 8.44526 86.3433 8.81966 86.6313 9.29966C86.9289 9.77966 87.0777 10.3221 87.0777 10.9269C87.0777 11.6181 86.8521 12.2325 86.4009 12.7701C85.9593 13.3077 85.4025 13.6677 84.7305 13.8501L84.7161 13.9221L87.5385 17.9973V18.0837H85.6665L82.9449 14.0517H81.7353V18.0837H80.1225V7.77326ZM83.7081 12.5541C84.1881 12.5541 84.5961 12.4005 84.9321 12.0933C85.2681 11.7861 85.4361 11.3925 85.4361 10.9125C85.4361 10.6437 85.3689 10.3845 85.2345 10.1349C85.1001 9.88526 84.9081 9.68366 84.6585 9.53006C84.4089 9.36686 84.1113 9.28526 83.7657 9.28526H81.7353V12.5541H83.7081Z"
                        fill="white"
                      />
                      <path
                        d="M91.4631 18.3141C90.7431 18.3141 90.0951 18.1461 89.5191 17.8101C88.9527 17.4741 88.5063 17.0133 88.1799 16.4277C87.8631 15.8325 87.7047 15.1653 87.7047 14.4261C87.7047 13.7253 87.8583 13.0773 88.1655 12.4821C88.4823 11.8773 88.9191 11.3973 89.4759 11.0421C90.0327 10.6869 90.6663 10.5093 91.3767 10.5093C92.1159 10.5093 92.7543 10.6725 93.2919 10.9989C93.8391 11.3253 94.2519 11.7717 94.5303 12.3381C94.8183 12.9045 94.9623 13.5429 94.9623 14.2533C94.9623 14.3877 94.9479 14.5557 94.9191 14.7573H89.2887C89.3463 15.4389 89.5863 15.9669 90.0087 16.3413C90.4407 16.7061 90.9399 16.8885 91.5063 16.8885C91.9575 16.8885 92.3463 16.7877 92.6727 16.5861C93.0087 16.3749 93.2775 16.0917 93.4791 15.7365L94.8183 16.3701C94.4727 16.9749 94.0215 17.4501 93.4647 17.7957C92.9079 18.1413 92.2407 18.3141 91.4631 18.3141ZM93.3495 13.5477C93.3303 13.2885 93.2487 13.0341 93.1047 12.7845C92.9607 12.5253 92.7399 12.3093 92.4423 12.1365C92.1543 11.9637 91.7991 11.8773 91.3767 11.8773C90.8679 11.8773 90.4359 12.0309 90.0807 12.3381C89.7351 12.6357 89.4951 13.0389 89.3607 13.5477H93.3495Z"
                        fill="white"
                      />
                      <path
                        d="M95.0113 10.7397H96.7825L98.8129 16.0389H98.8705L100.944 10.7397H102.672L99.6193 18.0837H98.0353L95.0113 10.7397Z"
                        fill="white"
                      />
                      <path
                        d="M104.168 9.67406C103.871 9.67406 103.616 9.57326 103.405 9.37166C103.203 9.16046 103.103 8.90606 103.103 8.60846C103.103 8.31086 103.203 8.06126 103.405 7.85966C103.616 7.64846 103.871 7.54286 104.168 7.54286C104.466 7.54286 104.715 7.64846 104.917 7.85966C105.128 8.06126 105.234 8.31086 105.234 8.60846C105.234 8.90606 105.128 9.16046 104.917 9.37166C104.715 9.57326 104.466 9.67406 104.168 9.67406ZM103.376 10.7397H104.96V18.0837H103.376V10.7397Z"
                        fill="white"
                      />
                      <path
                        d="M109.784 18.3141C109.064 18.3141 108.416 18.1461 107.84 17.8101C107.274 17.4741 106.827 17.0133 106.501 16.4277C106.184 15.8325 106.026 15.1653 106.026 14.4261C106.026 13.7253 106.179 13.0773 106.487 12.4821C106.803 11.8773 107.24 11.3973 107.797 11.0421C108.354 10.6869 108.987 10.5093 109.698 10.5093C110.437 10.5093 111.075 10.6725 111.613 10.9989C112.16 11.3253 112.573 11.7717 112.851 12.3381C113.139 12.9045 113.283 13.5429 113.283 14.2533C113.283 14.3877 113.269 14.5557 113.24 14.7573H107.61C107.667 15.4389 107.907 15.9669 108.33 16.3413C108.762 16.7061 109.261 16.8885 109.827 16.8885C110.279 16.8885 110.667 16.7877 110.994 16.5861C111.33 16.3749 111.599 16.0917 111.8 15.7365L113.139 16.3701C112.794 16.9749 112.343 17.4501 111.786 17.7957C111.229 18.1413 110.562 18.3141 109.784 18.3141ZM111.671 13.5477C111.651 13.2885 111.57 13.0341 111.426 12.7845C111.282 12.5253 111.061 12.3093 110.763 12.1365C110.475 11.9637 110.12 11.8773 109.698 11.8773C109.189 11.8773 108.757 12.0309 108.402 12.3381C108.056 12.6357 107.816 13.0389 107.682 13.5477H111.671Z"
                        fill="white"
                      />
                      <path
                        d="M113.333 10.7397H115.046L116.529 15.9957H116.587L118.243 10.7397H119.87L121.512 15.9957H121.569L123.053 10.7397H124.737L122.39 18.0837H120.72L119.035 12.8133H118.992L117.321 18.0837H115.68L113.333 10.7397Z"
                        fill="white"
                      />
                      <path
                        d="M128.001 18.3141C127.156 18.3141 126.465 18.1317 125.928 17.7669C125.39 17.3925 125.011 16.9173 124.79 16.3413L126.201 15.7221C126.374 16.1061 126.614 16.3989 126.921 16.6005C127.238 16.8021 127.598 16.9029 128.001 16.9029C128.395 16.9029 128.726 16.8357 128.995 16.7013C129.264 16.5573 129.398 16.3461 129.398 16.0677C129.398 15.7989 129.283 15.5877 129.052 15.4341C128.822 15.2805 128.467 15.1461 127.987 15.0309L127.108 14.8149C126.523 14.6709 126.038 14.4165 125.654 14.0517C125.27 13.6869 125.078 13.2261 125.078 12.6693C125.078 12.2373 125.203 11.8581 125.452 11.5317C125.712 11.2053 126.057 10.9557 126.489 10.7829C126.921 10.6005 127.392 10.5093 127.9 10.5093C128.582 10.5093 129.182 10.6485 129.7 10.9269C130.219 11.1957 130.593 11.5893 130.824 12.1077L129.441 12.7125C129.163 12.1461 128.654 11.8629 127.915 11.8629C127.56 11.8629 127.262 11.9349 127.022 12.0789C126.782 12.2229 126.662 12.4101 126.662 12.6405C126.662 12.8613 126.753 13.0437 126.936 13.1877C127.118 13.3221 127.387 13.4373 127.742 13.5333L128.822 13.8069C129.542 13.9893 130.084 14.2677 130.449 14.6421C130.824 15.0069 131.011 15.4581 131.011 15.9957C131.011 16.4565 130.876 16.8645 130.608 17.2197C130.348 17.5653 129.988 17.8341 129.528 18.0261C129.067 18.2181 128.558 18.3141 128.001 18.3141Z"
                        fill="white"
                      />
                      <defs>
                        <clipPath id="clip0_16428_252">
                          <rect
                            width="19.2"
                            height="19.2"
                            fill="white"
                            transform="translate(3.44275 2.74286)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    {/* <img
                      loading="lazy"
                      src="https://renty.ae/assets-nd/icons/company-reviews/google-reviews.svg"
                      title="Company reviews"
                      alt="Company reviews"
                    /> */}
                  </div>
                </div>
                <div className="company-review-statistics-block px-xs-1-custom d-flex align-items-center direction-ltr">
                  <div className="font-weight-normal company-review-score color-shades-black">
                    4.9
                  </div>
                  <div className="company-review-stars-block px-sm-1-custom pb-1-custom pb-xs-0-custom pb-sm-0-custom">
                    <div className="google-stars-block d-flex align-items-center">
                      <span
                        className="fs-20 fs-sm-24 google-star"
                        style={{ color: "gold" }}
                      >
                        ★
                      </span>
                      <span
                        className="fs-20 fs-sm-24 google-star"
                        style={{ color: "gold" }}
                      >
                        ★
                      </span>
                      <span
                        className="fs-20 fs-sm-24 google-star"
                        style={{ color: "gold" }}
                      >
                        ★
                      </span>
                      <span
                        className="fs-20 fs-sm-24 google-star"
                        style={{ color: "gold" }}
                      >
                        ★
                      </span>
                      <span
                        className="fs-20 fs-sm-24 google-star"
                        style={{ color: "gold" }}
                      >
                        ☆
                      </span>
                      {/* <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-100"></span>
                      <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-100"></span>
                      <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-100"></span>
                      <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-100"></span>
                      <span className="fs-20 fs-sm-24 google-star icon-star-filled filled-90"></span> */}
                    </div>
                  </div>
                  <div className="company-review-amount color-shades-500">
                    1798
                  </div>
                </div>
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-center py-4-custom pt-xs-2-custom flex-column flex-sm-row">
          {/* <div className="d-flex flex-wrap justify-content-center justify-content-lg-start pb-4-custom pb-sm-0-custom pb-md-0-custom pb-lg-0-custom"></div> */}
          <span className="fs-12 letter-spacing-0_2 color-shades-500">
            © 2024 Nayal Car. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <footer className="border-shades-200 p-4 mt-4">
//   <div className="row ">
//     {/* Inquiries & Support */}
//     <div className="col-lg-6 col-12 d-flex flex-column lg:pl-[190px] mb-4">
//       <div>
//         <span className="font-weight-bold letter-spacing-1 text-uppercase color-shades-600 fs-11">
//           Inquiries &amp; Support
//         </span>
//         <div className="d-flex flex-column mt-3-custom line-height-25 gap-10">
//           <a
//             href="tel:+971528888746"
//             className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
//           >
//             <div className="mr-2 d-flex align-items-center justify-content-center">
//               <MdOutlineLocalPhone />
//             </div>
//             <span className="direction-ltr">+971-528888746</span>
//           </a>
//           <a
//             href="https://api.whatsapp.com/send/?phone=971528888746"
//             title="Contact Renty.ae car rental Whatsapp"
//             className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
//             target="blank"
//           >
//             <img
//               width="16"
//               height="16"
//               className="mr-2-custom"
//               loading="lazy"
//               src="https://renty.ae/assets-nd/icons/site/social-whatsapp-icon.svg"
//               alt="Contact by Whatsapp"
//             />
//             <span className="direction-ltr ml-1">WhatsApp</span>
//           </a>
//           <a
//             href="https://www.facebook.com/profile.php?id=61569025370790"
//             title="Contact Renty.ae car rental Telegram"
//             className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
//             target="blank"
//           >
//             <FaFacebookF className="text-[#1359ba]" />

//             <span className="direction-ltr ml-1">Facebook</span>
//           </a>
//           <a
//             href="https://www.tiktok.com/@naylrentalsdxb?_t=8rLvJBDLAK9&_r=1"
//             title="Contact Renty.ae car rental Telegram"
//             className="fs-12 fs-sm-14 color-shades-black d-flex align-items-center letter-spacing-0_2"
//             target="blank"
//           >
//             <FaTiktok className="text-[#1359ba]" />

//             <span className="direction-ltr ml-1">TikTok</span>
//           </a>
//         </div>
//       </div>
//     </div>

//     {/* Address */}
//     <div className="col-lg-6 col-12 d-flex flex-column  mb-4">
//       <div className="d-none d-md-block"></div>
//       <div className="d-block d-md-none mb-3"></div>
//       <span className="fs-11 font-weight-bold letter-spacing-1 text-uppercase color-shades-600">
//         Address
//       </span>
//       <div className="d-flex flex-column mt-3-custom">
//         <span className="fs-14 color-shades-black mb-1 letter-spacing-0_2">
//           Azizi Riviera 4 Retail 8 Meydan Dubai,
//           <br /> United Arab Emirates,
//         </span>
//       </div>
//     </div>
//   </div>
//   <div className="bg-shades-white d-flex align-items-center justify-center py-4-custom pt-xs-2-custom flex-column flex-sm-row">
//     <span className="fs-12 letter-spacing-0_2 color-shades-500">
//       © 2024 All rights reserved.
//     </span>
//   </div>
// </footer>
