import "./Class.less"
import React from "react"
import { Row, Col, Image } from "antd"
import { EyeOutlined } from "@ant-design/icons"
import cfg from "../../utils/util_config";

const Class = ({ news }: any) => {

  return (
    <>
    <Row justify="center" className="breadRow">
      <Col span="24" className="breadCol">
        <span>最新</span>
        <span className="divider">/</span>
        <span>最热</span>
        <span className="divider">/</span>
        <span>所有</span>
      </Col>
    </Row>
    <div className="content">
      {news.msg.map((item: any, index: any) => {
        return (
          <div className="page" key={index}>
        <div className="imgBox"><Image
                src={cfg.imgPath + item.p_img}
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              /></div>
        <div className="tag">
          <span>{item.p_tag}</span>
        </div>
        <div className="intro">
          {item.p_title}
        </div>
        <div className="info">
          <span className="left">{item.p_time}</span>
          <span className="right"><EyeOutlined className="rightIcon"/>{item.p_view}</span>
        </div>
      </div>
        )
      })}
      
    </div>
    </>
  )
}

export default Class;