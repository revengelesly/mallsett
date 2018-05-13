import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';

import SigninWrapper from '../signin.style';



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
      <SigninWrapper>
      <Row  justify="start" >
  <Col md={24} sm={24} xs={24} >
      <ContentHolder>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Email Address" />
          </Col>
        </InputGroup>
         <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Password" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Button type="success">Login</Button>
          </Col>
        </InputGroup>
        <InputGroup className="textCenter green" size="large" style={{ marginBottom: '15px' }}>
          or Signin with Social Media
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Button type="primary"><Icon type="facebook" /><IntlMessages id="page.signInFacebook" /></Button>
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Button type="danger"><Icon type="google" /> <IntlMessages id="page.signInGoogle" /></Button>
          </Col>
        </InputGroup>

         <InputGroup size="large" style={{ marginBottom: '15px' }}>
         <Row  gutter={16} >
            <Col span="12">
              <Button type="dashed" ghost>register</Button>
            </Col>
            <Col span="12">
              <Button type="dashed" ghost>forgot password</Button>
            </Col>
          </Row>
        </InputGroup>
        
      </ContentHolder>
  </Col>
</Row>
</SigninWrapper>
    );
  }
}

export default CreateAddress;