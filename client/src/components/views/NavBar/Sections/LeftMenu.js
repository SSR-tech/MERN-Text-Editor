import React from "react";
import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="blog">
        <a href="/blog">Papers</a>
      </Menu.Item>
      <Menu.Item key="create">
        <a href="/blog/create">Create New</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
