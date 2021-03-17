import "../styles/index.less";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import General from '../components/General/General'
import Class from '../components/Class/Class'
import Footer from '../components/Footer/Footer'
import { GetServerSideProps } from "next"
import { get } from "../utils/util_request"
import cfg from "../utils/util_config"

export default function Home({ page }: any) {
  return (
    <>
      <Head>
        <title>周雨｜博客</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <General data={page}></General>
      <Class></Class>
      <Footer></Footer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = cfg.path + 'indexHead'
  console.log("a", url)
  let page: any = await get(url)
  return {
    props: {
      page: page
    }
  }
}


