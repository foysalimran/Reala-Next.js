import Head from "next/head";
import Header from "./Headersss";
import Footer from "./Footersss";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Reala - Next app",
  description: "Property Listing NEXT.JS, Strapi app",
  keywords: "reala, real estate",
};
