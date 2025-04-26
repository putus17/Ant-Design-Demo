import { Layout } from 'antd'
import React from 'react'
import { useAppContext } from '../../hook/AppProvider'

const { Footer } = Layout

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: 'black',
  marginTop: 'auto',
}

const Foot = () => {
    const {darkMode}= useAppContext()
    return(
<Footer
          style={{
            textAlign: 'center',
            background: darkMode ? '#141414' : '#fff',
            color: darkMode ? '#fff' : '#000',
          }}
        >
          Ant Design Demo ©2025 Created with React
        </Footer>
)
}

export default Foot