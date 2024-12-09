"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../components/Header/Header"), {
  ssr: false,
});

const Hero = dynamic(() => import("../../components/Hero/Hero"), {
  ssr: false,
});

const Aboutus = dynamic(() => import("../../components/Aboutus/Aboutus"), {
  ssr: false,
});

const OurServices = dynamic(
  () => import("../../components/OurServices/OurServices"),
  {
    ssr: false,
  }
);

const HomeProducts = dynamic(
  () => import("../../components/HomeProducts/HomeProducts"),
  {
    ssr: false,
  }
);

const OurBrands = dynamic(
  () => import("../../components/OurBrands/OurBrands"),
  {
    ssr: false,
  }
);

const FAQ = dynamic(() => import("../../components/FAQ/FAQ"), {
  ssr: false,
});

const Contact = dynamic(() => import("../../components/Contact/Contact"), {
  ssr: false,
});

const Footer = dynamic(() => import("../../components/Footer/Footer"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Aboutus />
      <OurServices />
      <HomeProducts />
      <OurBrands />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
