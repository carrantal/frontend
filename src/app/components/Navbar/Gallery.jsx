import React from "react";

const Gallery = () => {
  return (
    <a href="/gallery">
      <div className="container-dropdown py-3 position-relative">
        <button className="rounded-small px-3 py-2 border-0 bg-transparent">
          <span className="fs-16 font-weight-semibold color-shades-white">
            Gallery
          </span>
        </button>
      </div>
    </a>
  );
};

export default Gallery;
