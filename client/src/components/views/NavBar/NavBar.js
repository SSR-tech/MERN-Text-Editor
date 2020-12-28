import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import { MdMenu } from "react-icons/md";
import "./Sections/Navbar.css";
import { FiPaperclip } from "react-icons/fi";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="menu" style={{ zIndex: 1, width: "100%" }}>
      <div className="menu__logo">
        <FiPaperclip
          style={{
            fontSize: "3rem",
            color: "#fff",
            marginTop: "5px",
          }}
          to="/"
        />
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>

        <MdMenu
          style={{ height: 30, width: 30, marginTop: 5 }}
          color="white"
          onClick={showDrawer}
          type="primary"
          className="burger-button"
        />
        <Drawer
          title="Holla 📝"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
