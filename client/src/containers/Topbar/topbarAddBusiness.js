import React from 'react';
import { connect } from 'react-redux';
import { Icon, Modal } from 'antd';
import AddBusiness from '../MerchantPanel/AddBusiness';
import authAction from '../../redux/auth/actions';
import merchantAction from '../../redux/merchant/actions';
import { BaseURL } from '../../helpers/constants';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh: true});

const { login } = authAction;
const { setMerchant } = merchantAction;

class TopBarAddMerchants extends React.Component {
  state = {
    visible: false,
    merchants: [],
    isBusiness: this.props.merchant && this.props.merchant.businessType && this.props.merchant.businessType.length > 0,
    merchant: this.props.merchant
  };

  showModal = () => {
    if (this.state.isBusiness) {
      history.push('/dashboard');
    } else {
      this.setState({
        visible: true
      });
    }
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

  setMerchantToState = (merchant) => {
    this.setState({
      merchant
    });

    // dispacht merchants
    this.props.setMerchant(merchant);
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

        // dispacht merchants
        this.props.setMerchant(res.data);
      }
    );
  }

  handleUpdateAssociate = (business) => {
    let merchant = this.state.merchant;
    if (!merchant.associates) {
      merchant.associates = []
    }

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
          merchant: res.data
        })

        // dispacht merchants
        this.props.setMerchant(res.data);
      }
      )
      .catch(err => console.log(err));
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoggedIn && nextProps.profile) {
      this.setState({
        merchant: nextProps.merchant,
        isBusiness: nextProps.merchant && nextProps.merchant.businessType && nextProps.merchant.businessType.length > 0
      })
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
          {this.state.isBusiness ? <span>Manage my Organization</span> : <span>Plug My Business</span>}
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
            setMerchant={this.setMerchantToState}
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
    merchant: state.Merchant.get('merchant'),
    ...state.App.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
    setMerchant: merchant => dispatch(setMerchant(merchant))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarAddMerchants);
