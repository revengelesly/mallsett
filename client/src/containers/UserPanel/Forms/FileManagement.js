import React, { Component } from 'react';
import { Form, Icon, Input, Button, Slider } from 'antd';
import axios from 'axios';
const { TextArea } = Input;


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
    {getFieldDecorator('fullname', {
    rules: [{ required: true, message: 'please enter your dependent full name' }],
    })(
      <Input autocomplete='name' prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter dependent name here" />
    )}
  </FormItem>
  <FormItem
  >
  <h4>Dependent Age</h4>
    {getFieldDecorator('age')(
      <Slider  marks={{ 0: '0', 13: '13', 18: '18' , 21: '21', 35: '35', 55: '55+' }} max={55}  step={null} defaultValue={18}/>
    )}
  </FormItem>
  <FormItem>
    {getFieldDecorator('type', {
    rules: [{ required: false, message: 'How is this person a dependent?' }],
    })(
      <Input prefix={<Icon type="smile-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apartment or Suite" />
    )}
  </FormItem>
  
  <FormItem>
    {getFieldDecorator('special considerations', {
    rules: [{ required: false, message: 'Please input your email address!' }],
    })(
      <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone Number" />
    )}
  </FormItem>
  <FormItem>
    {getFieldDecorator('short bio', {
    rules: [{ required: false, message: 'Please input your Password!' }],
    })(
      <TextArea row={2} prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Tell us a little bit about your dependent. Teachers, Merchants, and others will be able to better assist your dependent" />
    )}
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
