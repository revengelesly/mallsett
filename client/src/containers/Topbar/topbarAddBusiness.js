import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Modal } from 'antd';
import AddBusiness from '../MerchantPanel/AddBusiness';
import authAction from '../../redux/auth/actions';
import merchantAction from '../../redux/merchant/actions';
import { BaseURL } from '../../helpers/constants';
import axios from 'axios';

const { login } = authAction;
const { getMerchant } = merchantAction;

class TopBarAddMerchants extends React.Component {
  state = {
    visible: false,
    merchants: [],
    isBusiness: false,
    filteredMerchants: []
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  bindDataWhenLogin = (merchants, profileId) => {
    let filteredMerchants = merchants.filter(x => x.createdBy === profileId);

    if (filteredMerchants) {
      this.setState({
        isBusiness: true,
        filteredMerchants
      });

      // dispacht merchants
      this.props.getMerchant(filteredMerchants);
    }
  };

  componentDidMount = () => {
    axios({
      method: 'GET',
      url: `${BaseURL}/api/merchant`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        this.setState({
          merchants: res.data
        });


        if (this.props.isLoggedIn && this.props.profile) {
          this.bindDataWhenLogin(res.data, this.props.profile._id);
        }
      })
      .catch(err => console.log(err));
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoggedIn && nextProps.profile) {
      this.bindDataWhenLogin(this.state.merchants, nextProps.profile._id);
    } else {
      this.setState({
        isBusiness: false
      });
    }
  };

  handleAddMerchant = (merchant) => {
    let merchants = this.state.filteredMerchants.map(x => ({...x}));
    merchants.push(merchant);

    this.setState({
      filteredMerchants: merchants
    });
  }

  handleRemoveMerchant = (merchant) => {
    let merchants = this.state.filteredMerchants.map(x => ({...x}));
    merchants = merchants.filter(x => x._id != merchant._id);

    this.setState({
      filteredMerchants: merchants
    });
  }

  render() {
    return (
      <div>
        <div type="" onClick={this.showModal}>
          <Icon type="shop" />
          {!this.state.isBusiness && <span>Add My Business</span>}
          {this.state.isBusiness && <span>Manage my Business</span>}
        </div>
        <Modal
          visible={this.state.visible}
          footer={null}
          style={{ top: 70 }}
          width={800}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="80%"
        >
          <AddBusiness
            isLoggedIn={this.props.isLoggedIn}
            login={this.props.login}
            profile={this.props.profile}
            idToken={this.props.idToken}
            merchants={this.state.filteredMerchants}
            handleAddMerchant={this.handleAddMerchant}
            handleRemoveMerchant={this.handleRemoveMerchant}
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
      state.Auth.get('idToken') !== 'LOGIN_ERROR',
    profile: state.Auth.get('profile'),
    idToken: state.Auth.get('idToken'),
    ...state.App.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
    getMerchant: merchants => dispatch(getMerchant(merchants))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarAddMerchants);
