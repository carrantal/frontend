import React from "react";
import Input from "./Input";
import CustomCalender from "../CustomCalender";

export default function BookingForm() {
  return (
    <>
      <div class="bg-shades-white rounded-small p-3 mx-3 mb-2 show-body-modal mt-3 mt-lg-0">
        <div class="d-flex justify-content-between pt-1 row">
          <span class="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1 text-left col-8">
            Rental date range
          </span>
          <span class="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1 text-right col-4">
            Your rental
          </span>
        </div>

        <CustomCalender />

        <div class="rental-min-warning desktop">
          <div class="d-flex align-items-center bg-badge-warning rounded-small color-semantic-warning px-2 py-1 mb-3">
            <span class="fs-14">Minimum 1 day rental</span>
          </div>
        </div>
        <div class="litepicker-backdrop"></div>
      </div>
      <div id="personalInfo" class=" mx-3 mb-3 bg-shades-white">
        <div class=" p-3">
          <div class="d-flex justify-content-between">
            <span class="fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1">
              Personal information
            </span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <h2 class="text-white h4 mb-3 text-truncate font-weight-normal fs-24 ">
              Your booking details
            </h2>
          </div>
          <div class="mb-3">
            <form>
              <Input label="First Name" placeholder="Enter First Name" />
              <Input label="Last Name" placeholder="Enter Last Name" />
              <Input label="Address" placeholder="Enter Address" />
              <Input label="Phone Number" placeholder="Enter Phone Number" />
              <div class="bg-shades-100  show-body-modal">
                <div class="bg-shades-100 rounded-small mx-3 py-2 ">
                  <div class="d-flex justify-content-between mb-1">
                    <span class="text-white fs-11 color-shades-500 font-weight-bold text-uppercase letter-spacing-1">
                      Booking summary
                    </span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between fs-14 mb-2">
                    <span
                      class="text-white text-truncate"
                      id="rental_days_summary"
                    >
                      Rental 1 day
                    </span>
                    <span class="text-white  font-weight-normal flex-shrink-0">
                      $ 210
                    </span>
                  </div>

                  <div class="d-flex align-items-center justify-content-between fs-16 pb-2">
                    <span class="text-white text-truncate fs-14">
                      VAT Tax (5%)
                    </span>
                    <span class="text-white  font-weight-normal flex-shrink-0 fs-14">
                      + $ 11
                    </span>
                  </div>
                  <div class="d-flex align-items-center justify-content-between border-top border-shades-300 border-top-dotted border-top-medium pt-2">
                    <span class="color-primary fs-24 font-weight-normal text-truncate">
                      Total
                    </span>
                    <span class="color-primary fs-24 font-weight-normal flex-shrink-0">
                      $ 221
                    </span>
                  </div>
                </div>
                <div class="fs-14 color-shades-400  mx-3 pb-2 pb-lg-2">
                  <small>
                    I accept the
                    <a href="https://policies.google.com/terms">
                      Terms of service{" "}
                    </a>{" "}
                    apply.
                  </small>
                </div>
                <form
                  id="requestBookings"
                  method="POST"
                  class="rc_validate"
                  data-validate="true"
                  novalidate="novalidate"
                  data-company-id="1"
                >
                  <div class=" rounded-medium-bottom p-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <button
                        type="submit"
                        class="m-w-100 requestModal font-weight-bold text-uppercase btn btn-large bg-brand-primary color-shades-white"
                      >
                        <span class="fs-15 letter-spacing-0_5">
                          Book Online
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
