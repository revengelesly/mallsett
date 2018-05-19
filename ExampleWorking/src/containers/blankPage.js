
import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Steps, Button, message, Icon, Popover } from 'antd';
import Box from '../components/utility/box';
import PluggIntroduction from '../components/PanelMerchants/Forms/PluggIntroduction';
import FindMyBusiness from '../components/PanelMerchants/Forms/FindMyBusiness';
import AssignedPhoneNumber from'../components/PanelMerchants/Forms/AssignedPhoneNumber';
import ServiceCard from '../components/PanelMerchants/Forms/ServiceCard';
import Competitors from '../components/PanelMerchants/Forms/Competitors';
import TouchUp from '../components/PanelMerchants/Forms/TouchUp';
import Suppliers from '../components/PanelMerchants/Forms/Suppliers';
import Services from '../components/PanelMerchants/Forms/Services';
import ProfessionalServices from '../components/PanelMerchants/Forms/ProfessionalServices';
import Customers from '../components/PanelMerchants/Forms/Customers';
import CreditCardProcessor from '../components/PanelMerchants/Forms/CreditCardProcessor';
import BusinessAssociations from '../components/PanelMerchants/Forms/BusinessAssociations';
import CompletePlugBusiness from '../components/PanelMerchants/Forms/CompletePlugBusiness';

import Input, { InputGroup } from '../components/uielements/input';


import PageHeader from '../components/utility/pageHeader';
import LayoutWrapper from '../components/utility/layoutWrapper';
import IntlMessages from '../components/utility/intlMessages';
import { Row, Col } from 'antd';

const TabPane = Tabs.TabPane;

const Step = Steps.Step;

const steps = [{
  title: 'View All',
  icon: 'bell',
  content: <PluggIntroduction />,
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help'
}, {
  title: 'Restaurants',
  icon: 'environment-o',
  content: <FindMyBusiness />,
  description: '',
  help: 'Groceries'
}, {
  title: 'Services',
  icon: 'team',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Professional Services',
  icon: 'usergroup-add',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
},  {
  title: 'Find my Suppliers',
  icon: 'shopping-cart',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Find My B2B Customers',
  icon: 'shop',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Find my Professional Services',
  icon: 'user',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Track my Competitors',
  content: 'Second-content',
  icon: 'meh-o',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Join Business Associations',
  icon: 'global',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'POS Systems',
  icon: 'desktop',
  content: <Services />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Credit Card Processor',
  icon: 'credit-card',
  content: <Services />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Finalize',
  icon: 'trophy',
  content: <TouchUp />,
  description: '',
  help: 'soemthing here to help'
}];

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <LayoutWrapper>
      
      <PageHeader>
          {<IntlMessages id="Panel.Merchant.Header" />}
        </PageHeader>
     <Box>
      
                <Row gutter={24}>
                  <Col span="24">
        <Tabs defaultActiveKey={current}>
          {steps.map(item => 

            <TabPane key={item.title} tab={<span><Icon type={item.icon} /> {item.title}</span>} >
            {steps[this.state.current].content}
            </TabPane>
    
          )}
        </Tabs>
       </Col>
                  
                </Row>
              
     </Box>
      </LayoutWrapper>
    );
  }
}