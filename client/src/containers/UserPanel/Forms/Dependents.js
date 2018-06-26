import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, BackTop } from 'antd';
import { getAgeStatement, getView } from '../../../helpers/utility';
import { ViewPort } from '../../../helpers/constants';
import UploadComponent from './uppy/UploadComponent';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh: true});

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
    isUploadComponentReset: false,
    role: 'Dependent'
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
          profileType: this.props.editingDependent ? this.props.editingDependent.profileType : 'dependent',
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
          dependent.profile = Object.assign({}, this.props.editingDependent, dependent.profile);
        }

        this.props.handleItemActiveTab('1');
        this.props.handleAddDependent(dependent);
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
    history.push('#dependentAnchor');
    if (e && e.target && e.target.name) {
      switch (e.target.name.toLowerCase()) {
        case 'newlocation':
          this.props.handleItemActiveTab('3');
          break;
        case 'newfile':
          this.props.handleItemActiveTab('4');
          break;
        default:
          break;
      }
    }
  };

  componentDidMount = () => {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.editingDependent !== prevProps.editingDependent) {
      this.setState({
        role: this.props.editingDependent && this.props.editingDependent.profileType === 'main'
                  ? 'My'
                  : 'Dependent'
      })
    }
  }

  ageInfoHandler = e => {
    console.log('was click');
  };

  getRandomId = prefix => {
    return prefix + (new Date()).getTime();
  }

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

    console.log(this.props.editingDependent);

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem label={this.state.role + ' Name'} >
            {getFieldDecorator('Dependent Name', {
              rules: [{ required: true, message: 'Dependent name is required.' }],
              initialValue: (this.props.editingDependent ? this.props.editingDependent.displayName: '')
            })(
              <Input
                autoComplete="name"
                prefix={
                  <Icon type="user-add" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="name"
                id={`dn-${this.getRandomId()}`}
              />
            )}
          </FormItem>
          <FormItem label="Contact Phone">
            {getFieldDecorator('Contact Phone', {
              rules: [{ required: true, message: 'enter your phone or your dependent phone.' }],
              initialValue: (this.props.editingDependent ? this.props.editingDependent.phone: ''),
            })(
              <Input
                autoComplete="a contact number"
                prefix={
                  <Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="phone number"
              />
            )}
          </FormItem>
          <FormItem label={this.state.role + " Age"}>
            {getFieldDecorator('age', {
              rules: [{ required: true, message: 'Not all things are appropriate for all ages.' }],
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
          <FormItem label={this.state.role + " type"} {...formItemLayout}>
            <Select
              style={{ width: '100%' }}
              onChange={this.handleCategoryChange}
              disabled={this.props.editingDependent && this.props.editingDependent.profileType === 'main'}
            >
              {categoryOptions}
            </Select>
            {getFieldDecorator('type', {
              rules: [
                { required: true, message: 'How are you two related?' }
              ],
              initialValue: this.props.editingDependent && this.props.editingDependent.category ? this.props.editingDependent.category : []
            })(
              <Select
                style={{ width: '100%' }}
                onChange={this.onSecondSubCategoryChange}
                disabled={this.props.editingDependent && this.props.editingDependent.profileType === 'main'}
              >
                {subCategoryOptions}
              </Select>
            )}
          </FormItem>

          <FormItem label="Considerations">
            {getFieldDecorator('considerations', {
              rules: [
                {
                  required: false,
                  message:
                    'Does you dependent have any health issue or situations'
                }
              ],
              initialValue: this.props.editingDependent && this.props.editingDependent.considerations ? this.props.editingDependent.considerations : []
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
          <FormItem label="Biography">
            {getFieldDecorator('bio', {
              rules: [
                { required: false, message: 'Tell us a little about this dependent' }
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
          <FormItem label="Photo for Receiving">
            <UploadComponent isReset={this.state.isUploadComponentReset} id={this.props.uploadId || "uploadDependent"} handleUploadFileSuccess={this.handleUploadFileSuccess} />
            <br />
            Not Required.
          </FormItem>

          <FormItem label="Location">
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
              <a name="newLocation" onClick={this.handleItemActiveTab}>
                {' '}
                Add New{' '}
              </a>
            </p>
          </FormItem>
          <FormItem label="Files">
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
              <a name="newFile" onClick={this.handleItemActiveTab}>
                {' '}
                Add New{' '}
              </a>
            </p>
          </FormItem>
          <FormItem  >
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={this.check}
              htmlType="submit"
              className="login-form-button"
            >
              {this.props.editingDependent && <span>Update dependent</span>}
              {!this.props.editingDependent && <span>Add Dependent</span>}
            </Button>
          </FormItem>
        </Form>
        <BackTop visibilityHeight={50}/>
      </div>
    );
  }
}

const WrappedSettingsUserForm = Form.create()(SettingsUserForm);
export default WrappedSettingsUserForm;
