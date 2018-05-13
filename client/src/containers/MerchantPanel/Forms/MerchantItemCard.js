import React, { Component } from 'react';
import { Upload, message, Form, Icon, Input, Select } from 'antd';
import axios from 'axios';
const { TextArea } = Input;
const Dragger = Upload.Dragger;

const { Option } = Select;

const uploadProps = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const FormItem = Form.Item;
function handleBusinessTypeChange(value) {
  console.log(`selected ${value}`);
}

class AddMerchantForm extends Component {

  onSecondSubCategoryChange = (value) => {
    this.setState({
      secondSubCategory: value,
    });
  }
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
  
  <FormItem label="Business Name" >
    {getFieldDecorator('Business Name', {
    rules: [{ required: true, message: 'please enter you user code' }],
    })(
      <Input autocomplete='business name' prefix={<Icon type="shop" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter your buisness name here" />
    )}
  </FormItem>
  <FormItem label="Business Address" >
    {getFieldDecorator('Business Address', {
    rules: [{ required: true, message: 'please enter you Business Address' }],
    })(
      <Input autocomplete='Business Address' prefix={<Icon type="environment-o" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter Business address here" />
    )}
  </FormItem>
  <FormItem label="Business Phone" >
    {getFieldDecorator('Business Phone', {
    rules: [{ required: true, message: 'please enter you Business phone number' }],
    })(
      <Input autocomplete='phone number' prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter Business name here" />
    )}
  </FormItem>
  <FormItem label="Business Type"  >
    {getFieldDecorator('Business Type', {
    rules: [{ required: true, message: 'What type of business is this?' }],
    })(
    <Select
    defaultValue=""
    mode="multiple"
    style={{ width: "100%" }}
    onChange={handleBusinessTypeChange}
  >
      <Option value="b2b">Business 2 Business</Option>
      <Option value="b2c">Business 2 Customer</Option>
      <Option value="b2c">Delivery Service</Option>
    
  </Select>
    )}
  </FormItem>
  <FormItem  label="About the Business"  >
    {getFieldDecorator('short bio', {
    rules: [{ required: true, message: 'Please tell us a little bit about your business.' }],
    })(
      <TextArea rows={6}  />
    )}
  </FormItem>
  <FormItem label="Business Logo" >
    <Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Please upload one file at a time. We are strict on organization.</p>
    </Dragger>
  </FormItem>

  </Form>

</div>
    );
  }
}


const WrappedSettingsUserForm= Form.create()(AddMerchantForm);
export default WrappedSettingsUserForm;
