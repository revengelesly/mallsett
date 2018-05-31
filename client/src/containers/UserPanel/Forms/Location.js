import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';
import { getView } from '../../../helpers/utility';
import { ViewPort } from '../../../helpers/constants';
import LocationSearchInput from '../../../components/map/locationSearchInput';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({ forceRefresh: true });

const { Option } = Select;

const { TextArea } = Input;

const FormItem = Form.Item;

function handleLocationTypeChange(value) {
  console.log(`selected ${value}`);
}
class SettingsUserForm extends Component {
  state = {
    checkDob: false,
    ageInfo: '',
    formItemLayout: {},
    editingLocation: this.props.editingLocation,
    owner: null,
    address: ''
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  resetFields = () => {
    this.props.form.resetFields();
    this.setState({
      address: ''
    });
  };

  handleProfileChange = value => {
    console.log(value);
    let owner = this.props.dependents.find(x => x._id === value);
    this.setState({
      owner: value,
      ownerName: owner.displayName
    });
  };

  addLocation = newLocation => {
    this.props.handleAddLocation(newLocation);
  };

  deleteLocation = newLocation => {
    this.props.handleRemoveLocation(this.state.editingLocation_id, newLocation);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, newLocation) => {
      if (!err) {
        newLocation.profile = this.props.profile._id;
        newLocation.owner = this.state.owner
          ? this.state.owner
          : this.state.editingLocation
            ? this.state.editingLocation.owner
            : [];
        newLocation.categories = newLocation['Add Delivery Location'];
        newLocation.address = this.state.address;
        if (this.state.editingLocation) {
          newLocation.location_id = this.state.editingLocation._id;
        }

        this.resetFields();
        this.addLocation(newLocation);
        this.props.handleItemActiveTab('1');
      }
    });
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
    history.push('#locationAnchor');
    if (e && e.target && e.target.name) {
      this.props.handleItemActiveTab('2');
    }
  };

  handleSelect = (latLng, googlePlaceId, address) => {
    this.setState({
      address
    });
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      editingLocation: nextProps.editingLocation
    });

    if (nextProps.editingLocation && !this.props.editingLocation) {
      this.setState({
        address: nextProps.editingLocation.address
      });
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
    const formItemLayout = this.state.formItemLayout;
    let address = this.state.address;

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem label="Enter Full Address" {...formItemLayout}>
            {getFieldDecorator('address', {
              rules: [{ required: true, message: 'address' }],
              initialValue: address,
              style: { position: 'relative' }
            })(
              <LocationSearchInput
                handleSelect={this.handleSelect}
                address={address}
                disabled={false}
              />
            )}
          </FormItem>
          <FormItem label="Owner" {...formItemLayout}>
            {getFieldDecorator('profile', {
              rules: [
                { required: true, message: 'Who does this address belongs to?' }
              ],
              initialValue: this.props.editingLocation
                ? this.props.editingLocation.owner
                : ''
            })(
              <Select
                style={{ width: '100%' }}
                onChange={this.handleProfileChange}
              >
                {this.props.dependents &&
                  this.props.dependents.map(x => {
                    if (
                      this.state.editingLocation &&
                      this.state.editingLocation._id === x._id
                    ) {
                      return (
                        <Select.Option value={x._id} key={x._id}>
                          {x.displayName}
                        </Select.Option>
                      );
                    } else {
                      return (
                        <Option key={x._id} value={x._id}>
                          {x.displayName}
                        </Option>
                      );
                    }
                  })}
              </Select>
            )}
            Click here to add new dependent or spouse{' '}
            <a name="newDependent" onClick={this.handleItemActiveTab}>
              Add New{' '}
            </a>
          </FormItem>
          <FormItem label="Apt or Suite" {...formItemLayout}>
            {getFieldDecorator('apartment', {
              rules: [{ required: false, message: 'Add apt. here!' }],
              initialValue:
                this.state.editingLocation &&
                this.state.editingLocation.apartment
            })(
              <Input
                prefix={
                  <Icon type="pushpin-o" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Apartment or Suite"
              />
            )}
          </FormItem>

          <FormItem label="Special Notes" {...formItemLayout}>
            {getFieldDecorator('notes', {
              rules: [
                {
                  required: false,
                  message: 'Special notes for delivery drivers'
                }
              ],
              initialValue:
                this.state.editingLocation && this.state.editingLocation.notes
            })(
              <TextArea
                row={2}
                prefix={
                  <Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="text"
                placeholder="Leave a note for delivery services"
              />
            )}
          </FormItem>

          <FormItem label="Address Type" {...formItemLayout}>
            {getFieldDecorator('Add Delivery Location', {
              rules: [
                {
                  required: false,
                  message: 'Add delivery Address for dependent'
                }
              ],
              initialValue:
                this.props.editingLocation &&
                this.props.editingLocation.categories
                  ? this.props.editingLocation.categories
                  : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={handleLocationTypeChange}
              >
                <Option value="2">Home</Option>
                <Option value="3">Work</Option>
              </Select>
            )}
          </FormItem>

          <FormItem label="." {...formItemLayout}>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={this.check}
              htmlType="submit"
              className="login-form-button"
            >
              {this.state.editingLocation && <span>Update Location</span>}
              {!this.state.editingLocation && <span>Add Location</span>}
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedSettingsUserForm = Form.create()(SettingsUserForm);
export default WrappedSettingsUserForm;
