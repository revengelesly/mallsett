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
            <small>description of goes here. this is a very short description.</small>
            <Row gutter={6}>
              <Col className="" xs={24} sm={24} md={12} lg={12} xl={12}>
                1 to 5 items:
              </Col>
              <Col className="" xs={24} sm={24} md={12} lg={12} xl={12}>
                10% Off
              </Col>
            </Row>   
            <Row gutter={6}>
              <Col className="" xs={24} sm={24} md={12} lg={12} xl={12}>
                6 to 10 items:
              </Col>
              <Col className="" xs={24} sm={24} md={12} lg={12} xl={12}>
                15% Off
              </Col>
            </Row>      
          </Col>
        </Row>
      </GroupWrapper>
    );
  }
}

