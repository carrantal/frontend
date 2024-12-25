import React from "react";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer/Footer";
import GalleryVideo from "../components/GalleryVideo";
import axios from "axios";
import { URL } from "../utils";

export default async function Gallery() {
  const response = await axios.get(
    `${URL}/api/info?populate=*&[faqs][populate]=*`
  );
  const data = response?.data?.data;
  return (
    <div class="bg-black">
      <div class="homepage  ">
        <TopHeader />
        <div className="bg-shades-white  pt-3 pt-lg-4 ">
          <div className="container">
            <div className=" ">
              <div className="d-block pb-2">
                <h1 className="text-white d-inline">Gallery</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-2 mb-2 ">
          <div className="container container-car-items p-4">
            <div className="row m-0-custom">
              <GalleryVideo />
            </div>
          </div>
        </div>
        <Footer Footerdata={data} />
      </div>
    </div>
  );
}
