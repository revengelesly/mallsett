import React, { Component } from 'react';
import IntlMessages from '../../../components/utility/intlMessages';
import GroupWrapper from '../../Styles/list.style';
import { 
  Row, 
  Button,
  Collapse,
  Popover,
  Icon,
  Col
} from 'antd';

export default class  extends Component {

  render(props) {
    return (
      <Row gutter={12}>
       
        <Col span={this.props.span} >
          {this.props.item}
        </Col>
      </Row>
    );
  }
}

