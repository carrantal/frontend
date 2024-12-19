import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Faq = () => {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle function to open/close the FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index); // Toggle between open and closed
  };

  return (
    <div className=" bg-shades-white home-page-container-p-t flex-column pt-4 pb-4 mt-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className=" fs-24 fs-lg-30 lh-lg-40 lh-35 font-weight-semibold color-shades-black">
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
                {[
                  {
                    question: "What about parking availability?",
                    answer:
                      "Suitable car rental parking can be easily found throughout Dubai via numerous open-air, roadside, and underground car parks. Note that roadside parking meters must be used in designated areas. The drivers must abide by the rules as they are responsible for any associated fines and parking fees.",
                  },
                  {
                    question: "On what schedule do you charge for the rental?",
                    answer:
                      "We charge daily rental fees, using the 24-hour time format. For example, a car rented at 2:00 pm will be due back at the same time the following day. We urge all customers to verify the return date and time to avoid extra charges. The best course of action is to contact our team of professionals and provide them with the necessary information.",
                  },
                  {
                    question:
                      "What can I expect to pay for car rentals in Dubai?",
                    answer:
                      "It is affordable, but the cost varies depending on the make and model. Luxury cars for rent Dubai come with a higher price tag compared to budget options. You can rent economy cars for as low as $27 per day, while SUVs are available starting at $81 per day. While luxury and supercar brands may cost over $1000 per day.",
                  },
                  {
                    question:
                      "Can I rent a car from Dubai International Airport 24/7?",
                    answer:
                      "Yes, you can rent a car conveniently from Dubai Airport through Renty.ae. Our hassle-free cheap car hire lets you pick up your rental car as soon as you arrive and leave an arrivals hall, making it simple to explore Dubai with our cars for rent right at the international airport. This ensures a smooth start to your journey.",
                  },
                  {
                    question:
                      "What types of cars are available to rent on the Renty.ae platform?",
                    answer:
                      "The Renty platform offers a wide selection of cars to fit any occasion or budget. We provide luxury vehicles like Rolls-Royce and high-performance supercars such as Ferrari, Lamborghini and Porsche. Additionally, we also offer cheap car rental Dubai deals like Honda and Chevrolet. Our rental car service includes a variety of vehicle designs such as SUVs, vans, sedans, hatchbacks, and more.",
                  },
                  {
                    question: "How much does fuel cost in Dubai?",
                    answer:
                      "As you plan your journey with Renty, it's essential to consider fuel costs in Dubai. Currently, the average price of fuel stands at AED 3 per litre over the past 30 This information helps you estimate the cost of refueling during your rental period ensuring a seamless experience as you explore the city.",
                  },
                ].map((faq, index) => (
                  <div className="py-1 mb-1" key={index}>
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
