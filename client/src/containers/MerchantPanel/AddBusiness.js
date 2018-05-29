import React, { Component } from 'react';
import { Steps, Button, message, Icon, Popover } from 'antd';
import Box from '../../components/utility/box';
import AddBusinessIntro from './Forms/AddBusinessIntro';
import FindMyBusiness from './Forms/FindMyBusiness';
import TouchUp from './Forms/TouchUp';
import Suppliers from './Forms/Suppliers';
import BusinessCardHorizontal from './Forms/BusinessCardHorizontal';
import Services from './Forms/Services';
import AddMerchant from './Forms/AddMerchant';
import AddBusinessTabComponent from './Forms/AddBusinessTabComponent';

import { InputGroup } from '../../components/uielements/input';

import { getView } from '../../helpers/utility';
import { ViewPort } from '../../helpers/constants';

import Tabs, { TabPane } from '../../components/uielements/tabs';
import PageHeader from '../../components/utility/pageHeader';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col, Layout } from 'antd';
import TopbarUser from '../Topbar/topbarUser';
import LoginUser from '../UserPanel/Forms/LoginUser';
import RegisterUser from '../UserPanel/Forms/RegisterUser';
import RequestUserPassword from '../UserPanel/Forms/RequestUserPassword';
import axios from 'axios';
import { BaseURL } from '../../helpers/constants';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const { Header, Footer, Sider, Content } = Layout;
const Step = Steps.Step;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class PlugBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      businessesList: [],
      merchantsList: [],
      changing: true,
      isAdded: false,
      formState: 1,
      merchants: this.props.merchants,
      disabledTabs: new Array(13).fill(true, 1, 13),
      tabMenuPositon: 'top'
    };
  }

  handleUpdateBusiness = businesses => {
    let businessesList = this.state.businessesList.map(x => [...x]);
    businessesList[this.getCurrent()] = businesses;
    this.setState({
      businessesList: businessesList,
      changing: !this.state.changing
    });
  };

  handleUpdateMerchant = merchant => {
    let merchantsList = this.state.merchantsList.map(x => [...x]);

    if (
      !merchantsList[this.getCurrent()] ||
      merchantsList[this.getCurrent()].indexOf(
        x => x.merchant.id === merchant.id
      ) < 0
    ) {
      if (!merchantsList[this.getCurrent()]) {
        merchantsList[this.getCurrent()] = [];
      }

      merchantsList[this.getCurrent()].push(merchant);

      this.props.handleAddMerchant(merchant);
    }

    this.setState({
      merchantsList: merchantsList
    });
  };

  handleAddBussinessToDatabase = business => {
    let merchant = this.state.merchantsList[this.state.current]
      ? this.state.merchantsList[this.state.current].find(
          x => x.place.googlePlaceId === business.googlePlaceId
        )
      : null;
    if (!merchant) {
      let merchant = {
        category: business.categories[0],
        handle: Date.now().toString(),
        createdBy: this.props.profile._id,
        ...business
      };

      axios({
        method: 'POST',
        url: `${BaseURL}/api/merchant`,
        data: merchant,
        headers: {
          Authorization: this.props.idToken,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => this.handleUpdateMerchant(res.data));
    }
  };

  handleDeleteMerchant = business => {
    let merchant = this.state.merchantsList[this.state.current].find(
      x => x.place.googlePlaceId === business.googlePlaceId
    );
    if (merchant) {
      let merchantsList = this.state.merchantsList.map(x => [...x]);
      let merchants = merchantsList[this.state.current].filter(
        x => x.place.googlePlaceId != business.googlePlaceId
      );
      merchantsList[this.state.current] = merchants;
      this.setState({
        merchantsList
      });

      this.props.handleRemoveMerchant(merchant);
    }
  };

  handleDeleteBusinessFromDatabase = business => {
    let merchant = this.state.merchantsList[this.state.current].find(
      x => x.place.googlePlaceId === business.googlePlaceId
    );
    if (merchant) {
      axios({
        method: 'POST',
        url: `${BaseURL}/api/merchant/delete`,
        data: {
          merchant_id: merchant._id
        },
        headers: {
          Authorization: this.props.idToken,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => this.handleDeleteMerchant(business))
        .catch(err => console.log(err));
    }
  };

  next = () => {
    const current = this.getCurrent() + 1;
    this.setState({ current });
    let disabledTabs = this.state.disabledTabs;
    disabledTabs[current] = false;
    this.setState({
      current,
      disabledTabs
    });
  };

  prev = () => {
    const current = this.getCurrent() - 1;
    this.setState({ current });
  };

  getCurrent = () => {
    if (this.props.isLoggedIn) {
      return this.state.current;
    }

    return this.state.current > 1 ? 0 : this.state.current;
  };

  handleTabChange = key => {
    this.setState({
      formState: key
    });
  };

  handleMainTabChange = key => {
    if (!this.state.disabledTabs[parseInt(key)]) {
      this.setState({
        current: parseInt(key)
      });
    }
  };

  // handleWindowResize = () => {
  //   this.setState({
  //     tabMenuPositon: getView() === ViewPort.DesktopView ? 'right' : 'top'
  //   });
  // };

  bindDataToState = (merchants, profileId) => {
    merchants = merchants.filter(x => x.createdBy === profileId);
    let merchantsList = [];
    merchantsList[1] = merchants.filter(x => x.category === 'merchant');
    merchantsList[2] = merchants.filter(x => x.category === 'parent');
    merchantsList[3] = merchants.filter(x => x.category === 'child');
    merchantsList[4] = merchants.filter(x => x.category === 'supplier');
    merchantsList[5] = merchants.filter(x => x.category === 'b2b_customers');
    merchantsList[6] = merchants.filter(x => x.category === 'services');
    merchantsList[7] = merchants.filter(x => x.category === 'competitors');
    merchantsList[8] = merchants.filter(x => x.category === 'associations');

    let businessesList = [];
    businessesList[1] = merchantsList[1].map(x => x.place);
    businessesList[2] = merchantsList[2].map(x => x.place);
    businessesList[3] = merchantsList[3].map(x => x.place);
    businessesList[4] = merchantsList[4].map(x => x.place);
    businessesList[5] = merchantsList[5].map(x => x.place);
    businessesList[6] = merchantsList[6].map(x => x.place);
    businessesList[7] = merchantsList[7].map(x => x.place);
    businessesList[8] = merchantsList[8].map(x => x.place);

    this.setState({
      merchantsList,
      businessesList
    });

    return businessesList;
  };

  componentDidMount = () => {
    // this.handleWindowResize();
    // window.addEventListener('resize', this.handleWindowResize);

    if (this.props.isLoggedIn && this.props.profile) {
      let businessesList = this.bindDataToState(
        this.props.merchants,
        this.props.profile._id
      );
      console.log(businessesList);
      if (businessesList.length > 0) {
        for (let i = businessesList.length - 1; i > 1; i--) {
          if (businessesList[i] && businessesList[i].length > 0) {
            let disabledTabs = this.state.disabledTabs.fill(false, 0, i + 1);
            this.setState({
              disabledTabs: disabledTabs
            });
            break;
          }
        }
      }
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoggedIn && nextProps.profile) {
      let businessesList = this.bindDataToState(
        nextProps.merchants,
        nextProps.profile._id
      );
      if (businessesList.length > 0) {
        for (let i = businessesList.length - 1; i > 1; i--) {
          if (businessesList[i] && businessesList[i].length > 0) {
            let disabledTabs = this.state.disabledTabs.fill(false, 0, i + 1);
            this.setState({
              disabledTabs: disabledTabs
            });
            break;
          }
        }
      }
    }
  };

  render() {
    let step1Content = <LoginUser login={this.props.login} />;
    switch (this.state.formState) {
      case '3':
        step1Content = (
          <RegisterUser
            login={this.props.login}
            handleTabChange={this.handleTabChange}
          />
        );
        break;
      case '5':
        step1Content = (
          <RequestUserPassword handleTabChange={this.handleTabChange} />
        );
        break;
      default:
        step1Content = (
          <LoginUser
            login={this.props.login}
            handleTabChange={this.handleTabChange}
            idToken={this.props.idToken}
          />
        );
        break;
    }

    let steps = [
      {
        title: 'Login or Register',
        icon: 'lock',
        content: step1Content,
        description: 'Please login or register so you can add your business',
        help: 'soemthing here to help'
      },
      {
        title: '2 Minute Intro',
        icon: 'bell',
        content: <AddBusinessIntro />,
        description:
          'Watch this short video and learn more about plugging your business with other businesses and consumers.',
        help: 'soemthing here to help'
      },
      {
        title: 'Find my Business',
        icon: 'environment-o',
        content: (
          <BusinessCardHorizontal
            category="merchant"
            businesses={this.state.businessesList[1]}
            merchants={this.state.merchantsList[1]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={
              this.handleDeleteBusinessFromDatabase
            }
            handleUpdateMerchant={this.handleUpdateMerchant}
            isAdded={this.state.isAdded}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Parent Company',
        icon: 'team',
        content: (
          <BusinessCardHorizontal
            category="parent"
            businesses={this.state.businessesList[2]}
            merchants={this.state.merchantsList[2]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={
              this.handleDeleteBusinessFromDatabase
            }
            handleUpdateMerchant={this.handleUpdateMerchant}
            isAdded={this.state.isAdded}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Child Company',
        icon: 'usergroup-add',
        content: (
          <BusinessCardHorizontal
            category="child"
            businesses={this.state.businessesList[3]}
            merchants={this.state.merchantsList[3]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={
              this.handleDeleteBusinessFromDatabase
            }
            handleUpdateMerchant={this.handleUpdateMerchant}
            isAdded={this.state.isAdded}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Suppliers',
        icon: 'shopping-cart',
        content: (
          <BusinessCardHorizontal
            category="supplier"
            businesses={this.state.businessesList[4]}
            merchants={this.state.merchantsList[4]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={
              this.handleDeleteBusinessFromDatabase
            }
            handleUpdateMerchant={this.handleUpdateMerchant}
            isAdded={this.state.isAdded}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'B2B Customers',
        icon: 'shop',
        content: (
          <BusinessCardHorizontal
            category="b2b_customers"
            businesses={this.state.businessesList[5]}
            merchants={this.state.merchantsList[5]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={
              this.handleDeleteBusinessFromDatabase
            }
            handleUpdateMerchant={this.handleUpdateMerchant}
            isAdded={this.state.isAdded}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Professional Services',
        icon: 'user',
        content: (
          <BusinessCardHorizontal
            category="services"
            businesses={this.state.businessesList[6]}
            merchants={this.state.merchantsList[6]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={
              this.handleDeleteBusinessFromDatabase
            }
            handleUpdateMerchant={this.handleUpdateMerchant}
            isAdded={this.state.isAdded}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Competitor Tracker',
        content: 'Second-content',
        icon: 'meh-o',
        content: (
          <BusinessCardHorizontal
            category="competitors"
            businesses={this.state.businessesList[7]}
            merchants={this.state.merchantsList[7]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={
              this.handleDeleteBusinessFromDatabase
            }
            handleUpdateMerchant={this.handleUpdateMerchant}
            isAdded={this.state.isAdded}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Business Associations',
        icon: 'global',
        content: (
          <BusinessCardHorizontal
            category="associations"
            businesses={this.state.businessesList[8]}
            merchants={this.state.merchantsList[8]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={
              this.handleDeleteBusinessFromDatabase
            }
            handleUpdateMerchant={this.handleUpdateMerchant}
            isAdded={this.state.isAdded}
            {...this.props}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Marketing Services',
        icon: 'desktop',
        content: <Services />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Government',
        icon: 'desktop',
        content: <Services />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'POS Systems',
        icon: 'desktop',
        content: <Services />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'POS Systems',
        icon: 'desktop',
        content: <Services />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Credit Card Processor',
        icon: 'credit-card',
        content: <Services />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Closing Details',
        icon: 'profile',
        content: <AddMerchant />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Preview',
        icon: 'trophy',
        content: <TouchUp />,
        description: '',
        help: 'soemthing here to help'
      }
    ];

    let current = this.getCurrent();
    let filteredSteps = this.props.isLoggedIn
      ? steps.slice(1, steps.length)
      : steps.slice(0, 2).reverse();

    return (
      <LayoutWrapper>
        <Box>
          <Tabs
            activeKey={`${this.state.current}`}
            onChange={this.handleMainTabChange}
            size="small"
            tabPosition="right"
            // tabPosition={this.state.tabMenuPositon}
          >
            {filteredSteps.map((step, i) => (
              <TabPane
                tab={
                  <span>
                    <Icon type={step.icon} />
                    {step.title}
                  </span>
                }
                disabled={this.state.disabledTabs[i]}
                key={i}
              >
                <AddBusinessTabComponent
                  title={step.title}
                  help={step.help}
                  description={step.description}
                  content={step.content}
                  isDisplayPrevious={this.state.current > 0}
                  isDisplayNext={
                    filteredSteps.length > 0 &&
                    (this.state.current < filteredSteps.length - 1 ||
                      step.title.indexOf('Login') >= 0)
                  }
                  isDisabledNext={step.title.indexOf('Login') >= 0}
                  isDisplayDone={
                    this.state.current === filteredSteps.length - 1 &&
                    step.title.indexOf('Login') < 0
                  }
                  isDisabledDone={false}
                  handleNext={this.next}
                  handlePrevious={this.prev}
                />
              </TabPane>
            ))}
          </Tabs>
        </Box>
      </LayoutWrapper>
    );
  }
}
export default PlugBusiness;
