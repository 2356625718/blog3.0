import "./Class.less"
import React from "react"
import { Row, Col, Image } from "antd"
import { EyeOutlined } from "@ant-design/icons"

const Class = () => {
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
      <div className="page">
        <div className="imgBox"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              /></div>
        <div className="tag">
          <span>Vue</span>
        </div>
        <div className="intro">
          这是我写的一篇博客，希望大家喜欢这是我写的一篇博客，希望大家喜欢这是我写的一篇博客，希望大家喜欢这是我写的一篇博客，希望大家喜欢这是我写的一篇博客，希望大家喜欢
        </div>
        <div className="info">
          <span className="left">2月前</span>
          <span className="right"><EyeOutlined className="rightIcon"/>1190</span>
        </div>
      </div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
      <div className="page"></div>
    </div>
    </>
  )
}

export default Class;