import React, { Component } from 'react';
import GroupWrapper from '../../Styles/list.style';
import { 
  Row, 
  Collapse,
  Col,
  Icon
} from 'antd';
export default class  extends Component {

  render() {
    return (
      <GroupWrapper>
        <div className="dateTimeHolder">
          <h6>Category - Item name</h6>
          <p>Item Type</p>
        </div>
      </GroupWrapper>
    );
  }
}

