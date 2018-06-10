import React, { Component } from 'react';
import FormDate from '../forms/formDate';
import IntlMessages from '../../../../components/utility/intlMessages';
import DateList from '../lists/DateList';
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
          <FormDate />
        </Col>
        <Col span="14">
         
              <DateList />
        </Col>
      </Row>
    );
  }
}
