import "./PageList.less";
import { Image, message } from "antd";
import React, { useState, useEffect } from "react";
import { EyeOutlined } from "@ant-design/icons";
import cfg from "../../utils/util_config";
import { get } from "../../utils/util_request";
import Router from "next/router";

const PageList = () => {
  const [page, setPage] = useState({
    arr: [],
    tag: "",
    type: false,
  });

  //路由跳转到文章
  const navigate = (info: any) => {
    message.loading("loading...", 0.5);
    window.sessionStorage.setItem("page", JSON.stringify(info));
    Router.push({
      pathname: "/content",
    });
  };
  //获取数据
  const getData = async () => {
    let tag: any = sessionStorage.getItem("tag");
    let msg = JSON.parse(sessionStorage.getItem("pages") as string);
    setPage({
      arr: msg,
      tag: tag,
      type: true,
    });
  };

  useEffect(() => {
    if (page.type === false) {
      getData();
    }
  });

  return (
    <>
      <div className="pageBox">{page.tag}</div>
      <div className="listBox">
        {page.arr.map((item: any, index: any) => {
          return (
            <div
              className="list"
              key={index}
              onClick={() => navigate(item)}
            >
              <div className="imgBox">
                <Image
                  src={cfg.imgPath + item.p_img2}
                  preview={false}
                  alt="图片"
                  className="fixImg"
                  height="100%"
                  width="100%"
                />
              </div>
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
            </div>
          );
        })}
      </div>
      <span
        className="noPage"
        style={{ display: page.arr.length > 0 ? "none" : "" }}
      >
        无相关文章
      </span>
    </>
  );
};

export default PageList;
