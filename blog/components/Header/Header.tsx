import React from 'react'
import "./Header.less"
import { Button } from 'antd'

const Header = () => {
  return (
    <div id="headRow">
      <div className="headCol">
        <span>周雨的博客</span>
      </div>
      <div className="headCol">
        <Button type="primary">注册/登录</Button>
      </div>
    </div>
  )
}

export default Header;