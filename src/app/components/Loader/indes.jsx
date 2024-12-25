import React from "react";

export default function Loader({ small = false }) {
  return <div className={small ? "small-loader" : "loader"}></div>;
}
