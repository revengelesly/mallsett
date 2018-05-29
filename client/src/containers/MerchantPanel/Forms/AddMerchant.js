import React, { Component } from 'react';
import { Upload,  Modal, message, Form, Icon, Input, Select } from 'antd';
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
 state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

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
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })
  
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div  style={{ width: '100%' }}>
        <Icon type="plus" />
        <div className="ant-upload-text"> Add Logo </div>
      </div>
    );

    return (
<div>


<Form onSubmit={this.handleSubmit} className="login-form">
    <FormItem label="Business Logo"  >
    <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </FormItem>
<FormItem label="Business Gallery" >
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
    maxTagCount=""
    style={{ width: "100%" }}
    onChange={handleBusinessTypeChange}
  >
      <Option value="manageProducts">Business to Customers</Option>
      <Option value="manageWholeSale">Business to Business</Option>
      <Option value="manageDeliveryService">Delivery Services</Option>
      <Option value="maangeRentals">Rent and Lease</Option>
      <Option value="manageShoppingService">Shopping and Styling</Option>
      <Option value="manageIndemandServices">Indemand Services</Option>
      <Option value="manageEvents">Events and Entertainment</Option>
      <Option value="manageCourse">Schools and Courses</Option>
      <Option value="manageBrands">Brand Management</Option>
      <Option value="marketingAgency">Marketing Agencies</Option>
      <Option value="manageAssociations">Associations</Option>
      <Option value="manageChurch">Church</Option>
      <Option value="manageNews">News and Contents</Option>
      <Option value="manageFilms">Films</Option>
      <Option value="manageMusic">Music</Option>
      <Option value="manageBooks">Books</Option>
      <Option value="manageNonProfit">Non-Profit</Option>
      <Option value="manageBooks">Parent Company</Option>
      <Option value="manageBooks">Child Company</Option>
      <Option value="manageBooks">Supplier</Option>
      <Option value="manageBooks">B2B Customer</Option>
      <Option value="manageBooks">Professional Services</Option>
      <Option value="manageBooks">Associations</Option>
      <Option value="manageBooks">Marketing Services</Option>
      <Option value="manageBooks">Government</Option>
      <Option value="manageBooks">POS System</Option>
      <Option value="manageBooks">Credit Card Processor</Option>
  </Select>
    )}
  </FormItem>
  <FormItem label="Target Type"  >
    {getFieldDecorator('Target Type', {
    rules: [{ required: true, message: 'What type of business is this?' }],
    })(
    <Select
    defaultValue=""
    mode="multiple"
    maxTagCount=""
    style={{ width: "100%" }}
    onChange={handleBusinessTypeChange}
  >
      <Option value="manageBooks">Parent Company</Option>
      <Option value="manageBooks">Child Company</Option>
      <Option value="manageBooks">Supplier</Option>
      <Option value="manageBooks">B2B Customer</Option>
      <Option value="manageBooks">Professional Services</Option>
      <Option value="manageBooks">Associations</Option>
      <Option value="manageBooks">Marketing Services</Option>
      <Option value="manageBooks">Government</Option>
      <Option value="manageBooks">POS System</Option>
      <Option value="manageBooks">Credit Card Processor</Option>
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
  <FormItem label="Customers Commercial" >
    {getFieldDecorator('Commercial', {
    rules: [{ required: false, message: 'add commercial you would like to show to your customers..' }],
    })(
      <Input autocomplete='youtube link' prefix={<Icon type="text" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="add youtube link here" />
    )}
  </FormItem>
  <FormItem label="B2B Commercial" >
    {getFieldDecorator('Commercial', {
    rules: [{ required: false, message: 'add commercial you would like to show to your business..' }],
    })(
      <Input autocomplete='youtube link' prefix={<Icon type="text" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="add youtube link here" />
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
