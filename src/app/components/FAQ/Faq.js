"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Faq = ({ FaqData = [] }) => {
  const data = FaqData?.attributes?.faqs;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <div className="bg-shades-white home-page-container-p-t flex-column pt-4 pb-4 mt-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="row mt-lg-2 faq_group_list_section">
          <div className="col-12 col-lg-6">
            <div className="col-12 mt-3 mt-lg-4 px-0">
              <div className="faq_group_title font-weight-semibold color-shades-900 mb-3">
                Practical Information
              </div>
              <div id="accordion_0_0" role="tablist">
                {data.map((faq, index) => (
                  <div className="py-1 mb-1" key={faq.id}>
                    <div
                      className="d-flex align-items-start cursor-pointer new-faq-question"
                      role="tab"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="d-flex icon-chevron-down-faqs p-1">
                        <i className="color-brand-accent">
                          <MdKeyboardArrowDown fill="#ec7421" />
                        </i>
                      </div>
                      <h3 className="fs-lg-16 fs-14 line-height-25 color-shades-900 font-weight-normal">
                        {faq.question}
                      </h3>
                    </div>
                    {openFaq === index && (
                      <div className="fs-14 line-height-25 font-weight-normal color-shades-800 new-faq-answer pt-2 pb-3 text-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
