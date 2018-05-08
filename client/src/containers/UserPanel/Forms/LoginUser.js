import React, { Component } from 'react';
import {Form, Icon, Input, Button, Col, Row } from 'antd';
import  { InputGroup } from '../../../components/uielements/input';
import SigninWrapper from '../signin.style';
import IntlMessages from '../../../components/utility/intlMessages';

import axios from 'axios';


const FormItem = Form.Item;


class LoginUser extends Component {
  state = {
    checkDob: false,
    ageInfo: ''
  };
  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, newUser) => {
      if (!err) {
        console.log('Received values of form: ', newUser);
        axios.post('http://mallsett-revengelesly.c9users.io/api/users/register', newUser)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
      }
    });
  }

  ageInfoHandler = (e) => {
    console.log("was click");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
<div>
  <Form onSubmit={this.handleSubmit} className="login-form">
  <FormItem>
    {getFieldDecorator('email', {
    rules: [{ required: true, message: 'Please input your email address!' }],
    })(
      <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email Address" />
    )}
  </FormItem>

  
  <FormItem>
    {getFieldDecorator('password', {
    rules: [{ required: true, message: 'Please input your Password!' }],
    })(
      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
    )}
  </FormItem>

    <FormItem >
      <Button type="primary" style={{ width: '100%'}} onClick={this.check} htmlType="submit" className="login-form-button">
      Register
      </Button>
    </FormItem>
  </Form>
<SigninWrapper>
<InputGroup size="large" style={{ marginBottom: '15px' }}>
<Col span="24">
<Button type="danger"  style={{ width: '100%', background: '#f5222d', color: '#fff'}} ><Icon type="google" /> <IntlMessages id="page.signInGoogle" /></Button>
</Col>
</InputGroup>
<InputGroup size="large" style={{ marginBottom: '15px' }}>
<Row  gutter={24} >
<Col span="12">
<Button type="dashed" style={{ width: '100%', color: '#999', border: 'dashed 1px #999'}} ghost>register</Button>
</Col>
<Col span="12">
<Button type="dashed"  style={{ width: '100%', color: '#999', border: 'dashed 1px #999'}} ghost>forgot password</Button>
</Col>
</Row>
</InputGroup>   
</SigninWrapper>
</div>
    );
  }
}


const WrappedLoginUserForm = Form.create()(LoginUser);
export default WrappedLoginUserForm;
