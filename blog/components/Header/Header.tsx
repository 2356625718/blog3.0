import React, { useState } from "react";
import "./Header.less";
import { Row, Col, Popover, Affix, message, Input } from "antd";
import {
  SearchOutlined,
  FieldTimeOutlined,
  CoffeeOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import Router from "next/router";
import cfg from "../../utils/util_config";
import { get } from "../../utils/util_request";
import storage from "../../utils/util_history";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  //返回主页
  const toIndex = () => {
    message.loading("Back Index...", 0.5);
    Router.push("http://127.0.0.1:3000/");
  };

  //历史记录
  const toHistory = () => {
    message.loading("前往中...", 0.5);
    let page = storage.getPage();
    sessionStorage.setItem("tag", "历史记录(最近20个)");
    sessionStorage.setItem("pages", JSON.stringify(page));
    if (Router.pathname === "/page") {
      Router.reload();
    } else {
      Router.push({
        pathname: "/page",
      });
    }
  };

  //搜索内容
  const searchContent = async () => {
    message.loading("搜索中...", 0.5);
    let { msg } = await get(cfg.path + "searchContent?content=" + search);
    sessionStorage.setItem("tag", search);
    sessionStorage.setItem("pages", JSON.stringify(msg));
    setShowSearch(false);
    if (Router.pathname === "/page") {
      Router.reload();
    } else {
      Router.push({
        pathname: "/page",
      });
    }
  };

  return (
    <>
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
            <div className="logo" onPointerDown={() => toIndex()}>
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
                <span
                  className="search"
                  onPointerDown={() => setShowSearch(!showSearch)}
                >
                  <SearchOutlined />
                </span>
              </Popover>
              <Popover content={<span className="controlText">浏览记录</span>}>
                <span className="history" onPointerDown={() => toHistory()}>
                  <FieldTimeOutlined />
                </span>
              </Popover>
            </div>
          </Col>
        </Row>
      </Affix>
      <div className="searchBox" style={{ display: showSearch ? "" : "none" }}>
        <div className="shadow"></div>
        <Input
          type="search"
          className="search"
          placeholder="请输入搜索内容,按回车键搜索"
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={() => searchContent()}
        ></Input>
        <CloseCircleOutlined
          className="hidSearch"
          onPointerDown={() => setShowSearch(false)}
        />
      </div>
    </>
  );
};

export default Header;
