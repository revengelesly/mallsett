import React, { Component } from 'react';
import { Upload, message, Form, Icon, Input, Button, Select } from 'antd';
import axios from 'axios';
import { getAgeStatement, getView } from '../../../helpers/utility';
import { ViewPort } from '../../../helpers/constants';
import { createProfile } from '../../../redux/auth/api';
import UploadComponent from './uppy/UploadComponent';

const Dragger = Upload.Dragger;

const { Option, OptGroup } = Select;
const primaryType = ['Family', 'Friends', 'Pet Animal', 'Others'];
const secondaryType = {
  Family: [
    'Son',
    'Daughter',
    'Sister',
    'Brother',
    'Grand daughter',
    'Grand son',
    'Niece',
    'Nephew',
    'Grand mother',
    'Grand father',
    'Aunt',
    'Uncle',
    'Distance Reletive'
  ],
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
  }
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
    formItemLayout: {},
    isUploadComponentReset: false
  };
  handleCategoryChange = value => {
    this.setState({
      cities: secondaryType[value],
      secondSubCategory: secondaryType[value][0]
    });
  };
  onSecondSubCategoryChange = value => {
    this.setState({
      secondSubCategory: value
    });
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

  handleUploadFileSuccess = url => {
    this.setState({
      uploadURL: url
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, newUser) => {
      let now = new Date();
      console.log(newUser);
      let locations = newUser['locations'] && newUser['locations'].map(x => this.props.locations.find(location => x === location._id));
      let files = newUser['files'] && newUser['files'].map(x => this.props.files.find(file => x === file._id));
      let dependent = {
        profile: {
          category: newUser.type,
          locations: locations,
          files: files,
          displayName: newUser['Dependent Name'],
          phone: newUser['Dependent Phone'],
          dob: now.getFullYear() - newUser.age,
          profileType: 'dependent',
          bio: newUser['bio'],
          avatar: this.state.uploadURL,
          considerations: newUser['considerations']
        },
        token: this.props.idToken
      };

      if (!err) {
        this.props.form.resetFields();
        this.setState({
          isUploadComponentReset: !this.state.isUploadComponentReset
        });

        if (this.props.editingDependent) {
          this.props.handleRemoveDependent(this.props.editingDependent._id, dependent);
        } else {
          this.props.handleAddDependent(dependent);
        }
      }
    });
  };

  handleAgeTextChange = event => {
    if (event && event.target && event.target.value) {
      this.setState({
        ageStatement: getAgeStatement(event.target.value)
      });
    }
  };

  handleWindowResize = () => {
    this.setState({
      formItemLayout:
        getView() === ViewPort.TabView
          ? {}
          : {
              labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
              },
              wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
              }
            }
    });
  };

  handleItemActiveTab = e => {
    e.preventDefault();
    if (e && e.target && e.target.name) {
      switch (e.target.name.toLowerCase()) {
        case 'newlocation':
          this.props.handleItemActiveTab('3');
          break;
        case 'newfile':
          this.props.handleItemActiveTab('4');
          break;
      }
    }
  };

  componentDidMount = () => {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  };


  ageInfoHandler = e => {
    console.log('was click');
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const categoryOptions = primaryType.map(category => (
      <Option key={category}>{category}</Option>
    ));
    const subCategoryOptions = this.state.cities.map(subCategory => (
      <Option key={subCategory}>{subCategory}</Option>
    ));
    const formItemLayout = this.state.formItemLayout;

    let edittingAge = '';
    if (this.props.editingDependent) {
      const now = new Date();
      const dob = new Date(this.props.editingDependent.dob);

      edittingAge = this.props.editingDependent && this.props.editingDependent.dob ? (now.getFullYear() - dob.getFullYear()) : '';
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem label="Dependent Name" {...formItemLayout}>
            {getFieldDecorator('Dependent Name', {
              rules: [{ required: true, message: 'please enter you user code' }],
              initialValue: (this.props.editingDependent ? this.props.editingDependent.displayName: '')
            })(
              <Input
                autocomplete="name"
                prefix={
                  <Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Enter dependent name here"
              />
            )}
          </FormItem>
          <FormItem label="Dependent Phone" {...formItemLayout}>
            {getFieldDecorator('Dependent Phone', {
              rules: [{ required: true, message: 'please enter you user code' }],
              initialValue: (this.props.editingDependent ? this.props.editingDependent.phone: '')
            })(
              <Input
                autocomplete="phone number"
                prefix={
                  <Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Enter dependent name here"
              />
            )}
          </FormItem>
          <FormItem label="Dependent Age" {...formItemLayout}>
            {getFieldDecorator('age', {
              rules: [{ required: true, message: 'How old is your dependent?' }],
              initialValue: edittingAge
            })(
              <Input
                onChange={this.handleAgeTextChange}
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="age"
              />
            )}
            {this.state.ageStatement && <div>{this.state.ageStatement}</div>}
          </FormItem>
          <FormItem label="Dependent type" {...formItemLayout}>
            <Select
              defaultValue={primaryType[0]}
              style={{ width: '100%' }}
              onChange={this.handleCategoryChange}
            >
              {categoryOptions}
            </Select>
            {getFieldDecorator('type', {
              rules: [
                { required: true, message: 'How is this person a dependent?' }
              ],
              initialValue: this.props.editingDependent && this.props.editingDependent.category ? this.props.editingDependent.category : []
            })(
              <Select
                value={this.state.secondSubCategory}
                style={{ width: '100%' }}
                onChange={this.onSecondSubCategoryChange}
              >
                {subCategoryOptions}
              </Select>
            )}
          </FormItem>

          <FormItem label="Considerations" {...formItemLayout}>
            {getFieldDecorator('considerations', {
              rules: [
                {
                  required: false,
                  message:
                    'Does you dependent have any health issue or situations'
                }
              ],
              initialValue: this.props.editingDependent && this.props.editingDependent.considerations && this.props.editingDependent.considerations > 0 ? this.props.editingDependent.considerations : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
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
          <FormItem label="Biography" {...formItemLayout}>
            {getFieldDecorator('bio', {
              rules: [
                { required: false, message: 'Please input your Password!' }
              ],
              initialValue: (this.props.editingDependent ? this.props.editingDependent.bio: '')
            })(
              <TextArea
                row={6}
                prefix={
                  <Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Tell us a little bit about your dependent. Teachers, Merchants, and others will be able to better assist your dependent"
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Photo for Receiving">
            <UploadComponent isReset={this.state.isUploadComponentReset} id="uploadDependent" handleUploadFileSuccess={this.handleUploadFileSuccess} />
            <br />
            Not Required.
          </FormItem>

          <FormItem label="Location" {...formItemLayout}>
            {getFieldDecorator('locations', {
              rules: [
                {
                  required: false,
                  message: 'Add delivery Address for dependent'
                }
              ],
              initialValue:  this.props.editingDependent && this.props.editingDependent.locations ? this.props.editingDependent.locations.map(x => x._id) : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={handleSpecialConsiderationChange}
                notFoundContent='You have not added a location'
              >
                {this.props.locations && this.props.locations.map(x =>
                  <Option key={x._id}>{x.address}</Option>
                )}
              </Select>
            )}
            <p>
              add new location?{' '}
              <a href="#" name="newLocation" onClick={this.handleItemActiveTab}>
                {' '}
                Add New{' '}
              </a>
            </p>
          </FormItem>
          <FormItem label="Files" {...formItemLayout}>
            {getFieldDecorator('files', {
              rules: [{ required: false, message: 'Add a file for dependent' }],
              initialValue: this.props.editingDependent && this.props.editingDependent.files ?this.props.editingDependent.files.map(x => x._id) : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={handleSpecialConsiderationChange}
                notFoundContent='You have not add a document'
              >

                {this.props.files && this.props.files.map(x =>
                  <Option key={x._id}>{x.displayName}</Option>
                )}
              </Select>
            )}
            <p>
              add new file?{' '}
              <a href="#" name="newFile" onClick={this.handleItemActiveTab}>
                {' '}
                Add New{' '}
              </a>
            </p>
          </FormItem>
          <FormItem label="." {...formItemLayout}>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={this.check}
              htmlType="submit"
              className="login-form-button"
            >
              Add Dependent
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedSettingsUserForm = Form.create()(SettingsUserForm);
export default WrappedSettingsUserForm;
