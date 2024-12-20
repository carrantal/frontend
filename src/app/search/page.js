import React from "react";
import Header from "../components/Header/Header";
import TopHeader from "../components/TopHeader";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer/Footer";

export default function CarListPage() {
  return (
    <>
      <div class="bg-black">
        <div class="homepage  ">
          <TopHeader />
          <SearchResults />
          <Footer />
        </div>
      </div>
    </>
  );
}
