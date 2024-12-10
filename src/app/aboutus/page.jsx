"use client";
import React from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
const Page = () => {
  return (
    <div>
      <div className="page-header bg-section parallaxie">
        <Image
          src="/images/aboutmainpic.avif"
          alt="About Us"
          layout="fill"
          objectFit="cover"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-header-box">
                <h1 class="text-anime-style-3" data-cursor="-opaque">
                  About Nayl Rental Car
                </h1>
                <nav class="wow fadeInUp">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      We are a rental cars in Dubai we rent only luxury cars and
                      limited edition cars
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
            <h3 class="wow fadeInUp">about us</h3>
            <h2 class="text-anime-style-3" data-cursor="-opaque">
              Luxury and Limited Edition Cars
            </h2>
            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-title">
                  <p class="wow fadeInUp" data-wow-delay="0.25s">
                    At Nayl Rental Car, we specialize in offering only luxury
                    cars and limited edition models. Our collection is
                    meticulously curated to cater to the discerning tastes of
                    automotive enthusiasts and individuals who seek exclusive
                    driving experiences.
                  </p>
                </div>

                <div class="about-content-body">
                  <div
                    class="about-trusted-booking wow fadeInUp"
                    data-wow-delay="0.75s"
                  >
                    <div class="icon-box">
                      <img src="images/icon-about-trusted-2.svg" alt="" />
                    </div>
                    <div class="trusted-booking-content">
                      <h3>Competitive Pricing</h3>
                      <p>
                        While we offer the pinnacle of automotive luxury, our
                        rental rates are competitively priced, making premium
                        car experiences accessible to those with a passion for
                        driving exceptional vehicles.
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
                      <h3>Competitive Pricing</h3>
                      <p>
                        While we offer the pinnacle of automotive luxury, our
                        rental rates are competitively priced, making premium
                        car experiences accessible to those with a passion for
                        driving exceptional vehicles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content-body">
                <div
                  class="about-trusted-booking wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="icon-box">
                    <img src="images/icon-about-trusted-1.svg" alt="" />
                  </div>
                  <div class="trusted-booking-content">
                    <h3>Availability Nationwide</h3>
                    <p>
                      With a presence across the nation, Nayl Rental Car makes
                      luxury and limited edition cars accessible to individuals
                      in various cities, ensuring that remarkable driving
                      experiences are within reach.
                    </p>
                  </div>
                </div>
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
    </div>
  );
};

export default Page;
