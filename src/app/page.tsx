"use client";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Aboutus from "./components/Aboutus/Aboutus";
import OurServices from "./components/OurServices/OurServices";
import HomeProducts from "./components/HomeProducts/HomeProducts";
import OurBrands from "./components/OurBrands/OurBrands";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Aboutus />
      <OurServices />
      <HomeProducts />
      <OurBrands />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
