import React, { Component } from 'react';
import { Row, Col, Tabs, Steps, Icon, Pagination } from 'antd';
import Input, { InputGroup } from '../components/uielements/input';
import Button from '../components/uielements/button';
import ContentHolder from '../components/utility/contentHolder';
import FrontPageMerchantCard from '../components/PanelMerchants/Forms/FrontPageMerchantCard';
import Suppliers from '../components/PanelMerchants/Forms/Suppliers';

import ServiceCard from '../components/PanelMerchants/Forms/ServiceCard';
import Select, { SelectOption } from '../components/uielements/select';

const Option = SelectOption;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


const TabPane = Tabs.TabPane;

const Step = Steps.Step;


const steps = [{
  title: 'All',
  icon: 'bell',
  content: <FrontPageMerchantCard />,
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '1'
}, {
  title: 'Food',
  icon: 'coffee',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'Groceries',
  key: '2'
}, {
  title: 'Shops',
  icon: 'tags',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'Groceries',
  key: '3'
}, {
  title: 'OnDemand',
  icon: 'environment-o',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'Groceries',
  key: '11'
}, {
  title: 'Book/Rent',
  icon: 'calendar',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '4'
}, {
  title: 'Schools',
  icon: 'book',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '5'
}, {
  title: 'Events',
  icon: 'environment-o',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '9'
}, {
  title: 'Services',
  icon: 'team',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '6'
},  {
  title: 'Car/Boat',
  icon: 'car',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '7'
}, {
  title: 'Medical',
  icon: 'medicine-box',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help',
  key: '8'
}, {
  title: 'Worship',
  icon: 'global',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help',
  key: '10'
}];

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class ShopYourMall extends Component {
  render() {
    return (
       <Row gutter={8}>
              <Col span="24" style={{ marginTop: '0px'}}>
                <h4 style={{ marginBottom: '255px', color: '#c69c6d' }}>b. shop your mall.</h4>
              </Col>
            </Row>
    );
  }
}

export default ShopYourMall;