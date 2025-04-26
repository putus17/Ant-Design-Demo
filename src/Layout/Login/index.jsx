import { Input, Button, Card, Typography } from 'antd';
import { Component, useState } from 'react';
import { useAppContext } from '../../hook/AppProvider';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const Login = () => {
        const { darkMode  ,login, isLoading } = useAppContext()
      
        const [username, setUsername] = useState('')
        const navigate = useNavigate()
        const handleSubmit = (e) => {
          e.preventDefault()
          if (username.trim()) {
            login(username)
            navigate('/')
          } else {
            alert.error('Please enter a username')
          }
        }
      
        return (
          <Card
            style={{
              maxWidth: '400px',
              margin: '0 auto',
              background: darkMode ? '#1f1f1f' : '#fff',
              color: darkMode ? '#fff' : '#000',
            }}
          >
            <Typography.Title level={2} style={{ color: darkMode ? '#fff' : '#000' }}>
              Login
            </Typography.Title>
            <form onSubmit={handleSubmit}>
              <Input
                size='large'
                placeholder='Username'
                prefix={<UserOutlined />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: '16px' }}
              />
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
                style={{ width: '100%' }}
              >
                Log in
              </Button>
            </form>
          </Card>
)
}

export default Login