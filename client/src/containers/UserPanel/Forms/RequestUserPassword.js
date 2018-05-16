import React, { Component } from 'react';
import { Alert, Form, Icon, Input, Button, Col, Row } from 'antd';
import  { InputGroup } from '../../../components/uielements/input';
import SigninWrapper from '../signin.style';
import IntlMessages from '../../../components/utility/intlMessages';

import axios from 'axios';


const FormItem = Form.Item;


class RequestUserPassword extends Component {
  state = {
    checkDob: false,
    ageInfo: '',
    showSuccessMessage: false
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
        axios.post('/api/users/fogotpassword', newUser)
        .then(res => {
          this.setState({
            showSuccessMessage: true
          });
        })
        .catch(err => console.log(err.response));
      }
    });
  }

  handleButtonClick = (event) => {
    if (event && event.target && event.target.name) {
      switch(event.target.name.toLowerCase()) {
        case 'register':
          this.props.handleTabChange('3');
          break;
        case 'login':
          this.props.handleTabChange('4');
          break;
      }
    }
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
          <FormItem >
            { this.state.showSuccessMessage &&<Alert message="The new password was sent to your email" type="success" showIcon banner closable /> }
            <Button type="primary" style={{ width: '100%'}} onClick={this.check} htmlType="submit" className="login-form-button">
            Reset Password
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
                <Button type="dashed" name="login" onClick={this.handleButtonClick} style={{ width: '100%', color: '#999', border: 'dashed 1px #999'}} ghost>Login</Button>
              </Col>
              <Col span="12">
                <Button type="dashed" name="register" onClick={this.handleButtonClick} style={{ width: '100%', color: '#999', border: 'dashed 1px #999'}} ghost>Register</Button>
              </Col>
            </Row>
          </InputGroup>
        </SigninWrapper>
    </div>
    );
  }
}


const WrappedRequestUserPasswordForm = Form.create()(RequestUserPassword);
export default WrappedRequestUserPasswordForm;
