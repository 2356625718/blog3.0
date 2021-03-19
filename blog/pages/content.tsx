import React, {useEffect, useState} from "react"
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Aside from "../components/Aside/Aside";
import ContentCenter from "../components/ContentCenter/ContentCenter"

const Content = () => {
  

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
      <ContentCenter></ContentCenter>
      <Footer></Footer>
      <Aside showLike={true}></Aside>
    </>
  )
}

export default Content;