import React, { useState } from "react";
import { Layout, Menu} from "antd";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { UserOutlined } from "@ant-design/icons";
import logo from '../images/Logo 500x500 px 1.png'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import './IntroCard.css'
import ApiRender from "../apiFetch/ApiRender";

const { Sider, Content} = Layout;
const { SubMenu } = Menu;
// Define your routes here

const TabsLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  
   const content = props.content

  return (
    <Layout
      style={{
        minHeight: "100vh",
        
      }}
    
    >
      <div style={{
        backgroundColor: 'green',
       }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          backgroundColor: 'green',
         }}
      >
        <ApiRender/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}  style={{
        backgroundColor: 'green', color:'white'
       }}>
          <Menu.Item key="1">
            <Link to="/dashboard">
              <span>
                <UserOutlined />
                <span>Home </span>
              </span>{" "}
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/card">
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
              <Link to="/savings">
                <span>
                  <UserOutlined />
                  <span>Savings</span>
                </span>{" "}
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/cryptocurrency">
                <span>
                  <UserOutlined />
                  <span>Investment</span>
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
              <Link to="/stock">
                <span>
                  <UserOutlined />
                  <span>Stock</span>
                </span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="8">
            <Link to="/insurance">
              <span>
                <UserOutlined />
                <span>Insurance</span>{" "}
              </span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      </div>
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
              padding: '0px 24px',
              minHeight: 600,
              background: 'linear-gradient(-90deg, rgba(10, 218, 20, 0.705) , rgba(10, 241, 33, 0.219) 100% )',
            }}
          >
            <div>
              <div style={{height:'50px', top:'0px', display:'flex', gridTemplateColumns:'auto', columnGap:'80%'}}>
                <img src={logo} alt='logo' height='40px' width='80px'/>
                <div style={{height:'30px', width:'100px', display:'flex', justifyContent:'center', alignItems:'center', gridTemplateColumns:'auto', columnGap:'20px', marginTop:'10px'}}>
                  <div><HiOutlineMail style={{fontSize:'18px'}}/></div>
                  <div><MdOutlineNotificationsActive style={{fontSize:'18px'}}/></div>
                  
                  <div>
                  <a href="/" style={{color:'black'}}>
                    <FiLogOut style={{fontSize:'18px'}}/>
                    </a>
                    </div>
                  
                </div>
              </div>
            {content}
            </div>
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}

export default TabsLayout;
