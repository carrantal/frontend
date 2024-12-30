import React from "react";
import Tooglebutton from "../ToggleButton/Tooglebutton";
import Link from "next/link";
import axios from "axios";
import { URL } from "@/app/utils";
import Image from "next/image";

export default async function HeaderV2() {
  const response = await axios.get(
    `${URL}/api/info?populate=*&[faqs][populate]=*`
  );
  const data = response?.data?.data;
  const title = data?.attributes?.title;
  const subTitle = data?.attributes?.subTitle;

  const catResponse = await axios.get(`${URL}/api/categories?populate=*`);
  const categories = catResponse?.data?.data || [];

  return (
    <>
      <header className="sticky-header">
        <div className="d-none d-lg-block bg-brand-primary-darker position-relative header-main-menu-container desc-header-panel">
          <div className="container d-flex position-relative align-items-center">
            <div className="d-flex mx-auto">
              <Link
                href="/"
                aria-label="Home page"
                className=" d-flex align-items-center"
              >
                <Image
                  src={data?.attributes?.logo?.data.attributes.url}
                  width={100}
                  height={100}
                  alt={title}
                />
              </Link>
            </div>
            <nav className="d-flex gap-col-5 flex-grow-1 justify-content-center">
              <div className=" py-3 position-relative container-dropdown">
                <button
                  className="rounded-small px-3 py-2 border-0 bg-brand-primary d-flex align-items-center fs-16 header-rent-car-btn rent-a-car-new-menu"
                  id="rent-car-dropdown-btn"
                >
                  <span className="fs-16 font-weight-semibold color-shades-white ml-2 mr-1">
                    Rent a car
                  </span>
                </button>

                <div className="p-0 drop-item rounded-lg mt-2  ">
                  <div
                    className="d-grid bg-black"
                    style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
                  >
                    <div className="p-3 flex-grow-1 border-shades-200 border-right">
                      <span className="d-block fs-9 px-2 color-shades-500 letter-spacing-0_5 text-uppercase bg-transparent">
                        Categories
                      </span>
                      <div className="d-flex flex-column mt-2">
                        {catResponse?.data?.data?.map((cat) => (
                          <Link
                            className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                            href={`/search?category=${cat.attributes.slug}`}
                          >
                            {cat.attributes.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-shades-100 flex-grow-1 rounded-right">
                      {/* <span className="d-block fs-9 px-2 color-shades-500 letter-spacing-0_5 text-uppercase bg-transparent">
                        Rental by period
                      </span>
                      <div className="d-flex flex-column mt-2">
                        <a
                          className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                          href="/"
                          title="Hourly rental"
                        >
                          Hourly rental
                        </a>
                        <a
                          className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                          href="/"
                          title="Weekly rental"
                        >
                          Weekly rental
                        </a>
                        <a
                          className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                          href="/"
                          title="Monthly rental"
                        >
                          Monthly rental
                        </a>
                        <a
                          className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                          href="/"
                          title="Car leasing"
                        >
                          Car leasing
                        </a>
                      </div> */}
                      <span className="d-block fs-9 px-2 color-shades-500 letter-spacing-0_5 text-uppercase bg-transparent mt-4">
                        Special offers
                      </span>
                      <div className="d-flex flex-column mt-2">
                        <Link
                          className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                          href="/search?offer=true"
                          title="All special offers"
                        >
                          All special offers
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-dropdown py-3 position-relative">
                <button
                  className="rounded-small px-3 py-2 border-0 bg-transparent"
                  id="services-dropdown-btn1"
                >
                  <span className="fs-16 font-weight-semibold color-shades-white">
                    Services
                  </span>
                </button>
                <div className="p-0 drop-item rounded-lg mt-2  ">
                  <div
                    className="d-grid bg-black"
                    style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
                  >
                    <div className="p-3 flex-grow-1 border-shades-200 border-right">
                      <div className="d-flex flex-column mt-2">
                        <Link
                          href={"/chauffer-services"}
                          className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                        >
                          Chauffeur Services
                        </Link>
                        <Link
                          href={"/airport-services"}
                          className="dropdown-item rounded-small fs-14 color-shades-black px-2"
                        >
                          Arrive in style - Luxury Cars ready at the airport
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/gallery">
                <div className="container-dropdown py-3 position-relative">
                  <button className="rounded-small px-3 py-2 border-0 bg-transparent">
                    <span className="fs-16 font-weight-semibold color-shades-white">
                      Gallery
                    </span>
                  </button>
                </div>
              </Link>
            </nav>
            {/* <Profile /> */}
          </div>
        </div>
        <Tooglebutton response={categories} />
      </header>
    </>
  );
}
