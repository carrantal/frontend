import React, { useState, useEffect } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://strapi-189481-0.cloudclusters.net";
  // Fetch brands from the backend
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch(`${API_URL}/api/brands?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch brands");
        }
        const data = await response.json();
        setBrands(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return <p>Loading brands...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
            {brands.map((brand) => (
              <a
                key={brand.id}
                className="d-flex flex-column gap-2 py-2 px-2 bg-shades-white align-items-center rounded-medium most-popular-brand-item"
                title={brand.attributes.name}
                href={`/brands/${brand.attributes.slug}`}
              >
                {/* Render the logo */}
                {brand.attributes.logo && brand.attributes.logo.data ? (
                  <img
                    src={brand.attributes.logo.data.attributes.url} // Use Cloudinary URL
                    alt={brand.attributes.name}
                    className="icon-48 mb-2"
                  />
                ) : (
                  <div className="icon-48 placeholder bg-shades-light-gray"></div>
                )}

                {/* Render the name */}
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
