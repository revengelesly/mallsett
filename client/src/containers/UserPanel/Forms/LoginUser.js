import React, { Component } from 'react';
import { Alert, Form, Icon, Input, Button, Col, Row } from 'antd';
import { InputGroup } from '../../../components/uielements/input';
import SigninWrapper from '../signin.style';
import IntlMessages from '../../../components/utility/intlMessages';

const FormItem = Form.Item;

class LoginUser extends Component {
  state = {
    checkDob: false,
    ageInfo: ''
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, user) => {
      if (!err) {
        console.log('Received values of form: ', user);
        this.props.login(user);
      }
    });
  };

  handleButtonClick = event => {
    if (event && event.target && event.target.name) {
      switch (event.target.name.toLowerCase()) {
        case 'register':
          this.props.handleTabChange('3');
          break;
        default:
          this.props.handleTabChange('5');
          break;
      }
    }
  };

  ageInfoHandler = e => {
    console.log('was click');
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [
                { required: true, message: 'Please input your email address!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email Address"
              />
            )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>

          <FormItem>
            {this.props.idToken === 'LOGIN_ERROR' && (
              <Alert
                message="Email or Password is incorrect"
                type="error"
                showIcon
                banner
                closable
              />
            )}
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={this.check}
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
          </FormItem>
        </Form>
        <SigninWrapper>
          <InputGroup size="large" style={{ marginBottom: '15px' }}>
            <Col span="24">
              <Button
                type="danger"
                style={{ width: '100%', background: '#f5222d', color: '#fff' }}
              >
                <Icon type="google" /> <IntlMessages id="page.signInGoogle" />
              </Button>
            </Col>
          </InputGroup>
          <InputGroup size="large" style={{ marginBottom: '15px' }}>
            <Row gutter={24}>
              <Col span="12">
                <Button
                  type="dashed"
                  name="register"
                  onClick={this.handleButtonClick}
                  style={{
                    width: '100%',
                    color: '#999',
                    border: 'dashed 1px #999'
                  }}
                  ghost
                >
                  Register
                </Button>
              </Col>
              <Col span="12">
                <Button
                  type="dashed"
                  name="forgotpassword"
                  onClick={this.handleButtonClick}
                  style={{
                    width: '100%',
                    color: '#999',
                    border: 'dashed 1px #999'
                  }}
                  ghost
                >
                  Forgot password
                </Button>
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
