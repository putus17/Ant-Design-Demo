import React, { useState } from 'react';
import { Typography, Button, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <Title level={2}>Welcome to our Website</Title>
      <Paragraph>
        This is a clean, modern React + Ant Design demo with theme support and routing.
      </Paragraph>
      <Card style={{ width: 300, margin: 'auto', marginTop: 30 }}>
        <Paragraph>You clicked {count} times</Paragraph>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </Card>
    </div>
  );
};

export default Home;