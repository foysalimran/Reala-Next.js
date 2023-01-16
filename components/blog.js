import Link from "next/link";
import { API_URL } from "../config";

const Blog = ({ blogs }) => {
  const { image, title, subtitle, date, slug } = blogs.attributes;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="blog__item">
        <div className="blog__item--image">
          <img
            className="img-fluid"
            src={`${API_URL}${image.data.attributes.url}`}
            alt=""
          />
        </div>
        <div className="blog__item__info">
          <h3 className="title">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          <p>Created At: {new Date(date).toLocaleDateString("en-US")}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
