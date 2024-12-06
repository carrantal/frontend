import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="google-map">
        <div class="container">
          <div class="row section-row">
            <div class="col-lg-12">
              <div class="section-title">
                <h3 class="wow fadeInUp">location</h3>
                <h2 class="text-anime-style-3" data-cursor="-opaque">
                  How to reach our location
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="google-map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.743912688695!2d55.270783!3d25.276987999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682e2feea11%3A0x6b3d80b00c5a1b!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1667432662739!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
