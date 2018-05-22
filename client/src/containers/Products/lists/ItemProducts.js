import React, { Component } from 'react';
import { Row, Col, Icon, Card, Avatar } from 'antd';

const { Meta } = Card;
// sup - the about of resets.
// sub - how many time the merchant reset the ratings.

/*
Cards:
ratings:
    sup: the amount of resets.
    sub: does the merchant have those items on stock or not. 
extra: 
    Next Door: items that the customer did not request but very near the store that they are purchasing from. 
    On The Way: items that the customer did not search for on the way to the store they are purchasing from.
    Best Seller: Items that the Merchant sells the most.
    New Offers: Items that the merchants just added. (30 days after they made their first sell)
    By Others: Items that other users added, merchants did not add these items themself.

*/

const Distance = () => {   
    return (
        <span>
           <small> <Icon type="clock-circle-o" /> 23hr 59min</small> 
        </span>
    ) 
}
const Rating = () => {   
    return (
        <span>
           <i class="fas fa-star"></i>4.3<sup>100%</sup>
        </span>
    ) 
}
const Pricing = () => {   
    return (
        <div>
            <Icon type="calendar" /> $100+
        </div>
    ) 
}
class ProductCard extends Component {
  render() {
    return (
        <Card
            style={{ width: '100%', marginBottom: "10px"}}
            cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPuPvGq0g4NzOJkSlMmRt6soecxGklZjsl1odxiekC6m1UsCV" />}
            actions={[<Rating />, <Pricing />]}
            extra={<Distance />}
            hoverable={true}
        >
            <Meta
            //avatar is the icon of the product brand..
            avatar={<Avatar src="data:image/png;base64,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" />}
            title="Footlocker"            
            />
           <small> Air Jordan XXII </small> 
        </Card>
    );
  }
}

export default ProductCard;