import React, { FC } from 'react';
import Link from 'next/link';
import MyLayout from '../../components/Layout';
import { IndexState } from '../../src/reducer';
import { IndexActions } from '../../src/container';
import { Button, Badge, Menu, Breadcrumb } from 'antd';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

type IndexPageProps = IndexState & IndexActions;

const IndexPage: FC<IndexPageProps> = (props: IndexPageProps) => (
  <React.Fragment>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ backgroundColor: 'white', padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <MyLayout title="Home | Next.js + TypeScript Example">
          <h1>Hello Next.js 👋</h1>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Button type="primary" onClick={props.pushButton}>
              increment
            </Button>
            <Button type="primary" onClick={() => props.pushButtonDelay(3)}>
              five plus delayed
            </Button>
            <Badge count={props.count} />
          </p>
        </MyLayout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2020 Created by Ryuhei Kaminishi</Footer>
    </Layout>
  </React.Fragment>
);

export default IndexPage;
