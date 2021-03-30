import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

const { Header } = Layout;

const HeaderPublic: React.FC = () => {
  const location = useLocation();

  return (
    <div className="layout-header">
      <Header className="wrap-header">
        <div className="logo" />
        <Menu className="main-menu" theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item className="menu-item" key="/">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item className="menu-item" key="/about">
            <Link to="/about">About</Link>
          </Menu.Item>

          <Menu.Item className="menu-item" key="/blogs">
            <Link to="/blogs">Blogs</Link>
          </Menu.Item>
          <Menu.Item className="menu-item" key="/login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default HeaderPublic;
