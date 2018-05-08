import React, { Component } from 'react';
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import axios from 'axios';


function onChange(date, dateString) {
  console.log(date, dateString);
}




const FormItem = Form.Item;


class SettingsUserForm extends Component {
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
  handleAgeChange = (e) => {
    this.setState({
      checkDob: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true });
    });
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
    {getFieldDecorator('name', {
    rules: [{ required: true, message: 'Please input your username!' }],
    })(
      <Input autocomplete='username' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
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
    {getFieldDecorator('Current Password', {
    rules: [{ required: true, message: 'Please input your Password!' }],
    })(
      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Current Password" />
    )}
  </FormItem>
  <FormItem>
    {getFieldDecorator('password', {
    rules: [{ required: true, message: 'Please input your Password!' }],
    })(
      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="New Password" />
    )}
  </FormItem>
  <FormItem>
    {getFieldDecorator('password2', {
    rules: [{ required: true, message: 'Please Confirm Password!' }],
    })(
      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm New Password" />
    )}
  </FormItem>
  <FormItem
  >
    {getFieldDecorator('userAge')(
    <DatePicker onChange={onChange}  style={{ width: '100%'}} />
    )}
  <div>{this.ageInfo}</div>
  </FormItem>
    <FormItem >
      <Button type="primary" style={{ width: '100%'}} onClick={this.check} htmlType="submit" className="login-form-button">
      Update
      </Button>
    </FormItem>
  </Form>
</div>
    );
  }
}


const WrappedSettingsUserForm= Form.create()(SettingsUserForm);
export default WrappedSettingsUserForm;
