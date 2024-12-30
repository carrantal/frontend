"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Portal from "../Portal";
import Image from "next/image";

export default function CarDetailSlider({ images, carVideos }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log({ carVideos });
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Thumbs]}
        className="mySwiper2"
        style={{
          height: "350px",
        }}
      >
        {images.map((each, index) => (
          <SwiperSlide key={index}>
            <Image
              src={each.url}
              width={690}
              height={350}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            {/* <img src={each.url} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Pagination, Thumbs]}
        className="mySwiper mt-2"
        style={{
          height: "90px",
        }}
      >
        {images.map((each, index) => (
          <SwiperSlide key={index}>
            <Image
              src={each.url}
              width={130}
              height={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* <img src={each.url} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div class="mt-2 mb-2 p-2 bg-shades-white">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {carVideos?.map((eachV) => (
            <SwiperSlide
              style={{
                height: "400px",
                width: "300px",
              }}
            >
              <VideoComponet eachV={eachV} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

function VideoComponet({ eachV }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <video
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        src={eachV.url}
      ></video>
      {/* href={eachV.url} target="_blank" */}
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            height: "30px",
            width: "30px",
            background: "black",
            borderRadius: "50%",
          }}
        >
          <svg
            style={{
              padding: "3px",
              height: "100%",
              width: "100%",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="100"
            height="100"
          >
            <polygon points="30,20 30,80 70,50" fill="#ec7421" />
          </svg>
        </div>
      </button>
      {open && (
        <Portal>
          <div className="videomodal">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  height: "600px",
                  position: "relative",
                }}
              >
                <video
                  style={{
                    height: "100%",
                  }}
                  controls
                  src={eachV.url}
                ></video>
                <div
                  className="close-btn"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <span>x</span>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
