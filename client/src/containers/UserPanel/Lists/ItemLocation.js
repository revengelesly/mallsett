import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Card from '../card.style';
import Button from '../../../components/uielements/button';

class CreateAddress extends Component {
  render() {
    return (
        <Card style={{ marginBottom: '15px' }}>
          <Row gutter={24} >
            <Col span="12">
              <p>
              Flagler Building 
              111 East Flagler,
              Miami, FL 33142 USA
              </p>
              <Icon type="home" /> Door: B993<br /> <Icon type="phone" /> 305-305-3055 
              
            </Col>
            <Col span="12">
              
              
              <p>This address does not need a special code, it is clearly visible.</p>
              <p><Icon type="usergroup-add" /> Owners: Kelly (daughter)</p>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px'}}> 
            <Col className="textLeft">
                    <Button type="dashed"  style={{width: "50%", borderRadius:"0%"}} size={'small'}  ghost>Edit</Button>
                  <Button type="dashed "  style={{width: "50%", borderRadius:"0%"}}  size={'small'} ghost>Remove</Button>
            </Col>
          </Row>
        </Card>
    );
  }
}

export default CreateAddress;