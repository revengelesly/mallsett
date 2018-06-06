import React, { Component } from 'react';
import IntlMessages from '../../../components/utility/intlMessages';
import GroupWrapper from '../../Styles/list.style';
import TimeListItem from './TimeListItem';
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
       
        <Col span="12" style={{marginBottom: 15}}  >
          <TimeListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <TimeListItem />
        </Col>
      </Row>
    );
  }
}

