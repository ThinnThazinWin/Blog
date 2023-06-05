import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

function Format({ children }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default Format;
