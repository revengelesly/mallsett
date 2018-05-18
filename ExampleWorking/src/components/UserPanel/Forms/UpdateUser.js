import React, { Component } from 'react';
import { Row, Col, DatePicker } from 'antd';
import {  Upload, Icon   } from 'antd';

import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import moment from 'moment';


const dateFormat = 'YYYY/MM/DD';
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}




class CreateAddress extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
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
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Profile Photo</div>
      </div>
    );
    
    return (
      <Row  justify="start" >
  <Col md={24} sm={24} xs={24} >
      <ContentHolder>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            Full name
            <Input placeholder="Full Name" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            Email address 
            <Input placeholder="Email Address" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="12">
            DOB <br />
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} style={{ width: '100%' }} format={dateFormat} />
 

          </Col>
          <Col span="12">
            Interests
            <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
          </Col>
        </InputGroup>
        
        
        <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </div>
        
        
        
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            Current Password
            <Input placeholder="Password" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            New Password
            <Input placeholder="Password" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            Confirm Password
            <Input placeholder="Confirm Password" />
          </Col>
        </InputGroup>
        
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
        <Input
            type="textarea"
            placeholder="Delivery address... needs access code? has aggressive dogs? Is behind another address?"
            autosize={{ minRows: 2, maxRows: 6 }}
          />
        </InputGroup>
        <InputGroup  style={{ marginBottom: '15px' }}>
        <Button type="primary">Update</Button>
        </InputGroup>
      </ContentHolder>
  </Col>
</Row>
    );
  }
}

export default CreateAddress;