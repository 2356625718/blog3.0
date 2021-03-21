import "./Footer.less";
import { Row, Col, message } from "antd";
import { QqOutlined, WechatOutlined, GithubOutlined } from "@ant-design/icons";

const Footer = () => {
  //复制及跳转
  const copy = async (str: string, url?: string) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(str);
      if (url !== undefined) {
        message.success("平台名称复制成功,页面跳转中");
        setTimeout(() => {
          location.href = url;
        }, 500);
      } else {
        message.success("账号复制成功,请手动添加");
      }
    } else {
      message.error("您的浏览器暂不支持,请手动添加该账号:" + str);
      if (url !== undefined) {
        setTimeout(() => {
          location.href = url as any;
        }, 1000);
      }
    }
  };

  return (
    <>
      <Row justify="center" className="footRow">
        <Col span={21} className="footCol">
          <Row>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
              <div className="title">关于</div>
              <p className="content">
                博主就读于四川农业大学计算机科学与技术专业，目前大三，主要学习方向为前端。
                本博客使用nextjs+eggjs开发，如有建议，欢迎提出。
              </p>
              <div className="chat">
                <div className="box" onClick={() => copy("2356625718")}>
                  <QqOutlined />
                </div>
                <div className="box" onClick={() => copy("zhouyuaiqing")}>
                  <WechatOutlined />
                </div>
                <div
                  className="box"
                  onClick={() =>
                    copy("2356625718", "https://github.com/2356625718")
                  }
                >
                  <GithubOutlined />
                </div>
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
              <div className="title">社交媒体</div>
              <div className="content2">
                <a
                  className="link"
                  onClick={() =>
                    copy("蕾姆是我的吖", "https://www.bilibili.com")
                  }
                >
                  哔哩哔哩
                </a>
                <a
                  className="link"
                  onClick={() => copy("有点点文艺", "https://weibo.com")}
                >
                  新浪微博
                </a>
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} className="info">
              <div className="title">导航</div>
              <div className="content">
                <a className="link2" href="http://www.zhouyu.我爱你/">
                  ZHOUYU'BlOG
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="last">
        <Col
          xxl={10}
          xl={10}
          lg={10}
          md={21}
          sm={21}
          xs={21}
          push="2"
          className="lastCol"
        >
          <p>Copyright © 2020-2021 周雨的独立博客. 蜀ICP备20016557号</p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
