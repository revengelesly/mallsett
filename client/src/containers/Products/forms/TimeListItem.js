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
            <h5>Morning Class  (category) <Button type="danger" shape="circle" icon="delete">
            </Button> <Button type="" shape="circle" icon="edit">
            </Button>
            </h5>
            <p>08:00:02 am to 09:00:02 pm</p>
          </Col>
        </Row>
      </GroupWrapper>
    );
  }
}

