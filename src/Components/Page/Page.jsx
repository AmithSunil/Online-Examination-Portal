import React, { useState } from 'react';
import Cards from './Cards';
import Activities from './Activities';
import {
  HomeFilled,
  CalendarFilled,
  CopyFilled,
  MailFilled,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem('Home', '1', <HomeFilled />),
  getItem('Assessment', '2', <CopyFilled />),
  getItem('Calender', '3', <CalendarFilled />),
  getItem('Request Retest', '4', <MailFilled />),
];

const Page = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
            <Breadcrumb.Item><h1>Hello User!</h1></Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* HomePage */}
            {/* <Cards card1Title="Upcoming Tests" card1Content="2" card2Title="Requests Pending" card2Content="1" />
            <br /><br /><br />
            <h2>Activities:</h2>
            <Activities activities={[
              { description: 'Retest Approved for Chem' },
              { description: 'Result Published for Biology Test' },
              { description: 'Feedback Form is Live' },
            ]} /> */}

            {/* RetestPage */}
            <h2>Available Retests</h2>
            <Cards card1Title="Biology 1rst Series" card2Title="Chemistry Lab" />
            <h2>Approved Requests</h2>
            <Cards card1Title="Biology Lab" card2Title="Chemistry Assignment Test"/>

          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Page;