import React, { Component } from 'react';
// import { connect } from 'react-redux';
import TopbarModal from './topbarModal.style';
import PlugBusiness from '../PanelMerchants/PlugBusiness';
import userpic from '../../image/user1.png';

class TopbarUser extends Component {
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
      <div onClick={this.showModal} >
        {/* <Button type="primary" onClick={this.showModal}>Open</Button> */}
         <div className="isoImgWrapper">
          <i className="ion-outlet small-margin-right "/> Plug my Business
        </div>
        <TopbarModal
          title="User Panel Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="50%"
          footer={null}
        >
          <div className="isoSearchContainer">
            {visible ? <PlugBusiness /> : ''}
          </div>
        </TopbarModal>
      </div>
    );
  }
}

export default TopbarUser;