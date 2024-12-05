"use client";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
