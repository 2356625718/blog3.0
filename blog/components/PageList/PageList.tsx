import "./PageList.less";
import { Image, Skeleton } from "antd";
import React, { useState, useEffect } from "react";
import { EyeOutlined } from "@ant-design/icons";
import cfg from "../../utils/util_config";


const PageList = () => {
  return (
    <>
      {/* <div className="pageBox">
        {tag}
      </div>
      <div className="listBox">
        {page.map((item: any, index: any) => {
          <div className="list" key={index}>
            <div className="imgBox">
              <Image
                src={cfg.imgPath + item.p_img}
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
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
          </div>;
        })}
      </div> */}
    </>
  );
};

export default PageList;
