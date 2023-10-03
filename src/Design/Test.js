import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { UserOutlined } from "@ant-design/icons";

const { Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
// Define your routes here

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/dashboard">
              <span>
                <UserOutlined />
                <span>Home </span>
              </span>{" "}
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>Profile</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to="/withdrawal">
                <span>
                  <UserOutlined />
                  <span>Account Settings </span>
                </span>{" "}
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/withdrawal">
                <span>
                  <UserOutlined />
                  <span>Deposit</span>
                </span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4">
            <Link to="/withdrawal">
              <span>
                <UserOutlined />
                <span>Card</span>
              </span>{" "}
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <UserOutlined />
                <span>Accounts</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/withdrawal">
                <span>
                  <UserOutlined />
                  <span>Credit</span>
                </span>{" "}
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/withdrawal">
                <span>
                  <UserOutlined />
                  <span>Debit</span>
                </span>{" "}
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <UserOutlined />
                <span>Invest</span>
              </span>
            }
          >
            <Menu.Item key="7">
              <Link to="/withdrawal">
                <span>
                  <UserOutlined />
                  <span>Stock</span>
                </span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="8">
            <Link to="/withdrawal">
              <span>
                <UserOutlined />
                <span>Insurance</span>{" "}
              </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
