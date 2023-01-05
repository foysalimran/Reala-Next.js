import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/global/layout";
import Hero from "../components/hero";
import FeaturedListing from "../components/featured-listing";
import WhyChooseUs from "../components/why-choose-us";
import PropertyListing from "../components/property-listing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedListing />
      <WhyChooseUs />
      <PropertyListing />
    </Layout>
  );
}
