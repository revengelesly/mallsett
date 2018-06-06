import React, { Component } from 'react';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import LayoutContent from '../../../components//utility/layoutContent';
import { Tabs } from 'antd';
import FrontPageMerchantCard from '../../../components/PanelMerchants/Forms/FrontPageMerchantCard';
import BuildYourMall from '../../BuildYourMall';
import ShopYourMall from '../../ShopYourMall';
import CheckOut from '../../CheckOut';
import Input, { InputGroup } from '../../../components/uielements/input';
import IntlMessages from '../../../components//utility/intlMessages';
import { Steps, Button, message, Icon, Cascader, Pagination } from 'antd';
import { Row, Col } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';

const Option = SelectOption;

const casOptions = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }, {
      value: 'xiasha',
      label: 'Xia Sha',
      disabled: true,
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua men',
    }],
  }],
}];

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}


const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const TabPane = Tabs.TabPane;


export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
            <Row gutter={8}  style={{ marginTop: '0px'}}>
              <Col span="12">
              Product Names
              <Input placeholder="Product Name" />
              Product Brands
              <Input placeholder="Product Brand" />
              Product Categories
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
              >
              
              </Select>
              Product Options
              <Cascader
                options={casOptions}
                onChange={onChange}
                mode="multiple"
                placeholder="Please select"
                style={{ width: '100%' }}
                showSearch
              />
              Product Locations
              <Row gutter={8}  style={{ marginTop: '0px'}}>
              <Col span="18">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
              >
              </Select>
              </Col>
              <Col span="6">
              <Button style={{ width: '100%' }} size="large" icon="plus-square-o">Add New</Button>

              </Col>
              
              </Row>
              
              
              Product Staffs
              <Row gutter={8}  style={{ marginTop: '0px'}}>
              <Col span="18">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
              >
              </Select>
              </Col>
              <Col span="6">
              <Button style={{ width: '100%' }} size="large" icon="plus-square-o">Add New</Button>

              </Col>
              
              </Row>
              
              
              Delivery Speed
              <Row gutter={8}  style={{ marginTop: '0px'}}>
              <Col span="18">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
              >
              </Select>
              </Col>
              <Col span="6">
              <Button style={{ width: '100%' }} size="large" icon="plus-square-o">Add New</Button>

              </Col>
              
              </Row>
              
              
              
               Menu Section
              <Row gutter={8}  style={{ marginTop: '0px'}}>
              <Col span="18">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
              >
              </Select>
              </Col>
              <Col span="6">
              <Button style={{ width: '100%' }} size="large" icon="plus-square-o">Add New</Button>

              </Col>
              
              </Row>
              
              
              
               Add On
              <Row gutter={8}  style={{ marginTop: '0px'}}>
              <Col span="18">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
              >
              </Select>
              </Col>
              <Col span="6">
              <Button style={{ width: '100%' }} size="large" icon="plus-square-o">Add New</Button>

              </Col>
              
              </Row>
              
              
              
              
              </Col>
              
              <Col span="12">
              add Products
              </Col>
            </Row>
            <Row gutter={8}  style={{ marginTop: '15px'}}>
              <Col span="24">
                <BuildYourMall />
              </Col>
            </Row>
            <Row gutter={8}  style={{ marginTop: '15px'}}>
              <Col span="18" >
                <ShopYourMall /> 
              </Col>
              <Col span="6">
                
              </Col>
            </Row>
      </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}