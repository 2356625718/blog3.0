import "./Aside.less"
import { CaretUpOutlined } from "@ant-design/icons";
import React, {useState, useEffect} from 'react'
import { debounce } from "../../utils/util_func"
import { BackTop } from "antd";
const Aside = (props: any) => {

  const [state, setState] = useState({
    top: false
  })
  //显示/消失回顶部按钮
  const showTop = () => {
    window.addEventListener('scroll', debounce(() => {
      if (document.documentElement.scrollTop >= document.documentElement.clientHeight / 2) {
        setState({
          ...state,
          top: true
        })
      } else {
        setState({
          ...state,
          top: false
        })
      }
    }, 500))
  }


  return (
    <>
    <BackTop visibilityHeight={400} duration={450}>
    <div className="top">
      <CaretUpOutlined className="icon"/>
      <span className="font">TOP</span>
    </div>
    </BackTop>
    </>
  )
}

export default Aside;