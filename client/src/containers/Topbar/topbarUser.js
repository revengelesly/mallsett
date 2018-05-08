import React, { Component } from 'react';
import { connect } from 'react-redux';
import userpic from '../../image/user1.png';
import authAction from '../../redux/auth/actions';
import { Modal } from 'antd';
import UserPanel from '../UserPanel/userPanel';


const { logout } = authAction;

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
        <div className="isoImgWrapper" onClick={this.showModal}>
          <img alt="user default" src={userpic} />
          <span className="userActivity online" />
        </div>
        <Modal
          title={null}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="80%"
          footer={null}
        >
          <UserPanel />
        </Modal>
      </div>
    );
  }
}
export default connect(null, { logout })(TopbarUser);
