import React from 'react';
import { Layout, Button, Avatar, Space, Typography } from 'antd';
import { BulbOutlined, UserOutlined } from '@ant-design/icons';
import { useAppContext } from '../../hook/AppProvider';

const Head = ( ) => {
  const { darkMoood, setDarkMood }= useAppContext()

    const { Header } = Layout
    const { Title } = Typography

    const toggleTheme = ()=>{
        setDarkMood(()=>(!darkMoood))
    }
  return (
    <Header style={{
      backgroundColor: '#001529',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px'
    }}>
      <div style={{ fontSize: '18px', color: '#fff' }}>Ant Design Demo</div>

      <Space>
        <Button
          icon={<BulbOutlined />}
          onClick={toggleTheme}
          type="primary"
          shape="round"
        >
          {darkMoood ? 'Dark Mode' : 'Light Mode'}
        </Button>
        <Avatar style={{ backgroundColor: '#87d068' }}>S</Avatar>
        {/* <Avatar icon={<UserOutlined />} />  */}
      </Space>
    </Header>
  )
}

export default Head