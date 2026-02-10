import React from "react";
import Footer from "../Footer/Footer";
import axios from "axios";
import { URL } from "@/app/utils";
import HeaderV2 from "../HeaderV2";

export default async function Layout({ children, isHomePage }) {
  const response = await axios.get(
    `${URL}/api/info?populate=*&[faqs][populate]=*`
  );
  const data = response?.data?.data;
  return (
    <>
      <HeaderV2 isHomePage={isHomePage} />
      {children} 
     <Footer Footerdata={data} />
    </>
  );
}
