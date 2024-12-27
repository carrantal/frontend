import axios from "axios";
import Link from "next/link";
import React from "react";

const key = "AIzaSyDVbT4f5Shv6NmOdknBu77VH4CE78LO5Mg";

const Reviews = async () => {
  const reviewsResponse = await axios.get(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ-Z3wPJRpXz4RiOFzbDa9QZI&fields=reviews&key=${key}`
  );
  const reviews = reviewsResponse?.data?.result?.reviews;

  return (
    <div className="pt-4 pb-4 px-3 bg-shades-white my-3">
      <div className="">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="h4 mb-3 text-white">Reviews</h2>
          <Link
            href="https://www.google.com/maps/place/Nayl+Luxury+Rentals/@25.1732612,55.299778,17z/data=!4m8!3m7!1s0x3e5f69943cf09df9:0x9241bd366c73e188!8m2!3d25.1732612!4d55.299778!9m1!1b1!16s%2Fg%2F11wq3gv6gw!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ec7421] hover:text-[#ff9900] transition duration-200 ease-in-out font-medium"
          >
            View All Reviews
          </Link>
        </div>
      </div>
      {reviews.slice(0, 3).map((review) => {
        // Convert Unix time to readable date and time
        const reviewDate = new Date(review?.time * 1000).toLocaleDateString();
        const reviewTime = new Date(review?.time * 1000).toLocaleTimeString();

        return (
          <div
            key={review?.time}
            className="tab-content pt-4"
            id="rates-tabContent"
          >
            <div
              aria-labelledby="rates-google-tab"
              className="tab-pane active"
              id="rates-google"
              role="tabpanel"
            >
              <div className="d-flex mb-4">
                <div>
                  <img
                    alt={review?.author_name}
                    className="rates-profile-image rounded-circle mr-3"
                    height="50"
                    width="64"
                    src={review?.profile_photo_url}
                    loading="lazy"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex align-items-center flex-wrap justify-content-between">
                    <div className="d-flex align-items-center flex-wrap">
                      <span className="mr-2 fs-16 fs-lg-18 color-shades-900">
                        {review?.author_name}
                      </span>
                    </div>
                    <span className="fs-12 fs-lg-14 color-shades-900">
                      {reviewDate} {reviewTime}
                    </span>
                  </div>
                  <div className="fs-14 text-white">{review?.text}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
