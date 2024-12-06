"use client";
import React from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
const Page = () => {
  return (
    <div>
      <Header />
      <div class="page-header bg-section parallaxie">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header-box">
                <h1 class="text-anime-style-3" data-cursor="-opaque">
                  About Us
                </h1>
                <nav class="wow fadeInUp">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="./">home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      about us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-us page-about-us">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-image">
                <div class="about-img-1">
                  <figure class="reveal">
                    <img src="images/about-img-1.jpg" alt="" />
                  </figure>
                </div>

                <div class="about-img-2">
                  <figure class="reveal">
                    <img src="images/about-img-2.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-title">
                  <h3 class="wow fadeInUp">about us</h3>
                  <h2 class="text-anime-style-3" data-cursor="-opaque">
                    Your trusted partner in reliable car rental
                  </h2>
                  <p class="wow fadeInUp" data-wow-delay="0.25s">
                    Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga
                    Dolor Saerror Sed Earum A Magni Soluta Quam Minus Dolor
                    Dolor
                  </p>
                </div>

                <div class="about-content-body">
                  <div
                    class="about-trusted-booking wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div class="icon-box">
                      <img src="images/icon-about-trusted-1.svg" alt="" />
                    </div>
                    <div class="trusted-booking-content">
                      <h3>easy booking process</h3>
                      <p>
                        We Have Optimized The Booking Process So That Our
                        Clients Can Experience The Easiest And The Safest
                        Service
                      </p>
                    </div>
                  </div>

                  <div
                    class="about-trusted-booking wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    <div class="icon-box">
                      <img src="images/icon-about-trusted-2.svg" alt="" />
                    </div>
                    <div class="trusted-booking-content">
                      <h3>convenient pick-up & return process</h3>
                      <p>
                        We Have Optimized The Booking Process So That Our
                        Clients Can Experience The Easiest And The Safest
                        Service
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="exclusive-partners bg-section">
        <div class="container">
          <div class="row section-row">
            <div class="col-lg-12">
              <div class="section-title">
                <h3 class="wow fadeInUp">executive partners</h3>
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Trusted by leading brands
                </h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-6">
              <div class="partners-logo wow fadeInUp" data-wow-delay="0.2s">
                <img src="images/icon-partners-1.svg" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="partners-logo wow fadeInUp" data-wow-delay="0.4s">
                <img src="images/icon-partners-2.svg" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="partners-logo wow fadeInUp" data-wow-delay="0.6s">
                <img src="images/icon-partners-3.svg" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="partners-logo wow fadeInUp" data-wow-delay="0.8s">
                <img src="images/icon-partners-4.svg" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="partners-logo wow fadeInUp" data-wow-delay="1s">
                <img src="images/icon-partners-3.svg" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="partners-logo wow fadeInUp" data-wow-delay="1.2s">
                <img src="images/icon-partners-4.svg" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="partners-logo wow fadeInUp" data-wow-delay="1.4s">
                <img src="images/icon-partners-1.svg" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-6">
              <div class="partners-logo wow fadeInUp" data-wow-delay="1.6s">
                <img src="images/icon-partners-2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vision-mission">
        <div class="container">
          <div class="row section-row">
            <div class="col-lg-12">
              <div class="section-title">
                <h3 class="wow fadeInUp">vision mission</h3>
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  Driving excellence and innovation in car rental services
                </h2>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="our-projects-nav wow fadeInUp" data-wow-delay="0.25s">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#vision"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      our vision
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mission"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      our mission
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#approach"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      our approach
                    </button>
                  </li>
                </ul>
              </div>

              <div class="vision-mission-box tab-content" id="myTabContent">
                <div
                  class="our-vision-item tab-pane fade show active"
                  id="vision"
                  role="tabpanel"
                >
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="vision-mission-content">
                        <div class="section-title">
                          <h3 class="wow fadeInUp">our vision</h3>
                          <h2 class="text-anime-style-3" data-cursor="-opaque">
                            Pioneering excellence in car rental services
                          </h2>
                          <p class="wow fadeInUp" data-wow-delay="0.25s">
                            We aim to continually innovate and integrate the
                            latest technology into our services. From easy
                            online bookings to advanced vehicle tracking
                            systems, our goal is to make the car rental process
                            seamless and efficient for our customers. Quality is
                            at the heart of everything we do. We maintain a
                            diverse fleet of well-maintained vehicles that meet
                            the highest standards of safety and comfort.
                          </p>
                        </div>
                        <div
                          class="vision-mission-list wow fadeInUp"
                          data-wow-delay="0.5s"
                        >
                          <ul>
                            <li>Our customers are our top priority</li>
                            <li>Quality is at the heart of everything we do</li>
                            <li>
                              every vehicle leaves care looking its absolute
                              best
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="vision-image">
                        <figure class="image-anime reveal">
                          <img src="images/our-vision-img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="our-vision-item tab-pane fade"
                  id="mission"
                  role="tabpanel"
                >
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="vision-mission-content">
                        <div class="section-title">
                          <h3>our mission</h3>
                          <h2 data-cursor="-opaque">
                            Pioneering excellence in car rental services
                          </h2>
                          <p>
                            We aim to continually innovate and integrate the
                            latest technology into our services. From easy
                            online bookings to advanced vehicle tracking
                            systems, our goal is to make the car rental process
                            seamless and efficient for our customers. Quality is
                            at the heart of everything we do. We maintain a
                            diverse fleet of well-maintained vehicles that meet
                            the highest standards of safety and comfort.
                          </p>
                        </div>

                        <div class="vision-mission-list">
                          <ul>
                            <li>Our customers are our top priority</li>
                            <li>Quality is at the heart of everything we do</li>
                            <li>
                              every vehicle leaves care looking its absolute
                              best
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="vision-image">
                        <figure class="image-anime reveal">
                          <img src="images/our-mission-img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="our-mission-item tab-pane fade"
                  id="approach"
                  role="tabpanel"
                >
                  <div class="row align-items-center">
                    <div class="col-lg-6">
                      <div class="vision-mission-content">
                        <div class="section-title">
                          <h3>our approach</h3>
                          <h2 data-cursor="-opaque">
                            Pioneering excellence in car rental services
                          </h2>
                          <p>
                            We aim to continually innovate and integrate the
                            latest technology into our services. From easy
                            online bookings to advanced vehicle tracking
                            systems, our goal is to make the car rental process
                            seamless and efficient for our customers. Quality is
                            at the heart of everything we do. We maintain a
                            diverse fleet of well-maintained vehicles that meet
                            the highest standards of safety and comfort.
                          </p>
                        </div>

                        <div class="vision-mission-list">
                          <ul>
                            <li>Our customers are our top priority</li>
                            <li>Quality is at the heart of everything we do</li>
                            <li>
                              every vehicle leaves care looking its absolute
                              best
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="vision-image">
                        <figure class="image-anime reveal">
                          <img src="images/our-approach-img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
