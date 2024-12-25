import Breadcrumb from "@/app/components/Breadcrumb";
import CarDetailSlider from "@/app/components/CarDetailSlider";
import Footer from "@/app/components/Footer/Footer";
import TopHeader from "@/app/components/TopHeader";
import React, { Suspense } from "react";

import BookOnlineMobile from "@/app/components/Forms/BookOnlineMobile";
import DetailpageComponent from "@/app/components/DetailpageComponent/DetailpageComponent";
import DetailPagetwo from "@/app/components/DetailpageComponent/DetailPagetwo";
import axios from "axios";
import { URL } from "@/app/utils";

export default async function Page(props) {
  const { prodId } = props.params;
  console.log("prod", prodId);
  const response = await axios.get(
    `${URL}/api/cars?populate=*&filters[slug]=${prodId}`
  );
  const product = response.data;
  // console.log("response", response);
  console.log("producs", product);
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

  return (
    <>
      <div class="bg-black">
        <div class="homepage  ">
          <TopHeader />
          <Breadcrumb breadcrumbTitle={"Car Title"} />
          <div class=" pt-lg-4 single-car special-offer">
            <div className="container">
              <div class="pb-3 pt-3 mt-0 pt-lg-0 d-flex align-items-center mt-lg-0">
                <h1 class="fs-m-18 fs-30 font-weight-normal text-white">
                  Rent Lamborghini Evo Spyder (Black), 2023 - hourly in Dubai
                </h1>
              </div>
              <div className="my-3"></div>
              <div
                class="d-flex position-relative justify-content-between overflow-lg-hidden"
                style={{ columnGap: "60px" }}
              >
                <div class="col-12 col-lg-6 p-0 gallery flex-lg-grow-1">
                  <CarDetailSlider images={carData.images} />

                  <DetailpageComponent />
                </div>
                <DetailPagetwo />
              </div>
            </div>
            <BookOnlineMobile />
          </div>
          <div className="mt-6 mb-6"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
// Static params for generating product pages
export async function generateStaticParams() {
  const response = await axios.get(`${URL}/api/cars`);
  const products = response.data.data;

  // console.log("products", products);

  return products.map((product) => {
    console.log("prodId", product.attributes.slug);
    return {
      prodId: product.attributes.slug,
    };
  });
}
