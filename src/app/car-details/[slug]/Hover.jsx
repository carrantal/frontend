"use client";

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function Hover() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="d-flex relative align-items-center rounded-small min-height-35 policyDesc"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <FaInfoCircle className="color-semantic-success icon-info ml-2" />
      <span className="fs-14 line-height-25 ml-2 color-shades-black">
        Mileage for 1 day?
        {show && (
          <span
            className="fs-14 line-height-25 ml-2 color-shades-black"
            style={{
              color: "white",
              position: "absolute",
              padding: "3px",
              bottom: 0,
              background: "black",
              border: "1px solid #ec7421",
            }}
          >
            250km for 1 day only
          </span>
        )}
      </span>
    </div>
  );
}
