import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import Auth0 from '../../helpers/auth0/index';
import Firebase from '../../helpers/firebase';
import FirebaseLogin from '../../components/firebase';
import IntlMessages from '../../components/utility/intlMessages';
import SignUpStyleWrapper from './signup.style';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Form, Icon } from 'antd';
const FormItem = Form.Item;

class SignUp extends Component {
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  render() {
        const { getFieldDecorator } = this.props.form;
    return (
      <SignUpStyleWrapper className="isoSignUpPage">
        <div className="isoSignUpContentWrapper">
          <div className="isoSignUpContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signUpTitle" /> 
              </Link>
            </div>
  
            <div className="isoSignUpForm">
                  <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
              <div className="isoInputWrapper isoOtherLogin">

                <Button onClick={this.handleLogin} type="primary btnGooglePlus">
                  <IntlMessages id="page.signUpGooglePlus" />
                </Button>
                  <Button
                   
                  >
                    <IntlMessages id="page.signUpAuth0" />
                  </Button>
              
              </div>
              <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
                <Link to="/signin">
                  <IntlMessages id="page.signUpAlreadyAccount" />
                </Link>
              </div>
             
            </div>
            
          </div>
        </div>
      </SignUpStyleWrapper>
    );
  }
}

export default SignUp;
