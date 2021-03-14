import "../styles/index.less";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import { Row, Col, Image } from "antd";
import { debounce } from "../utils/util_func";

export default function Home() {
  let [img, setImg] = useState("99.6vh");

  const adjust = () => {
    setImg(document.body.clientHeight + "px");
  };

  useEffect(() => {
    adjust();
    //背景图片自适应
    addEventListener("resize", debounce(adjust, 500), true);
  });
  return (
    <>
      <Head>
        <title>周雨｜博客</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div id="box">
        <Header></Header>
        <Row>
          <Col span="24">
            <div className="touxiangBox">
            <Image
              src="/index/touxiang.png"
              preview={false}
              alt="头像"
              id="touxiang"
            ></Image>
            </div>
            <div className="spanBox">
              <ul className="left">
                <li>C</li>
                <li>O</li>
                <li>D</li>
                <li>E</li>
              </ul>
              <ul className="right">
                <li>L</li>
                <li>I</li>
                <li>F</li>
                <li>E</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <Image
        src="/index/index1.png"
        alt="背景图片"
        preview={false}
        id="backImg"
        height={img}
      ></Image>
    </>
  );
}
