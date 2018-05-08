import React, { Component } from 'react';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

import CreateUser from './Forms/CreateUser';
import ItemUser from './Lists/ItemUser';



// const TabPane = Tabs.TabPane;


export default class UserPanelTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      userSettings: {
        header: <IntlMessages id="forms.UserPanel.ProfileSetting.Headefr" /> 
      }
    }
  }

  render() {
    const logoutBtn = <span  className="red pointer textAlignLeft"> <Icon type="logout" /> logout </span>;
    
    return (
      <LayoutWrapper>
        <Box >
          
          <div className="card-container">
            <Tabs
              defaultActiveKey="1"
              tabPosition="right"
              tabBarExtraContent={logoutBtn}
            >
               <TabPane className="margin-medium-bottom" tab={<span><Icon type="check-circle-o" />Dashboard</span>} key="1">
                <Row gutter={8}>
                  <Col span="14">
                    Dashboard Detail
                  </Col>
                  <Col span="10">
                    News 
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="environment-o" />Delivery Locations</span>} key="2">
                <Row gutter={8}>
                  <Col span="24" >
                    Add Delivery Address - make sure your orders are delivered to the right place! 
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span="12" >

                  </Col>
                  <Col span="12">
                  
                  </Col>
                </Row>
                
              </TabPane>
              <TabPane tab={<span><Icon type="user-add" />Include Dependents</span>} key="3">
                <Row>
                  <Col span="14">
                    Add Dependents
                  </Col>
                  <Col span="10">
                    Dependents List
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="upload" />Organize Files</span>} key="4">
                <Row>
                  <Col span="14">
                    Add Files
                  </Col>
                  <Col span="10">
                    Files List
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="car" />Track Orders</span>} key="5">
                <Row>
                  <Col span="14">
                    Order History
                  </Col>
                  <Col span="10">
                    Order List
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="safety" />{<IntlMessages id="forms.UserPanel.ProfileSetting.Header" />}</span>} key="6">
              <Row gutter={8}>
                   <PageHeader>
           {this.state.userSettings.header } 
        </PageHeader>
                </Row>
                <Row gutter={24}>
                  <Col span="12">
                    <CreateUser />
                  </Col>
                  <Col span="12">
                    <ItemUser />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="idcard" />Resume Portfolio</span>} key="7">
                <Row>
                  <Col span="10">
                    Add Items
                  </Col>
                  <Col span="14">
                    Portfolio View
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="coffee" />Local Jobs</span>} key="8">
                <Row>
                  <Col span="14">
                    Job Detail
                  </Col>
                  <Col span="10">
                    Search Job
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="calendar" />Schedule</span>} key="9">
                <Row>
                  <Col span="14">
                    Calendar
                  </Col>
                  <Col span="10">
                    Special Notes
                  </Col>
                </Row>
              </TabPane>
                            <TabPane tab={<span><Icon type="message" />My Messages</span>} key="10">
                <Row>
                  <Col span="24">
                    Message Here
                  </Col>
                  
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="trademark" />Terms and Conditions</span>} key="11">
                <Row>
                  <Col span="14">
                    Terms and Conditions 
                  </Col>
                  <Col span="10">
                    Term List
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="export" />Privacy Policies</span>} key="12">
                <Row>
                  <Col span="14">
                    Privacy Policy
                  </Col>
                  <Col span="10">
                    Privacy Policy List
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={<span><Icon type="customer-service" />FAQ</span>} key="13">
                <Row>
                  <Col span="14">
                    FAQ
                  </Col>
                  <Col span="10">
                    FAQ List
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </Box>
      </LayoutWrapper>
    );
  }
}
