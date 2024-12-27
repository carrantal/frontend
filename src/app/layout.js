import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import Layout from "./components/Layout";

export const metadata = {
  title: "NaylRental",
  description:
    "NaylRental is a trusted car rental company based in Dubai, offering a wide range of affordable, high-quality vehicles for short and long-term rentals. Whether you're looking for a luxury car, SUV, or economy vehicle, NaylRental provides flexible options to suit your needs. Experience hassle-free booking, competitive prices, and exceptional customer service. Rent a car in Dubai with NaylRental today!",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto+Slab&family=Roboto:wght@100;300;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-black">
          <Layout>
            {children}
            <div id="videomodal"></div>
          </Layout>
        </div>
      </body>
    </html>
  );
}
