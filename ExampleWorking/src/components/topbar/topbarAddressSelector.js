import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopbarModal from './topbarModal.style';
import CreateAddress from '../UserPanel/Forms/CreateAddress';

class TopbarAddressSelector extends Component {
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
        <i
          className="ion-ios-location small-margin-right "
        />
        111 East Flagler, Miami, FL 33142 <span className="red small-margin-left ">  change address</span>
        <TopbarModal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="60%"
          footer={null}
        >
          <div className="isoSearchContainer">
            {visible ? <CreateAddress /> : ''}
          </div>
        </TopbarModal>
      </div>
    );
  }
}

export default connect(state => ({
  ...state.App.toJS()
}))(TopbarAddressSelector);
