import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Modal } from "antd";
import AddBusiness from '../MerchantPanel/AddBusiness';

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
        >
          <AddBusiness isLoggedIn={this.props.isLoggedIn} />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Auth.get('idToken') !== null && state.Auth.get('idToken') !== 'LOGIN_ERROR',
    ...state.Auth.toJS()
  };
}

export default connect(mapStateToProps)(TopBarAddMerchants);
