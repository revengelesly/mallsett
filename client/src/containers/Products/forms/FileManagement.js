import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Form, Icon, Input, Button, Select } from 'antd';
import { addFile } from '../../../redux/documents/middlewares';
import { getView } from '../../../helpers/utility';
import { ViewPort } from '../../../helpers/constants';
import UploadComponent from './uppy/UploadComponent';
import createHistory from 'history/createBrowserHistory';

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
    owner: null,
    isUploadComponentReset: false
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
          this.props.handleItemActiveTab('1');

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
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem label="." {...formItemLayout}>
            <UploadComponent
              id={this.props.uploadId || 'uploadFile'}
              handleUploadFileSuccess={this.handleUploadFileSuccess}
              isReset={this.state.isUploadComponentReset}
            />
          </FormItem>
          <FormItem label="File Name" {...formItemLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Add the file name' }],
              initialValue: (this.state.editingFile ? this.state.editingFile.displayName : '')
            })(
              <Input
                autoComplete="name"
                prefix={
                  <Icon type="image" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="File name"
              />
            )}
          </FormItem>

          <FormItem label="Description" {...formItemLayout}>
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
                placeholder="Leave a note for delivery services"
              />
            )}
          </FormItem>
          <FormItem label="Category" {...formItemLayout}>
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
          </FormItem>
          <FormItem label="Owner" {...formItemLayout}>
            {getFieldDecorator('profile', {
              rules: [
                { required: true, message: 'Who does this address belongs to?' }
              ],
              initialValue: this.state.editingFile ? this.props.editingFile.owner : []
            })(
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                onChange={this.handleProfileChange}
              >
                {this.props.dependents && this.props.dependents.map(x =>
                    <Option key={x._id} value={x._id}>{x.displayName}</Option>
                )}
              </Select>
            )}
            Click here to add new dependent or spouse{' '}
            <a onClick={this.handleItemTabChange}>
              Add New{' '}
            </a>
          </FormItem>
          <FormItem label="." {...formItemLayout}>
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
              {!this.state.editingFile && <span>Add File</span>}
              {this.state.editingFile && <span>Update File</span>}
            </Button>
          </FormItem>
        </Form>
      </div>
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
