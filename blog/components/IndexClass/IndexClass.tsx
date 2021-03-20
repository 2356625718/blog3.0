import "./IndexClass.less";
import React, { useState, useEffect } from "react";
import { Row, Col, Image, Skeleton, Spin, message } from "antd";
import { EyeOutlined, SmileOutlined, LoadingOutlined } from "@ant-design/icons";
import cfg from "../../utils/util_config";
import { get } from "../../utils/util_request";
import { debounce } from "../../utils/util_func";
import { useRouter } from "next/router";

const Class = ({ news }: any) => {
  const [cs, setCs] = useState(0);
  const [list, setList] = useState(news.msg);
  const [load, setLoad] = useState(false);

  //获取所有文章开始序号
  let start = 1;
  let [end, setEnd] = useState(false);

  //路由跳转到文章
  const router = useRouter();

  //路由跳转到文章
  const navigate = (info: any) => {
    message.loading("loading...", 0.5);
    window.sessionStorage.setItem("page", JSON.stringify(info));
    router.push({
      pathname: "/content",
    });
  };

  //获取数据
  const setData = async (id: number) => {
    setLoad(true);
    if (id === 0) {
      setCs(id);
      setList(news.msg);
    } else if (id === 1) {
      let { msg } = await get(cfg.path + "indexHot");
      setList(msg);
      setCs(id);
    } else {
      let { msg } = await get(cfg.path + "indexAll" + "?start=" + start);
      start += 8;
      setEnd(false);
      setList(msg);
      setCs(id);
      loadMore();
    }
    setTimeout(() => setLoad(false), 400);
  };

  //加载更多
  const loadMore = () => {
    window.addEventListener(
      "scroll",
      debounce(async () => {
        let rect = document
          .getElementsByClassName("content")[0]
          .getBoundingClientRect();
        let winH =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        if (rect.bottom + 20 <= winH) {
          let { msg } = await get(cfg.path + "indexAll" + "?start=" + start);
          start += 8;
          setList((list: any) => list.concat(msg));
          if (msg.length < 8 && msg.length !== 0) {
            setEnd(true);
            window.removeEventListener("scroll", () => {});
          }
        }
      }, 1000)
    );
  };

  return (
    <>
      <Row justify="center" className="breadRow">
        <Col span="24" className="breadCol">
          <span
            className={cs === 0 ? "classify" : ""}
            onPointerDown={() => setData(0)}
          >
            最新
          </span>
          <span className="divider">/</span>
          <span
            className={cs === 1 ? "classify" : ""}
            onPointerDown={() => setData(1)}
          >
            最热
          </span>
          <span className="divider">/</span>
          <span
            className={cs === 2 ? "classify" : ""}
            onPointerDown={() => setData(2)}
          >
            所有
          </span>
        </Col>
      </Row>
      <div className="content">
        {list.map((item: any, index: any) => {
          return (
            <div
              className="page"
              key={index}
              onPointerDown={() => navigate(item)}
            >
              <div className="imgBox" style={{ display: load ? "none" : "" }}>
                <Image
                  src={cfg.imgPath + item.p_img2}
                  preview={false}
                  alt="图片"
                  className="fixImg"
                  height="100%"
                />
              </div>
              <div
                className="imgLoad"
                style={{ display: load ? "" : "none" }}
              ></div>
              <Skeleton loading={load} active round paragraph={{ rows: 2 }}>
                <div className="tag">
                  <span>{item.p_tag}</span>
                </div>
                <div className="intro">{item.p_title}</div>
                <div className="info">
                  <span className="left">{item.p_time}</span>
                  <span className="right">
                    <EyeOutlined className="rightIcon" />
                    {item.p_view}
                  </span>
                </div>
              </Skeleton>
            </div>
          );
        })}
      </div>
      <Spin
        className="spin"
        indicator={end === true ? <SmileOutlined /> : <LoadingOutlined />}
        tip={end === true ? "所有文章都已加载完毕" : "文章加载中..."}
        style={{ display: cs === 2 ? "" : "none" }}
        delay={5}
      ></Spin>
    </>
  );
};

export default Class;
