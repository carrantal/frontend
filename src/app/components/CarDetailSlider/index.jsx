"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function CarDetailSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Pagination, Thumbs]}
        className="mySwiper2"
      >
        {images.map((each, index) => (
          <SwiperSlide key={index}>
            <img src={each.url} />
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
      >
        {images.map((each, index) => (
          <SwiperSlide key={index}>
            <img src={each.url} />
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
          <SwiperSlide
            style={{
              height: "400px",
              width: "300px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="http://res.cloudinary.com/dz1tky3to/video/upload/c_scale,dl_200,vs_6,w_250/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.gif"
              />
              <a
                href="https://res.cloudinary.com/dz1tky3to/video/upload/v1735043522/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.mp4"
                target="_blank"
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
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "400px",
              width: "300px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="http://res.cloudinary.com/dz1tky3to/video/upload/c_scale,dl_200,vs_6,w_250/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.gif"
              />
              <a
                href="https://res.cloudinary.com/dz1tky3to/video/upload/v1735043522/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.mp4"
                target="_blank"
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
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "400px",
              width: "300px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="http://res.cloudinary.com/dz1tky3to/video/upload/c_scale,dl_200,vs_6,w_250/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.gif"
              />
              <a
                href="https://res.cloudinary.com/dz1tky3to/video/upload/v1735043522/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.mp4"
                target="_blank"
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
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "400px",
              width: "300px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="http://res.cloudinary.com/dz1tky3to/video/upload/c_scale,dl_200,vs_6,w_250/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.gif"
              />
              <a
                href="https://res.cloudinary.com/dz1tky3to/video/upload/v1735043522/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.mp4"
                target="_blank"
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
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "400px",
              width: "300px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src="http://res.cloudinary.com/dz1tky3to/video/upload/c_scale,dl_200,vs_6,w_250/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.gif"
              />
              <a
                href="https://res.cloudinary.com/dz1tky3to/video/upload/v1735043522/ssstik_io_naylrentalsdxb_1735043468972_23faa66a9d.mp4"
                target="_blank"
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
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
