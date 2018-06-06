import React, { Component } from 'react';
import GroupWrapper from '../../Styles/list.style';
import { 
  Row, 
  Col,
  Button
} from 'antd';
export default class  extends Component {

  render() {
    return (
      <GroupWrapper>
        <Row gutter={6}>
          <Col className="" xs={24} sm={24} md={24} lg={24} xl={24}>
            <h5>Spring Semester  (category) <Button type="danger" shape="circle" icon="delete">
            </Button> <Button type="" shape="circle" icon="edit">
            </Button>
            </h5>
            <p>January 1, 2017 to January 1, 2018</p>
          </Col>
        </Row>
      </GroupWrapper>
    );
  }
}

