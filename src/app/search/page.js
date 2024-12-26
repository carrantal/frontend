import React, { Suspense } from "react";
import Header from "../components/Header/Header";
import TopHeader from "../components/TopHeader";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { URL } from "../utils";
export default async function CarListPage() {
  const Footerresponse = await axios.get(
    `${URL}/api/info?populate=*&[faqs][populate]=*`
  );
  const Footerdata = Footerresponse?.data?.data;
  return (
    <>
      <div class="bg-black">
        <div class="homepage  ">
          <TopHeader />
          <Suspense>
            <SearchResults />
          </Suspense>
          <Footer Footerdata={Footerdata} />
        </div>
      </div>
    </>
  );
}
