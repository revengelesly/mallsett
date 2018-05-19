import React, { Component } from 'react';
import { Upload, Icon, Modal } from 'antd';
import { Row, Col } from 'antd';
import Input, { InputGroup } from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import Select, { SelectOption } from '../../../components/uielements/select';
class BusinessLogo extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://i.pinimg.com/564x/9b/16/ec/9b16ecfb472fc5f41bdd1b18ac1be835.jpg',
    }],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div  style={{ width: '100%' }}>
        <Icon type="plus" />
        <div className="ant-upload-text"> Add Logo </div>
      </div>
    );
    return (
      <div>
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>

    );
  }
}
export default BusinessLogo;