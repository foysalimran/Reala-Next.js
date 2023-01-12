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
  MdOutlineKeyboardArrowLeft,
  MdOutlineNavigateNext,
} from "react-icons/md";

const PropertyPage = ({ properties, slug }) => {
  const property = properties.filter((data) => data?.attributes.slug === slug);

  const { image, price, title, rating, type, location, phone, beds, baths } =
    property[0]?.attributes;

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
