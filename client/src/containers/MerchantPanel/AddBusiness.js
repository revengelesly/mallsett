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
import { Row, Col } from 'antd';

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
      businesses: [],
    };
  }

  handleAddBusiness = (business) => {
    let businesses = this.state.businesses.map(x => ({...x}));
    businesses[this.state.current] = business;
    this.setState({
      businesses: businesses
    });
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    let steps = [
      {
        title: 'Login or Register',
        icon: 'lock',
        content: 'add login / register form here',
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
        content: <BusinessCardHorizontal business={this.state.businesses[1]} handleAddBusiness={this.handleAddBusiness} />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Parent Company',
        icon: 'team',
        content: <BusinessCardHorizontal business={this.state.businesses[2]} handleAddBusiness={this.handleAddBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Child Company',
        icon: 'usergroup-add',
        content: <BusinessCardHorizontal business={this.state.businesses[3]} handleAddBusiness={this.handleAddBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find my Suppliers',
        icon: 'shopping-cart',
        content: <BusinessCardHorizontal business={this.state.businesses[4]} handleAddBusiness={this.handleAddBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find My B2B Customers',
        icon: 'shop',
        content: <BusinessCardHorizontal business={this.state.businesses[5]} handleAddBusiness={this.handleAddBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find my Professional Services',
        icon: 'user',
        content: <BusinessCardHorizontal business={this.state.businesses[6]} handleAddBusiness={this.handleAddBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Track my Competitors',
        content: 'Second-content',
        icon: 'meh-o',
        content: <BusinessCardHorizontal business={this.state.businesses[7]} handleAddBusiness={this.handleAddBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Join Business Associations',
        icon: 'global',
        content: <BusinessCardHorizontal business={this.state.businesses[8]} handleAddBusiness={this.handleAddBusiness}/>,
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
    const { current } = this.state;
    let filteredSteps = filteredSteps = this.props.isLoggedIn ? steps.slice(1, steps.length) : steps.slice(0, 1);

    return (
      <LayoutWrapper>
        <Box>
          <Row gutter={24}>
            <Col span="24">
              <Steps size="small" current={current}>
                {filteredSteps.map(item => (
                  <Step
                    key={item.title}
                    icon={<Icon type={item.icon} />}
                    progressDot="true"
                  />
                ))}
              </Steps>
              <h3 style={{ marginTop: 20, marginBottom: 0 }}>
                {filteredSteps[this.state.current].title}{' '}
                <Popover
                  content={<div>{filteredSteps[this.state.current].help}</div>}
                  title={filteredSteps[this.state.current].title}
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
                {filteredSteps[this.state.current].description}{' '}
              </p>
              <div className="steps-content">
                {filteredSteps[this.state.current].content}{' '}
              </div>
              <div className="steps-action">
                <InputGroup style={{ marginBottom: '15px' }}>
                  <Row gutter={24} style={{ marginTop: 8 }}>
                    <Col span="8" />
                    {this.state.current <= 0 && <Col span="8" />}

                    {this.state.current > 0 && (
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
                    {filteredSteps.length > 1 && this.state.current < filteredSteps.length - 1 && (
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

                    {this.state.current === filteredSteps.length - 1 && (
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
            </Col>
          </Row>
        </Box>
      </LayoutWrapper>
    );
  }
}
export default PlugBusiness;
