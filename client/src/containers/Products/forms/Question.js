import React, { Component } from 'react';
import { connect } from 'react-redux';
import IntlMessages from '../../../components/utility/intlMessages';
import { 
  Alert, 
  Form, 
  Icon, 
  Input, 
  Button,
  Row,
  Col,
  Select,
  Popover 
} from 'antd';

import createHistory from 'history/createBrowserHistory';
const { Option } = Select;

const indentSelectAfter = (
  <Select defaultValue="percent" style={{ width: 150 }}>
    <Option value="amount">Question</Option>
    <Option value="percent">Comment</Option>
  </Select>
);
const { TextArea } = Input;

const FormItem = Form.Item;
const history = createHistory({forceRefresh: true});



  class SideForm extends Component {
    state = {
    editingFile: null,
    showErrorMessage: false,
    isUploadComponentReset: false
  };

 
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
                {<IntlMessages id="form.part.class.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.class.name.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> Request and Comment 
          </Popover>
          }>
          <Col span={24}  >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Add the file name' }],
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
                {<IntlMessages id="form.part.class.start.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.class.start.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> Include Files 
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('startClass', {
              rules: [{ required: true, message: 'What is the minimum class?' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="minimum class"
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
        {<IntlMessages id="form.part.class.end.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.class.end.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> Request File Upload?
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('endClass', {
      rules: [{ required: true, message: 'Enter the maximum class?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
        prefix={
          <Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        style={{width: "100%"}}
        placeholder="max class"
      />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>

          <FormItem label={
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.class.description.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.class.description.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> Description 
          </Popover>
          }>
          <Col span={24}  >
            {getFieldDecorator('Notes', {
              rules: [
                {
                  required: false,
                  message: 'Please describe this class range.'
                },
              ],
              initialValue: (this.state.editingFile ? this.state.editingFile.notes : '')
            })(
              <TextArea
                row={2}
                prefix={
                  <Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="text"
                placeholder="i.e. This class range is for this holiday specials."
              />
            )}
            </Col>
          </FormItem>
          
          
          
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.class.name.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.class.name.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> Question Category 
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('name', {
      rules: [{ required: true, message: 'Add the file name' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input
        autoComplete=""
        prefix={
          <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Class range name"
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