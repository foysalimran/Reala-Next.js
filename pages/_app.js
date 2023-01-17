import { Router } from "next/router";
import "../assets/sass/main.scss";

export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    console.log("Loading...");
  });
  return <Component {...pageProps} />;
}
