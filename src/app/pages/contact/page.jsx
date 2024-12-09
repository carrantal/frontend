import React from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Contact from "@/app/components/Contact/Contact";

const Page = () => {
  return (
    <>
      <Header />

      <div class="page-contact-us">
        <div class="contact-info-form">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="contact-information">
                  <div class="section-title">
                    <h2 class="text-anime-style-3" data-cursor="-opaque">
                      Contact information
                    </h2>
                  </div>

                  <div class="contact-info-list">
                    <div
                      class="contact-info-item wow fadeInUp"
                      data-wow-delay="0.25s"
                    >
                      <div class="icon-box">
                        <img src="images/icon-phone.svg" alt="" />
                      </div>

                      <div class="contact-info-content">
                        <p>+971-528888746</p>
                      </div>
                    </div>

                    <div
                      class="contact-info-item wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div class="icon-box">
                        <img src="images/icon-mail.svg" alt="" />
                      </div>

                      <div class="contact-info-content">
                        <p>info@naylrentalcar.com</p>
                      </div>
                    </div>

                    <div
                      class="contact-info-item wow fadeInUp"
                      data-wow-delay="0.75s"
                    >
                      <div class="icon-box">
                        <img src="images/icon-location.svg" alt="" />
                      </div>

                      <div class="contact-info-content">
                        <p>
                          Azizi Riviera 4 , Retail 8 ,Meydan , Dubai, UAE Tel:
                          +971-528888746
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="contact-info-social wow fadeInUp"
                    data-wow-delay="0.25s"
                  >
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

              <div class="col-lg-6">
                <div class="contact-us-form">
                  <form
                    id="contactForm"
                    action="#"
                    method="POST"
                    data-toggle="validator"
                    class="wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div class="row">
                      <div class="form-group col-md-6 mb-4">
                        <label>first name</label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="fname"
                          placeholder="Enter Your Name"
                          required
                        />
                        <div class="help-block with-errors"></div>
                      </div>

                      <div class="form-group col-md-6 mb-4">
                        <label>last name</label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="lname"
                          placeholder="Enter Your Name"
                          required
                        />
                        <div class="help-block with-errors"></div>
                      </div>

                      <div class="form-group col-md-6 mb-4">
                        <label>email</label>
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          id="email"
                          placeholder="Enter Your Email"
                          required
                        />
                        <div class="help-block with-errors"></div>
                      </div>

                      <div class="form-group col-md-6 mb-4">
                        <label>phone</label>
                        <input
                          type="text"
                          name="phone"
                          class="form-control"
                          id="phone"
                          placeholder="Enter Your Number"
                          required
                        />
                        <div class="help-block with-errors"></div>
                      </div>

                      <div class="form-group col-md-12 mb-4">
                        <label>message</label>
                        <textarea
                          name="msg"
                          class="form-control"
                          id="msg"
                          rows="4"
                          placeholder="Write Your Message"
                          required
                        ></textarea>
                        <div class="help-block with-errors"></div>
                      </div>

                      <div class="col-lg-12">
                        <div class="contact-form-btn">
                          <button type="submit" class="btn-default">
                            send message
                          </button>
                          <div id="msgSubmit" class="h3 hidden"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
