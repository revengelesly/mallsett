import React, { Component } from 'react';
import GroupWrapper from './list.style';
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
          <h6>Spring Semester</h6>
          <p>January 1, 2017 to January 1, 2018</p>
          <p><Icon type="delete" /> delete <Icon type="edit" /> edit </p>
        </div>
      </GroupWrapper>
    );
  }
}

