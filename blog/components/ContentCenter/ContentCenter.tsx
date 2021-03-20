import "./ContentCenter.less";
import "github-markdown-css";
import { Row, Col, Image } from "antd";
import { EyeOutlined, FireOutlined } from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import cfg from "../../utils/util_config";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import React, { useEffect, useState } from "react";
import { get } from "../../utils/util_request";
import storage from "../../utils/util_history";

const ContentCenter = () => {
  const [page, setPage] = useState({
    p_id: -1,
    p_title: "",
    p_img: "/index/1.png",
    p_like: 0,
    p_view: 0,
    p_time: "今天",
    p_content: "",
  });

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    //代码高亮
    document.querySelectorAll("pre code").forEach((block: any) => {
      try {
        hljs.highlightBlock(block);
      } catch (e) {
        console.log(e);
      }
    });
    //获取文章
    if (page.p_img === "/index/1.png" && window !== undefined) {
      setPage(JSON.parse(window.sessionStorage.getItem("page") as string));
    }
    //增加浏览量及缓存历史文章
    if (page.p_id !== -1 && flag) {
      setTimeout(() => {
        get(cfg.path + "addView?id=" + page.p_id);
        storage.store(page);
      }, 1000);
      setFlag(false);
    }
  });

  return (
    <div className="contentBox">
      <Row className="headRow" justify="center" align="middle">
        <Col span={21} className="headCol">
          <div className="headBox">
            <span className="title">{page.p_title}</span>
            <div className="status">
              <Row className="statusRow" justify="space-around">
                <Col
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  className="statusCol"
                >
                  周雨
                </Col>
                <Col
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  xs={12}
                  className="statusCol"
                >
                  {page.p_time}
                </Col>
                <Col
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={0}
                  sm={0}
                  xs={0}
                  className="statusCol"
                >
                  <EyeOutlined className="icon" /> {page.p_view}
                </Col>
                <Col
                  xxl={6}
                  xl={6}
                  lg={6}
                  md={0}
                  sm={0}
                  xs={0}
                  className="statusCol"
                >
                  <FireOutlined className="icon" /> {page.p_like}
                </Col>
              </Row>
            </div>
          </div>
          <div className="imgBox">
            <Image
              src={
                page.p_img === "/index/1.png"
                  ? page.p_img
                  : cfg.imgPath + page.p_img
              }
              alt="图片"
              preview={false}
              className="img"
              height="100%"
              width="100%"
            />
          </div>
        </Col>
      </Row>
      <div className="contentBox markdown-body">
        <ReactMarkdown>{page.p_content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ContentCenter;
