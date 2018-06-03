import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, message, Spin } from 'antd';
import { Icon } from 'antd';

import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';

import SigninWrapper from '../signin.style';

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

const Option = SelectOption;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class UserLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit  = () =>{
    let email = this.state.email;
    let password = this.state.password;
    if (email!='' && password!='') {
      this.props.loginSubmit({email: email, password: password})
    }
  }
  componentWillMount() {
    const data = localStorage.getItem('accesstoken');
      if (data) {
          this.props.history.push('/dashboard')
      }
  }
  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.userLoginData.authUser)) {
      if (nextProps.userLoginData.authUser.success) {
        localStorage.setItem("accesstoken", nextProps.userLoginData.authUser.token);
        message.success('Sign in Success', 5);
        setTimeout(()=>{
          nextProps.history.push('/dashboard');  
        }, 3000)
      } else {
        message.error('Login failed incorrect email or password', 5);
      }
    }
  }
  componentDidMount() {
    setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
  }
  render() {
    let isLoading  = this.props.userLoginData && this.props.userLoginData ? this.props.userLoginData.isLoading : [];
    // console.log(this.props.userLoginData)
    return (
      <SigninWrapper>
      <Row  justify="start" >
  <Col md={12} sm={12} xs={12} style={{padding: '50px', marginLeft: '25%'}} >
      <ContentHolder>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Email Address" onChange={(e)=> this.setState({email: e.target.value})} />
          </Col>
        </InputGroup>
         <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Password" type="password" onChange={(e)=> this.setState({password: e.target.value})} />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Button type="success" onClick={this.handleSubmit} >{!isLoading ? 'Submit' : <Spin />  }</Button>
          </Col>
        </InputGroup>
        <InputGroup className="textCenter green" size="large" style={{ marginBottom: '15px' }}>
          or Signin with Social Media
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Button type="primary"><Icon type="facebook" /><IntlMessages id="page.signInFacebook" /></Button>
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Button type="danger"><Icon type="google" /> <IntlMessages id="page.signInGoogle" /></Button>
          </Col>
        </InputGroup>

         <InputGroup size="large" style={{ marginBottom: '15px' }}>
         <Row  gutter={16} >
            <Col span="12">
              <Button type="dashed" ghost onClick={()=> this.props.history.push('/')} >register</Button>
            </Col>
            <Col span="12">
              <Button type="dashed" ghost>forgot password</Button>
            </Col>
          </Row>
        </InputGroup>
        
      </ContentHolder>
  </Col>
</Row>
</SigninWrapper>
    );
  }
}

export default UserLogin;