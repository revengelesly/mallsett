import React from 'react';
import {  Icon, Card } from 'antd';

const Rating = () => {   
    return (
        <span>
           <i class="fas fa-star"></i>4.3<sup>2x</sup> 
        </span>
    ) 
}


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