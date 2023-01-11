import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./global/section-title";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBathtub } from "react-icons/gi";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";

const FeaturedListing = ({ data }) => {
  const [key, setKey] = useState("rent");

  const propertyRent = data.filter(
    (property) =>
      property.attributes.categories.data[0].attributes.categoryname === "rent"
  );
  const propertySale = data.filter(
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
                {propertyRent.slice(0, 3).map((property) => (
                  <div key={property.id} className="col-md-6 col-lg-4 mb-4">
                    <div className="featured-list__item">
                      <div className="featured-list__item--image">
                        <img
                          className="img-fluid"
                          src={
                            property?.attributes.image?.data !== null
                              ? `${API_URL}${property?.attributes.image?.data[0]?.attributes.url}`
                              : "/images/404.jpg"
                          }
                          alt={property.attributes.title}
                        />
                        <div className="popular">Popular</div>
                        <div className="price">$4,550.00 / month</div>
                      </div>
                      <div className="featured-list__item__info">
                        <div className="featured-list__item__info--title">
                          <h3>
                            <a href="#">{property.attributes.title}</a>
                          </h3>
                        </div>
                        <div className="featured-list__item__info--ratting">
                          <span>
                            <AiFillStar />
                            {property.attributes.rating}
                          </span>{" "}
                          5 reviews
                        </div>
                        <ul className="featured-list__item__info--list">
                          <li>
                            <span>Office</span>
                          </li>
                          <li>
                            <GoLocation /> {property.attributes.location}
                          </li>
                          <li>
                            <MdCall />{" "}
                            <a href={`tel${property.attributes.phone}`}>
                              {property.attributes.phone}
                            </a>
                          </li>
                        </ul>
                        <ul className="featured-list__item__info--expert">
                          <li>
                            <MdBed /> {property.attributes.beds} Beds
                          </li>
                          <li>
                            <GiBathtub /> {property.attributes.ba} Baths
                          </li>
                          <li>
                            <AiOutlineHome /> 6,541 sqft
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
            <Tab eventKey="sale" title="Sale">
              <div className="row">
                {propertySale.slice(0, 3).map((property) => (
                  <div key={property.id} className="col-md-6 col-lg-4 mb-4">
                    <div className="featured-list__item">
                      <div className="featured-list__item--image">
                        <img
                          className="img-fluid"
                          src={
                            property?.attributes.image?.data !== null
                              ? `${API_URL}${property?.attributes.image?.data[0]?.attributes.url}`
                              : "/images/404.jpg"
                          }
                          alt={property.attributes.title}
                        />
                        <div className="popular">Popular</div>
                        <div className="price">$4,550.00 / month</div>
                      </div>
                      <div className="featured-list__item__info">
                        <div className="featured-list__item__info--title">
                          <h3>
                            <a href="#">{property.attributes.title}</a>
                          </h3>
                        </div>
                        <div className="featured-list__item__info--ratting">
                          <span>
                            <AiFillStar />
                            {property.attributes.rating}
                          </span>{" "}
                          5 reviews
                        </div>
                        <ul className="featured-list__item__info--list">
                          <li>
                            <span>Office</span>
                          </li>
                          <li>
                            <GoLocation /> {property.attributes.location}
                          </li>
                          <li>
                            <MdCall />{" "}
                            <a href={`tel${property.attributes.phone}`}>
                              {property.attributes.phone}
                            </a>
                          </li>
                        </ul>
                        <ul className="featured-list__item__info--expert">
                          <li>
                            <MdBed /> {property.attributes.beds} Beds
                          </li>
                          <li>
                            <GiBathtub /> {property.attributes.ba} Baths
                          </li>
                          <li>
                            <AiOutlineHome /> 6,541 sqft
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
