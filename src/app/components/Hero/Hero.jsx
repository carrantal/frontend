import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-section bg-section hero-video">
          <div className="hero-bg-video">
            <video autoPlay muted loop id="myVideo" playsInline>
              <source src="/video/novaride-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="hero-content">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">welcome to car rent</h3>
                    <h1 className="text-anime-style-3" data-cursor="-opaque">
                      Experience the Ultimate Luxury. Book Now
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.25s">
                      Rent Luxury and Limited Edition Cars & Boats in Dubai
                    </p>
                  </div>

                  <div
                    className="hero-content-body wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <a href="#" className="btn-default">
                      book a rental
                    </a>
                    <a href="#" className="btn-default btn-highlighted">
                      learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rent-details">
          <div className="container">
            <form action="#" method="get">
              <div className="row no-gutters align-items-center justify-content-center">
                <div className="col-md-12">
                  <div className="rent-details-box">
                    <div className="rent-details-form">
                      <div className="rent-details-item">
                        <div className="icon-box">
                          <img
                            src="images/icon-rent-details-1.svg"
                            alt="Car Type Icon"
                          />
                        </div>
                        <div className="rent-details-content">
                          <h3>car type</h3>
                          <select className="rent-details-form form-select">
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

                      <div className="rent-details-item rent-details-search">
                        <div className="search-wrapper relative">
                          <button
                            type="submit"
                            className="search-btn absolute lg:left-[200px] top-0 p-2"
                          >
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </button>
                          <input
                            type="search"
                            className="form-control search-input pl-12 rounded-lg lg:w-[500px] lg:ml-[200px] border-1 border-yellow-500"
                            placeholder="Search..."
                          />
                        </div>
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
