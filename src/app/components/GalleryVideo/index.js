"use client";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/indes";
import { URL } from "@/app/utils";
import axios from "axios";

export default function GalleryVideo() {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${URL}/api/cars?populate[videos]=true`);
      setCars(
        data?.data.filter((each) => each?.attributes?.videos?.data) || []
      );
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="container">
          <div className="row">
            {cars.map((each) => (
              <React.Fragment key={each.id}>
                {each?.attributes?.videos?.data?.map((eachVideo) => (
                  <React.Fragment key={eachVideo.id}>
                    <VideoComponent video={eachVideo} car={each} />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function VideoComponent({ video, car }) {
  return (
    <div className="col-lg-3 col-md-4">
      <div
        style={{
          height: "400px",
          width: "100%",
          margin: "5px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={video?.attributes?.previewUrl}
          />
          <a href={video?.attributes?.url} target="_blank">
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                height: "30px",
                width: "30px",
                background: "black",
                borderRadius: "50%",
              }}
            >
              <svg
                style={{
                  padding: "3px",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100"
                height="100"
              >
                <polygon points="30,20 30,80 70,50" fill="#ec7421" />
              </svg>
            </div>
          </a>
          <div
            style={{
              width: "100%",
              position: "absolute",
              bottom: 5,
              padding: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              style={{
                width: "100%",
              }}
              href={`car-details/${car?.attributes?.slug}`}
              className="btn btn-large bg-brand-primary rounded-medium btn-main-search"
            >
              <span className="text-uppercase color-shades-white mx-auto">
                View Details
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
