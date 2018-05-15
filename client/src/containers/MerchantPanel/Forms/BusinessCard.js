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
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}



class ServiceCard extends Component {
  render() {
    return (
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
    );
  }
}

export default ServiceCard;