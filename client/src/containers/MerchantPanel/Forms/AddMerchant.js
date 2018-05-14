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
<FormItem label="Business Logo" >
    <Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Please upload one file at a time. We are strict on organization.</p>
    </Dragger>
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
      <Option value="merchant">Merchant</Option>
      <Option value="delivery">Delivery Service</Option>
      <Option value="wholesale">Wholesale</Option>
      <Option value="brands">Brands</Option>
      <Option value="associations">Associations</Option>
  </Select>
    )}
  </FormItem>
  <FormItem label="Personal Phone" >
    {getFieldDecorator('Personal Phone', {
    rules: [{ required: true, message: 'please enter you personal phone number.' }],
    })(
      <Input autocomplete='phone number' prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter Business name here" />
    )}
  </FormItem>
  <FormItem label="Personal Email" >
    {getFieldDecorator('Personal Email', {
    rules: [{ required: true, message: 'please enter you Personal Email' }],
    })(
      <Input autocomplete='Personal email' prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter Personal email here" />
    )}
  </FormItem>
  <FormItem label="Business Email" >
    {getFieldDecorator('Business Email', {
    rules: [{ required: true, message: 'please enter you Business Email' }],
    })(
      <Input autocomplete='business email' prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter Business email here" />
    )}
  </FormItem>
  
  <FormItem  label="About the Business"  >
    {getFieldDecorator('Short Introduction', {
    rules: [{ required: true, message: 'Please tell us a little bit about your business.' }],
    })(
     <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2}} />

    )}
  </FormItem>
  <FormItem  label="Terms and Conditions"  >
    {getFieldDecorator('Terms and Conditions', {
    rules: [{ required: false, message: 'Please add your terms and conditions here' }],
    })(
     <TextArea placeholder="Let customers know your terms." autosize={{ minRows: 2}} />
    )}
  </FormItem>
  <FormItem  label="Privacy Policy"  >
    {getFieldDecorator('Privacy Policy', {
    rules: [{ required: false, message: 'Please add your Privacy Policy here' }],
    })(
     <TextArea placeholder="Let customers know your Privacy Policy." autosize={{ minRows: 2}} />
    )}
  </FormItem>
  

  </Form>

</div>
    );
  }
}


const WrappedSettingsUserForm= Form.create()(AddMerchantForm);
export default WrappedSettingsUserForm;