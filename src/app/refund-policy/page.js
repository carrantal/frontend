import axios from "axios";
import React from "react";
import { URL } from "../utils";

export default async function RefundPolicy() {
  const response = await axios.get(`${URL}/api/info`);
  const data = response?.data?.data;

  return (
    <>
      <div className="bg-shades-white  pt-3 pt-lg-4 ">
        <div className="container">
          <div className=" ">
            <div className="d-block pb-2">
              <h1 className="text-white d-inline">Refund Policy</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-white p-4">
            <p
              dangerouslySetInnerHTML={{
                __html: data?.attributes?.refundpolicy?.replaceAll(
                  "\n",
                  "</br>"
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
}
