import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Tabs } from 'antd';
import { Card, Icon, Popover, Button } from 'antd';
import { Radio } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';
import Input, { InputGroup } from '../../../components/uielements/input';
import MerchantCategoryInputTag from './MerchantCategoryInputTag';
import BusinessLogo from './BusinessLogo';
import BusinessQuickChart from './reactVis/BusinessQuickChart';


const TabPane = Tabs.TabPane;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class MerchantTitle extends Component {
  render() {
     return (
       <div>
        Panther Coffee Shop
        
        <small> 111 East Flagler,Miami, Fl 32453 | 305-589-5965 </small>
       </div>
       )
  }
}

class ServiceCard extends Component {



  render() {
    return (
        <Card title={<MerchantTitle />} bordered={true}>
        <Row gutter={0} style={{ marginBottom: 12 }}>
        <Col span="24" >
        
        <Carousel autoplay>
          <div>1</div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        </Col>
        </Row>
        <Row gutter={8}>
          <Col span="6">
<BusinessLogo />
          </Col>
          <Col span="18">
          <h3>Short Pitch </h3>
          We recomend this POS system because it works great with our applciation.
          We recomend this POS system because it works great with our applciation.
          We recomend this POS system because it works great with our applciation.
          <Popover content={(
            <div>
              <p className="colorBlue"> Passes: 50% </p>
              <p className="colorPink"> Clicks: 20% </p>
              <p className="colorOrange"> Miss Opportunities: 30% </p>
              </div>)} 
            title="Here's the Data"  trigger="click">
          <Button type="dashed" icon="video-camera"> Commercial 
          </Button>   
          </Popover> <Popover content={(
            <div>
              <p className="colorBlue"> Passes: 50% </p>
              <p className="colorPink"> Clicks: 20% </p>
              <p className="colorOrange"> Miss Opportunities: 30% </p>
              </div>)} 
            title="Here's the Data"  trigger="click">
          <Button type="dashed" icon="pie-chart"> Data 
          </Button>   
          </Popover> 
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: 20 }}>

          <Col span="24">
            <Button type="primary" icon="shopping-cart" className="fullButton"> Shop this Merchant </Button>
          </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: 20 }}>
      <Tabs defaultActiveKey="2">
    <TabPane tab={<span><Icon type="mail" /> Contact</span>} key="2">
      <Row>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Enter Product or Reason" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>

          <Col span="24">
            <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
        <Input
            type="textarea"
            placeholder="message"
            autosize={{ minRows: 2, maxRows: 6 }}
          />
        </InputGroup>
        <InputGroup  style={{ marginBottom: '15px' }}>
        <Button type="default">Submit</Button>
        </InputGroup>
      </Row>
    </TabPane>
    <TabPane tab={<span><Icon type="lock" /> Privacy</span>} key="3">
      <h3>Unclaimed Account - Plugg Level Privacy<Button type="dashed" shape="" icon="info-circle-o" />  </h3>
    </TabPane>
    <TabPane tab={<span><Icon type="exception" /> Terms</span>} key="4">
     <h3>Claimed Account - Plugg Level Terms <Button type="dashed" shape="" icon="info-circle-o" />  </h3>
    </TabPane>
    <TabPane tab={<span><Icon type="question-circle-o" /> F.A.Q.</span>} key="5">
     <h3>Claimed Account - Merchant Level Terms <Button type="dashed" shape="" icon="info-circle-o" />   </h3>
    </TabPane>
  </Tabs>
       </Row>
        </Card>
    );
  }
}

export default ServiceCard;