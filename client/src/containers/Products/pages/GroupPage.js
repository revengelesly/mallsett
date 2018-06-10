import React, { Component } from 'react';
import GroupNavigation from '../navigation/GroupNavigation';
import FormGroup from '../forms/formGroup';
import { 
  Row, 
  Col
} from 'antd';

export default class  extends Component {
  render() {
    return (
      <Row gutter={24}>
        <Col span="10">
          <FormGroup />
        </Col>
        <Col span="14">
          <GroupNavigation />
        </Col>
      </Row>
    );
  }
}
