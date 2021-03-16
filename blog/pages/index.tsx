import "../styles/index.less";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import General from '../components/General/General'

export default function Home() {

  return (
    <>
      <Head>
        <title>周雨｜博客</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <General></General>
    </>
  );
}
