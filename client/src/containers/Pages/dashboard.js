import React, { Component } from 'react';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import { Row, Col, Tabs,  Timeline, Pagination} from 'antd';
import ItemMerchant from '../Products/items/ItemMerchant';
import ServiceCard from '../MerchantPanel/Forms/ServiceCard';


const TabPane = Tabs.TabPane;

function showTotal(total) {
  return `Total ${total} items`;
}

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        
        <LayoutContent>
        <h3><i class="fas fa-plug"></i> Connect </h3>
        
          <Row gutter={6} style={{ marginBottom: 15, marginTop: 10}}>
          <Col className="" xs={24} sm={12} md={12} lg={6} xl={6}>
          <h4> Recent Activity </h4>
            <Timeline>
              <Timeline.Item color="green">Accepted by Walmart 2018-06-01</Timeline.Item>
              <Timeline.Item color="green">Accepted Target 2018-05-01</Timeline.Item>
              <Timeline.Item color="red">Rejected by Home Depot 2018-04-01</Timeline.Item>
              <Timeline.Item color="red">Rejected by Asheleys 2018-04-01</Timeline.Item>
              <Timeline.Item color="orange">Pending from Big Lot 2018-04-01</Timeline.Item>
            </Timeline>

          </Col>
          <Col className="" xs={24} sm={12} md={12} lg={18} xl={18}>
          <Row gutter={6} style={{ marginBottom: 15}}>
            <Col className="gutter-row" xs={0} sm={0} md={24} lg={24} xl={24}>
            <Tabs defaultActiveKey="1" tabPosition="right" size="small">
              <TabPane tab={<span>Received</span>} key="1">
              <h4> Received Merchant </h4>
                <ServiceCard />
                <Pagination size="small" total={50} showSizeChanger showQuickJumper  showTotal={showTotal}  />
              </TabPane>
              
              <TabPane tab={<span>Accepted</span>} key="3">
              <Row gutter={6}>
            <Col className="gutter-row" span={24}>
              <Row gutter={6}>
              <Col className="" xs={24} sm={12} md={8} lg={6} xl={6}>
              <ItemMerchant title="Tacology" extra="claimed"
              cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNhlljB0Ysb0YMe39BIjt-Q16QSpHGiwiweKUpPLofniAJLnq"
              />
          </Col>
          
            <Col className="" xs={24} sm={12} md={8} lg={6} xl={6}>
                        <ItemMerchant title="Target" extra="claimed" cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_Y0w2GaZHsC5_Q99E2fUT3LHwLqcFT0TqLhj3piYfxIOgk65" />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={6}>
                        <ItemMerchant title="Starbucks" extra="unclaimed" 
                        cover="https://www.downtownkingston.ca/sites/downtownkingston.ca/files/img/business/starbucks.jpg"  />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={6}>
                        <ItemMerchant title="Best Buy" extra="unclaimed" 
                        cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UHpmNNWIiDphx7_1cmRM5Ei7wCsweiI-Qgq5L98yS1KJH6d6hQ"  />
                    </Col>
                  </Row>  
                </Col>
              </Row>
              </TabPane>
              <TabPane tab={<span>Rejected</span>} key="4">
                Tab 2
              </TabPane>
              <TabPane tab={<span>Requested</span>} key="2">
                Send 
              </TabPane>
            </Tabs>
            </Col>
          </Row>
            </Col>
          </Row>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
