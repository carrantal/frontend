import React, { useState } from "react";
import Loader from "../Loader/indes";
import { URL } from "@/app/utils";
import axios from "axios";

export default function FilesInput({ watch, setValue, disaleSubmit }) {
  const nationality = watch("data.nationality");

  return (
    <>
      <FileUpload
        idKey="data.id_card"
        setValue={setValue}
        label={"ID Card"}
        disaleSubmit={disaleSubmit}
      />
      <FileUpload
        idKey="data.license"
        setValue={setValue}
        label={"License"}
        disaleSubmit={disaleSubmit}
      />
      {nationality === "international" && (
        <>
          <FileUpload
            idKey="data.passport"
            setValue={setValue}
            label={"Passport"}
            disaleSubmit={disaleSubmit}
          />
          <FileUpload
            idKey="data.flight_details"
            setValue={setValue}
            label={"Flight Details"}
            disaleSubmit={disaleSubmit}
          />
        </>
      )}
    </>
  );
}

function FileUpload({ label, setValue, idKey, disaleSubmit }) {
  const [file, setFile] = useState("");
  const [uploading, setUploading] = useState(false);

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
    } catch (error) {
    } finally {
      setUploading(false);
      disaleSubmit(false);
    }
  };

  return (
    <div class="form-group">
      <label className="fs-9 text-white">{label}</label>
      <div class="input-group mb-3">
        {uploading && <Loader small={true} />}
        {!uploading && (
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  uploadFileToStrapi(file);
                }
              }}
            />
            <label class="fs-14 custom-file-label">
              {file ? <p>{file?.name.slice(0, 10)}...</p> : <>Upload {label}</>}
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
