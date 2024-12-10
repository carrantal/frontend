"use client";
import React from "react";
import AboutUs from "./components/Aboutus/Aboutus";
import OurServices from "./components/OurServices/OurServices";
import HomeProducts from "./components/HomeProducts/products";
import OurBrands from "./components/OurBrands/OurBrands";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <HomeProducts />
      <OurServices />
      <OurBrands />
      <FAQ />
      <Contact />
    </>
  );
};

export default App;
