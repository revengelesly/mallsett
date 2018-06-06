import React, { Component } from 'react';
import IntlMessages from '../../../components/utility/intlMessages';
import GroupWrapper from '../../Styles/list.style';
import UploadListItem from './UploadListItem';
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
          <UploadListItem />
        </Col>
        <Col span="24" style={{marginBottom: 15}}  >
          <UploadListItem />
        </Col>
      </Row>
    );
  }
}

