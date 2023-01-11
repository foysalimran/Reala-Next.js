import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./global/section-title";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBathtub } from "react-icons/gi";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";

const PropertyListing = ({ data }) => {
  return (
    <div className="featured-list section-padding">
      <div className="container">
        <SectionTitle title="Property Listing" />
        <div className="featured-listing__wrapper">
          <div className="row">
            {data.slice(0, 6).map((property) => (
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
                    <div className="price">
                      ${property.attributes.price} / month
                    </div>
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
                        <GiBathtub /> {property.attributes.baths} Baths
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
          <div className="text-center">
            <a href="/all-houses" className="button-primary">
              View All Property
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
