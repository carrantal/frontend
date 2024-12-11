import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer class="main-footer bg-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="about-footer">
                <div class="footer-logo">
                  <img src="images/footer-logo.svg" alt="" />
                </div>

                <div class="about-footer-content">
                  <p>
                    Experience the ease and convenience of renting a car with
                    Novaride.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="footer-links footer-menu">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">cars</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4 col-md-4">
              <div class="footer-newsletter">
                <h3>Contact Links</h3>
                <ul class="flex flex-col gap-4">
                  <li class="flex items-center gap-2">
                    <FaPhone />
                    <a href="#">(+01) 789 854 856</a>
                  </li>
                  <li class="flex items-center gap-2">
                    <MdEmail />
                    <a href="#">info@fomain.us</a>
                  </li>
                  <li class="flex items-center gap-2">
                    <IoHomeOutline />
                    <a href="#">1234 street#110 komla ariport</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-copyright">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-7">
                <div class="footer-copyright-text">
                  <p>© 2023 Nayl Rental Car. All Rights Reserved.</p>
                </div>
              </div>

              <div class="col-lg-6 col-md-5">
                <div class="footer-social-links">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61569025370790"
                        target="blank"
                      >
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@naylrentalsdxb?_t=8rLvJBDLAK9&_r=1"
                        target="blank"
                      >
                        <i class="fa-brands fa-tiktok"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/naylrentalcardxb"
                        target="blank"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
