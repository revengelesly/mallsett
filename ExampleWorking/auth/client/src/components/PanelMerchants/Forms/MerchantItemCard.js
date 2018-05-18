import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card, Icon, Popover, Button } from 'antd';
import { Radio } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';
import Input, { InputGroup } from '../../../components/uielements/input';
import MerchantCategoryInputTag from './MerchantCategoryInputTag';
import BusinessLogo from './BusinessLogo';
import BusinessQuickChart from './reactVis/BusinessQuickChart';

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
        <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
          <Col span="18">
            <Input placeholder="Pather Coffee Shop" />
          </Col>
          <Col span="6">
            <Button className="fullButton" size="small">submit</Button>
          </Col> 
        </InputGroup>
              </div>)} 
            title="Edit Business Name"  trigger="click">
          <Button type="dashed" shape="circle" icon="edit" /> 
          </Popover> 
          
        <small> 111 East Flagler,Miami, Fl 32453 <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           <img src="../../images/googleMap.png" className="imageFullWidth" />
          </Col>
          <Col span="18">
            <Input placeholder="Pather Coffee Shop" />
          </Col>
          <Col span="6">
            <Button className="fullButton" size="small">submit</Button>
          </Col> 
        </InputGroup>
              </div>)} 
            title="Edit Address"  trigger="click">
          <Button type="dashed" shape="circle" icon="edit" />
          </Popover> | 305-589-5965 <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
          <Col span="18">
            <Input placeholder="305-589-5965" />
          </Col>
          <Col span="6">
            <Button className="fullButton" size="small">submit</Button>
          </Col> 
        </InputGroup>
              </div>)} 
            title="Edit Phone Number"  trigger="click">
          <Button type="dashed" shape="circle" icon="edit" />

          </Popover> </small>
       </div>
       )
  }
}

class MerchantItemCard extends Component {



  render() {
    return (
        <Card title={<MerchantTitle />} bordered={true}>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          <Col span="12"  style={{ marginTop: 2 }}>
          <h4>Google Business Category <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explains the category
          </Col>
        </InputGroup>
              </div>)} 
            title="Google Categories"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
         
          <Col span="12">
            <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Business Category"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          
          <Col span="12"  style={{ marginTop: 4 }}>
          <h4>Plugg Business Type<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explains the category
          </Col>
        </InputGroup>
              </div>)} 
            title="Google Categories"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
          <Col span="12">
            <Select
                  mode=""
                  style={{ width: '100%' }}
                  placeholder="Business Type"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
                
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          
          <Col span="12"  style={{ marginTop: 4 }}>
          <h4>Assigned Phone Number<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explains the phone number 
          </Col>
        </InputGroup>
              </div>)} 
            title="Phone Number"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
          <Col span="12">
            <Select
                  mode=""
                  style={{ width: '100%' }}
                  placeholder="Business Type"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
                
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          
          <Col span="12"  style={{ marginTop: 4 }}>
          <h4>Commercial: Business 2 Customer<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           expelains the commercial
          </Col>
        </InputGroup>
              </div>)} 
            title="Commercial: Business 2 Customer "  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
          <Col span="12">
            <Select
                  mode=""
                  style={{ width: '100%' }}
                  placeholder="Business Type"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
                
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          
          <Col span="12"  style={{ marginTop: 4 }}>
          <h4>Commercial: Business 2 Business<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explains the commercial
          </Col>
        </InputGroup>
              </div>)} 
            title="youtube commercial"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
          <Col span="12">
            <Select
                  mode=""
                  style={{ width: '100%' }}
                  placeholder="Business Type"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
                
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8}>
          <Col span="6">
<BusinessLogo />
          </Col>
           <Col span="6">
            <img src="../../images/plugs-merchant-charts.png" className="imageFullWidth" />
          </Col>
          <Col span="12">
          <h3>Short Pitch <Button type="dashed" shape="circle" icon="edit" /></h3>
          UNCLAIMED: We are compeled to refer customers to a competing claimed merchant merchant. 
          Please help claim this account.
          <Popover content={(
            <div>
              <p className="colorBlue"> Passes: 50% </p>
              <p className="colorPink"> Clicks: 20% </p>
              <p className="colorOrange"> Miss Opportunities: 30% </p>
              </div>)} 
            title="Here's the Data"  trigger="click">
          <Button type="dashed" icon="pie-chart"> Data </Button>
          </Popover> <Popover content={(
            <div>
              <p className="colorBlue"> Passes: 50% </p>
              <p className="colorPink"> Clicks: 20% </p>
              <p className="colorOrange"> Miss Opportunities: 30% </p>
              </div>)} 
            title="B2C Commercial"  trigger="click">
          <Button type="dashed" icon="video-camera"> B2B </Button>
          </Popover> <Popover content={(
            <div>
              <p className="colorBlue"> Passes: 50% </p>
              <p className="colorPink"> Clicks: 20% </p>
              <p className="colorOrange"> Miss Opportunities: 30% </p>
              </div>)} 
            title="Here's the Data"  trigger="click">
          <Button type="dashed" icon="video-camera">  B2C </Button>
          </Popover>  
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: 20 }}>
        <Col span="16">

          </Col>
          <Col span="8">
            <Button type="danger" icon="delete" className="fullButton"> Remove </Button>
          </Col>
      </Row>
        </Card>
    );
  }
}

export default MerchantItemCard;