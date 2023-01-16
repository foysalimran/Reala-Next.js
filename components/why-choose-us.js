import React from "react";
import SectionTitle from "./global/section-title";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdEngineering } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";

const WhyChooseUs = () => {
  return (
    <div className="wChoose section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="wChoose__intro">
              <SectionTitle title="Why Choose Reala" position="left" />
              <p className="fs-4">keep calm, and reala on.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem distinctio illum iure deserunt eum mollitia.
              </p>
              <img
                src="images/wChoose2.jpg"
                alt="wChoose"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="wChoose__content">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <VscWorkspaceTrusted />
                    </div>
                    <h5>Trusted Company</h5>
                    <p>
                      Fusce elementum vulputate ipsum in molestie. Proin
                      interdum lectu blandit tortor facilisis efficitur
                      ultricies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdEngineering />
                    </div>
                    <h5>Experienced</h5>
                    <p>
                      Fusce elementum vulputate ipsum in molestie. Proin
                      interdum lectu blandit tortor facilisis efficitur
                      ultricies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <TbCertificate />
                    </div>
                    <h5>Certified Worker</h5>
                    <p>
                      Fusce elementum vulputate ipsum in molestie. Proin
                      interdum lectu blandit tortor facilisis efficitur
                      ultricies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <FiHelpCircle />
                    </div>
                    <h5>24/7 Support</h5>
                    <p>
                      Fusce elementum vulputate ipsum in molestie. Proin
                      interdum lectu blandit tortor facilisis efficitur
                      ultricies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
