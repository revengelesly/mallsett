import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';
import axios from 'axios';
const { Option, OptGroup } = Select;

const { TextArea } = Input;


const FormItem = Form.Item;

function handleProfileChange(value) {
  console.log(`selected ${value}`);
}

function handleLocationTypeChange(value) {
  console.log(`selected ${value}`);
}
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
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    
    return (
<div>
  <Form onSubmit={this.handleSubmit} className="login-form">
  <FormItem label="Enter Full Address"  {...formItemLayout} >
    {getFieldDecorator('address', {
    rules: [{ required: true, message: 'address' }],
    })(
      <Input autocomplete='address' prefix={<Icon type="environment-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter Location Here" />
    )}
  </FormItem>
    <FormItem label="Owner"  {...formItemLayout} >
    {getFieldDecorator('profile', {
    rules: [{ required: true, message: 'Who does this address belongs to?' }],
    })(
    <Select
    defaultValue=""
    mode="multiple"
    style={{ width: "100%" }}
    onChange={handleProfileChange}
  >
    <OptGroup label="Family">
      <Option value="self">Self</Option>
      <Option value="jessica">Jessica (Daughter)</Option>
    </OptGroup>
    <OptGroup label="Friends">
      <Option value="lisa">Lisa (Co Worker)</Option>
      <Option value="keven">Keven (Friends)</Option>
    </OptGroup>
    <OptGroup label="Animal">
      <Option value="lance">Lance (Dog)</Option>
    </OptGroup>
    <OptGroup label="Others">
    </OptGroup>
  </Select>
    )}
     Click here to add new dependent or spouse <a href="#">Add New </a>
  </FormItem>
  <FormItem label="Apt or Suite"  {...formItemLayout} >
    {getFieldDecorator('apt', {
    rules: [{ required: false, message: 'Add apt. here!' }],
    })(
      <Input prefix={<Icon type="pushpin-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Apartment or Suite" />
    )}
  </FormItem>
 
  <FormItem label="Special Notes"  {...formItemLayout} >
    {getFieldDecorator('Notes', {
    rules: [{ required: false, message: 'Special notes for delivery drivers' }],
    })(
      <TextArea row={2} prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Leave a note for delivery services" />
    )}
  </FormItem>

  <FormItem label="Address Type" {...formItemLayout} >
    {getFieldDecorator('Add Delivery Location', {
    rules: [{ required: false, message: 'Add delivery Address for dependent' }],
    })(
    <Select
    defaultValue=""
    mode="multiple"
    style={{ width: "100%" }}
    onChange={handleLocationTypeChange}
  >
      <Option value="2">Home</Option>
      <Option value="3">Work</Option>
    
  </Select>
  
    )}
  </FormItem>
  
    <FormItem  label="."  {...formItemLayout} >
      <Button type="primary" style={{ width: '100%'}} onClick={this.check} htmlType="submit" className="login-form-button">
      Add Location
      </Button>
    </FormItem>
    
  </Form>
</div>
    );
  }
}


const WrappedSettingsUserForm= Form.create()(SettingsUserForm);
export default WrappedSettingsUserForm;
