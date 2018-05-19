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

class CreditCardProcessor extends Component {
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
            <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select a pos system"
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
        <RadioButton value="a">Need Recomendation</RadioButton>
        <RadioButton value="b">Mine is Not Showing</RadioButton>
        
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

export default CreditCardProcessor;