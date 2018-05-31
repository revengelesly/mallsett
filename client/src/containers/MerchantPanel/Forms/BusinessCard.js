import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

class ServiceCard extends Component {
  render() {
    return (
        <Row gutter={8}>
          <Col span="6">
            <img src="http://via.placeholder.com/350x250g" style={{ width: '100%' }} alt='shop' />
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
