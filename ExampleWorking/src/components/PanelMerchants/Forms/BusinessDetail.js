import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

import Input, { InputGroup } from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import Select, { SelectOption } from '../../../components/uielements/select';

import { Radio } from 'antd';


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class CreateAddress extends Component {
  componentDidMount() {
    setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
  }
  render() {
    return (
      <Row  justify="start" >
  <Col md={24} sm={24} xs={24} >
      <ContentHolder>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Business Name" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Business Address" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="12">
            <Input placeholder="Business Phone Number" />
          </Col>
          <Col span="12">
            <Input placeholder="Business Email" />
          </Col>
         </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="12">
            <Input placeholder="Manager Phone Number" />
          </Col>
          <Col span="12">
            <Input placeholder="Manager Email" />
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
          <Col span="24">
      <RadioGroup >
        <RadioButton value="a">Local Merchant</RadioButton>
        <RadioButton value="b">Franchise / Chains</RadioButton>
        <RadioButton value="c">Wholesale</RadioButton>
        <RadioButton value="d">Delivery</RadioButton>
        <RadioButton value="e">Professionals</RadioButton>
      </RadioGroup>
          </Col>
        </InputGroup>
        
  
        <InputGroup  style={{ marginBottom: '15px' }}>
        <Col span="16">

   
             
          </Col>
          <Col span="8">
            <Button size="small" type="primary" className="fullButton square">Done</Button>
          </Col>
          
        </InputGroup>
      </ContentHolder>
  </Col>
</Row>
    );
  }
}

export default CreateAddress;