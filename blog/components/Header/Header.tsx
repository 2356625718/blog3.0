import React, {useState} from "react";
import "./Header.less";
import { Row, Col, Popover, Affix } from "antd";
import {
  SearchOutlined,
  FieldTimeOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

const Header = () => {

  return (
      <Affix offsetTop={0}>
      <Row className="headRow" align="middle" justify="space-around">
      <Col
        className="logoBox"
        xxl={3}
        xl={3}
        lg={3}
        md={5}
        sm={5}
        xs={9}
        pull={1}
      >
        <div className="logo">
          <span>Z</span>
          <span>Y</span>
          <span>'</span>
          <span className="coffice">
            <CoffeeOutlined />
          </span>
          <span>.</span>
        </div>
      </Col>
      <Col className="controlBox" span="3" offset={8}>
        <div className="control">
          <Popover content={<span className="controlText">搜索</span>}>
            <span className="search">
              <SearchOutlined />
            </span>
          </Popover>
          <Popover content={<span className="controlText">浏览记录</span>}>
            <span className="history">
              <FieldTimeOutlined />
            </span>
          </Popover>
        </div>
      </Col>
    </Row>
    </Affix>   
  );
};

export default Header;
