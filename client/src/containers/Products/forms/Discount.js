import React, { Component } from 'react';
import { connect } from 'react-redux';
import IntlMessages from '../../../components/utility/intlMessages';
import { 
  Alert, 
  Form, 
  Icon, 
  Input, 
  Button,
  Select,
  Row,
  Col,
  Popover, 
  TimePicker,
  DatePicker
} from 'antd';
import { addProductFile } from '../../../redux/documents/middlewares';
import createHistory from 'history/createBrowserHistory';
const InputGroup = Input.Group;


const { Option, OptGroup } = Select;
const indentSelectAfter = (
  <Select defaultValue="percent" style={{ width: 150 }}>
    <Option value="amount">Amount</Option>
    <Option value="percent">Percent</Option>
  </Select>
);

const FormItem = Form.Item;
const history = createHistory({forceRefresh: true});


function onChangeStart(date, dateString) {
  console.log(date, dateString);
}
function onChangeEnd(date, dateString) {
  console.log(date, dateString);
}

  class SideForm extends Component {
    state = {
    editingFile: null,
    showErrorMessage: false,
    isUploadComponentReset: false
  };

  handleCategoryChange = (value) => {

  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, newFormData) => {
      if (!err) {
    

        } else {
          this.setState({
            showErrorMessage: true
          })
        }
      }
    );
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = this.state.formItemLayout;

    return (
        <Row gutter={24}>
        <Form onSubmit={this.handleSubmit}>
        <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.variation.option.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.variation.option.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.variation.option" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('Name', {
      rules: [{ required: true, message: 'Add the variation option' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
        autoComplete=""
        
        prefix={
          <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Variation Option"
      />
    )}
    </Col>
    </FormItem>
    <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.variation.code.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.variation.code.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.variation.code" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('code', {
      rules: [{ required: false, message: 'Add the variation code' }]
    })(
      <InputGroup compact>
    
      <Input
        autoComplete=""
        prefix={
          <Icon type="money" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Leave blank if no code required"
        style={{ width: '75%' }}
      />
       <Button
              type="primary"
              style={{ width: '25%' }}
              htmlType="submit"
              className=""
           > Generate </Button>
      </InputGroup>

    )}
    </Col>
  </FormItem>
  <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.variation.option.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.variation.option.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.variation.option" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('amount', {
      rules: [{ required: true, message: 'Add the variation option' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
        autoComplete=""
        addonAfter={indentSelectAfter}
        prefix={
          <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Amount"
      />
    )}
    </Col>
    </FormItem>
          <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.discount.starting.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.discount.starting.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.discount.starting" />  
          </Popover>
          }>
    
    <Col  >
    {getFieldDecorator('Starting', {
      rules: [{ required: false, message: 'Enter the starting?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <div>
      <DatePicker onChange={onChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="start date"
                style={{width: "100%"}}
              />
              <TimePicker onChange={onChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="start time"
                style={{width: "100%"}}
              />
              </div>
    )}
    </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.expiration.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.expiration.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.discount.expiration" />  
  </Popover>
  }>
  <Col  >

  
    {getFieldDecorator('expiration', {
      rules: [{ required: false, message: 'Enter the expiration?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <div>
      <DatePicker onChange={onChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="end date"
                style={{width: "100%"}}
              />
              <TimePicker onChange={onChangeEnd}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="end time"
                style={{width: "100%"}}
              />
              </div>
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>
  
  <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.variation.usage.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.variation.usage.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.variation.usage" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('Usage', {
              rules: [{ required: false, message: 'leave blank for infiit usage.' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Leave blank for infinite usage"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.status.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.status.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.discount.status" />  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('Status', {
      rules: [{ required: false, message: 'Is this published or expired?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Select
      mode=""
      style={{ width: '100%' }}
      onChange={this.handleCategoryChange}
    >
        <Option value="true">True</Option>
        <Option value="false">False</Option>
      
    </Select>
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>
  <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.discount.category.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.discount.category.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.discount.category" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('option', {
      rules: [{ required: true, message: 'Add this discount in a category' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
        autoComplete=""
        prefix={
          <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Variation Option"
      />
    )}
    </Col>
  </FormItem>  
          <FormItem >
          <Col span={24}  >
              {this.state.showErrorMessage &&
                <Alert
                  message="You must upload file"
                  type="error"
                  showIcon
                  banner
                  closable
                />
              }
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={this.handleSubmit}
              htmlType="submit"
              className="login-form-button"
            >
              {!this.state.editingFile && <span><IntlMessages id="form.part.upload.submit" /></span>}
              {this.state.editingFile && <span><IntlMessages id="form.part.upload.edit" /></span>}
            </Button>
            </Col>
          </FormItem>
        </Form>
      </Row>
    );
  }
}
function mapStateToProps({ Documents }) {
  return {
    loading: Documents.loading,
    error: Documents.error
  };
}

function mapDispatchToProps(dispatch) {
  return "nothing";
}
const WrappedForm = Form.create()(SideForm);
export default connect(mapStateToProps, mapDispatchToProps)(
  WrappedForm
);