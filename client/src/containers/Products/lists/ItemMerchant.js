import React, { Component } from 'react';
import { Row, Col, Icon, Card, Avatar } from 'antd';

const { Meta } = Card;

const Rating = () => {   
    return (
        <span>
           <i class="fas fa-star"></i>4.3<sup>2x</sup> 
        </span>
    ) 
}
class MerchantCard extends Component {
  render() {
    return (
        <Col className="" xs={8} sm={12} md={8} lg={6} xl={4}>
        <Card
            style={{ width: '100%', marginBottom: "10px"}}
            cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDKPL77c_Awl6xQav5-xqsYWX9jQOdZ9gor8Fz3c6kQUPBWRSAA" />}
            hoverable={true}
        >
            <small><Rating /> Walmart</small>
        </Card>
        </Col>
    );
  }
}

export default MerchantCard;