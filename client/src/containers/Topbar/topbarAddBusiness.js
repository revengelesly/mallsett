import React from 'react';
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
    merchant: null
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

  setMerchant = (merchant) => {
    this.setState({
      merchant
    });
  }

  handleUpdateMerchant = (business) => {
    let merchant = this.state.merchant;

    if (!merchant) {
      merchant = {
        category: 'merchant',
        handle: Date.now().toString(),
        createdBy: this.props.profile._id,
        place: {
          ...business
        }
      };
    } else {
      merchant = {
        ...merchant,
        merchant_id: merchant._id,
        place: merchant.place && merchant.place.googlePlaceId ? null : { ...business } // remove or update
      }
    }

    axios({
      method: 'POST',
      url: `${BaseURL}/api/merchant`,
      data: merchant,
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
        console.log(res.data);
        this.setState({
          merchant: res.data
        })
      }
    );
  }

  handleUpdateAssociate = (business) => {
    let merchant = this.state.merchant;
    let associate = merchant.associates.find(
      x => x && x.googlePlaceId === business.googlePlaceId
    );

    if (!associate) {
      merchant.associates.push(business);
    } else {
      merchant.associates = merchant.associates.filter(
        x => x && x.googlePlaceId !== business.googlePlaceId
      );
    }

    axios({
      method: 'POST',
      url: `${BaseURL}/api/merchant`,
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        ...merchant,
        merchant_id: merchant._id
      }
    })
      .then(res => {
        console.log('associate', res.data);
        this.setState({
          merchant
        })}
      )
      .catch(err => console.log(err));
  };

  bindDataWhenLogin = (merchants, profileId) => {
    let merchant = merchants.find(x => x.createdBy === profileId);

    if (merchant) {
      this.setState({
        isBusiness: true,
        merchant
      });

      // dispacht merchants
      this.props.getMerchant(merchant);
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

  render() {
    return (
      <div>
        <div type="" onClick={this.showModal}>
          <Icon type="shop" />
          {!this.state.isBusiness && <span>Plug My Business</span>}
          {this.state.isBusiness && <span>Plug my Business</span>}
        </div>
        <Modal
          visible={this.state.visible}
          footer={null}
          style={{ top: 70 }}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="80%"
        >
          <AddBusiness
            isLoggedIn={this.props.isLoggedIn}
            login={this.props.login}
            profile={this.props.profile}
            idToken={this.props.idToken}
            merchant={this.state.merchant}
            handleUpdateAssociate={this.handleUpdateAssociate}
            handleUpdateMerchant={this.handleUpdateMerchant}
            setMerchant={this.setMerchant}
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
