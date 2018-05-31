import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SideCartWrapper from "./sidecart.style";
import Box from '../../components/utility/box';

class ProductCard extends Component {
  render() {
    return (
		<SideCartWrapper  style={{ marginBottom: "10px"}}>
			<Box>
				<Row gutter={16}>
            		<Col className="gutter-row  merchant-group" span={24}>
				<p className="merchant-group-header">
				McDonald - 1280 NW 60th STreet, Miami, FL 33142 <span className="cart-span"><i class="far fa-trash-alt"></i></span>
				</p>
				<div className="delivery-group">
				<p className="delivery-group-header">
				Pick up at 3:30 PM 3/19/28 <i class="fas fa-edit"></i></p>
				<Row className="row delivery-item" gutter={16}>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={18} xl={18}>
					<p className="item-group-header">2 x 23.98 Shrimp and Co...<i class="fas fa-edit"></i>
					</p>
					</Col>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={6} xl={6}>
						<p className="item-group-header text-right">$47.96</p>
					</Col>
				</Row>
				</div>

				</Col>
			</Row>
		</Box>
	</SideCartWrapper>
    );
  }
}

export default ProductCard;
