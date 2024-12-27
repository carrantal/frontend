import React, { Suspense } from "react";
import Header from "../components/Header/Header";
import TopHeader from "../components/TopHeader";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { URL } from "../utils";

export const metadata = {
  title: "Search - NaylRental",
  description:
    "NaylRental is a trusted car rental company based in Dubai, offering a wide range of affordable, high-quality vehicles for short and long-term rentals. Whether you're looking for a luxury car, SUV, or economy vehicle, NaylRental provides flexible options to suit your needs. Experience hassle-free booking, competitive prices, and exceptional customer service. Rent a car in Dubai with NaylRental today!",
};

export default async function CarListPage() {
  return (
    <>
      {/* <div class="bg-black"> */}
      {/* <div class="homepage  "> */}
      {/* <TopHeader /> */}
      <Suspense>
        <SearchResults />
      </Suspense>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
