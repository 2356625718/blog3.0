import React from "react";
import { Row, Col, Image } from "antd";
import "./General.less";

const General = () => {
  return (
    <>
    {/* 首部文章栏 */}
    <Row className="genRow">
      <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="genCol">
        <div className="jianjieBox">
          <Image
            src="/index/renwu.png"
            alt="图片"
            preview={false}
            className="jianjie"
            height="100%"
          ></Image>
          <div>
            <span className="jianjieText">博主｜个人简介｜博客简介</span>
          </div>
        </div>
      </Col>
      <Col xxl={12} xl={12} lg={0} md={0} sm={0} xs={0} className="genCol">
        <div className="right">
          <div className="rightBox">
            <div className="imageBox">
              <Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="rightImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span>
            </div>
            <div className="imageBox">
              <Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="rightImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span>
            </div>
          </div>
          <div className="rightBox">
            <div className="imageBox2">
              <Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="rightImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span>
            </div>
            <div className="imageBox2">
              <Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="rightImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Row className="fixRow">
      <Col xxl={0} xl={0} lg={24} md={24} sm={24} xs={24} className="fix">
          <ul className="fixBox">
            <li className="imgBox"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></li>
              <li className="imgBox"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></li>
              <li className="imgBox"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></li>
              <li className="imgBox"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></li>
          </ul>
      </Col>
    </Row>
    {/* 分类 */}
    <Row justify="center">
      <Col span={22} className="class">
        <div className="classItem"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></div>
              <div className="classItem"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></div>
              <div className="classItem"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></div>
              <div className="classItem"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></div>
              <div className="classItem"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></div>
              <div className="classItem"><Image
                src="/index/renwu.png"
                preview={false}
                alt="图片"
                className="fixImg"
                height="100%"
              />
              <span className="rightText">博主｜个人简介｜博客简介</span></div>
      </Col>
    </Row>
    </>
  );
};

export default General;
