import { Card, Flex, Layout, ConfigProvider } from 'antd';
import Head from './Components/Head';
import Foot from './Components/Foot';
import SideNavbar from './Components/SideNavBar';
import AppRoutes from './Components/AppRoutes';
import { theme as antdTheme } from 'antd';
import { useAppContext } from './hook/AppProvider';

const { Content } = Layout;

const App = () => {
 
   const { darkMoood }= useAppContext()


  return (
    <ConfigProvider
      theme={{
        algorithm: darkMoood
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <SideNavbar />
        <Layout>
          <Head />
          <Content style={{ margin: '16px', flex: 1 }}>
            <Card style={{ minHeight: '70vh' }}>
              <AppRoutes />
            </Card>
          </Content>
          <Foot />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
