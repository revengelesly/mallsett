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
          
          <Row gutter={12}>
          <Col xs={24} sm={24} md={16} lg={18} xl={18}>
          
          
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.variation.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.variation.name.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.variation.name" />  
          </Popover>
          }>
    
          <Col >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'enter the name here' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input  
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="name"
                style={{width: "100%"}}
              />
            )}
            </Col>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.variation.price.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.variation.price.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.variation.price" />  
  </Popover>
  }>
  <Col  >
    {getFieldDecorator('price', {
      rules: [{ required: false, message: 'Enter the price?' }],
      initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
    })(
      <Input  
        prefix={
          <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        style={{width: "100%"}}
        placeholder="price"
      />
    )}
    </Col>
  </FormItem>
  </Col>
  </Row>
  <FormItem label={
    
    <Popover content={ 
      <div>
        {<IntlMessages id="form.part.size.category.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.size.category.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.size.category" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('option', {
      rules: [{ required: true, message: 'Add this size in a category' }],
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
        {<IntlMessages id="form.part.variation.option.popover.content" />} 
      </div>
    } title={<IntlMessages id="form.part.variation.option.popover.title" />}  
    trigger="click">
    <Icon type="question-circle-o" 
    /> <IntlMessages id="form.part.variation.option" />  
  </Popover>
  }>
  <Col span={24}  >
    {getFieldDecorator('option', {
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