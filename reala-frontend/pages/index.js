import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/global/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div>Hello world!</div>
    </Layout>
  );
}
