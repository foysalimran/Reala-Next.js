import React from "react";
import Layout from "../components/global/layout";
import SectionTitle from "../components/global/section-title";
import PropertyCard from "../components/property-card";
import { API_URL } from "../config";

const AllHouses = ({ property }) => {
  const { data } = property;
  return (
    <Layout>
      <div className="featured-list section-padding">
        <div className="container">
          <SectionTitle title="View All Property" />
          <div className="featured-listing__wrapper">
            <div className="row">
              {data.map((property) => (
                <PropertyCard property={property} key={property.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
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
