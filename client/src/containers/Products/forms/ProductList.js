import React, { Component } from 'react';
import IntlMessages from '../../../components/utility/intlMessages';
import GroupWrapper from '../../Styles/list.style';
import ProductListItem from './ProductListItem';
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
        <Col span="24" style={{marginBottom: 15}}  >
          <ProductListItem />
        </Col>
        <Col span="24" style={{marginBottom: 15}}  >
          <ProductListItem />
        </Col>
      </Row>
    );
  }
}

