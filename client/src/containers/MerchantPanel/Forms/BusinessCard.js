import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

class ServiceCard extends Component {
  render() {
    return (
      <Row gutter={8}>
        <Col span="6">
          <img
            src={this.props.photo}
            style={{ width: '100%' }}
            alt="shop"
          />
        </Col>
        <Col span="18">
          <h4>{this.props.businessName}</h4>
          <div>
            <Icon type="environment-o" /> {this.props.address}
          </div>
          <div>
            {' '}
            <Icon type="phone" /> {this.props.phone}
          </div>
          <div>
            {' '}
            <Icon type="idcard" /> {this.props.googlePlaceCategories && this.props.googlePlaceCategories.join(', ')}
          </div>
        </Col>
      </Row>
    );
  }
}

export default ServiceCard;
