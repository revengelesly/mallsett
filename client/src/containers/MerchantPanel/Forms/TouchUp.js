import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Tabs } from 'antd';
import { Card, Icon, Popover, Button, Input } from 'antd';
import { Radio } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';
import  { InputGroup } from '../../../components/uielements/input';
import MerchantCategoryInputTag from './MerchantCategoryInputTag';
import BusinessLogo from './BusinessLogo';
import BusinessQuickChart from './reactVis/BusinessQuickChart';
import BusinessCard from './BusinessCard';
const { TextArea } = Input;

const TabPane = Tabs.TabPane;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


class ServiceCard extends Component {



  render() {
    return (
        <Card bordered={false} >
        
        <Row gutter={24}>
           <Col span="24" >
          <Carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
  <BusinessCard />
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
                  placeholder="Please select a category"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
        <TextArea
            placeholder="message"
            autosize={{ minRows: 4, maxRows: 8 }}
          />
        </InputGroup>
        <InputGroup  style={{ marginBottom: '15px' }}>
        <Button type="default">Submit</Button>
        </InputGroup>
      </Row>
    </TabPane>
    <TabPane tab={<span><Icon type="profile" /> About Us</span>} key="3">
     About us page here <Button type="dashed" shape="circle" icon="edit" />
    </TabPane>
    <TabPane tab={<span><Icon type="lock" /> Privacy</span>} key="4">
      Create a Privacy Policy of your own or we will use ours. <Button type="dashed" shape="circle" icon="edit" />
    </TabPane>
    <TabPane tab={<span><Icon type="exception" /> Terms</span>} key="5">
     Create a Terms and Condition of your own or we will use ours. <Button type="dashed" shape="circle" icon="edit" />
    </TabPane>

  </Tabs>
       </Row>
        </Card>
    );
  }
}

export default ServiceCard;