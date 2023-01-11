import React from "react";
import Layout from "../../components/global/layout";
import { API_URL } from "../../config";

const PropertyPage = ({ properties, slug }) => {
  const property = properties.filter((data) => data?.attributes.slug === slug);

  const { image, price, title, rating, type, location, phone, beds, baths } =
    property[0]?.attributes;
  console.log(title);
  return (
    <Layout>
      <div className="single-page section-padding">
        <h3>Title: {title}</h3>
        <div className="">{slug}</div>
      </div>
    </Layout>
  );
};

export default PropertyPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const allProperty = await res.json();
  const properties = allProperty.data;

  return {
    props: {
      properties,
      slug,
    },
  };
}
