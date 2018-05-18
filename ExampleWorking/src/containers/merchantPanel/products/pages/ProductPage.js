import React, { Component } from 'react';
import ProductNav from '../navigation/ProductNav';
import { 
  Row, 
  Col
} from 'antd';

export default class  extends Component {
  render() {
    return (
      <Row gutter={12}>
        <Col span="12">
          form 
        </Col>
        <Col span="12">
          <ProductNav />
        </Col>
      </Row>
    );
  }
}
