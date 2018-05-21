import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Modal } from "antd";
import AddBusiness from '../MerchantPanel/AddBusiness';
import authAction from '../../redux/auth/actions';

const { login } = authAction;

class TopBarAddMerchants extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <div type="" onClick={this.showModal}><Icon type="shop" /> Add My Business</div>
        <Modal
          visible={this.state.visible}
          footer={null}
          style={{ top: 70}}
          width={800}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="60%"
        >
          <AddBusiness isLoggedIn={this.props.isLoggedIn} login={this.props.login} profile={this.props.profile} idToken={this.props.idToken}/>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Auth.get('idToken') !== null && state.Auth.get('idToken') !== 'LOGIN_ERROR',
    profile: state.Auth.get('profile'),
    idToken: state.Auth.get('idToken'),
    ...state.Auth.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarAddMerchants);
