import React, { Component } from 'react';
import FormTime from '../forms/formTime';
import IntlMessages from '../../../../components/utility/intlMessages';
import TimeList from '../lists/TimeList';
import { 
  Row, 
  Collapse,
  Col,
  Icon
} from 'antd';

const Panel = Collapse.Panel;


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <Col span="10">
          <FormTime />
        </Col>
        <Col span="14">
        <h4  style={{marginBottom: 15}}> Time List </h4>
              <TimeList />
        </Col>
      </Row>
    );
  }
}
