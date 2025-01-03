"use client";
import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

export default function CustomCalender({ register, setValue, watch }) {
  const [date, setDate] = useState(null);

  const calculateDifference = watch("data.numberOfDays");

  return (
    <>
      <div class="d-flex align-items-start justify-content-between mb-3-custom mt-2-custom row">
        <h2 class="h4 font-weight-normal fs-24 col-8 text-left text-white">
          Choose rental dates
        </h2>
        <span class="flex-shrink-0 col-4 text-right text-white">
          {calculateDifference && `${calculateDifference} day`}
        </span>
      </div>
      <div class="row mx-0">
        <div class="col-12 col-lg-8 p-0 mb-3 mb-lg-0 pr-0 pr-lg-2">
          <div class="rental-min-warning d-lg-none"></div>
          <div class="row custom-input-group mx-0">
            <div class="col-6 form-group border-right-medium border-shades-300 px-0 mb-0">
              <label class="custom-label text-truncate">Pick-Up Date</label>
              <input
                class="form-control"
                id="datepicker_start"
                readonly=""
                type="text"
                value={date?.[0] ? new Date(date[0]).toLocaleDateString() : "-"}
              />
            </div>
            <div class="col-6 form-group px-0 mb-0">
              <label class="custom-label text-truncate" for="datepicker_end">
                Drop-Off Date
              </label>
              <input
                class="form-control"
                id="datepicker_end"
                readonly=""
                type="text"
                value={date?.[1] ? new Date(date[1]).toLocaleDateString() : "-"}
              />
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 pl-0 pl-lg-2 pr-0">
          <div class="row custom-input-group mx-0">
            <div class="col-12  form-group border-right-medium border-shades-300 px-0 mb-0 select-start-time-container">
              <label class="custom-label text-truncate" for="select-start-time">
                Start Time
              </label>
              <select
                class="form-control fs-12"
                {...register("data.time", { required: "true" })}
              >
                <option>00:00</option>
                <option>01:00</option>
                <option>02:00</option>
                <option>03:00</option>
                <option>04:00</option>
                <option>05:00</option>
                <option>06:00</option>
                <option>07:00</option>
                <option>08:00</option>
                <option>09:00</option>
                <option>10:00</option>
                <option>11:00</option>
                <option>12:00</option>
                <option>13:00</option>
                <option>14:00</option>
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
                <option>23:00</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-0 p-2 fs-14 mb-3-custom mt-2-custom">
        <Calendar
          value={date}
          onChange={(e) => {
            if (e?.value[0] && e.value?.[1]) {
              setValue("data.start_date", e.value[0].toDateString());
              setValue("data.end_date", e.value[1].toDateString());
              setValue(
                "data.numberOfDays",
                1 + (e.value[1] - e.value[0]) / (60 * 60 * 1000 * 24)
              );
            } else {
              setValue("data.start_date", "");
              setValue("data.end_date", "");
              setValue("data.numberOfDays", "");
            }
            setDate(e.value);
          }}
          inline
          selectionMode="range"
          style={{ color: "white", width: "100%" }}
        />
      </div>
    </>
  );
}
