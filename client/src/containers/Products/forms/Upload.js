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
  Popover 
} from 'antd';
import { addProductFile } from '../../../redux/documents/middlewares';
import { getView } from '../../../helpers/utility';
import { ViewPort } from '../../../helpers/constants';
import UploadComponent from './uppy/UploadComponent';
import createHistory from 'history/createBrowserHistory';

const addFile = addProductFile;

const { Option, OptGroup } = Select;

const { TextArea } = Input;

const FormItem = Form.Item;
const history = createHistory({forceRefresh: true});

class FileManagementForm extends Component {
  state = {
    checkDob: false,
    ageInfo: '',
    formItemLayout: {},
    uploadURL: '',
    editingFile: null,
    showErrorMessage: false,
    isUploadComponentReset: false
  };

  handleUploadFileSuccess = url => {
    this.setState({
      uploadURL: url
    });
  };

  handleCategoryChange = (value) => {

  }

  handleProfileChange = (value) => {
    this.setState({
      owner: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, newFile) => {
      if (!err) {
        let file = {
          displayName: newFile.name,
          notes: newFile.Notes,
          categories: newFile.category,
          directory: this.state.uploadURL ? this.state.uploadURL : (this.state.editingFile ? this.state.editingFile.directory : ''),
          profile: this.props.profile._id,
          owner: this.state.owner ? this.state.owner : (this.state.editingFile ? this.state.editingFile.owner : [])
        };

        if (this.state.editingFile) {
          console.log(this.state.editingFile);
          file.file_id = this.state.editingFile._id;
          console.log(file);
        }

        console.log('Received values of form: ', file);
        if (file.directory && file.owner) {
          this.props.form.resetFields();
          this.setState({
            isUploadComponentReset: !this.state.isUploadComponentReset,
            showErrorMessage: false
          });
  
          this.props.handleAddFile(file);
        } else {
          this.setState({
            showErrorMessage: true
          })
        }
      }
    });
  };

  ageInfoHandler = e => {
    console.log('was click');
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

  handleItemTabChange = () => {
    history.push('#fileAnchor');
    this.props.handleItemActiveTab('2');
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      editingFile: nextProps.editingFile
    });
  }

  componentDidMount = () => {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
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
                {<IntlMessages id="form.part.upload.dagger.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.upload.dagger.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.upload.dagger" />  
          </Popover>
          }>
          <Col span={24}  >
          
            <UploadComponent
              id={this.props.uploadId || 'uploadFile'}
              handleUploadFileSuccess={this.handleUploadFileSuccess}
              isReset={this.state.isUploadComponentReset}
            />
            </Col>
          </FormItem>
          <FormItem label={
    
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.upload.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.upload.name.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.upload.name" />  
          </Popover>
          }>
          <Col span={24}  >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Add the file name' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input
                autoComplete="name"
                prefix={
                  <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="File name"
              />
            )}
            </Col>
          </FormItem>
          

          <FormItem label={
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.upload.description.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.upload.description.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.upload.description" />  
          </Popover>
          }>
          <Col span={24}  >
            {getFieldDecorator('Notes', {
              rules: [
                {
                  required: true,
                  message: 'Please better describe your files.'
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
                placeholder="describe this file"
              />
            )}
            </Col>
          </FormItem>
          <FormItem label={
            <Popover content={ 
              <div>
                {<IntlMessages id="form.part.upload.category.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.upload.category.popover.title" />}  
            trigger="click">
            <Icon type="question-circle-o" 
            /> <IntlMessages id="form.part.upload.category" />  
          </Popover>
          }>
          <Col span={24}  >
            {getFieldDecorator('category', {
              rules: [{ required: true, message: 'File Category' }],
              initialValue: this.state.editingFile ? this.state.editingFile.categories : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={this.handleCategoryChange}
              >
                <OptGroup label="Personal">
                  <Option value="self">Birth Certificate</Option>
                  <Option value="jessica">Jessica (Daughter)</Option>
                </OptGroup>
                <OptGroup label="Education">
                  <Option value="lisa">Transcript</Option>
                  <Option value="keven">Application</Option>
                </OptGroup>
              </Select>
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
  return {
    uploadFile: file => dispatch(addFile(file))
  };
}

const WrappedFileManagementForm = Form.create()(FileManagementForm);
export default connect(mapStateToProps, mapDispatchToProps)(
  WrappedFileManagementForm
);
