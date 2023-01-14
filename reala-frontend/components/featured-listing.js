import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./global/section-title";
import PropertyCard from "./property-card";

const FeaturedListing = ({ data }) => {
  const [key, setKey] = useState("rent");

  const propertyRent = data?.filter(
    (property) =>
      property.attributes.categories.data[0].attributes.categoryname === "rent"
  );
  const propertySale = data?.filter(
    (property) =>
      property.attributes.categories.data[0].attributes.categoryname === "sale"
  );

  return (
    <div className="featured-list section-padding">
      <div className="container">
        <SectionTitle title="Featured Listing" />
        <div className="featured-listing__wrapper">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="rent" title="Rent">
              <div className="row">
                <span className="error">
                  {data === null || undefined || 0
                    ? "property not available for rent"
                    : ""}
                </span>
                {propertyRent?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
            <Tab eventKey="sale" title="Sale">
              <div className="row">
                <span className="error">
                  {data === null || undefined || 0
                    ? "property not available for sale"
                    : ""}
                </span>
                {propertySale?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListing;
