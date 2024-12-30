import Link from "next/link";
import React from "react";

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <div className="d-block bg-shades-white">
      <div className="container">
        <nav aria-label="breadcrumb">
          <div className="d-flex py-2-custom">
            <ol className="breadcrumb py-1-custom pl-0 bg-transparent">
              <li className="breadcrumb-item" aria-current="page">
                <Link className="text-white" href="/">
                  Rent a car
                </Link>
              </li>
              <li className="breadcrumb-item active color-brand-primary text-capitalize">
                <span>{breadcrumbTitle}</span>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
}
