import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Aside from "../components/Aside/Aside";
import PageList from "../components/PageList/PageList";

const Page = () => {
  return (
    <>
      <Head>
        <title>周雨｜博客</title>
        <meta name="author" content="周雨" />
        <meta name="keywords" content="vue,react,angular,nodejs" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width,user-scalable=no"
        />
      </Head>
      <div className="indexHead">
        <Header></Header>
      </div>
      <PageList></PageList>
      <Footer></Footer>
      <Aside></Aside>
    </>
  );
};

export default Page;
