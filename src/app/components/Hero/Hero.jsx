import React from "react";

const Hero = () => {
  return (
    <>
      <div class="hero">
        <div class="hero-section bg-section hero-video">
          <div class="hero-bg-video">
            {/* <video autoplay muted loop id="myVideo">
              <source src="images/hero-bg-video.mp4" type="video/mp4" />
            </video> */}
            <video autoPlay muted loop id="myVideo" playsInline>
              <source src="/video/novaride-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="hero-content">
                  <div class="section-title">
                    <h3 class="wow fadeInUp">welcome to car rent</h3>
                    <h1 class="text-anime-style-3" data-cursor="-opaque">
                      Looking to save more on your rental car?
                    </h1>
                    <p class="wow fadeInUp" data-wow-delay="0.25s">
                      Whether you're planning a weekend getaway, a business
                      trip, or just need a reliable ride for the day, we offers
                      a wide range of vehicles to suit your needs.
                    </p>
                  </div>

                  <div
                    class="hero-content-body wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <a href="#" class="btn-default">
                      book a rental
                    </a>
                    <a href="#" class="btn-default btn-highlighted">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rent-details">
          <div class="container">
            <form action="#" method="get">
              <div class="row no-gutters align-items-center">
                <div class="col-md-12">
                  <div class="rent-details-box">
                    <div class="rent-details-form">
                      <div class="rent-details-item">
                        <div class="icon-box">
                          <img src="images/icon-rent-details-1.svg" alt="" />
                        </div>
                        <div class="rent-details-content">
                          <h3>car type</h3>
                          <select class="rent-details-form form-select">
                            <option value="" disabled selected>
                              Choose Car Type
                            </option>
                            <option value="sport_car">sport car</option>
                            <option value="convertible_car">
                              convertible car
                            </option>
                            <option value="sedan_car">sedan car</option>
                            <option value="luxury_car">luxury car</option>
                            <option value="electric_car">electric car</option>
                            <option value="coupe_car">coupe car</option>
                          </select>
                        </div>
                      </div>

                      <div class="rent-details-item">
                        <div class="icon-box">
                          <img src="images/icon-rent-details-2.svg" alt="" />
                        </div>
                        <div class="rent-details-content">
                          <h3>pickup location</h3>
                          <select class="rent-details-form form-select">
                            <option value="" disabled selected>
                              Pick Up Location
                            </option>
                            <option value="abu_dhabi">abu dhabi</option>
                            <option value="alain">alain</option>
                            <option value="dubai">dubai</option>
                            <option value="sharjah">sharjah</option>
                          </select>
                        </div>
                      </div>

                      <div class="rent-details-item">
                        <div class="icon-box">
                          <img src="images/icon-rent-details-3.svg" alt="" />
                        </div>
                        <div class="rent-details-content">
                          <h3>pickup date</h3>
                          <p>
                            <input
                              type="text"
                              name="date"
                              placeholder="mm/dd/yyyy"
                              class="rent-details-form datepicker"
                              required
                            />
                          </p>
                        </div>
                      </div>

                      <div class="rent-details-item">
                        <div class="icon-box">
                          <img src="images/icon-rent-details-4.svg" alt="" />
                        </div>
                        <div class="rent-details-content">
                          <h3>Dropoff location</h3>
                          <select class="rent-details-form form-select">
                            <option value="" disabled selected>
                              Drop Off Location
                            </option>
                            <option value="abu_dhabi">abu dhabi</option>
                            <option value="alain">alain</option>
                            <option value="sharjah">sharjah</option>
                          </select>
                        </div>
                      </div>

                      <div class="rent-details-item">
                        <div class="icon-box">
                          <img src="images/icon-rent-details-5.svg" alt="" />
                        </div>
                        <div class="rent-details-content">
                          <h3>Return Date</h3>
                          <p>
                            <input
                              type="text"
                              name="date"
                              placeholder="mm/dd/yyyy"
                              class="rent-details-form datepicker"
                              required
                            />
                          </p>
                        </div>
                      </div>

                      <div class="rent-details-item rent-details-search">
                        <a href="#">
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
