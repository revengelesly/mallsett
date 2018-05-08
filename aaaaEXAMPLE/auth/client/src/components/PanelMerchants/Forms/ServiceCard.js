import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card, Icon, Popover, Button } from 'antd';
import { Radio } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';
import Input, { InputGroup } from '../../../components/uielements/input';
import MerchantCategoryInputTag from './MerchantCategoryInputTag';
import BusinessLogo from './BusinessLogo';
import BusinessQuickChart from './reactVis/BusinessQuickChart';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class MerchantTitle extends Component {
  render() {
     return (
       <div>
        Panther Coffee Shop
        
        <small> 111 East Flagler,Miami, Fl 32453 | 305-589-5965 </small>
       </div>
       )
  }
}

class ServiceCard extends Component {



  render() {
    return (
        <Card title={<MerchantTitle />} bordered={true}>
        
        <Row gutter={8}>
          <Col span="6">
<BusinessLogo />
          </Col>
          <Col span="18">
          <h3>Short Pitch </h3>
          We recomend this POS system because it works great with our applciation.
          We recomend this POS system because it works great with our applciation.
          We recomend this POS system because it works great with our applciation.
          <Popover content={(
            <div>
              <p className="colorBlue"> Passes: 50% </p>
              <p className="colorPink"> Clicks: 20% </p>
              <p className="colorOrange"> Miss Opportunities: 30% </p>
              </div>)} 
            title="Here's the Data"  trigger="click">
          <Button type="dashed" icon="video-camera"> Commercial 
          </Button>   
          </Popover> <Popover content={(
            <div>
              <p className="colorBlue"> Passes: 50% </p>
              <p className="colorPink"> Clicks: 20% </p>
              <p className="colorOrange"> Miss Opportunities: 30% </p>
              </div>)} 
            title="Here's the Data"  trigger="click">
          <Button type="dashed" icon="pie-chart"> Data 
          </Button>   
          </Popover> 
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: 20 }}>
        <Col span="16">

          </Col>
          <Col span="8">
            <Button type="danger" icon="delete" className="fullButton"> Remove </Button>
          </Col>
      </Row>
        </Card>
    );
  }
}

export default ServiceCard;