import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegComment,
  FaTwitter,
} from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { VscReply } from "react-icons/vsc";
import Layout from "../../components/global/layout";
import InnerPageLayout from "../../components/inner-page-layout";
import RelatedBlog from "../../components/related-blog";
import { API_URL } from "../../config";

const SingleBlog = ({ blogs, slug }) => {
  const blog = blogs?.filter((data) => data?.attributes.slug === slug);
  const { title, image, subtitle, description, date, user } =
    blog[0]?.attributes;

  return (
    <Layout title={title}>
      <InnerPageLayout title={title} />
      <div className="blog__item__info--wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-4 mx-auto">
              <div className="image">
                <img
                  src={`${API_URL}${image.data.attributes.url}`}
                  className="img-fluid"
                  alt={title}
                />
                <div className="image__user">
                  <p>
                    <AiOutlineUser /> {user.data.attributes.username}
                  </p>
                  <p>
                    <MdUpdate />
                    {new Date(date).toLocaleDateString("en-US")}
                  </p>
                  <p>
                    <FaRegComment />3 Comments
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="content__header">
                  <h1>{title}</h1>
                  <p className="subtitle">{subtitle}</p>
                </div>
                <div className="content__body">
                  <p>{description}</p>
                </div>
                <div className="content__share">
                  <p>Share this article:</p>
                  <ul>
                    <li>
                      <Link href="#">
                        <FaFacebookF /> Share
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter /> Tweet
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaLinkedinIn /> Share
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <BsMedium /> Share
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="content__related">
                  <div className="row">
                    {blogs.slice(0, 2).map((blog) => (
                      <RelatedBlog blog={blog} />
                    ))}
                  </div>
                </div>
                <div className="content__comment">
                  <div className="content__comment__single">
                    <div className="content__comment__single--image">
                      <img src="/images/user1.jpg" alt="" />
                    </div>
                    <div className="content__comment__single--info">
                      <div className="user">
                        <h6>Mahamudul Hasan</h6>
                        <p>November 2, 2022</p>
                      </div>
                      <div className="reply">
                        <button>
                          <VscReply /> Reply
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="content__comment__single">
                    <div className="content__comment__single--image">
                      <img src="/images/user2.jpg" alt="" />
                    </div>
                    <div className="content__comment__single--info">
                      <div className="user">
                        <h6>Mahamudul Hasan</h6>
                        <p>November 2, 2022</p>
                      </div>
                      <div className="reply">
                        <button>
                          <VscReply /> Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/blogs?populate=*`);
  const allBlogs = await res.json();
  const blogs = allBlogs.data;

  return {
    props: {
      blogs,
      slug,
    },
  };
}
