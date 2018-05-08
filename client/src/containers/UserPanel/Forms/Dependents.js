import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';
import axios from 'axios';
const { Option, OptGroup } = Select;
const primaryType = ['Family', 'Friends', 'Pet Animal', 'Others'];
const secondaryType = {
  Family: ['Son', 'Daughter', 'Sister', 'Brother', 'Grand daughter', 'Grand son', 'Niece', 'Nephew', 'Grand mother', 'Grand father', 'Aunt', 'Uncle', 'Distance Reletive'],
  Friends: ['Friend', 'Co-Worker', 'Classmates', 'Others'],
  PetAnimal: ['Dog', 'Cat', 'Reptiles', 'Rats', 'Others'],
  Others: ['Others']
};
const { TextArea } = Input;


const FormItem = Form.Item;
function handleSpecialConsiderationChange(value) {
  console.log(`selected ${value}`);
}

class SettingsUserForm extends Component {
  state = {
    cities: secondaryType[primaryType[0]],
    secondSubCategory: secondaryType[primaryType[0]][0],
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

  ageInfoHandler = (e) => {
    console.log("was click");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const categoryOptions = primaryType.map(category => <Option key={category}>{category}</Option>);
    const subCategoryOptions = this.state.cities.map(subCategory => <Option key={subCategory}>{subCategory}</Option>);
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
  <FormItem label="Fullname" {...formItemLayout} >
    {getFieldDecorator('fullname', {
    rules: [{ required: true, message: 'please enter your dependent full name' }],
    })(
      <Input autocomplete='name' prefix={<Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Enter dependent name here" />
    )}
  </FormItem>
  <FormItem label="Dependent Age" {...formItemLayout} >
    {getFieldDecorator('age', {
    rules: [{ required: true, message: 'How old is your dependent?' }],
    })(
      <Input prefix={<Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="age" />
    )}
  </FormItem>
  <FormItem label="dependety type" {...formItemLayout} >
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
      <TextArea row={5} prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Tell us a little bit about your dependent. Teachers, Merchants, and others will be able to better assist your dependent" />
    )}
  </FormItem>
    <FormItem >
    
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
