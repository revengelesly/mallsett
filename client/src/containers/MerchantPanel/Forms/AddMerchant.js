import React, { Component } from 'react';
import { Form, Icon, Input, Select, Alert } from 'antd';
import UploadComponent from '../../../containers/UserPanel/Forms/uppy/UploadComponent';

const { TextArea } = Input;
const { Option } = Select;

const FormItem = Form.Item;
function handleBusinessTypeChange(value) {
  console.log(`selected ${value}`);
}

class AddMerchantForm extends Component {
  state = {
    logo: '',
    gallery: '',
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

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form className="login-form">
          <FormItem label="Business Logo">
            <UploadComponent
              id={this.props.uploadId || 'uploadNusinessLogo'}
              handleUploadFileSuccess={this.props.handleUploadLogoSuccess}
            />
          </FormItem>
          <FormItem label="Business Gallery">
            <UploadComponent
              id={this.props.uploadId || 'uploadGallery'}
              handleUploadFileSuccess={this.props.handleUploadGallerySuccess}
              maxFileSize={5000000}
              maxNumberOfFiles={20}
            />
          </FormItem>
          <FormItem label="Business Type">
            {getFieldDecorator('businessType', {
              rules: [
                { required: true, message: 'What type of business is this?' }
              ],
              initialValue: this.props.merchant
                ? this.props.merchant.businessType
                : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={handleBusinessTypeChange}
              >
                <Option value="manageProducts">Business to Customers</Option>
                <Option value="manageWholeSale">Business to Business</Option>
                <Option value="manageDeliveryService">Delivery Services</Option>
                <Option value="maangeRentals">Rent and Lease</Option>
                <Option value="manageShoppingService">
                  Shopping and Styling
                </Option>
                <Option value="manageIndemandServices">
                  Indemand Services
                </Option>
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
          <FormItem label="Target Type">
            {getFieldDecorator('targetType', {
              rules: [
                { required: true, message: 'What type of business is this?' }
              ],
              initialValue: this.props.merchant
                ? this.props.merchant.targetType
                : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
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

          <FormItem label="Personal Phone">
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: 'please enter you personal phone number.'
                }
              ],
              initialValue: this.props.merchant ? this.props.merchant.phone : ''
            })(
              <Input
                autoComplete="phone number"
                prefix={
                  <Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Enter Business name here"
              />
            )}
          </FormItem>
          <FormItem label="Personal Email">
            {getFieldDecorator('personalEmail', {
              rules: [
                { required: true, message: 'please enter you Personal Email' }
              ],
              initialValue: this.props.merchant
                ? this.props.merchant.personalEmail
                : ''
            })(
              <Input
                autoComplete="Personal email"
                prefix={
                  <Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Enter Personal email here"
              />
            )}
          </FormItem>
          <FormItem label="Business Email">
            {getFieldDecorator('businessEmail', {
              rules: [
                { required: true, message: 'please enter you Business Email' }
              ],
              initialValue: this.props.merchant
                ? this.props.merchant.businessEmail
                : ''
            })(
              <Input
                autoComplete="business email"
                prefix={
                  <Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Enter Business email here"
              />
            )}
          </FormItem>

          <FormItem label="About the Business">
            {getFieldDecorator('bio', {
              rules: [
                {
                  required: true,
                  message: 'Please tell us a little bit about your business.'
                }
              ],
              initialValue:
                this.props.merchant && this.props.merchant.detail
                  ? this.props.merchant.detail.bio
                  : ''
            })(
              <TextArea
                placeholder="Autosize height with minimum and maximum number of lines"
                autosize={{ minRows: 2 }}
              />
            )}
          </FormItem>
          <FormItem label="Customers Commercial">
            {getFieldDecorator('customersCommercial', {
              rules: [
                {
                  required: false,
                  message:
                    'add commercial you would like to show to your customers..'
                }
              ],
              initialValue:
                this.props.merchant &&
                this.props.merchant.socialMedia[1] &&
                this.props.merchant.socialMedia[1].link
            })(
              <Input
                autoComplete="youtube link"
                prefix={
                  <Icon type="text" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="add youtube link here"
              />
            )}
          </FormItem>
          <FormItem label="B2B Commercial">
            {getFieldDecorator('B2Bcommercial', {
              rules: [
                {
                  required: false,
                  message:
                    'add commercial you would like to show to your business..'
                }
              ],
              initialValue:
                this.props.merchant &&
                this.props.merchant.socialMedia[0] &&
                this.props.merchant.socialMedia[0].link
            })(
              <Input
                autoComplete="youtube link"
                prefix={
                  <Icon type="text" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="add youtube link here"
              />
            )}
          </FormItem>
          <FormItem label="Terms and Conditions">
            {getFieldDecorator('terms', {
              rules: [
                {
                  required: false,
                  message: 'Please add your terms and conditions here'
                }
              ],
              initialValue: this.props.merchant
                ? this.props.merchant.detail.terms
                : ''
            })(
              <TextArea
                placeholder="Let customers know your terms."
                autosize={{ minRows: 2 }}
              />
            )}
          </FormItem>
          <FormItem label="Privacy Policy">
            {getFieldDecorator('privacy', {
              rules: [
                {
                  required: false,
                  message: 'Please add your Privacy Policy here'
                }
              ],
              initialValue: this.props.merchant
                ? this.props.merchant.detail.privacy
                : ''
            })(
              <TextArea
                placeholder="Let customers know your Privacy Policy."
                autosize={{ minRows: 2 }}
              />
            )}
          </FormItem>
          {this.props.showErroMessage && (
            <Alert
              message="Require fields must be filled"
              type="error"
              closable
            />
          )}
        </Form>
      </div>
    );
  }
}

const WrappedSettingsUserForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(AddMerchantForm);
export default WrappedSettingsUserForm;
