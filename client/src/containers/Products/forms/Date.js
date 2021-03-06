import React, { Component } from 'react';
import { connect } from 'react-redux';
import IntlMessages from '../../../components/utility/intlMessages';
import { 
  Alert, 
  Form, 
  Icon, 
  Input, 
  Button, 
  DatePicker,
  Row,
  Col,
  Popover 
} from 'antd';
import { addProductFile } from '../../../redux/documents/middlewares';
import createHistory from 'history/createBrowserHistory';



const { TextArea } = Input;

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
                {<IntlMessages id="form.part.date.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.date.name.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.date.name" />  
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
                placeholder="Date range name"
              />
            )}
            </Col>
          </FormItem>
          <Row gutter={12}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.date.start.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.date.start.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.date.start" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('startDate', {
              rules: [{ required: true, message: 'When does this date start?' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <DatePicker onChange={onChangeStart}  
                prefix={
                  <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="start date"
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
        {<IntlMessages id="form.part.date.end.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.date.end.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.date.end" />  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('endDate', {
      rules: [{ required: true, message: 'When does this date end?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <DatePicker onChange={onChangeEnd} 
        prefix={
          <Icon type="calendar" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        style={{width: "100%"}}
        placeholder="end date"
      />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>

          <FormItem label={
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.date.description.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.date.description.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.date.description" />  
          </Popover>
          }>
          <Col span={24}  >
            {getFieldDecorator('Notes', {
              rules: [
                {
                  required: false,
                  message: 'Please describe this date.'
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
                placeholder="i.e. Spring mini semester is an exelerated semester."
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