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

import { InputGroup } from '../../components/uielements/input';

import PageHeader from '../../components/utility/pageHeader';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col, Layout } from 'antd';
import TopbarUser from '../Topbar/topbarUser';
import LoginUser from '../UserPanel/Forms/LoginUser';
import axios from 'axios';
import { BaseURL } from '../../helpers/constants';

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
      isAdded: false
    };
  }

  handleUpdateBusiness = (businesses) => {
    let businessesList = this.state.businessesList.map(x => ([...x]));
    businessesList[this.getCurrent()] = businesses;
    this.setState({
      businessesList: businessesList,
      changing: !this.state.changing
    });
  };

  handleUpdateMerchant = merchant => {
    let merchantsList = this.state.merchantsList.map(x => [...x]);

    if (!merchantsList[this.getCurrent()] ||
        merchantsList[this.getCurrent()].indexOf(x => x.merchant.id === merchant.id) < 0) {
      if (!merchantsList[this.getCurrent()]) {
        merchantsList[this.getCurrent()] = [];
      }

      merchantsList[this.getCurrent()].push(merchant);
    }

    this.setState({
      merchantsList: merchantsList,
      isAdded: true
    });
  };



  handleAddBussinessToDatabase = (business) => {
    let merchant =  this.state.merchantsList[this.state.current] ?
      (this.state.merchantsList[this.state.current].find(x => x.place.googlePlaceId === business.googlePlaceId)) :
      null;
    if (!merchant) {
      let merchant = {
        category: business.categories[0],
        handle: Date.now().toString(),
        createdBy: this.props.profile.email,
        ...business
      };

      this.setState({
        isAdded: false
      });

      axios({
        method: 'POST',
          url: `${BaseURL}/api/merchant`,
          data: merchant,
          headers: {
            'Authorization': this.props.idToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      }).then(res => this.handleUpdateMerchant(res.data));
    }
  }

  handleDeleteMerchant = (business) => {
    let merchant = this.state.merchantsList[this.state.current].find(x => x.place.googlePlaceId === business.googlePlaceId);
    if (merchant) {
      let merchantsList = this.state.merchantsList.map(x => [...x]);
      let merchants = merchantsList[this.state.current].filter(x => x.place.googlePlaceId != business.googlePlaceId);
      merchantsList[this.state.current] = merchants;
      this.setState({
        merchantsList
      });
    }
  }

  handleDeleteBusinessFromDatabase = (business) => {
    let merchant = this.state.merchantsList[this.state.current].find(x => x.place.googlePlaceId === business.googlePlaceId);
    if (merchant) {
      axios({
        method: 'POST',
          url: `${BaseURL}/api/merchant/delete`,
          data: {
            'merchant_id': merchant._id
          },
          headers: {
            'Authorization': this.props.idToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      }).then(res => this.handleDeleteMerchant(business))
      .catch(err => console.log(err))
    }
  }

  next() {
    const current = this.getCurrent() + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.getCurrent() - 1;
    this.setState({ current });
  }

  getCurrent() {
    if (this.props.isLoggedIn) {
      return this.state.current;
    }

    return this.state.current > 1 ? 0 : this.state.current;
  }

  componentDidMount = () => {
    axios({
      method: 'GET',
        url: `${BaseURL}/api/merchant/`,
        params: {
          email: encodeURI(this.props.profile.email)
        },
        headers: {
          'Authorization': this.props.idToken,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    }).then(res => {
      let merchants = res.data.filter(x => x.createdBy === this.props.profile.email);
      let businessesList = [];
      businessesList[1] = merchants.filter(x => x.category === 'merchant').map(x => x.place);
      businessesList[2] = merchants.filter(x => x.category === 'parent').map(x => x.place);
      businessesList[3] = merchants.filter(x => x.category === 'child').map(x => x.place);
      businessesList[4] = merchants.filter(x => x.category === 'supplier').map(x => x.place);
      businessesList[5] = merchants.filter(x => x.category === 'b2b_customers').map(x => x.place);
      businessesList[6] = merchants.filter(x => x.category === 'services').map(x => x.place);
      businessesList[7] = merchants.filter(x => x.category === 'competitors').map(x => x.place);
      businessesList[8] = merchants.filter(x => x.category === 'associations').map(x => x.place);

      this.setState({
        merchants,
        businessesList
      });
    })
    .catch(err => console.log(err))
  }

  handleTabChange = key => {};

  render() {
    let steps = [
      {
        title: 'Login or Register',
        icon: 'lock',
        content: <LoginUser login={this.props.login} />,
        description: 'Please login or register so you can add your business',
        help: 'soemthing here to help'
      },
      {
        title: '2 Minute Introduction',
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
            handleDeleteBusinessFromDatabase={this.handleDeleteBusinessFromDatabase}
            isAdded={this.state.isAdded}
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
            handleDeleteBusinessFromDatabase={this.handleDeleteBusinessFromDatabase}
            isAdded={this.state.isAdded}
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
            handleDeleteBusinessFromDatabase={this.handleDeleteBusinessFromDatabase}
            isAdded={this.state.isAdded}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find my Suppliers',
        icon: 'shopping-cart',
        content: (
          <BusinessCardHorizontal
            category="supplier"
            businesses={this.state.businessesList[4]}
            merchants={this.state.merchantsList[4]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={this.handleDeleteBusinessFromDatabase}
            isAdded={this.state.isAdded}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find My B2B Customers',
        icon: 'shop',
        content: (
          <BusinessCardHorizontal
            category="b2b_customers"
            businesses={this.state.businessesList[5]}
            merchants={this.state.merchantsList[5]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={this.handleDeleteBusinessFromDatabase}
            isAdded={this.state.isAdded}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find my Professional Services',
        icon: 'user',
        content: (
          <BusinessCardHorizontal
            category="services"
            businesses={this.state.businessesList[6]}
            merchants={this.state.merchantsList[6]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={this.handleDeleteBusinessFromDatabase}
            isAdded={this.state.isAdded}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Track my Competitors',
        content: 'Second-content',
        icon: 'meh-o',
        content: (
          <BusinessCardHorizontal
            category="competitors"
            businesses={this.state.businessesList[7]}
            merchants={this.state.merchantsList[7]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={this.handleDeleteBusinessFromDatabase}
            isAdded={this.state.isAdded}
          />
        ),
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Join Business Associations',
        icon: 'global',
        content: (
          <BusinessCardHorizontal
            category="associations"
            businesses={this.state.businessesList[8]}
            merchants={this.state.merchantsList[8]}
            handleUpdateBusiness={this.handleUpdateBusiness}
            handleAddBussinessToDatabase={this.handleAddBussinessToDatabase}
            handleDeleteBusinessFromDatabase={this.handleDeleteBusinessFromDatabase}
            isAdded={this.state.isAdded}
          />
        ),
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
        title: 'Lastly',
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
          <Row gutter={24}>
            <Col span="24">
              <Layout>
                <Content style={{ padding: '0 20px' }}>
                  <h3 style={{ marginTop: 20, marginBottom: 0 }}>
                    {filteredSteps[current].title}{' '}
                    <Popover
                      content={<div>{filteredSteps[current].help}</div>}
                      title={filteredSteps[current].title}
                      trigger="click"
                    >
                      <Button type="dashed" icon="question-circle-o">
                        {' '}
                        Help
                      </Button>
                    </Popover>
                  </h3>
                  <p style={{ marginBottom: 20 }}>
                    {' '}
                    {filteredSteps[current].description}{' '}
                  </p>
                  <div className="steps-content">
                    {filteredSteps[current].content}{' '}
                  </div>
                  <div className="steps-action">
                    <InputGroup style={{ marginBottom: '15px' }}>
                      <Row gutter={24} style={{ marginTop: 8 }}>
                        <Col span="8" />
                        {current <= 0 && <Col span="8" />}

                        {current > 0 && (
                          <Col span="8">
                            <Button
                              className="fullButton square"
                              style={{ marginRight: 8 }}
                              onClick={() => this.prev()}
                            >
                              Previous
                            </Button>
                          </Col>
                        )}
                        {filteredSteps.length > 1 &&
                          current < filteredSteps.length - 1 && (
                            <Col span="8">
                              <Button
                                className="fullButton square"
                                type="primary"
                                style={{ marginRight: 8 }}
                                onClick={() => this.next()}
                              >
                                Next
                              </Button>
                            </Col>
                          )}

                        {current === filteredSteps.length - 1 && (
                          <Col span="8">
                            <Button
                              className="fullButton square"
                              type="primary"
                              style={{ marginRight: 8 }}
                              onClick={() =>
                                message.success('Processing complete!')
                              }
                            >
                              Done
                            </Button>
                          </Col>
                        )}
                      </Row>
                    </InputGroup>
                  </div>
                </Content>
                <Sider
                  style={{ background: 'white', padding: '0 10px'}}
                  breakpoint='lg'>
                  <Steps direction="vertical" size="small" current={current}>
                    {filteredSteps.map(item => (
                      <Step
                        key={item.title}
                        icon={<Icon type={item.icon} />}
                        title={item.title}
                      />
                    ))}
                  </Steps>
                </Sider>
              </Layout>
            </Col>
          </Row>
        </Box>
      </LayoutWrapper>
    );
  }
}
export default PlugBusiness;
