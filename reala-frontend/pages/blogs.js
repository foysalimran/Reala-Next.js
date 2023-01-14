import React from "react";
import Blog from "../components/blog";
import Layout from "../components/global/layout";
import InnerPageLayout from "../components/inner-page-layout";
import { API_URL } from "../config";

const Blogs = ({ blogs }) => {
  const { data } = blogs;
  return (
    <Layout title="All Property Blogs">
      <InnerPageLayout title="Blogs" />
      <div className="blog section-padding">
        <div className="container">
          <div className="row">
            {data.map((blogs) => (
              <Blog blogs={blogs} key={blogs.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/blogs?populate=*`);
  const blogs = await res.json();

  return {
    props: { blogs },
    revalidate: 1,
  };
}
