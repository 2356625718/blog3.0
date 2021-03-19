import "./Footer.less"
import { Row, Col } from 'antd'
import {
  QqOutlined,
  WechatOutlined,
  GithubOutlined
} from "@ant-design/icons";

const Footer = () => {

  return (
    <>
    <Row justify="center" className="footRow">
      <Col span={21} className="footCol">
        <Row>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
            <div className="title">关于</div>
            <p className="content">博主就读于四川农业大学计算机科学与技术专业，目前大三，主要学习方向为前端。
            本博客使用nextjs+eggjs开发，如有建议，欢迎提出。</p>
            <div className="chat">
              <div className="box"><QqOutlined /></div>
              <div className="box"><WechatOutlined /></div>
              <div className="box"><GithubOutlined /></div>
            </div>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
            <div className="title">社交媒体</div>
            <div className="content2">
              <a className="link">哔哩哔哩</a>
              <a className="link">新浪微博</a>
            </div>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
            <div className="title">导航</div>
            <div className="content">
              <a className="link2" href="http://127.0.0.1:3000/">ZHOUYU'BlOG</a>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="last">
      <Col xxl={10} xl={10} lg={10} md={21} sm={21} xs={21} push="2" className="lastCol">
        <p>Copyright © 2011-2021 周雨的独立博客. 粤ICP备14004235号</p>
      </Col>
    </Row>
    </>
  )
}

export default Footer;