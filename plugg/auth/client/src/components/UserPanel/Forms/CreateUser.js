import React, { Component } from 'react';
import { Row, Col, DatePicker } from 'antd';
import {  Upload, Icon, message,Spin } from 'antd';

import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import moment from 'moment';

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const dateFormat = 'YYYY/MM/DD';
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class CreateAddress extends Component {
  constructor(props){
    super(props);
    this.state = {
    confirmPassword: '',
    previewVisible: false,
    previewImage: '',
    fileList: [],
    fullName: '',
    email: '',
    dob: moment().format(dateFormat),
    interest: [],
    password: '',
    address: '', 
  };
  }
  
  handleDob = (e) => {
    if (e!=null) {
      this.setState({
        dob: e._i
      });
    }
  }

  handleInterest = (e) => {
    let { interest } = this.state;
     interest.push(e[0]);
  }
  
  componentWillMount() {
    const data = localStorage.getItem('accesstoken');
      if (data) {
          this.props.history.push('/dashboard')
      }
  }
  
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // let fullName = this.refs.fullName.getValue();
    
    let fullName =  this.state.fullName;
    let email = this.state.email;
    let dob = this.state.dob;
    let interest = this.state.interest;
    // let fileList = this.state.fileList;
    let password = this.state.password;
    let address = this.state.address;

    // let fileListArray = [];
    // for (var i = 0; i < fileList.length; i++) {
    //   fileListArray.push(fileList[i].thumbUrl)
    // }
    if (this.state.fullName && this.state.email && this.state.dob && this.state.interest && this.state.password && this.state.address) {
      let obj = { fullName: fullName, email: email, dob: dob, interest: interest, fileList: [], password: password, address: address }
      this.props.submit(obj);
    }
  }
  // handlePassword = (e) => {
  //   let password = this.state.password;
  //   let confirmPassword = this.state.confirmPassword;
  //   if (password==='') {
  //     alert('The password is empty');
  //   } else if (password!=confirmPassword) {
  //     alert('The confirmed password does not match')
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.userData.authUser)) {
      if (nextProps.userData.authUser.success) {
        message.success(nextProps.userData.authUser.msg, 5);
        setTimeout(()=>{
          nextProps.history.push('/signin');  
        }, 3000)
      } else {
        message.error('Sign Up failed user already exists.', 5);
      }
      
    }
  }
  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    let isLoading  = this.props.userData && this.props.userData ? this.props.userData.isLoading : [];
    // console.log(this.props.userData);
    const { fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Profile Photo</div>
      </div>
    );
    
    return (
      <Row  justify="start" >
        <form>
          <Col md={24} sm={24} xs={24} style={{padding: '20px'}} >
              <ContentHolder>
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                    Full name
                    <Input placeholder="Full Name" onChange={(e)=> this.setState({fullName: e.target.value})} type="text" required />
                  </Col>
                </InputGroup>
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                    Email address 
                    <Input placeholder="Email Address" onChange={(e)=> this.setState({email: e.target.value})} />
                  </Col>
                </InputGroup>
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="12">
                    DOB 
                    <br />
                    <DatePicker defaultValue={moment()} onChange={this.handleDob} style={{ width: '100%' }} format={dateFormat} />
                  </Col>
                  <Col span="12">
                    Interests
                    <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Please select"
                      defaultValue={this.state.interest}
                      onChange={this.handleInterest}
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
                  { fileList.length >= 2 ? null : uploadButton}
                </Upload>
              </div>
                
                
                
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                     Password
                    <Input placeholder="Password" type="password" onChange={(e)=> this.setState({password: e.target.value})} />
                  </Col>
                </InputGroup>
                
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                    Confirm Password
                    <Input onBlur={this.handlePassword} placeholder="Confirm Password" type="password" onChange={(e)=>this.setState({confirmPassword: e.target.value})} />
                  </Col>
                </InputGroup>
                
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <Input
                    type="textarea"
                    placeholder="Delivery address... needs access code? has aggressive dogs? Is behind another address?"
                    autosize={{ minRows: 2, maxRows: 6 }}
                    onChange={(e)=> this.setState({address: e.target.value})}
                  />
                </InputGroup>
                <InputGroup  style={{ marginBottom: '15px' }}>
                <Button type={!isLoading ? "primary" : ''} onClick={this.handleSubmit} >
                  {!isLoading ? 'Submit' :
                    <Spin />
                  }
                </Button>
                </InputGroup>
              </ContentHolder>
          </Col>
        </form>
      </Row>
    );
  }
}

  export default CreateAddress;