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
  handleRemove = () => {
    this.props.handleRemove(this.props.googlePlaceId);
  }

  render() {
    return (
      <span onClick={this.handleRemove} style={{color: "red", cursor: "pointer"}}>
       
       {' '} <Icon type="delete" />
         
        
      </span>
    );
  }
}

class ServiceCard extends Component {
  render() {
    let cardContent = this.props.name ? (
      <div>
        {this.props.address &&
          <div>
            <Icon type="environment-o" /> {this.props.address || 'Address'}
          </div>
        }
        {this.props.phone &&
          <div>
            {' '}
            <Icon type="phone" /> {this.props.phone || 'Phone number'}
          </div>
        }
        {this.props.types &&
          <div>
            {' '}
            <Icon type="idcard" /> {this.props.types}
          </div>
        }
      </div>
    ) : (
      <div>
          <div>
            <Icon type="environment-o" /> Address
          </div>
          <div>
            {' '}
            <Icon type="phone" /> Phone number
          </div>
          <div>
            {' '}
            <Icon type="idcard" /> Business services
          </div>
      </div>
    );
    return (
      <Card
        style={{width:'100%', border:'1px solid #e8e8e8'}}
        bordered={true}
      >
        <Row gutter={8}>
          <Col span="6">
            <img
              src={this.props.photo || "http://via.placeholder.com/350x250g"}
              style={{ width: '100%' }}
            />
          </Col>
          <Col span="18">
            <h4>{this.props.name || 'Company name'}
            <MerchantTitle
              isDisplayButton={this.props.name ? true : false}
              handleRemove={this.props.handleRemove}
              googlePlaceId={this.props.googlePlaceId}
              isAdded={this.props.isAdded}
            />
            </h4>
            {cardContent}
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ServiceCard;
