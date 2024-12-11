import React from "react";

const LuxuryProducts = () => {
  return (
    <div>
      <div class="luxury-collection">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="text-anime-style-3">Our Best Luxury Cars</h2>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col-lg-12">
              <div class="luxury-collection-box">
                <div class="luxury-collection-item wow fadeInUp">
                  <div class="luxury-collection-image" data-cursor-text="View">
                    <a href="#">
                      <figure>
                        <img src="images/sports1.avif" alt="" />
                      </figure>
                    </a>
                  </div>

                  <div class="luxury-collection-title">
                    <h2>sport car</h2>
                  </div>

                  <div class="luxury-collection-btn">
                    <a href="#" class="section-icon-btn">
                      <img src="images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                </div>

                <div
                  class="luxury-collection-item wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div class="luxury-collection-image" data-cursor-text="View">
                    <a href="#">
                      <figure>
                        <img src="images/convertible.avif" alt="" />
                      </figure>
                    </a>
                  </div>

                  <div class="luxury-collection-title">
                    <h2>convertible car</h2>
                  </div>

                  <div class="luxury-collection-btn">
                    <a href="#" class="section-icon-btn">
                      <img src="images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                </div>

                <div
                  class="luxury-collection-item wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="luxury-collection-image" data-cursor-text="View">
                    <a href="#">
                      <figure>
                        <img src="images/sports1.avif" alt="" />
                      </figure>
                    </a>
                  </div>

                  <div class="luxury-collection-title">
                    <h2>sedan car</h2>
                  </div>

                  <div class="luxury-collection-btn">
                    <a href="#" class="section-icon-btn">
                      <img src="images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                </div>

                <div
                  class="luxury-collection-item wow fadeInUp "
                  data-wow-delay="0.75s"
                >
                  <div class="luxury-collection-image">
                    <a href="#">
                      <figure>
                        <img src="images/sports2.avif" alt="" />
                      </figure>
                    </a>
                  </div>

                  <div class="luxury-collection-title">
                    <h2>luxury car</h2>
                  </div>

                  <div class="luxury-collection-btn">
                    <a href="#" class="section-icon-btn">
                      <img src="images/arrow-white.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryProducts;
