import { Card, Typography, Row, Col, Divider } from 'antd';
import { InfoCircleTwoTone, ThunderboltTwoTone } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const AboutPage = () => {
    return (
        <div style={{ padding: '24px', backgroundColor: '#f0f2f5' }}>
                        <Title level={2}> About Us
                        </Title>
                        <Paragraph>
                            This is a demo website showcasing a React application with Ant Design components, 
                            React Router for navigation, and React Hooks (useState, useEffect, useContext) 
                            for state management.
                        </Paragraph>
                    
                        <Divider />
                        <Title level={3}> The website demonstrates:
                        </Title>
                        <ul style={{ paddingLeft: 20, marginTop: 12, lineHeight: '1.8' }}>
                            <li>Global state management with Context API</li>
                            <li>Components local state with useState </li>
                            <li>Side effects with useEffect</li>
                            <li>Ant Design components and styling</li>
                            <li>Dark/Light mode toggle</li>
                            <li>Simple authentication</li>
                        </ul>
        </div>
    );
};

export default AboutPage;