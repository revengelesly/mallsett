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
  Popover 
} from 'antd';
import { addProductFile } from '../../../redux/documents/middlewares';
import createHistory from 'history/createBrowserHistory';



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
                {<IntlMessages id="form.part.age.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.age.name.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.age.name" />  
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
                placeholder="Age range name"
              />
            )}
            </Col>
          </FormItem>
          <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.age.start.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.age.start.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.age.start" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('startAge', {
              rules: [{ required: true, message: 'What is the minimum age?' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="minimum age"
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
        {<IntlMessages id="form.part.age.end.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.age.end.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.age.end" />  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('endAge', {
      rules: [{ required: true, message: 'Enter the maximum age?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
        prefix={
          <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        style={{width: "100%"}}
        placeholder="max age"
      />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>

          <FormItem label={
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.age.description.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.age.description.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.age.description" />  
          </Popover>
          }>
          <Col span={24}  >
            {getFieldDecorator('Notes', {
              rules: [
                {
                  required: false,
                  message: 'Please describe this age range.'
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
                placeholder="i.e. This age range is for this holiday specials."
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