import React from "react";
import { URL } from "@/app/utils";
import axios from "axios";

const Brands = async () => {
  const response = await axios.get(`${URL}/api/brands?populate=*`);

  return (
    <div className="home-page-sub-main-section-container bg-shades-100 pb-4 pt-4">
      <div className="d-flex pt-lg-2-custom pt-3-custom pb-lg-4-custom">
        <div className="container d-flex flex-column gap-row-lg-30 gap-row-15">
          <div className="d-flex justify-content-between gap-col-lg-30">
            <span className="fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black">
              Most wanted car rental brands in Dubai
            </span>
          </div>

          <div className="d-grid gap-[1rem] grid-col-lg-6 grid-col-md-4 grid-col-2">
            {response?.data?.data?.map((brand) => (
              <a
                key={brand.id}
                className="d-flex flex-column gap-2 py-2 px-2 bg-shades-white align-items-center rounded-medium most-popular-brand-item"
                title={brand.attributes.name}
                href={`/search?brand=${brand.attributes.slug}`}
              >
                {brand?.attributes?.logo && brand?.attributes?.logo?.data ? (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
