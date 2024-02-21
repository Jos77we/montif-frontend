import React, { useState } from "react";
import { Layout, Menu} from "antd";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import logo from '../images/Logo 500x500 px 1.png'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import { LuLayoutDashboard, LuWallet } from "react-icons/lu";
import { FaRegCreditCard } from "react-icons/fa";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
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
        backgroundColor: '#132D45',
       }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          backgroundColor: '#132D45',
         }}
      >
        <ApiRender/>
        <Menu theme="dark" mode="inline" style={{
        backgroundColor: '#132D45', color:'white'
       }}>
          <Menu.Item key="1">
            <Link to="/dashboard">
              <span>
                <LuLayoutDashboard style={{fontSize:"18px"}}/>
                <span style={{marginLeft:'8px'}}>Dashboard</span>
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/card">
              <span>
                <FaRegCreditCard style={{fontSize:"18px"}}/>
                <span style={{marginLeft:'8px'}}>Card</span>
              </span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={
              <span>
                <RiAccountPinCircleLine style={{fontSize:"18px"}}/>
                <span style={{marginLeft:'8px'}}>Accounts</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/savings">
                <span>
                  <LuWallet style={{fontSize:"18px"}}/>
                  <span style={{marginLeft:'8px'}}>Savings</span>
                </span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <Link to="/cryptocurrency">
              <span>
                <VscGraph style={{fontSize:"18px"}}/>
                <span style={{marginLeft:'8px'}}>Invest</span>
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/insurance">
              <span>
                <AiTwotoneSafetyCertificate style={{fontSize:"18px"}}/>
                <span style={{marginLeft:'8px'}}>Insurance</span>
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
              // background: 'linear-gradient(-90deg, rgba(10, 218, 20, 0.705) , rgba(10, 241, 33, 0.219) 100% )',
              background: '#00C04b'
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
