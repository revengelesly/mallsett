import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopbarModal from './topbarModal.style';
import UserSessions from './userSessions';

class TopbarUserSessions extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.showModal = this.showModal.bind(this);
    this.state = {
      visiblity: false
    };
  }

  handleOk() {
    this.setState({
      visible: false
    });
  }
  handleCancel() {
    this.setState({
      visible: false
    });
  }
  showModal() {
    this.setState({
      visible: true
    });
  }
  render() {
    const { customizedTheme } = this.props;
    const { visible } = this.state;
    return (
      <div onClick={this.showModal} className="list-icons">
        {/* <Button type="primary" onClick={this.showModal}>Open</Button> */}
        <i
          className="ion-person-add small-margin-right "
        />
        Register / Login
        <TopbarModal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="80%"
          footer={null}
        >
          <div className="isoSearchContainer">
            {visible ? <UserSessions /> : ''}
          </div>
        </TopbarModal>
      </div>
    );
  }
}

export default connect(state => ({
  ...state.App.toJS()
}))(TopbarUserSessions);
