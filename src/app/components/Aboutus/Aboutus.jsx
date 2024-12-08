import React from "react";

const Aboutus = () => {
  return (
    <div>
      <div class="about-us">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 ">
              <div class="about-image ">
                <img src="images/aboutpic.png" alt="" />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-title">
                  <h3 class="wow fadeInUp">about us</h3>
                  <h2 class="text-anime-style-3" data-cursor="-opaque">
                    Your Ultimate Car Rental Destination
                  </h2>
                  <p class="wow fadeInUp" data-wow-delay="0.25s">
                    Discover the thrill of driving your dream car. We offer a
                    handpicked selection of luxury and limited edition cars,
                    ensuring an unforgettable experience for every journey.
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
    </div>
  );
};

export default Aboutus;
