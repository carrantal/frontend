import React, { useState } from "react";
import Loader from "../Loader/indes";
import { URL } from "@/app/utils";
import axios from "axios";
import { FaInfoCircle } from "react-icons/fa";

export default function FilesInput({ watch, setValue, disaleSubmit }) {
  const nationality = watch("data.nationality");

  return (
    <>
      <FileUpload
        idKey="data.id_card"
        imgUrlKey="data.id_card_image_url"
        setValue={setValue}
        label={"ID Card"}
        disaleSubmit={disaleSubmit}
      />
      <FileUpload
        idKey="data.license"
        imgUrlKey="data.license_image_url"
        setValue={setValue}
        label={"License"}
        disaleSubmit={disaleSubmit}
      />
      {nationality === "international" && (
        <>
          <FileUpload
            idKey="data.passport"
            imgUrlKey="data.flight_details_image_url"
            setValue={setValue}
            label={"Passport"}
            disaleSubmit={disaleSubmit}
          />
          <FileUpload
            idKey="data.flight_details"
            imgUrlKey="data.passport_image_url"
            setValue={setValue}
            label={"Flight Details"}
            disaleSubmit={disaleSubmit}
            hoverText="Upload picture of flight ticket , so that we can track accordingly"
          />
        </>
      )}
    </>
  );
}

function FileUpload({
  label,
  setValue,
  idKey,
  disaleSubmit,
  hoverText,
  imgUrlKey,
}) {
  const [file, setFile] = useState("");
  const [uploading, setUploading] = useState(false);
  const [show, setShow] = useState(false);

  const uploadFileToStrapi = async (file) => {
    const formData = new FormData();
    formData.append("files", file);

    try {
      setUploading(true);
      disaleSubmit(true);
      const response = await axios.post(`${URL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const uploadedFile = response.data[0];
      setFile(uploadedFile);
      setValue(idKey, uploadedFile.id);
      setValue(imgUrlKey, uploadedFile.url);
    } catch (error) {
    } finally {
      setUploading(false);
      disaleSubmit(false);
    }
  };

  return (
    <div className="form-group">
      <label
        className="fs-9 text-white d-flex gap-5 align-items-center"
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        {label}
        {hoverText && (
          <>
            <FaInfoCircle />
            {show && (
              <span
                className="fs-14 line-height-25 ml-2 color-shades-black"
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: 0,
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  background: "black",
                  border: "1px solid #ec7421",
                  zIndex: 999,
                }}
              >
                Upload picture of flight ticket , so that we can track
                accordingly
              </span>
            )}
          </>
        )}
        {/* <span className="cursor-pointer">{hoverText &&  }</span> */}
      </label>
      <div className="input-group mb-3">
        {uploading && <Loader small={true} />}
        {!uploading && (
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  uploadFileToStrapi(file);
                }
              }}
            />
            <label className="fs-14 custom-file-label">
              {file ? <p>{file?.name.slice(0, 10)}...</p> : <>Upload {label}</>}
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
