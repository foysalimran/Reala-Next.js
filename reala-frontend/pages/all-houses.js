import React from "react";
import FeaturedListing from "../components/featured-listing";
import Layout from "../components/global/layout";
import { API_URL } from "../config";

const AllHouses = ({ property }) => {
  const { data } = property;
  return (
    <Layout>
      <FeaturedListing data={data} />
    </Layout>
  );
};

export default AllHouses;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const property = await res.json();

  return {
    props: { property },
    revalidate: 1,
  };
}
