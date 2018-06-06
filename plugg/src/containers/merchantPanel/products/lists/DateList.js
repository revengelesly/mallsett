import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import GroupWrapper from '../../Styles/list.style';
import DateListItem from './DateListItem';
import { 
  Row, 
  Button,
  Collapse,
  Popover,
  Icon,
  Col
} from 'antd';

const Panel = Collapse.Panel;


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <h4  style={{marginBottom: 15}}>Date List </h4>
        <Col span="12" style={{marginBottom: 15}}  >
          <DateListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <DateListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <DateListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <DateListItem />
        </Col>
      </Row>
    );
  }
}

