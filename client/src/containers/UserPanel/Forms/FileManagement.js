import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, Upload, message } from 'antd';
import axios from 'axios';
const Dragger = Upload.Dragger;


const { Option, OptGroup } = Select;

const { TextArea } = Input;


const FormItem = Form.Item;

function handleProfileChange(value) {
  console.log(`selected ${value}`);
}

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


class FileManagementForm extends Component {
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
  <FormItem label="."  {...formItemLayout} >
    <Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Please upload one file at a time. We are strict on organization.</p>
    </Dragger>
  </FormItem>
  <FormItem label="File Name"  {...formItemLayout} >
    {getFieldDecorator('name', {
    rules: [{ required: true, message: 'Add the file name' }],
    })(
      <Input autocomplete='name' prefix={<Icon type="image" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="File name" />
    )}
  </FormItem>

  <FormItem label="Description"  {...formItemLayout} >
    {getFieldDecorator('Notes', {
    rules: [{ required: true, message: 'Please better describe your files.' }],
    })(
      <TextArea row={2} prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Leave a note for delivery services" />
    )}
  </FormItem>
   <FormItem label="Category" {...formItemLayout}  >
    {getFieldDecorator('category', {
    rules: [{ required: true, message: 'File Category' }],
    })(
    <Select
    defaultValue=""
    mode="multiple"
    style={{ width: "100%" }}
    onChange={handleProfileChange}
  >
    <OptGroup label="Personal">
      <Option value="self">Birth Certificate</Option>
      <Option value="jessica">Jessica (Daughter)</Option>
    </OptGroup>
    <OptGroup label="Education">
      <Option value="lisa">Transcript</Option>
      <Option value="keven">Application</Option>
    </OptGroup>
    </Select>
    )}
  </FormItem>
  <FormItem  label="Owner" {...formItemLayout}  >
  
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
      <Option value="5af604cffc22683d49f3a993">Self</Option>
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
    <FormItem label="." {...formItemLayout}  >
      <Button type="primary" style={{ width: '100%'}} onClick={this.check} htmlType="submit" className="login-form-button">
      Add File
      </Button>
    </FormItem>
    
  </Form>
</div>
    );
  }
}


const WrappedFileManagementForm= Form.create()(FileManagementForm);
export default WrappedFileManagementForm;
