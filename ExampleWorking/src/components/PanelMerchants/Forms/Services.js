import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Input, { InputGroup } from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';

import ServiceCard from './ServiceCard';
import Select, { SelectOption } from '../../../components/uielements/select';


const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}



class CreateAddress extends Component {
  render() {
    return (
      <div>

      <Row  justify="start" >
  <Col md={24} sm={24} xs={24} >
      <ContentHolder>
      <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Select
                  mode=""
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
        <ServiceCard />
        </InputGroup>
    
      </ContentHolder>
  </Col>
</Row>
</div>
    );
  }
}

export default CreateAddress;