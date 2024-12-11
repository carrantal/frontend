"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What do I need to rent a car?",
      answer:
        "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.",
    },
    {
      question: "How old do I need to be to rent a car?",
      answer:
        "You must be at least 21 years old. Additional age restrictions may apply based on the vehicle category.",
    },
    {
      question: "Can I rent a car with a debit card?",
      answer:
        "Yes, but additional verification may be required. Credit card payment is often preferred.",
    },
  ];

  return (
    <div className="our-faqs bg-section">
      <div className="container">
        <div className="row items-center">
          <div className="col-lg-6">
            <div className="our-faqs-image">
              <img src="/images/our-faqs-img-1.jpg" alt="FAQ Image 1" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our-faqs-content">
              <div className="section-title">
                <h3>Frequently Asked Questions</h3>
                <h2>Everything you need to know about our services</h2>
              </div>
              <div className="our-faqs-accordion">
                {questions.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <div className="accordion-header">
                      <button
                        className={`accordion-button w-full text-left p-4 bg-gray-100  rounded-lg ${
                          activeIndex === "bg-blue-600 text-white"
                        }`}
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.question}
                      </button>
                    </div>
                    <div
                      className={`accordion-collapse overflow-hidden transition-all ease-in-out duration-300 ${
                        activeIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
                      }`}
                    >
                      <div className="accordion-body text-white-100">
                        {item.answer}
                      </div>
                    </div>
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

export default FAQ;
