import React, { Component } from 'react';
import {
  Alert,
  Form,
  Icon,
  Input,
  Button,
  DatePicker,
  Popconfirm,
  message
} from 'antd';
import axios from 'axios';
import { BaseURL } from '../../../helpers/constants';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const FormItem = Form.Item;

class SettingsUserForm extends Component {
  state = {
    checkDob: false,
    ageInfo: '',
    isSuccess: false,
    errorMessage: ''
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  handleAgeChange = e => {
    this.setState(
      {
        checkDob: e.target.checked
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, newUser) => {
      if (!err) {
        newUser.currentEmail = this.props.profile.email;
        console.log(newUser);
        let password = newUser.password
          ? newUser.password
          : newUser.currentPassword;
        newUser.name = newUser.username;
        axios
          .post(`${BaseURL}/api/users/update`, newUser)
          .then(res => {
            this.props.login({ email: res.data.email, password: password });
            this.setState({
              isSuccess: true,
              errorMessage: ''
            });
            this.props.form.resetFields();
          })
          .catch(err =>
            this.setState({
              isSuccess: false,
              errorMessage: err.response.data.message
            })
          );
      }
    });
  };

  handleDeleteAccount = () => {
    const { getFieldValue } = this.props.form;
    let currentPassword = getFieldValue('currentPassword');

    if (!currentPassword) {
      message.error('Current password is required');
      return;
    }

    axios({
      method: 'delete',
      url: `${BaseURL}/api/users/delete`,
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        password: currentPassword
      }
    })
      .then(res => {
        if (res.data) {
          if (!res.data.isActive) {
            message.success('Deleted account');

            this.props.logout();
          }
        }
      })
      .catch(err => console.log(err));
  };

  handleConfirmPassword = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    let errors = [];

    if (value && value !== getFieldValue('password')) {
      errors.push(new Error('Passwords must match'));
    }

    callback(errors);
  };

  handleConfirmDelete = () => {
    this.handleDeleteAccount();
  }

  ageInfoHandler = e => {
    console.log('was click');
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ message: 'Please input your username!' }]
            })(
              <Input
                autoComplete="username"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder={this.props.profile.displayName}
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ message: 'Please input your email address!' }]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder={this.props.profile.email}
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [{ message: 'Please input your email address!' }]
            })(
              <Input
                prefix={
                  <Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder={this.props.profile.phone || 'Cell Phone'}
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('currentPassword', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Current Password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: false, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="New Password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password2', {
              rules: [
                { required: false, message: 'Please Confirm Password!' },
                { validator: this.handleConfirmPassword }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Confirm New Password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('userAge')(
              <DatePicker
                placeholder={this.props.profile.dob || 'Date of Birth'}
                onChange={onChange}
                style={{ width: '100%' }}
              />
            )}
            <div>{this.ageInfo}</div>
          </FormItem>
          <FormItem>
            {this.state.errorMessage && (
              <Alert
                message={this.state.errorMessage}
                type="error"
                showIcon
                banner
                closable
              />
            )}
            {this.state.isSuccess && (
              <Alert
                message="Successful"
                type="success"
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
              Update
            </Button>

            <Popconfirm
              title="Are you sure delete?"
              onConfirm={this.handleConfirmDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="danger"
                style={{ width: '100%' }}
              >
                Delete
              </Button>
            </Popconfirm>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedSettingsUserForm = Form.create()(SettingsUserForm);
export default WrappedSettingsUserForm;
