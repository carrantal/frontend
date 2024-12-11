import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HomeProducts = () => {
  // Dummy data for products; replace with your dynamic data
  const products = [
    {
      id: 1,
      image: "images/mercendies.avif",
      title: "Luxury Car",
      model: "BMW M2 Car 2017",
      passengers: "4 passenger",
      doors: "4 door",
      bags: "2 bags",
      transmission: "auto",
      price: "$280/day",
    },
    {
      id: 2,
      image: "images/mercendies.avif",
      title: "Luxury Car",
      model: "Mercedes S Class",
      passengers: "5 passenger",
      doors: "4 door",
      bags: "3 bags",
      transmission: "auto",
      price: "$300/day",
    },
    {
      id: 3,
      image: "images/porcha.avif",
      title: "Luxury Car",
      model: "Mercedes S Class",
      passengers: "5 passenger",
      doors: "4 door",
      bags: "3 bags",
      transmission: "auto",
      price: "$300/day",
    },
    {
      id: 4,
      image: "images/mercendies.avif",
      title: "Luxury Car",
      model: "Mercedes S Class",
      passengers: "5 passenger",
      doors: "4 door",
      bags: "3 bags",
      transmission: "auto",
      price: "$300/day",
    },
    {
      id: 5,
      image: "images/mercendies.avif",
      title: "Luxury Car",
      model: "Mercedes S Class",
      passengers: "5 passenger",
      doors: "4 door",
      bags: "3 bags",
      transmission: "auto",
      price: "$300/day",
    },
    {
      id: 6,
      image: "images/porcha.avif",
      title: "Luxury Car",
      model: "Mercedes S Class",
      passengers: "5 passenger",
      doors: "4 door",
      bags: "3 bags",
      transmission: "auto",
      price: "$300/day",
    },
    {
      id: 7,
      image: "images/perfect-fleet-img-1.png",
      title: "Luxury Car",
      model: "Mercedes S Class",
      passengers: "5 passenger",
      doors: "4 door",
      bags: "3 bags",
      transmission: "auto",
      price: "$300/day",
    },
    // Add more products here
  ];

  return (
    <div>
      <div className="perfect-fleet bg-section">
        <div className="container-fluid">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="wow fadeInUp">Our Fleets</h3>
                <h2 className="text-anime-style-3">
                  Explore our perfect and extensive fleet
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 3000 }}
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                  320: { slidesPerView: 1 },
                }}
                style={{
                  "--swiper-navigation-color": "red",
                  "--swiper-navigation-size": "25px",
                }}
                className="car-details-slider"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="perfect-fleet-item">
                      <div className="image-box">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className="perfect-fleet-content">
                        <div className="perfect-fleet-title">
                          {/* <h3>{product.title}</h3> */}
                          <h2>{product.model}</h2>
                        </div>
                        <div className="perfect-fleet-body">
                          <ul>
                            <li>{product.passengers}</li>
                            <li>{product.doors}</li>
                            <li>{product.bags}</li>
                            <li>{product.transmission}</li>
                          </ul>
                        </div>
                        <div className="perfect-fleet-footer">
                          <div className="perfect-fleet-pricing">
                            <h2>{product.price}</h2>
                          </div>
                          <div className="perfect-fleet-btn">
                            <a href="#" className="section-icon-btn">
                              <img src="images/arrow-white.svg" alt="Arrow" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
