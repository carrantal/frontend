"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeProducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

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
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="perfect-fleet bg-section">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={30}
        slidesPerView={4}
        className="swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>{/* Slide Content */}</SwiperSlide>
        ))}
      </Swiper>
      <div className="car-details-btn flex justify-between space-x-6 rounded-xl cursor-pointer">
        <div
          ref={prevRef}
          className="car-button-prev bg-[#ff3600] w-[40px] rounded-md"
        >
          Prev
        </div>
        <div
          ref={nextRef}
          className="car-button-next bg-[#ff3600] w-[40px] rounded-md"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
