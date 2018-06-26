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
            <h5>Milk Products <Button type="danger" shape="circle" icon="delete">
            </Button> <Button type="" shape="circle" icon="edit">
            </Button>
            </h5>
            <p>Expired 7 day after purchase. Give or Take 1 day. Freeze for longer lifespan.<br /> <small>description of goes here. this is a very short description.</small></p>
            
          </Col>
        </Row>
      </GroupWrapper>
    );
  }
}

