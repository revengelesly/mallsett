import React, { Component } from 'react';
import { Upload, message, Form, Icon, Input, Button, Select } from 'antd';
import axios from 'axios';
import { getAgeStatement, getView } from '../../../helpers/utility';
import {ViewPort} from '../../../helpers/constants';

const Dragger = Upload.Dragger;

const { Option, OptGroup } = Select;
const primaryType = ['Family', 'Friends', 'Pet Animal', 'Others'];
const secondaryType = {
  Family: ['Son', 'Daughter', 'Sister', 'Brother', 'Grand daughter', 'Grand son', 'Niece', 'Nephew', 'Grand mother', 'Grand father', 'Aunt', 'Uncle', 'Distance Reletive'],
  Friends: ['Friend', 'Co-Worker', 'Classmates', 'Others'],
  PetAnimal: ['Dog', 'Cat', 'Reptiles', 'Rats', 'Others'],
  Others: ['Others']
};
const { TextArea } = Input;
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
function handleSpecialConsiderationChange(value) {
  console.log(`selected ${value}`);
}

class SettingsUserForm extends Component {
  state = {
    cities: secondaryType[primaryType[0]],
    secondSubCategory: secondaryType[primaryType[0]][0],
    ageStatement: '',
    formItemLayout: {}
  }
  handleCategoryChange = (value) => {
    this.setState({
      cities: secondaryType[value],
      secondSubCategory: secondaryType[value][0],
    });
  }
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

  handleAgeTextChange = (event) => {
    if (event && event.target && event.target.value) {
      this.setState({
        ageStatement: getAgeStatement(event.target.value)
      });
    }
  }

  handleWindowResize = () => {
    this.setState({
      formItemLayout: getView() === ViewPort.TabView ?
        {} :
        {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        }
    });
  }

  handleItemActiveTab = (e) => {
    e.preventDefault();
    if (e && e.target && e.target.name) {
      switch (e.target.name.toLowerCase()) {
        case 'newlocation':
          this.props.handleItemActiveTab('3')
          break;
        case 'newfile':
        this.props.handleItemActiveTab('4')
          break;
      }
    }
  }

  componentDidMount = () => {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  ageInfoHandler = (e) => {
    console.log("was click");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const categoryOptions = primaryType.map(category => <Option key={category}>{category}</Option>);
    const subCategoryOptions = this.state.cities.map(subCategory => <Option key={subCategory}>{subCategory}</Option>);
    const formItemLayout = this.state.formItemLayout;

    return (
<div>


<Form onSubmit={this.handleSubmit} className="login-form">

  <FormItem label="Dependent Name" {...formItemLayout} >
    {getFieldDecorator('Dependent Name', {
    rules: [{ required: true, message: 'please enter you user code' }],
    })(
      <Input autocomplete='name' prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter dependent name here" />
    )}
  </FormItem>
  <FormItem label="Dependent Phone" {...formItemLayout} >
    {getFieldDecorator('Dependent Phone', {
    rules: [{ required: true, message: 'please enter you user code' }],
    })(
      <Input autocomplete='phone number' prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter dependent name here" />
    )}
  </FormItem>
  <FormItem label="Dependent Age" {...formItemLayout} >
    {getFieldDecorator('age', {
    rules: [{ required: true, message: 'How old is your dependent?' }],
    })(
      <Input onChange={this.handleAgeTextChange} prefix={<Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="age" />
    )}
    { this.state.ageStatement && <div>{this.state.ageStatement}</div> }
  </FormItem>
  <FormItem label="Dependent type" {...formItemLayout} >
   <Select defaultValue={primaryType[0]} style={{ width: "100%" }} onChange={this.handleCategoryChange}>
          {categoryOptions}
        </Select>
    {getFieldDecorator('type', {
    rules: [{ required: true, message: 'How is this person a dependent?' }],
    })(

        <Select value={this.state.secondSubCategory}  style={{ width: "100%"}}  onChange={this.onSecondSubCategoryChange}>
          {subCategoryOptions}
        </Select>
    )}
  </FormItem>


  <FormItem label="Considerations" {...formItemLayout} >
    {getFieldDecorator('special considerations', {
    rules: [{ required: false, message: 'Does you dependent have any health issue or situations' }],
    })(
    <Select
    defaultValue=""
    mode="multiple"
    style={{ width: "100%" }}
    onChange={handleSpecialConsiderationChange}
  >
    <OptGroup label="Medical">
      <Option value="jack">Hearth Problem</Option>
      <Option value="lucy">Diabeties</Option>
    </OptGroup>
    <OptGroup label="Mental">
      <Option value="schiz">Schizaphrenic</Option>
      <Option value="ptsd">PTSC</Option>
    </OptGroup>
  </Select>
    )}
  </FormItem>
  <FormItem  label="Biography" {...formItemLayout} >
    {getFieldDecorator('short bio', {
    rules: [{ required: false, message: 'Please input your Password!' }],
    })(
      <TextArea row={6} prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Tell us a little bit about your dependent. Teachers, Merchants, and others will be able to better assist your dependent" />
    )}
  </FormItem>
  <FormItem  {...formItemLayout} label="Photo for Receiving" >
    <Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Please upload one file at a time. We are strict on organization.</p>
    </Dragger>
    Not Required.
  </FormItem>

   <FormItem label="Location" {...formItemLayout} >
    {getFieldDecorator('Add Delivery Location', {
    rules: [{ required: false, message: 'Add delivery Address for dependent' }],
    })(
    <Select
    defaultValue=""
    mode="multiple"
    style={{ width: "100%" }}
    onChange={handleSpecialConsiderationChange}
  >
      <Option value="2">1280 NW 9999 Street</Option>
      <Option value="3">4111 NW 9999 Street</Option>

  </Select>
    )}
        <p>add new location? <a href="#" name="newLocation" onClick={this.handleItemActiveTab}> Add New </a></p>

  </FormItem>
  <FormItem label="Files" {...formItemLayout} >
    {getFieldDecorator('Add Files ', {
    rules: [{ required: false, message: 'Add a file for dependent' }],
    })(
    <Select
    defaultValue=""
    mode="multiple"
    style={{ width: "100%" }}
    onChange={handleSpecialConsiderationChange}
  >
      <Option value="2">File name 1</Option>
      <Option value="3">file name 2</Option>

  </Select>
    )}
        <p>add new file? <a href="#" name="newFile" onClick={this.handleItemActiveTab}> Add New </a></p>

  </FormItem>
    <FormItem label="." {...formItemLayout} >

      <Button type="primary" style={{ width: '100%'}} onClick={this.check} htmlType="submit" className="login-form-button">
      Add Dependent
      </Button>
    </FormItem>
  </Form>

</div>
    );
  }
}


const WrappedSettingsUserForm= Form.create()(SettingsUserForm);
export default WrappedSettingsUserForm;
