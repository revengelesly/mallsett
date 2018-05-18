import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import Card from '../card.style';
import Button, { ButtonGroup } from '../../../components/uielements/button';

class CreateAddress extends Component {
  render() {
    return (
        <Card style={{ marginBottom: '15px' }}>
          <Row gutter={2} >
            <Col span="10">
              <p>
              Flagler Building 
              111 East Flagler,
              Miami, FL 33142 USA
              </p>
            </Col>
            <Col span="14">
              <p>This address does not need a special code, it is clearly visible.</p>
            </Col>
          </Row>
          <Row style={{ marginTop: '15px'}}> 
            <Col className="textLeft">
                <ButtonGroup>
                    <Button type="dashed"  size={'small'} ghost>Edit</Button>
                  <Button type="dashed"  size={'small'} ghost>Delete</Button>
                </ButtonGroup>
            </Col>
          </Row>
        </Card>
    );
  }
}

export default CreateAddress;