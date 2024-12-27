"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="d-flex justify-content-center home-page-search-section mb-[120px]">
        <div
          className="form-group mb-0 d-flex align-items-center"
          id="mainSearch"
        >
          <div className="d-flex flex-grow-1 align-items-center mr-lg-2 rounded-small pl-3 position-relative bg-white">
            <span className="fs-18 icon-search-input color-shades-500 mr-2">
              <CiSearch />
            </span>

            <div className="easy-autocomplete eac-square">
              <input
                className="form-control border-0 text-truncate"
                placeholder="Search..."
                type="text"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <div className="easy-autocomplete-container"></div>
            </div>
          </div>
          <button
            onClick={() => {
              router.push(`/search?q=${query}`);
            }}
            disabled={query.length === 0}
            className="btn btn-large  rounded-small btn-main-search d-none d-lg-flex home-btn-search bg-brand-primary"
          >
            <span className="text-uppercase  mx-auto fs-14 lh-20 letter-spacing-0_5 font-weight-600 text-white">
              Search
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
