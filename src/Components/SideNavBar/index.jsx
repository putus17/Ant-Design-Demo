import React, { useState } from 'react'
import {
  HomeOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  AppstoreOutlined,
  LogoutOutlined,

} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../hook/AppProvider';


const { Sider } = Layout

const iconStyle = {
  fontSize: '20px',
}

const SideNavBar = () => {

  const { collapsed, setCollapsed,user,logout} = useAppContext()
  const items = [
    {
      key: 'home',
      icon: <HomeOutlined style={iconStyle} />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'products',
      icon: <AppstoreOutlined style={iconStyle} />,
      label: <Link to="/products">Products</Link>,
    },
    {
      key: 'about',
      icon: <InfoCircleOutlined style={iconStyle} />,
      label: <Link to="/about">About</Link>,
    },
   !user? {
      key: 'login',
      icon: <LoginOutlined style={iconStyle} />,
      label: <Link to="/login">Login</Link>,
    }:
    { 
      key: 'logout',
      icon: <LogoutOutlined style={iconStyle} />,
      label: <Link onClick={logout}>Log Out</Link>,
    },

  ]

  return (
    <Sider
      width={200}
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      style={{
        backgroundColor: 'black',
        height: '100vh',
        transition: 'all 0.3s ease',
      }}
    >
      
      <Menu
        mode="vertical"
        theme="dark"
        style={{ backgroundColor: 'black', height: '100%' }}
        defaultSelectedKeys={['home']}
        items={items}
      />

     
    
    </Sider>
  )
}

export default SideNavBar