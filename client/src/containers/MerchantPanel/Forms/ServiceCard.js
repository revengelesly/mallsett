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
       Suplier One <Button type="danger" icon="delete" className="fullButton"> Remove </Button>
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
            <img src="http://via.placeholder.com/350x250g"   style={{ width: '100%' }} />
          </Col>
          <Col span="18">
          <h4>Panther Coffee Shop </h4>

            <div>
          <Icon type="environment-o" /> 111 East Flagler,Miami, Fl 32453
          </div>
          <div> <Icon type="phone" /> 305-589-5965</div> 
         <div>  <Icon type="idcard" /> Business Services, Food, Delivery</div> 
         
          </Col>
        </Row>
        </Card>
    );
  }
}

export default ServiceCard;