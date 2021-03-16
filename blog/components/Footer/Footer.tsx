import React from 'react'
import "./Footer.less"
import { Row, Col } from 'antd'
import { Content } from 'antd/lib/layout/layout'

const Footer = () => {
  return (
    <>
    <Row justify="center" className="footRow">
      <Col span={21} className="footCol">
        <Row>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
            <div className="title">关于</div>
            <p className="content">ZUOLUOTV™ 制作人，左左文化创始人。 家在深圳，广州暨南大学，在北京(猎豹移动)和上海(阅文集团)当过5年前端工程师，俗称程序员，2018年辞职创业。 科技 / 旅行 / 摄影 / 生活方式</p>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
            <div className="title">关于</div>
            <p className="content">ZUOLUOTV™ 制作人，左左文化创始人。 家在深圳，广州暨南大学，在北京(猎豹移动)和上海(阅文集团)当过5年前端工程师，俗称程序员，2018年辞职创业。 科技 / 旅行 / 摄影 / 生活方式</p>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
            <div className="title">关于</div>
            <p className="content">ZUOLUOTV™ 制作人，左左文化创始人。 家在深圳，广州暨南大学，在北京(猎豹移动)和上海(阅文集团)当过5年前端工程师，俗称程序员，2018年辞职创业。 科技 / 旅行 / 摄影 / 生活方式</p>
          </Col>
        </Row>
      </Col>
    </Row>
    </>
  )
}

export default Footer;