import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Input, { InputGroup } from '../../../components/uielements/input';
import ContentHolder from '../../../components/utility/contentHolder';

import AddMerchantForm from './AddMerchant';



class CreateMerchant extends Component {
  render() {
    return (
      <div>

      <Row  justify="start" >
  <Col md={24} sm={24} xs={24} >
      <ContentHolder>
      <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Type business name" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
             <img src="../../images/googleMap.png"  style={{ width: '100%' }} />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
        <AddMerchantForm />
        </InputGroup>
    
      </ContentHolder>
  </Col>
</Row>
</div>
    );
  }
}

export default CreateMerchant;