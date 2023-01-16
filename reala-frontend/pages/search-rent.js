import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/global/layout";
import InnerPageLayout from "../components/inner-page-layout";
import PropertyCard from "../components/property-card";
import { API_URL } from "../config";

const SearchRent = ({ property }) => {
  const { data } = property;

  const propertyRent = data?.filter(
    (property) =>
      property.attributes.categories.data[0].attributes.categoryname === "rent"
  );

  const router = useRouter();
  const search = router.query.query;

  const searchProperty = propertyRent?.filter((item) =>
    item?.attributes.title.toLowerCase().includes(search)
  );

  console.log(searchProperty);

  return (
    <Layout title={`Search property with ${search}`}>
      <InnerPageLayout title="Search property" />
      <div className="search-page all-property section-padding">
        <div className="container">
          <div className="row justify-content-center">
            {searchProperty.length === 0 ? (
              <span className="error">Search property not available</span>
            ) : (
              <>
                {searchProperty?.map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchRent;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const property = await res.json();

  return {
    props: { property },
    revalidate: 1,
  };
}