import "./Aside.less";
import { CaretUpOutlined, HeartFilled } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { BackTop, Badge } from "antd";
import cfg from "../../utils/util_config";
import { get } from "../../utils/util_request";

const Aside = (props: any) => {
  const [page, setPage] = useState({
    p_id: -1,
    p_like: 0,
  });

  let flag = false;

  //喜欢+1
  const addLike = async () => {
    setPage((page) => {
      return {
        ...page,
        p_like: page.p_like + 1,
      };
    });
    await get(cfg.path + "addLike?id=" + page.p_id);
  };

  useEffect(() => {
    //获取数据
    if (
      page.p_id === -1 &&
      window !== undefined &&
      flag === false &&
      props.showLike === true
    ) {
      setPage(JSON.parse(window.sessionStorage.getItem("page") as string));
      flag = true;
    }
  });

  return (
    <>
      <BackTop visibilityHeight={400} duration={450}>
        <div className="top">
          <CaretUpOutlined className="icon" />
          <span className="font">TOP</span>
        </div>
      </BackTop>
      <div
        onClick={() => addLike()}
        style={{ display: props.showLike === true ? "" : "none" }}
      >
        <Badge
          count={page.p_like === undefined ? 0 : page.p_like}
          className="number"
        >
          <div
            className="like"
            style={{ display: props.showLike === true ? "" : "none" }}
          >
            <HeartFilled className="icon" />
          </div>
        </Badge>
      </div>
    </>
  );
};

export default Aside;
