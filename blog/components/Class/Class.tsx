import "./Class.less";
import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import cfg from "../../utils/util_config";
import { get } from "../../utils/util_request";

const Class = ({ news }: any) => {
  const [cs, setCs] = useState(0)
  const [list, setList] = useState(news.msg)
  //获取数据：缓存或服务器
  const getData = async (id: number) => {
    if (id === 0) {
      setCs(id)
      setList(news.msg)
    } else if (id === 1) {
        let {msg} = await get(cfg.path + 'indexHot')
        setList(msg)
        setCs(id)
      }
    }

  return (
    <>
      <Row justify="center" className="breadRow">
        <Col span="24" className="breadCol">
          <span
            className={cs === 0 ? "class" : ""}
            onPointerDown={() => getData(0)}
          >
            最新
          </span>
          <span className="divider">/</span>
          <span
            className={cs === 1 ? "class" : ""}
            onPointerDown={() => getData(1)}
          >
            最热
          </span>
          <span className="divider">/</span>
          <span
            className={cs === 2 ? "class" : ""}
            onPointerDown={() => getData(2)}
          >
            所有
          </span>
        </Col>
      </Row>
      <div className="content">
        {list.map((item: any, index: any) => {
          return (
            <div className="page" key={index}>
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Class;
