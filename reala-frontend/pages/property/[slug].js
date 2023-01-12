import React from "react";
import Layout from "../../components/global/layout";
import PropertyCard from "../../components/property-card";
import { API_URL } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SectionTitle from "../../components/global/section-title";
import {
  MdBed,
  MdOutlineKeyboardArrowLeft,
  MdOutlineNavigateNext,
} from "react-icons/md";

const PropertyPage = ({ properties, slug }) => {
  const property = properties.filter((data) => data?.attributes.slug === slug);

  const {
    image,
    price,
    title,
    description,
    rating,
    type,
    location,
    phone,
    beds,
    baths,
  } = property[0]?.attributes;

  return (
    <Layout>
      <div className="single-page">
        <div className="rwo">
          <div className="col-12">
            <Swiper
              className="single-page__swiper"
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              autoplay
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {image.data.map((images) => (
                <SwiperSlide key={images.id}>
                  {console.log(images)}
                  <img
                    className="img-fluid"
                    src={`${API_URL}${images.attributes.url}`}
                    alt={title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="prev">
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="next">
              <MdOutlineNavigateNext />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="single-page__top">
            <h3>
              {title} <span>Popular</span>
            </h3>
            <p className="location">{location}</p>
            <span className="price">${price}</span>
          </div>
        </div>
        <div className="section-bg section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="description-card">
                  <div className="description-card__header">
                    <h4>Property Details</h4>
                  </div>
                  <div className="description-card__body">
                    <ul>
                      <li>
                        <span>
                          <MdBed />
                          Beds
                        </span>{" "}
                        <span>{beds}</span>
                      </li>
                      <li>
                        <span>
                          <MdBed />
                          Bathrooms
                        </span>{" "}
                        <span>{baths}</span>
                      </li>
                      <li>
                        <span>
                          <MdBed />
                          Area (sq ft)
                        </span>{" "}
                        <span>4506</span>
                      </li>
                      <li>
                        <span>
                          <MdBed />
                          Garages
                        </span>{" "}
                        <span>2</span>
                      </li>
                      <li>
                        <span>
                          <MdBed />
                          Built Year
                        </span>{" "}
                        <span>2019</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="description-card">
                  <div className="description-card__header">
                    <h4>Description</h4>
                  </div>
                  <div className="description-card__body">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="description-sidebar">
                  <div className="description-sidebar__header">
                    <h4>Description</h4>
                  </div>
                  <div className="description-sidebar__body">hello</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="similar">
          <div className="featured-list section-padding">
            <div className="container">
              <SectionTitle position="left" title="Similar Properties" />
              <div className="featured-listing__wrapper">
                <div className="row">
                  {properties.slice(0, 3).map((property) => (
                    <PropertyCard property={property} key={property.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const allProperty = await res.json();
  const properties = allProperty.data;

  return {
    props: {
      properties,
      slug,
    },
  };
}
