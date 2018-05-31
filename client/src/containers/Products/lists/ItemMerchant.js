import React, { Component } from 'react';
import { Row, Col, Icon, Card, Avatar, Button } from 'antd';

const { Meta } = Card;

const Rating = () => {   
    return (
        <span>
           <i class="fas fa-star"></i>4.3<sup>2x</sup> 
        </span>
    ) 
}

// check-circle means the merchant app has at least 10 products for sale. 
//  check-circle-o means that is added on mallsett but does not have any items for sale. 
// warning means that the merchant is not on mallsett. The data is pulled from google.
// close-circle-o means that the merchant have end relationship with you. 
// heart-o means that you can send the merchant a relationship request. 
// heart means that you and the merchant are in a relationship
// question means that your relationship with the merchant is pending.

const Action = () => {
    return(
        <span>
            {' '}<Icon  style={{color: "green", cursor: "pointer"}} type="check-circle" /> 
            {' '}<Icon  style={{color: "green", cursor: "pointer"}} type="check-circle-o" />
            {' '}<Icon  style={{color: "orange", cursor: "pointer"}} type="warning" />
            {' '}<Icon  style={{color: "red", cursor: "pointer"}} type="close-circle-o" /> 
            {' '}<Icon  style={{color: "pink", cursor: "pointer"}} type="heart-o" /> 
            {' '}<Icon  style={{color: "pink", cursor: "pointer"}} type="heart" /> 
            {' '}<Icon  style={{color: "pink", cursor: "pointer"}} type="question-circle-o" /> 
        </span>
    )
}
function MerchantCard(props) {
    return (
        
        <Card
            style={{ width: '100%', marginBottom: "10px"}}
            cover={<img alt={props.alt} src={props.cover} />}
            hoverable={true}
            extra={<Action />}
        >
            <small><Rating /> {props.title}</small>
        </Card>
      
    );
  }


export default MerchantCard;