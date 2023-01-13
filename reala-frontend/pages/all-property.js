import React, { useState } from "react";
import Layout from "../components/global/layout";
import SectionTitle from "../components/global/section-title";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBathtub } from "react-icons/gi";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";
import AllPropertyNav from "../components/all-property-nav";
import Sidebar from "../components/sidebar";

const AllProperty = ({ property }) => {
  const { data } = property;
  const [view, setView] = useState(false);

  const searchProperty = () => {
    var searchKeyword, i, txtValue;
    let input = document.getElementById("search-input");
    let filter = input.value.toUpperCase();
    let allProperty = document.getElementById("property-list");
    let property = allProperty.getElementsByClassName("property");

    for (i = 0; i < property.length; i++) {
      searchKeyword = property[i].getElementsByClassName("property-name")[0];
      txtValue = searchKeyword.textContent || searchKeyword.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        property[i].style.display = "";
      } else {
        property[i].style.display = "none";
      }
    }
  };

  return (
    <Layout>
      <div className="all-property featured-list section-padding">
        <div className="container">
          <SectionTitle title="All Property" />
          <div className="featured-listing__wrapper">
            <div className="row">
              <div className="col-md-3">
                <Sidebar searchProperty={searchProperty} data={data} />
              </div>
              <div className="col-md-9">
                <div className="row" id="property-list">
                  <AllPropertyNav setView={setView} view={view} data={data} />
                  {data === null || undefined || 0
                    ? "Property not available"
                    : ""}
                  {data?.map((property) =>
                    view ? (
                      <div key={property.id} className="property col-12 mb-4">
                        <div className="list-view">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="list-view--image h-100">
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
                                <div className="type">
                                  {property.attributes.type}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7 col-lg-6 offset-lg-1">
                              <div className="list-view__info">
                                <div className="list-view__info--title">
                                  <h3>
                                    <a className="property-name" href="#">
                                      {property.attributes.title}
                                    </a>
                                  </h3>
                                </div>
                                <div className="list-view__info--price">
                                  ${property?.attributes.price} / month
                                </div>
                                <div className="list-view__info--ratting">
                                  <span>
                                    <AiFillStar />
                                    {property.attributes.rating}
                                  </span>{" "}
                                  5 reviews
                                </div>
                                <ul className="list-view__info--list">
                                  <li>
                                    <GoLocation />{" "}
                                    {property.attributes.location}
                                  </li>
                                  <li>
                                    <MdCall />{" "}
                                    <a href={`tel${property.attributes.phone}`}>
                                      {property.attributes.phone}
                                    </a>
                                  </li>
                                </ul>
                                <ul className="list-view__info--expert">
                                  <li>
                                    <MdBed /> {property.attributes.beds} Beds
                                  </li>
                                  <li>
                                    <GiBathtub /> {property.attributes.baths}{" "}
                                    Baths
                                  </li>
                                  <li>
                                    <AiOutlineHome /> 6,541 sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div key={property.id} className="property col-md-6 mb-4">
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
                              ${property?.attributes.price} / month
                            </div>
                          </div>
                          <div className="featured-list__item__info">
                            <div className="featured-list__item__info--title">
                              <h3>
                                <a className="property-name" href="#">
                                  {property.attributes.title}
                                </a>
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
                                <span>{property.attributes.type}</span>
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
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProperty;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const property = await res.json();

  return {
    props: { property },
    revalidate: 1,
  };
}
