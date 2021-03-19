import { Row, Col, Image,} from "antd";
import "./IndexGeneral.less";
import cfg from "../../utils/util_config";
import { useRouter } from 'next/router'


const General = ({ data }: any) => {
  //路由
  const router = useRouter()
  //路由跳转到文章
  const navigate = (info: any) => {
    window.sessionStorage.setItem("page", JSON.stringify(info))
    router.push({
      pathname: "/content",
    })
  }
  //路由跳转到分类列表
  const toClass = (tag: string) => {
    router.push({
      pathname: "/page",
      query: {
        tag: tag
      }
    })
  }
  //首部文章信息
  const page = data.msg;
  return (
    <>
      {/* 首部文章栏 */}
      <Row className="genRow">
        <Col
          xxl={12}
          xl={12}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="genCol"
        >
          <div className="jianjieBox" onPointerDown={() => navigate(page[0])}>
            <Image
              src={cfg.imgPath + page[0].p_img}
              alt="图片"
              preview={false}
              className="jianjie"
              height="100%"
            ></Image>
            <div>
              <span className="jianjieText">{page[0].p_title}</span>
            </div>
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={0} md={0} sm={0} xs={0} className="genCol">
          <div className="right">
            <div className="rightBox">
              <div className="imageBox" onPointerDown={() => navigate(page[1])}>
                <Image
                  src={cfg.imgPath + page[1].p_img}
                  preview={false}
                  alt="图片"
                  className="rightImg"
                  height="100%"
                />
                <span className="rightText">{page[1].p_title}</span>
              </div>
              <div className="imageBox" onPointerDown={() => navigate(page[2])}>
                <Image
                  src={cfg.imgPath + page[2].p_img}
                  preview={false}
                  alt="图片"
                  className="rightImg"
                  height="100%"
                />
                <span className="rightText">{page[2].p_title}</span>
              </div>
            </div>
            <div className="rightBox">
              <div className="imageBox2" onPointerDown={() => navigate(page[3])}>
                <Image
                  src={cfg.imgPath + page[3].p_img}
                  preview={false}
                  alt="图片"
                  className="rightImg"
                  height="100%"
                />
                <span className="rightText">{page[3].p_title}</span>
              </div>
              <div className="imageBox2" onPointerDown={() => navigate(page[4])}>
                <Image
                  src={cfg.imgPath + page[4].p_img}
                  preview={false}
                  alt="图片"
                  className="rightImg"
                  height="100%"
                />
                <span className="rightText">{page[4].p_title}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="fixRow">
        <Col xxl={0} xl={0} lg={24} md={24} sm={24} xs={24} className="fix">
          <ul className="fixBox">
            {page.map((item: any, index: any) => {
              if (index === 0) return;
              else {
                return (
                  <li className="imgBox" key={index} onPointerDown={() => navigate(item)}>
                    <Image
                      src={cfg.imgPath + item.p_img}
                      preview={false}
                      alt="图片"
                      className="fixImg"
                      height="100%"
                    />
                    <span className="rightText">{item.p_title}</span>
                  </li>
                );
              }
            })}
          </ul>
        </Col>
      </Row>
      {/* 分类 */}
      <Row justify="center">
        <Col span={22} className="class">
          <div className="classItem" onPointerDown={() => toClass('基础')}>
            <Image
              src="/index/1.png"
              preview={false}
              alt="图片"
              className="fixImg"
              height="100%"
            />
            <span className="rightText">基础</span>
          </div>
          <div className="classItem" onPointerDown={() => toClass('Vue')}>
            <Image
              src="/index/2.png"
              preview={false}
              alt="图片"
              className="fixImg"
              height="100%"
            />
            <span className="rightText">Vue</span>
          </div>
          <div className="classItem" onPointerDown={() => toClass('React')}>
            <Image
              src="/index/3.png"
              preview={false}
              alt="图片"
              className="fixImg"
              height="100%"
            />
            <span className="rightText">React</span>
          </div>
          <div className="classItem" onPointerDown={() => toClass('Angular')}>
            <Image
              src="/index/4.png"
              preview={false}
              alt="图片"
              className="fixImg"
              height="100%"
            />
            <span className="rightText">Angular</span>
          </div>
          <div className="classItem" onPointerDown={() => toClass('其它')}>
            <Image
              src="/index/5.png"
              preview={false}
              alt="图片"
              className="fixImg"
              height="100%"
            />
            <span className="rightText">其它</span>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default General;
