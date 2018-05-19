import React, { Component } from 'react';
import { Alert, Slider, Form, Icon, Input, Button, Col, Row, notification  } from 'antd';
import  { InputGroup } from '../../../components/uielements/input';
import SigninWrapper from '../signin.style';
import IntlMessages from '../../../components/utility/intlMessages';
import { getAgeStatement } from '../../../helpers/utility';
import { BaseURL } from '../../../helpers/constants';
import axios from 'axios';


const FormItem = Form.Item;


class RegisterUser extends Component {
  defaultAge = 18;

  state = {
    checkDob: false,
    ageInfo: '',
    ageStatement: '',
    errorMessage: '',
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
        newUser.age = newUser.userAge || 18;
        let currentDate = new Date();
        let password = newUser.password;

        newUser.dob = new Date(
          currentDate.getFullYear() - newUser.age,
          currentDate.getMonth(),
          currentDate.getDate()
        );

        axios({
          method: 'POST',
          url: `${BaseURL}/api/users/register`,
          data: JSON.stringify(newUser),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.props.login({email: res.data.email, password: password});
          }
        })
        .catch(err => {
          this.setState({
            errorMessage: err.response.data.message
          });
        });
      }
    });
  }

  ageInfoHandler = (e) => {
    console.log("was click");
  }

  handleButtonClick = (event) => {
    if (event && event.target && event.target.name) {
      switch(event.target.name.toLowerCase()) {
        case 'login':
          this.props.handleTabChange('4');
          break;
        case 'forgotpassword':
          this.props.handleTabChange('5');
          break;
      }
    }
  }

  handleAgeChange = (value) => {
    this.setState({
      ageStatement: getAgeStatement(value)
    });
  }

  componentDidMount = () => {
    // init the age statement
    this.handleAgeChange(this.defaultAge);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email address!' }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email Address" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('phone', {
            rules: [{ required: false, message: 'Please input your email address!' }],
            })(
              <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Cell Phone" />
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
            {getFieldDecorator('password2', {
            rules: [{ required: true, message: 'Please Confirm Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('userAge')(
              <Slider  marks={{ 0: '0', 13: '13', 18: '18' , 21: '21', 35: '35', 55: '55+' }} max={55}  step={null} defaultValue={this.defaultAge} onChange={this.handleAgeChange}/>
            )}
            { this.state.ageStatement && <div>{this.state.ageStatement}</div> }
          <div>{this.ageInfo}</div>
          </FormItem>
          <FormItem >
            { this.state.errorMessage && <Alert message={this.state.errorMessage} type="error" showIcon banner closable />}
            { this.state.showSuccessMessage &&<Alert message="Registration Successful" type="success" showIcon banner closable /> }
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
              <Button type="dashed" onClick={this.handleButtonClick} name="login" style={{ width: '100%', color: '#999', border: 'dashed 1px #999'}} ghost>Login</Button>
            </Col>
            <Col span="12">
              <Button type="dashed" onClick={this.handleButtonClick} name="forgotPassword" style={{ width: '100%', color: '#999', border: 'dashed 1px #999'}} ghost>Forgot password</Button>
            </Col>
          </Row>
          </InputGroup>
        </SigninWrapper>
    </div>
    );
  }
}


const WrappedRegisterUserForm = Form.create()(RegisterUser);
export default WrappedRegisterUserForm;
