import SectionTitle from "./global/section-title";
import PropertyCard from "./property-card";

const PropertyListing = ({ data }) => {
  return (
    <div className="featured-list section-padding">
      <div className="container">
        <SectionTitle title="Property Listing" />
        <div className="featured-listing__wrapper">
          <div className="row">
            <span className="error">
              {data === null || undefined || 0 ? "Property not available" : ""}
            </span>
            {data?.slice(0, 6).map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
          {data === null || undefined || 0 ? (
            ""
          ) : (
            <div className="text-center mt-4">
              <a href="/all-property" className="button-primary">
                View All Property
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
