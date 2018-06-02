import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Tabs } from 'antd';
import { Card, Icon, Button, Input } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';
import { InputGroup } from '../../../components/uielements/input';
import BusinessCard from './BusinessCard';

const { TextArea } = Input;

const TabPane = Tabs.TabPane;
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class TouchUp extends Component {
  render() {
    let merchant = this.props.merchant;
    let associates = merchant.associates;

    return (
      <Card bordered={false}>
        <Row gutter={24}>
          <Col span="24">
            <Carousel autoplay>
              <BusinessCard {...merchant.place} />
              {associates &&
                associates.map(x => <BusinessCard {...x} />)}
            </Carousel>
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: 20 }}>
          <Tabs defaultActiveKey="2">
            <TabPane
              tab={
                <span>
                  <Icon type="mail" /> Contact
                </span>
              }
              key="2"
            >
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
                      onChange={this.handleChange}
                      defaultValue={['a10', 'c12']}
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
                <InputGroup style={{ marginBottom: '15px' }}>
                  <Button type="default">Submit</Button>
                </InputGroup>
              </Row>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="profile" /> About Us
                </span>
              }
              key="3"
            >
              {merchant.detail.bio}
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="lock" /> Privacy
                </span>
              }
              key="4"
            >
              {merchant.detail.privacy}
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="exception" /> Terms
                </span>
              }
              key="5"
            >
              {merchant.detail.terms}
            </TabPane>
          </Tabs>
        </Row>
      </Card>
    );
  }
}

export default TouchUp;
