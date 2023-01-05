import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  const [key, setKey] = useState("rent");
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-3">Find your dream home now</h1>
            <h5 className="mb-5">We helps people to getting home and renting with good price</h5>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="rent" title="For-Rent">
                <div className="hero__search">
                  <select>
                    <option value="">Industial</option>
                    <option value="">Industial</option>
                    <option value="">Industial</option>
                  </select>
                  <select>
                    <option value="">Industial</option>
                    <option value="">Industial</option>
                    <option value="">Industial</option>
                  </select>
                  <button>
                    <BsSearch />
                  </button>
                </div>
              </Tab>
              <Tab eventKey="sale" title="For-Sale">
                <div className="hero__search">
                  <select>
                    <option value="">Industial</option>
                    <option value="">Industial</option>
                    <option value="">Industial</option>
                  </select>
                  <select>
                    <option value="">Industial</option>
                    <option value="">Industial</option>
                    <option value="">Industial</option>
                  </select>
                  <button>
                    <BsSearch />
                  </button>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <img src="images/hero.jpg" alt="hero" />
              <div className="image-two">
                <img src="images/house1.jpg" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
