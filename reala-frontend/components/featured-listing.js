import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./section-title";
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
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
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
                        2 reviews
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
                <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
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
                          <Link href="#">Elmsgate Oaklands Hill</Link>
                        </h3>
                      </div>
                      <div className="featured-list__item__info--ratting">
                        <span>
                          <AiFillStar /> 4.5{" "}
                        </span>{" "}
                        2 reviews
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
                <div className="col-md-6 col-lg-4">
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
                        2 reviews
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
              </div>
            </Tab>
            <Tab eventKey="sale" title="Sale">
              Sell
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListing;
