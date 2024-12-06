"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeProducts = () => {
  const products = [
    {
      id: 1,
      title: "BMW M2 Car 2017",
      category: "luxury car",
      image: "images/perfect-fleet-img-1.png",
      price: 280,
      features: ["4 passenger", "4 door", "bags", "auto"],
    },
    {
      id: 2,
      title: "Audi A6 Car 2019",
      category: "luxury car",
      image: "images/perfect-fleet-img-2.png",
      price: 300,
      features: ["5 passenger", "4 door", "2 bags", "manual"],
    },
    {
      id: 3,
      title: "Mercedes Benz 2021",
      category: "luxury car",
      image: "images/perfect-fleet-img-3.png",
      price: 320,
      features: ["4 passenger", "4 door", "3 bags", "auto"],
    },
    {
      id: 4,
      title: "Tesla Model S",
      category: "electric car",
      image: "images/perfect-fleet-img-4.png",
      price: 400,
      features: ["4 passenger", "4 door", "bags", "auto"],
    },
    {
      id: 5,
      title: "Tesla Model S",
      category: "electric car",
      image: "images/perfect-fleet-img-4.png",
      price: 400,
      features: ["4 passenger", "4 door", "bags", "auto"],
    },
  ];

  const productsPerSlide = 1; // Show 1 product per slide

  return (
    <div className="perfect-fleet bg-section">
      <div className="container-fluid">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="wow fadeInUp">our fleets</h3>
              <h2 className="text-anime-style-3" data-cursor="-opaque">
                Explore our perfect and extensive fleet
              </h2>
            </div>
          </div>
        </div>

        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".car-button-prev",
            nextEl: ".car-button-next",
          }}
          spaceBetween={30}
          slidesPerView={4} // 1 product per view
          slideToClickedSlide={true}
          className="swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="perfect-fleet-item">
                    <div className="image-box">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="perfect-fleet-content">
                      <div className="perfect-fleet-title">
                        <h3>{product.category}</h3>
                        <h2>{product.title}</h2>
                      </div>
                      <div className="perfect-fleet-body">
                        <ul>
                          {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="perfect-fleet-footer">
                        <div className="perfect-fleet-pricing">
                          <h2>
                            ${product.price}
                            <span>/day</span>
                          </h2>
                        </div>
                        <div className="perfect-fleet-btn">
                          <a href="#" className="section-icon-btn">
                            <img src="images/arrow-white.svg" alt="arrow" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="car-details-btn flex space-x-6 rounded-xl cursor-pointer">
          <div className="car-button-prev bg-[#ff3600] w-[40px] rounded-md">
            Prev
          </div>
          <div className="car-button-next bg-[#ff3600] w-[40px] rounded-md">
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
