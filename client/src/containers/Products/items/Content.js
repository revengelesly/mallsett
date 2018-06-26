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
        <Col className="" xs={24} sm={10} md={6} lg={5} xl={4}>
            <img alt="merchant name - displayed name - category" src="http://via.placeholder.com/350x250" className="fullWidth" />
          </Col>
          <Col className="" xs={24} sm={14} md={18} lg={19} xl={20}>
            <h5>Displayed Name  (category) <Button type="danger" shape="circle" icon="delete">
            </Button> <Button type="" shape="circle" icon="edit">
            </Button>
            </h5>
             goes here. Ohh yeah. don't you love description.  Description goes here. Ohh yeah. don't you love description. 
          </Col>
        </Row>
      </GroupWrapper>
    );
  }
}

