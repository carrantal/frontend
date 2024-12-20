import React from "react";

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <div className="d-block bg-shades-white">
      <div className="container">
        <nav aria-label="breadcrumb">
          <div className="d-flex py-2-custom">
            <ol className="breadcrumb py-1-custom pl-0 bg-transparent">
              <li className="breadcrumb-item" aria-current="page">
                <a className="text-white" href="/">
                  Rent a car
                </a>
              </li>
              {/* <i className="d-flex align-items-center px-1-custom color-shades-500 fs-12 not-rtl icon-chevron-right"></i> */}
              <li className="breadcrumb-item active color-brand-primary">
                <span>{breadcrumbTitle}</span>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
}
