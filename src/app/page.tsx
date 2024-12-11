"use client";
import React from "react";
import AboutUs from "./components/Aboutus/Aboutus";
import OurServices from "./components/OurServices/OurServices";
import HomeProducts from "./components/HomeProducts/products";
import LuxuryCars from "./components/HomeProducts/LuxuryProducts";
import OurBrands from "./components/OurBrands/OurBrands";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Hero />
      <OurBrands />
      <HomeProducts />
      <LuxuryCars />
      <AboutUs />
      <OurServices />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
};

export default App;
