import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Layout from "../components/global/layout";
import SectionTitle from "../components/global/section-title";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBathtub } from "react-icons/gi";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";
import AllPropertyNav from "../components/all-property-nav";
import Sidebar from "../components/sidebar";
import PropertyCard from "../components/property-card";

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

  const [key, setKey] = useState("all");

  const propertyRent = data?.filter(
    (property) =>
      property.attributes.categories.data[0].attributes.categoryname === "rent"
  );
  const propertySale = data?.filter(
    (property) =>
      property.attributes.categories.data[0].attributes.categoryname === "sale"
  );

  return (
    <Layout>
      <div className="all-property featured-list section-padding">
        <div className="container">
          <AllPropertyNav
            setView={setView}
            searchProperty={searchProperty}
            view={view}
            data={data}
          />
          {view ? (
            <div id="property-list">
              <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="all" title="All">
                  <div className="row">
                    <span className="error">
                      {data === null || undefined || 0
                        ? "Property not available for rent or Sale"
                        : ""}
                    </span>
                    {data?.map((property) => (
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
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="rent" title="Rent">
                  <div className="row">
                    <span className="error">
                      {data === null || undefined || 0
                        ? "Property not available for rent"
                        : ""}
                    </span>
                    {propertyRent?.map((property) => (
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
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="sale" title="Sale">
                  <div className="row">
                    <span className="error">
                      {data === null || undefined || 0
                        ? "Property not available for sale"
                        : ""}
                    </span>
                    {propertySale?.map((property) => (
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
                    ))}
                  </div>
                </Tab>
              </Tabs>
            </div>
          ) : (
            <div id="property-list">
              <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="all" title="All">
                  <div className="row">
                    <span className="error">
                      {data === null || undefined || 0
                        ? "Property not available for rent or Sale"
                        : ""}
                    </span>
                    {data?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="rent" title="Rent">
                  <div className="row">
                    <span className="error">
                      {data === null || undefined || 0
                        ? "Property not available for rent"
                        : ""}
                    </span>
                    {propertyRent?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="sale" title="Sale">
                  <div className="row">
                    <span className="error">
                      {data === null || undefined || 0
                        ? "Property not available for sale"
                        : ""}
                    </span>
                    {propertySale?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
              </Tabs>
            </div>
          )}
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
