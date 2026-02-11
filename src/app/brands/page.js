import React from "react";
import { URL } from "../utils";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";

export default async function Brands() {
  const response = await axios.get(`${URL}/api/brands?populate=*`);

  return (
    <div className="bg-black">
      <div className="homepage ">
        <div className="bg-shades-white  pt-3 pt-lg-4 ">
          <div className="container">
            <div className=" ">
              <div className="d-block pb-2">
                <h1 className="text-white d-inline">All Brands</h1>
              </div>
            </div>
          </div>
        </div>
        <Breadcrumb breadcrumbTitle={"All Brands"} />
        <div className=" mt-2 mb-2 ">
          <div className="container container-car-items p-4">
            <div className="row m-0-custom">
              {response?.data?.data?.map((brand) => (
                <div className="col-lg-3 col-md-4">
                  <a
                    key={brand.id}
                    className="m-1 d-flex flex-column gap-2 py-2 px-2 bg-shades-white align-items-center rounded-medium most-popular-brand-item"
                    title={brand.attributes.name}
                    href={`/search?brand=${brand.attributes.slug}`}
                  >
                    {brand?.attributes?.logo &&
                    brand?.attributes?.logo?.data ? (
                      <img
                        src={brand?.attributes?.logo?.data?.attributes?.url}
                        alt={brand.attributes.name}
                        className="icon-48 mb-2"
                      />
                    ) : (
                      <div className="icon-48 placeholder bg-shades-light-gray"></div>
                    )}

                    <span className="fs-14 lh-25 color-shades-black text-center">
                      {brand.attributes.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
