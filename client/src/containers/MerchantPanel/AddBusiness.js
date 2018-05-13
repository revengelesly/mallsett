import React, { Component } from 'react';
import { Steps, Button, message, Icon, Popover } from 'antd';
import Box from '../../components/utility/box';
import AddBusinessIntro from './Forms/AddBusinessIntro';
import FindMyBusiness from './Forms/FindMyBusiness';
import TouchUp from './Forms/TouchUp';
import Suppliers from './Forms/Suppliers';
import Services from './Forms/Services';

import { InputGroup } from '../../components/uielements/input';

import PageHeader from '../../components/utility/pageHeader';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col } from 'antd';


const Step = Steps.Step;

const steps = [{
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
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help'
},{
  title: 'Find my Business',
  icon: 'environment-o',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Parent Company',
  icon: 'team',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help'
}, {
  title: 'Child Company',
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

class PlugBusiness extends React.Component {
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
        <Steps  size="small" current={current}>
          {steps.map(item => <Step key={item.title} icon={<Icon type={item.icon} />}  progressDot="true"  />
          
    
          )}
        </Steps>
        <h3 style={{ marginTop: 20, marginBottom: 0 }}> 
        {steps[this.state.current].title} <Popover content={(<div>
                {steps[this.state.current].help} 
              </div>)} 
            title={steps[this.state.current].title}  trigger="click">
          <Button type="dashed" icon="question-circle-o"> Help</Button>
          </Popover> 
         </h3>
         <p style={{marginBottom: 20 }}> {steps[this.state.current].description} </p>
        <div className="steps-content">{steps[this.state.current].content}  </div>
        <div className="steps-action">
        <InputGroup  style={{ marginBottom: '15px' }}>
             <Row gutter={24} style={{ marginTop: 8 }}>
            <Col span="8"></Col>
            {
           this.state.current <= 0
             && 
             <Col span="8"></Col>
            }
            
            
               
                

          {
            this.state.current > 0
            &&     
                <Col span="8">
                  <Button className="fullButton square" style={{ marginRight: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                </Col>
               
              
              
            
          }
          {
            this.state.current < steps.length - 1
            &&
            <Col span="8">
                  <Button className="fullButton square" type="primary" style={{ marginRight: 8 }} onClick={() => this.next()}>
                    Next
                  </Button>
                </Col>
          }
          
          {
            this.state.current === steps.length - 1
            &&
            <Col span="8">
                  <Button className="fullButton square" type="primary" style={{ marginRight: 8 }} 
                  onClick={() => message.success('Processing complete!')}>
                    Done
                  </Button>
                </Col>
          }
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