import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./global/section-title";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBathtub } from "react-icons/gi";
import { MdBed, MdCall } from "react-icons/md";
import Link from "next/link";

const FeaturedListing = () => {
  const [key, setKey] = useState("rent");
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
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="featured-list__item">
                    <div className="featured-list__item--image">
                      <img
                        className="img-fluid"
                        src="images/house1.jpg"
                        alt="house1"
                      />
                      <div className="popular">Popular</div>
                      <div className="price">$4,550.00 / month</div>
                    </div>
                    <div className="featured-list__item__info">
                      <div className="featured-list__item__info--title">
                        <h3>
                          <a href="#">Elmsgate Oaklands Hill</a>
                        </h3>
                      </div>
                      <div className="featured-list__item__info--ratting">
                        <span>
                          <AiFillStar /> 4.5{" "}
                        </span>{" "}
                        5 reviews
                      </div>
                      <ul className="featured-list__item__info--list">
                        <li>
                          <span>Office</span>
                        </li>
                        <li>
                          <GoLocation /> Massachusetts, United States
                        </li>
                        <li>
                          <MdCall />{" "}
                          <a href="tel:+880123456789">+880123456789</a>
                        </li>
                      </ul>
                      <ul className="featured-list__item__info--expert">
                        <li>
                          <MdBed /> 4 Beds
                        </li>
                        <li>
                          <GiBathtub /> 4 Baths
                        </li>
                        <li>
                          <AiOutlineHome /> 6,541 sqft
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="featured-list__item">
                    <div className="featured-list__item--image">
                      <img
                        className="img-fluid"
                        src="images/house2.jpg"
                        alt="house2"
                      />
                      <div className="popular">Popular</div>
                      <div className="price">$2,589.00 / month</div>
                    </div>
                    <div className="featured-list__item__info">
                      <div className="featured-list__item__info--title">
                        <h3>
                          <Link href="#">Park View Palace</Link>
                        </h3>
                      </div>
                      <div className="featured-list__item__info--ratting">
                        <span>
                          <AiFillStar /> 5.0{" "}
                        </span>{" "}
                        10 reviews
                      </div>
                      <ul className="featured-list__item__info--list">
                        <li>
                          <span>Family House</span>
                        </li>
                        <li>
                          <GoLocation /> Massachusetts, United States
                        </li>
                        <li>
                          <MdCall />{" "}
                          <a href="tel:+880123456789">+880123456789</a>
                        </li>
                      </ul>
                      <ul className="featured-list__item__info--expert">
                        <li>
                          <MdBed /> 4 Beds
                        </li>
                        <li>
                          <GiBathtub /> 4 Baths
                        </li>
                        <li>
                          <AiOutlineHome /> 6,541 sqft
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="featured-list__item">
                    <div className="featured-list__item--image">
                      <img
                        className="img-fluid"
                        src="images/house3.jpg"
                        alt="house3"
                      />
                      <div className="popular">Popular</div>
                      <div className="price">$7,894.00 / month</div>
                    </div>
                    <div className="featured-list__item__info">
                      <div className="featured-list__item__info--title">
                        <h3>
                          <a href="#">The Crumpsbank House</a>
                        </h3>
                      </div>
                      <div className="featured-list__item__info--ratting">
                        <span>
                          <AiFillStar /> 4.0{" "}
                        </span>{" "}
                        2 reviews
                      </div>
                      <ul className="featured-list__item__info--list">
                        <li>
                          <span>Apartment</span>
                        </li>
                        <li>
                          <GoLocation /> Morro, Ribeira Brava, Cape Verde
                        </li>
                        <li>
                          <MdCall />{" "}
                          <a href="tel:+880123456789">+880123456789</a>
                        </li>
                      </ul>
                      <ul className="featured-list__item__info--expert">
                        <li>
                          <MdBed /> 5 Beds
                        </li>
                        <li>
                          <GiBathtub /> 6 Baths
                        </li>
                        <li>
                          <AiOutlineHome /> 9,512 sqft
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="sale" title="Sale">
              <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="featured-list__item">
                    <div className="featured-list__item--image">
                      <img
                        className="img-fluid"
                        src="images/house4.jpg"
                        alt="house4"
                      />
                      <div className="popular">Popular</div>
                      <div className="price">$4,550.00 / month</div>
                    </div>
                    <div className="featured-list__item__info">
                      <div className="featured-list__item__info--title">
                        <h3>
                          <a href="#">Elmsgate Oaklands Hill</a>
                        </h3>
                      </div>
                      <div className="featured-list__item__info--ratting">
                        <span>
                          <AiFillStar /> 4.5{" "}
                        </span>{" "}
                        5 reviews
                      </div>
                      <ul className="featured-list__item__info--list">
                        <li>
                          <span>Office</span>
                        </li>
                        <li>
                          <GoLocation /> Massachusetts, United States
                        </li>
                        <li>
                          <MdCall />{" "}
                          <a href="tel:+880123456789">+880123456789</a>
                        </li>
                      </ul>
                      <ul className="featured-list__item__info--expert">
                        <li>
                          <MdBed /> 4 Beds
                        </li>
                        <li>
                          <GiBathtub /> 4 Baths
                        </li>
                        <li>
                          <AiOutlineHome /> 6,541 sqft
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="featured-list__item">
                    <div className="featured-list__item--image">
                      <img
                        className="img-fluid"
                        src="images/house5.jpg"
                        alt="house5"
                      />
                      <div className="popular">Popular</div>
                      <div className="price">$2,589.00 / month</div>
                    </div>
                    <div className="featured-list__item__info">
                      <div className="featured-list__item__info--title">
                        <h3>
                          <Link href="#">Park View Palace</Link>
                        </h3>
                      </div>
                      <div className="featured-list__item__info--ratting">
                        <span>
                          <AiFillStar /> 5.0{" "}
                        </span>{" "}
                        10 reviews
                      </div>
                      <ul className="featured-list__item__info--list">
                        <li>
                          <span>Family House</span>
                        </li>
                        <li>
                          <GoLocation /> Massachusetts, United States
                        </li>
                        <li>
                          <MdCall />{" "}
                          <a href="tel:+880123456789">+880123456789</a>
                        </li>
                      </ul>
                      <ul className="featured-list__item__info--expert">
                        <li>
                          <MdBed /> 4 Beds
                        </li>
                        <li>
                          <GiBathtub /> 4 Baths
                        </li>
                        <li>
                          <AiOutlineHome /> 6,541 sqft
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="featured-list__item">
                    <div className="featured-list__item--image">
                      <img
                        className="img-fluid"
                        src="images/house6.jpg"
                        alt="house6"
                      />
                      <div className="popular">Popular</div>
                      <div className="price">$7,894.00 / month</div>
                    </div>
                    <div className="featured-list__item__info">
                      <div className="featured-list__item__info--title">
                        <h3>
                          <a href="#">The Crumpsbank House</a>
                        </h3>
                      </div>
                      <div className="featured-list__item__info--ratting">
                        <span>
                          <AiFillStar /> 4.0{" "}
                        </span>{" "}
                        2 reviews
                      </div>
                      <ul className="featured-list__item__info--list">
                        <li>
                          <span>Apartment</span>
                        </li>
                        <li>
                          <GoLocation /> Morro, Ribeira Brava, Cape Verde
                        </li>
                        <li>
                          <MdCall />{" "}
                          <a href="tel:+880123456789">+880123456789</a>
                        </li>
                      </ul>
                      <ul className="featured-list__item__info--expert">
                        <li>
                          <MdBed /> 5 Beds
                        </li>
                        <li>
                          <GiBathtub /> 6 Baths
                        </li>
                        <li>
                          <AiOutlineHome /> 9,512 sqft
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListing;
