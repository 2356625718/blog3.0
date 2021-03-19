import "../styles/index.less";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import IndexGeneral from '../components/IndexGeneral/IndexGeneral'
import IndexClass from '../components/IndexClass/IndexClass'
import Footer from '../components/Footer/Footer'
import { GetServerSideProps } from "next"
import { get } from "../utils/util_request"
import cfg from "../utils/util_config"
import Aside from "../components/Aside/Aside"


export default function Home({ page, news }: any) {
  return (
    <>
      <Head>
        <title>周雨｜博客</title>
        <meta name="author" content="周雨" />
        <meta name="keywords" content="vue,react,angular,nodejs" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width,user-scalable=no" />
      </Head>
      <div className="indexHead"><Header></Header>
      </div>
      <IndexGeneral data={page}></IndexGeneral>
      <IndexClass news={news}></IndexClass>
      <Footer></Footer>
      <Aside></Aside>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageUrl = cfg.path + 'indexHead'
  const newsUrl = cfg.path + 'indexNew'
  let page: any = await get(pageUrl)
  let news: any = await get(newsUrl)
  return {
    props: {
      page: page,
      news: news
    }
  }
}


