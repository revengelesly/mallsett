import React from 'react';
import { connect } from 'react-redux';
import { Icon, Modal, message } from 'antd';
import AddBusiness from '../MerchantPanel/AddBusiness';
import authAction from '../../redux/auth/actions';
import merchantAction from '../../redux/merchant/actions';
import { BaseURL } from '../../helpers/constants';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({forceRefresh: true});

const { login } = authAction;
const { setMerchant, updateAssociate } = merchantAction;

class TopBarAddMerchants extends React.Component {
  state = {
    visible: false,
    merchants: [],
    isBusiness: this.props.merchant && this.props.merchant.businessType && this.props.merchant.businessType.length > 0,
    merchant: this.props.merchant,
    suggestions: []
  };

  handleClick = () => {
    if (this.props.isOnDashboard) {
      history.push('/');
    } else {
      if (this.state.isBusiness) {
        history.push('/pages/dashboard');
      } else {
        this.setState({
          visible: true
        });
      }
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
        owner: this.props.profile._id,
        creator: this.props.profile._id,
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
    ).catch(error => message.error(error.data.message));
  }

  handleRemoveAssociate = (merchant, business) => {
    console.log(business);
    axios({
      method: 'POST',
      url: `${BaseURL}/api/merchant/removeassociate`,
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        id: business.id,
        merchant_id: merchant._id
      }
    })
      .then(res => {
        console.log('associate', res.data);

        // dispacht merchants
        this.props.setMerchant(res.data);
      })
      .catch(err => console.log(err));
  }

  handleAddAssociate = (merchant, business) => {
    axios({
      method: 'POST',
      url: `${BaseURL}/api/merchant/addassociate`,
      headers: {
        Authorization: this.props.idToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        ...business,
        merchant_id: merchant._id
      }
    })
      .then(res => {
        // dispacht merchants
        this.props.setMerchant(res.data);
      })
      .catch(err => console.log(err));
  }

  handleUpdateAssociate = (business) => {
    let merchant = this.state.merchant;
    if (!merchant.associates) {
      merchant.associates = []
    }

    let associate = merchant.associates.find(
      x => x && x.id === business.id
    );

    if (!associate) {
      this.handleAddAssociate(merchant, business);
    } else {
      this.handleRemoveAssociate(merchant, business);
    }
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

  componentDidUpdate = (preProps) => {
    if (this.props.displayAddBusinessModal !== preProps.displayAddBusinessModal) {
      this.setState({
        visible: this.props.displayAddBusinessModal
      });
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          <Icon type="shop" />
          {this.props.isOnDashboard
                    ? <span>View the Site</span>
                    : this.state.isBusiness ? <span>Manage my Organization</span> : <span>Plug My Business</span>}
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
            suggestions={this.props.suggestions || []}
            contents={this.props.contents}
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
    profile: state.Auth.get('profile'),
    idToken: state.Auth.get('idToken'),
    merchant: state.Merchant.get('merchant'),
    suggestions: state.Merchant.get('suggestions'),
    contents: state.Contents.get('contents'),
    ...state.App.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
    setMerchant: merchant => dispatch(setMerchant(merchant)),
    updateAssociate: merchant => dispatch(updateAssociate(merchant))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarAddMerchants);
