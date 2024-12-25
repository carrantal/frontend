import React from "react";
import { FaInfoCircle, FaCheckSquare } from "react-icons/fa";
const carData = {
  images: [
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24783_4cca81da2c02d65e78c430aa5f7b737e.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24784_1211d8e36d14b79df7c8a2c59f3d63e7.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24785_b467470bdb015af5ee66ad074fa9ed93.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24786_b147d96e4a6c2d2eeaaf5beaf167dedc.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24787_79f5f2c1d6743cd4ffa2a753aa09d574.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24789_5e58c23d66052e354573192009f3bc3c.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24790_4cf92e739849b63430d887f7e6ac5b7f.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24791_1a074c827a3e357d7cb3fed9c0d3ad22.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photos/l/black_lamborghini-evo-spyder_2023_24792_5d5310da361c4ab239b878832d4873be.jpg",
    },
    {
      url: "https://renty.ae/uploads/car/photo/l/black_lamborghini-evo-spyder_2023_5150_main_d4a4de60d6e19811843526b7dd9a31b3.jpg",
    },
  ],
  specifications: [
    { key: "Year", value: "2023" },
    { key: "Color", value: "Black" },
    { key: "0-100km/h", value: "2.9 Sec" },
    { key: "Transmission", value: "Automatic" },
    { key: "Engine", value: "5.2-Litre V10" },
    { key: "Max speed", value: "325" },
    { key: "Horse power", value: "640" },
    { key: "Seats", value: "2" },
    { key: "Fuel type", value: "Petrol" },
    { key: "Body type", value: "Convertible" },
  ],
};

const DetailpageComponent = () => {
  return (
    <>
      <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div class="">
          <div class="d-flex flex-wrap align-items-center">
            <h2 class="h4 pr-3 mb-3 text-white">Rental pricing</h2>
          </div>
          <div>
            <div class="d-flex flex-row border-bottom border-shades-500 py-lg-2">
              <div class="col-md-6 p-0">
                <span class="fs-11 color-shades-900 font-weight-bold text-uppercase letter-spacing-1 line-height-15">
                  Rental period
                </span>
              </div>
              <div class="col-md-6 p-0 text-right  text-lg-left">
                <span class="fs-11 color-shades-900 font-weight-bold text-uppercase letter-spacing-1 line-height-15">
                  Price per day
                </span>
              </div>
            </div>
            <div class="d-flex flex-row border-bottom py-1 py-lg-2">
              <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                1 day
              </div>
              <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                $ 933
              </div>
            </div>{" "}
            <div class="d-flex flex-row border-bottom py-1 py-lg-2">
              <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                2 days
              </div>
              <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                $ 933
              </div>
            </div>{" "}
            <div class="d-flex flex-row border-bottom py-1 py-lg-2">
              <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                3-6 days
              </div>
              <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                $ 904
              </div>
            </div>{" "}
            <div class="d-flex flex-row border-bottom py-1 py-lg-2">
              <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                7-20 days
              </div>
              <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                $ 875
              </div>
            </div>{" "}
            <div class="d-flex flex-row border-bottom py-1 py-lg-2">
              <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                21-29 days
              </div>
              <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                $ 817
              </div>
            </div>
            <div class="d-flex flex-row border-bottom py-1 py-lg-2">
              <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                30+ days
              </div>
              <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                $ 681
              </div>
            </div>
            <div class="d-flex flex-row border-bottom py-1 py-lg-2">
              <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                VAT Tax Applicable
              </div>
              <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                +5%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div class="">
          <div class="d-flex flex-wrap align-items-center">
            <h2 class="h4 pr-3 mb-3 text-white">Specifications</h2>
          </div>
          <div>
            {carData.specifications.map((each, index) => (
              <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                  {each.key}
                </div>
                <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                  {each.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div class="">
          <div class="d-flex flex-wrap align-items-center">
            <h2 class="h4 pr-3 mb-3 text-white">Features</h2>
          </div>
        </div>
        <div class="row gap-row-5 ">
          <div class="col-12 col-lg-6 line-height-25">
            <div class="w-100 d-flex align-items-center">
              <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
              <span class="pl-2 fs-14 color-shades-black">Bluetooth</span>
            </div>
            <div class="w-100 d-flex align-items-center">
              <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
              <span class="pl-2 fs-14 color-shades-black">Climate control</span>
            </div>
            <div class="w-100 d-flex align-items-center">
              <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
              <span class="pl-2 fs-14 color-shades-black">
                Leather seats / fabric seats
              </span>
            </div>
          </div>
          <div class="col-12 col-lg-6 line-height-25">
            <div class="w-100 d-flex align-items-center">
              <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
              <span class="pl-2 fs-14 color-shades-black">
                Paddle shift (triptronic)
              </span>
            </div>
            <div class="w-100 d-flex align-items-center">
              <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
              <span class="pl-2 fs-14 color-shades-black">Parking sensors</span>
            </div>
            <div class="w-100 d-flex align-items-center">
              <FaCheckSquare className="fs-20 color-shades-900 icon-check" />
              <span class="pl-2 fs-14 color-shades-black">Reverse camera</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div class="">
          <div class="d-flex flex-wrap align-items-center">
            <h2 class="h4 pr-3 mb-3 text-white">Description</h2>
          </div>
          <p className="fs-14 text-white text-justify">
            You can rent Ford Mustang cabrio (Red), 2024 in Dubai, UAE for the
            next price - $ 149 per day, $ 896 per week or $ 3,570 per month.
            Rental cost includes basic insurance and standard mileage limit of
            250 km/day or 1400 km/week or 3500 km/month (with overlimit charge $
            1 per additional km). Security deposit no needed. So, don't wait any
            longer. If you want to drive this car - contact us for booking or
            any question right now.
          </p>
        </div>
      </div>

      <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div class="">
          <div class="d-flex flex-wrap align-items-center">
            <h2 class="h4 pr-3 mb-3 text-white">Reviews</h2>
          </div>
        </div>
        <div class="tab-content pt-4" id="rates-tabContent">
          <div
            aria-labelledby="rates-google-tab"
            class="tab-pane active"
            id="rates-google"
            role="tabpanel"
          >
            <div class="d-flex mb-4">
              <div>
                <img
                  alt="Rustem Akhmadeev"
                  class="rates-profile-image rounded-circle mr-3"
                  height="50"
                  width="64"
                  src="https://lh3.googleusercontent.com/a-/ALV-UjVaGvzCb9nQbQOr3gqvuRoJeNvQO05jhNs3daMbAgEukVldQ13hCQ=s120-c-rp-mo-br100"
                  loading="lazy"
                />
              </div>
              <div class="w-100">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center flex-wrap">
                    <span class="mr-2 fs-16 fs-lg-18 color-shades-900">
                      Rustem Akhmadeev 5
                    </span>
                    <div class="google-stars-block d-flex align-items-center"></div>{" "}
                  </div>
                  <span class="fs-12 fs-lg-14 color-shades-900  ">
                    19.12.2024, 16:16
                  </span>
                </div>
                <div class="fs-14 text-white">
                  Брали ламборгини хуракейн ево спайдер на 2 суток, всё было
                  отлично без подводных камней. Отличный сервис и незабываемый
                  опыт.
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div>
                <img
                  alt="Rustem Akhmadeev"
                  class="rates-profile-image rounded-circle mr-3"
                  height="50"
                  width="64"
                  src="https://lh3.googleusercontent.com/a-/ALV-UjVaGvzCb9nQbQOr3gqvuRoJeNvQO05jhNs3daMbAgEukVldQ13hCQ=s120-c-rp-mo-br100"
                  loading="lazy"
                />
              </div>
              <div class="w-100">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center flex-wrap">
                    <span class="mr-2 fs-16 fs-lg-18 color-shades-900">
                      Rustem Akhmadeev 5
                    </span>
                    <div class="google-stars-block d-flex align-items-center"></div>{" "}
                  </div>
                  <span class="fs-12 fs-lg-14 color-shades-900  ">
                    19.12.2024, 16:16
                  </span>
                </div>
                <div class="fs-14 text-white">
                  Брали ламборгини хуракейн ево спайдер на 2 суток, всё было
                  отлично без подводных камней. Отличный сервис и незабываемый
                  опыт.
                </div>
              </div>
            </div>
            <div class="d-flex mb-4">
              <div>
                <img
                  alt="Rustem Akhmadeev"
                  class="rates-profile-image rounded-circle mr-3"
                  height="50"
                  width="64"
                  src="https://lh3.googleusercontent.com/a-/ALV-UjVaGvzCb9nQbQOr3gqvuRoJeNvQO05jhNs3daMbAgEukVldQ13hCQ=s120-c-rp-mo-br100"
                  loading="lazy"
                />
              </div>
              <div class="w-100">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center flex-wrap">
                    <span class="mr-2 fs-16 fs-lg-18 color-shades-900">
                      Rustem Akhmadeev 5
                    </span>
                    <div class="google-stars-block d-flex align-items-center"></div>{" "}
                  </div>
                  <span class="fs-12 fs-lg-14 color-shades-900  ">
                    19.12.2024, 16:16
                  </span>
                </div>
                <div class="fs-14 text-white">
                  Брали ламборгини хуракейн ево спайдер на 2 суток, всё было
                  отлично без подводных камней. Отличный сервис и незабываемый
                  опыт.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 pb-4 px-3 bg-shades-white my-3">
        <div class="">
          <div class="d-flex flex-wrap align-items-center">
            <h2 class="h4 pr-3 mb-3 text-white">Delivery terms</h2>
          </div>
          <div>
            {[
              { key: "From Office", value: "Free" },
              {
                key: "From Airport",
                value: "Parking Charges",
              },
            ].map((each, index) => (
              <div class="d-flex flex-row border-bottom py-1 py-lg-2">
                <div class="col-md-6 p-0 color-shades-black fs-14 line-height-25">
                  {each.key}
                </div>
                <div class="col-md-6 p-0 text-left color-shades-black fs-14 line-height-25 text-right text-lg-left">
                  {each.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailpageComponent;
