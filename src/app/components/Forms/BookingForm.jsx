"use client";
import React, { useState } from "react";
import Input from "./Input";
import CustomCalender from "../CustomCalender";
import { useForm } from "react-hook-form";
import Select from "./Select";
import FilesInput from "./FilesInput";
import Billing from "./Billing";
import axios from "axios";
import { URL } from "@/app/utils";
import Loader from "../Loader/indes";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function BookingForm({ price }) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      data: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        start_date: "",
        end_date: "",
        time: "",
        nationality: "local",
        id_card: "",
        license: "",
        flight_details: "",
        passport: "",
        numberOfDays: null,
        price: 0,
      },
    },
  });
  const onSubmit = async (data) => {
    const _data = { ...data.data };
    setLoading(true);
    if (_data.nationality === "local") {
      delete _data.flight_details;
      delete _data.passport;
    }

    try {
      const { data } = await axios.post(`${URL}/api/bookings`, {
        data: _data,
      });
      const paymenyUrl = data?.data?.attributes?.data?._links?.payment.href;
      reset();
      toast.success("Booked successfully.");
      window.location.href = paymenyUrl;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-shades-white rounded-small p-3 mx-3 mb-2 show-body-modal mt-3 mt-lg-0">
        <div className="d-flex justify-content-between pt-1 row">
          <span className="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1 text-left col-8">
            Rental date range
          </span>
          <span className="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1 text-right col-4">
            Your rental
          </span>
        </div>

        <CustomCalender watch={watch} register={register} setValue={setValue} />

        <div className="rental-min-warning desktop">
          <div className="d-flex align-items-center bg-badge-warning rounded-small color-semantic-warning px-2 py-1 mb-3">
            <span className="fs-14">Minimum 1 day rental</span>
          </div>
        </div>
        <div className="litepicker-backdrop"></div>
      </div>
      <div id="personalInfo" className=" mx-3 mb-3 bg-shades-white">
        <div className=" p-3">
          <div className="d-flex justify-content-between">
            <span className="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1">
              Personal information
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="text-white h4 mb-3 text-truncate font-weight-normal fs-24 ">
              Your booking details
            </h2>
          </div>
          <div className="mb-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="First Name"
                placeholder="Enter First Name"
                register={{ ...register("data.first_name") }}
              />
              <Input
                label="Last Name"
                placeholder="Enter Last Name"
                register={{ ...register("data.last_name") }}
              />
              {/* <Input
                label="Address"
                placeholder="Enter Address"
                register={{ ...register("data.address") }}
              /> */}
              <Input
                label="Phone Number"
                placeholder="Enter Phone Number"
                register={{ ...register("data.phone") }}
              />
              <Input
                label="Email"
                placeholder="Enter Email"
                register={{ ...register("data.email") }}
              />

              <Select
                label="Select Nationality"
                placeholder="Enter Nationality"
                register={{ ...register("data.nationality") }}
              />

              <FilesInput
                watch={watch}
                setValue={setValue}
                disaleSubmit={setLoading}
              />

              <div className="bg-shades-100  show-body-modal">
                <Billing price={price} watch={watch} setValue={setValue} />
                <div className="fs-14 color-shades-400  mx-3 pb-2 pb-lg-2">
                  <small>
                    I accept the
                    <Link href="/terms-and-conditions" target="_blank">
                      Terms of service{" "}
                    </Link>{" "}
                    apply.
                  </small>
                </div>

                <div className=" rounded-medium-bottom p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    {loading && <Loader />}
                    {!loading && (
                      <button
                        type="submit"
                        className="m-w-100 requestModal font-weight-bold text-uppercase btn btn-large bg-brand-primary color-shades-white"
                      >
                        <span className="fs-15 letter-spacing-0_5">
                          Book Online
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
