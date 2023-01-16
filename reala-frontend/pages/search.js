import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/global/layout";
import InnerPageLayout from "../components/inner-page-layout";
import PropertyCard from "../components/property-card";
import { API_URL } from "../config";

const Search = ({ property }) => {
  const { data } = property;

  const router = useRouter();
  const search = router.query.query;

  const searchProperty = data?.filter((item) =>
    item?.attributes.title.toLowerCase().includes(search)
  );

  return (
    <Layout title="Search property">
      <InnerPageLayout title="Search property" />
      <div className="search-page all-property section-padding">
        <div className="container">
          <div className="row justify-content-center">
            {searchProperty === null && (
              <span className="error">Search property not available</span>
            )}
            {searchProperty?.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const property = await res.json();

  return {
    props: { property },
    revalidate: 1,
  };
}
