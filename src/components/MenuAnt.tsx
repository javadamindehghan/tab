import React from "react";
import { Menu } from "antd";
import {
  AppstoreAddOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const MenuAnt = () => {




    
  return (
    <Menu  mode="horizontal" triggerSubMenuAction='click' >
       
      <Menu.Item   key="1" icon={<AppstoreAddOutlined />}>
        خانه
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        پروفایل
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingOutlined />}>
        تنظیمات
      </Menu.Item>
      <Menu.Item key="4">خروج</Menu.Item>

    </Menu>
  );
};

export default MenuAnt;
