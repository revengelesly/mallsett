import React, { Component } from 'react';
import {  Button, Menu, Dropdown, Row, Col, Icon, Card, Avatar } from 'antd';
import SideCartWrapper from "./sidecart.style";
import Box from '../../components/utility/box';
const { Meta } = Card;
function handleMenuClick(e) {
	console.log('click', e);
  }

  const menu = (
	<Menu onClick={handleMenuClick}>
	  <Menu.Item key="1">1st item</Menu.Item>
	  <Menu.Item key="2">2nd item</Menu.Item>
	  <Menu.Item key="3">3rd item</Menu.Item>
	</Menu>
  );
  
class ProductCard extends Component {
  render() {
    return (
		<SideCartWrapper>
			<Box style={{ marginBottom: "10px"}}>
				<Row gutter={16}>
            		<Col className="gutter-row  merchant-group" span={24}>	
				<p className="merchant-group-header">Summary</p>
				
				<Row className="row delivery-item" gutter={16}>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={18} xl={18}>
					<p className="item-group-header">Subtotal</p>
					</Col>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={6} xl={6}>
						<p className="item-group-header text-right">$47.96</p>
					</Col>
				</Row>
				<Row className="row delivery-item" gutter={16}>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={18} xl={18}>
					<p className="item-group-header">Delivery</p>
					</Col>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={6} xl={6}>
						<p className="item-group-header text-right">$5.26</p>
					</Col>
				</Row>
				<Row className="row delivery-item" gutter={16}>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={18} xl={18}>
					<p className="item-group-header">Tax</p>
					</Col>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={6} xl={6}>
						<p className="item-group-header text-right">$8.65</p>
					</Col>
				</Row>
				<Row className="row delivery-item" gutter={16}>
				<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={16} xl={16}>
				<p className="item-group-header "><i class="far fa-trash-alt"></i> Cash</p>
				</Col>
				<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={8} xl={8}>
					<p className="item-group-header text-right green-text">$47.96</p>
				</Col>
			</Row>
				<Row className="row delivery-item" gutter={16}>
				<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={16} xl={16}>
					<p className="item-group-header "><i class="far fa-trash-alt"></i> Community</p>
					</Col>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={8} xl={8}>
						<p className="item-group-header text-right green-text">$47.96</p>
					</Col>
				</Row>
				<Row className="row delivery-item" gutter={16}>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={16} xl={16}>
					<p className="item-group-header"><i class="far fa-trash-alt"></i> Vouchers </p>
					</Col>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={8} xl={8}>
						<p className="item-group-header text-right green-text">$47.96</p>
					</Col>
				</Row>
				<Row className="row delivery-item delivery-group-header" gutter={16}>
					<Col className="gutter-row  merchant-group " xs={24} sm={24} md={24} lg={16} xl={16}>
					Balance
					</Col>
					<Col className="gutter-row  merchant-group" xs={24} sm={24} md={24} lg={8} xl={8}>
					<p className=" text-right"> $47.96</p>
					</Col>
				</Row>
				
				<Button  type="primary"  
				style={{ width: "100%", backgroundColor: "#00a99d", 
				color: "#FFFFFF", border: "#00a99d",
				marginTop: "10px"
				}}>
				  Pay $47.96 <Icon type="money-bill-alt" />
				</Button>

				</Col>
			</Row>
		</Box>
		
	</SideCartWrapper>
    );
  }
}

export default ProductCard;