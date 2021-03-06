import React, { Component } from 'react';
import { connect } from 'react-redux';
import userpic from '../../image/user1.png';
import authAction from '../../redux/auth/actions';
import { Modal, Icon } from 'antd';
import UserPanel from '../UserPanel/userPanel';
import { withRouter } from 'react-router';

const { login, logout, loginSuccess } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.directHashLinks = ['#terms', '#privacy', '#bio', '#login', '#register', '#forgotpassword'];
    this.state = {
      hashRoute: (this.props.location && this.props.location.hash) || '',
      hasDirectLink: false,
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  componentDidMount = () => {
    this.setState({
      visible: this.directHashLinks.indexOf(this.state.hashRoute) > -1 || false,
      hasDirectLink:
        this.directHashLinks.indexOf(this.state.hashRoute) > -1 || false
    });
  };

  render() {
    return (
      <div>
        {this.props.isLoggedIn && (
          <div className="isoImgWrapper" onClick={this.showModal}>
            <img
              alt="user default"
              style={{ borderRadius: '50%', maxWidth: '10' }}
              src={
                this.props.profile && this.props.profile.avatar
                  ? this.props.profile.avatar
                  : userpic
              }
            />
            <span className="userActivity online" />
          </div>
        )}
        {!this.props.isLoggedIn && (
          <span onClick={this.showModal}>
            {' '}
            <Icon type="key" /> Login / Register
          </span>
        )}
        <Modal
          title={null}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="80%"
          footer={null}
        >
          <UserPanel
            login={this.props.login}
            logout={this.props.logout}
            isLoggedIn={this.props.isLoggedIn}
            profile={this.props.profile}
            idToken={this.props.idToken}
            hashRoute={this.state.hashRoute}
            hasDirectLink={this.state.hasDirectLink}
            contents={this.props.contents}
            {...this.props}
          />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn:
      state.Auth.get('idToken') !== null &&
      state.Auth.get('idToken').indexOf('Bear') !== -1,
    idToken: state.Auth.get('idToken'),
    profile: state.Auth.get('profile'),
    contents: state.Contents.get('contents')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    login: (email, password) => dispatch(login(email, password)),
    loginSuccess: (user, profile) => dispatch(loginSuccess(user, profile))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopbarUser)
);
