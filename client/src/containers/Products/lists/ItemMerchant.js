import React from 'react';
import { Card } from 'antd';

const Rating = () => {
    return (
        <span>
           <i class="fas fa-star"></i>4.3<sup>2x</sup>
        </span>
    )
}
function MerchantCard(props) {
    return (

        <Card
            style={{ width: '100%', marginBottom: "10px"}}
            cover={<img alt={props.alt} src={props.cover} />}
            hoverable={true}
            extra={props.extra}
        >
            <small><Rating /> {props.title}</small>
        </Card>

    );
  }


export default MerchantCard;
