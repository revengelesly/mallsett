import React, { Component } from 'react';
import { connect } from 'react-redux';
import userpic from '../../image/user1.png';
import authAction from '../../redux/auth/actions';
import { Modal, Button, Icon } from 'antd';
import UserPanel from '../UserPanel/userPanel';


const { login, logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
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
        {this.props.isLoggedIn &&
          <div className="isoImgWrapper" onClick={this.showModal}>
            <img alt="user default" src={this.props.profile.avatar} />
            <span className="userActivity online" />
          </div>
        }
        {!this.props.isLoggedIn &&
          <Button onClick={this.showModal} type="primary" size="large">Login</Button>
        }
        <Modal
          title={null}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="80%"
          footer={null}
        >
          <UserPanel login={this.props.login} logout={this.props.logout} isLoggedIn={this.props.isLoggedIn} profile={this.props.profile} idToken={this.props.idToken} />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.Auth.get('idToken') !== null && state.Auth.get('idToken') !== 'LOGIN_ERROR',
    idToken: state.Auth.get('idToken'),
    profile: state.Auth.get('profile')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopbarUser);
