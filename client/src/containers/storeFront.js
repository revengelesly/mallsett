import React, { Component } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import TheMall from './TheMall/TheMall';
import TopbarUser from "./Topbar/topbarUser";
import TopbarAddBusiness from "./Topbar/topbarAddBusiness";
import MenuWrapper from "./storeFront.style";

const { Header, Footer } = Layout;

class StoreFront extends Component {
  render() {
    return (
      <Layout className="layout">
      <Header >
      <MenuWrapper>
        
        <Row gutter={24} >
        <Col className="" xs={24} sm={12} md={8} lg={6} xl={4}>
         <span className="logo"> MALLSETT </span>
        </Col>
            
           
           <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px', float: "right" }}
        defaultSelectedKeys={['2']}
      >
        
        <Menu.Item key="2"><TopbarAddBusiness /></Menu.Item>
        <Menu.Item key="1"><TopbarUser /></Menu.Item>
      </Menu>
 

            
          </Row>
        </MenuWrapper>
      </Header>
        <TheMall />
        <Footer style={{ textAlign: 'center' }}>
      MALLSETT ©2016 Created by Lesly Inc.
    </Footer>
      </Layout>
    );
  }
}

export default StoreFront;