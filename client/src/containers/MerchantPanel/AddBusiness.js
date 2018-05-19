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
import TopbarUser from '../Topbar/topbarUser';

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
      changing: true,
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

  handleTabChange = (key) => {}
  
  render() {
    let steps = [
      {
        title: 'Login or Register',
        icon: 'lock',
        content: <TopbarUser />,
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
        content: <BusinessCardHorizontal category='merchant' businesses={this.state.businessesList[1]} handleUpdateBusiness={this.handleUpdateBusiness} />,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Parent Company',
        icon: 'team',
        content: <BusinessCardHorizontal category='parent' businesses={this.state.businessesList[2]} handleUpdateBusiness={this.handleUpdateBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Child Company',
        icon: 'usergroup-add',
        content: <BusinessCardHorizontal category='child' businesses={this.state.businessesList[3]} handleUpdateBusiness={this.handleUpdateBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find my Suppliers',
        icon: 'shopping-cart',
        content: <BusinessCardHorizontal category='supplier' businesses={this.state.businessesList[4]} handleUpdateBusiness={this.handleUpdateBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find My B2B Customers',
        icon: 'shop',
        content: <BusinessCardHorizontal category='b2b_customers' businesses={this.state.businessesList[5]} handleUpdateBusiness={this.handleUpdateBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Find my Professional Services',
        icon: 'user',
        content: <BusinessCardHorizontal category='services' businesses={this.state.businessesList[6]} handleUpdateBusiness={this.handleUpdateBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Track my Competitors',
        content: 'Second-content',
        icon: 'meh-o',
        content: <BusinessCardHorizontal category='competitors' businesses={this.state.businessesList[7]} handleUpdateBusiness={this.handleUpdateBusiness}/>,
        description: '',
        help: 'soemthing here to help'
      },
      {
        title: 'Join Business Associations',
        icon: 'global',
        content: <BusinessCardHorizontal category='associations' businesses={this.state.businessesList[8]} handleUpdateBusiness={this.handleUpdateBusiness}/>,
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
    let filteredSteps = this.props.isLoggedIn ? steps.slice(1, steps.length) : steps.slice(0, 2).reverse();

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
                    {filteredSteps.length > 1 && current < filteredSteps.length - 1 && (
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

                    {this.props.isLoggedIn && current === filteredSteps.length - 1 && (
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
