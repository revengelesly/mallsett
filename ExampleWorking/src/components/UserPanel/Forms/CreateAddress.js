import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
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
            <Input placeholder="Enter Address" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="8">
            <Input placeholder="Apartment #" />
          </Col>
          <Col span="16">
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
            placeholder="Delivery address... needs access code? has aggressive dogs? Is behind another address?"
            autosize={{ minRows: 2, maxRows: 6 }}
          />
        </InputGroup>
        <InputGroup  style={{ marginBottom: '15px' }}>
        <Button type="primary">Submit</Button>
        </InputGroup>
      </ContentHolder>
  </Col>
</Row>
    );
  }
}

export default CreateAddress;