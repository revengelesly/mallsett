import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Icon, Card } from 'antd';
import Button from '../../../components/uielements/button';
import ItemAddress from './ItemAddress';

class CreateAddress extends Component {
  render() {
    return (
      <Row >
                      <Col span="24">
                        <Card bordered={false} bordered={false} ghost  style={{ marginBottom: '15px' }}>
                          <Row gutter={2} >
            <Col span="24">
              <p>
              <Icon type="exclamation-circle-o" className="orange" /> Add an apartment number if you live in apartment, condo, or suite!
            </p>              
            <p>
              <Icon type="exclamation-circle-o" className="orange" /> Please leave a note for delivery drivers. This may increase delivery speed!
              </p>

            </Col>
            
          </Row>
                        </Card> 
                        
                        <ItemAddress />
                      </Col>
                    </Row>
    );
  }
}

export default CreateAddress;