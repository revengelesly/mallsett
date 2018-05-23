import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import { Row, Col, Button, Input, Select} from 'antd';
import ItemProduct from './Products/lists/ItemProducts';
import ItemMerchant from './Products/lists/ItemMerchant';
import SideCart from './ShoppingCartPanel/SideCart';
import SideCartSummary from './ShoppingCartPanel/SideCartSummary';

const Search = Input.Search;
const Option = Select.Option;

const selectBefore = (
  <Select defaultValue="CustomMall" style={{ width: 150 }}>
    <Option value="CustomMall">Custome Mall</Option>
    <Option value="BrickellCityCentre">Brickell City Centre</Option>
    <Option value="MalloftheAmericas">Mall of the Americas</Option>
    <Option value="AventuraMall">Aventura Mall</Option>
  </Select>
);


export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
          <Row gutter={16} style={{ marginBottom: 15}}>
            <Col className="gutter-row" xs={0} sm={0} md={24} lg={24} xl={24}>
            <p style={{ color: '#b2b2b2', marginRight: '15px'}} >
            a. build your mall <i class="far fa-building"></i>
            <Search addonBefore={selectBefore} placeholder="input search text" 
            enterButton="Search" size="large" 
            style={{ width: "100%", marginTop: "10px", marginBottom: "10px"}} />
            </p> 
            <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <Row gutter={16}>
                    <ItemMerchant onClick={this.showModal}/>
                    <ItemMerchant />
                    <ItemMerchant />
                    <ItemMerchant />
                    <ItemMerchant />
                    <ItemMerchant />
                  </Row>  
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={18} lg={18} xl={18}>
              <Row gutter={16} style={{ marginBottom: "10px"}}>
                
                <Col className="gutter-row" xs={12} sm={12} md={12} lg={12} xl={12}>
                <p style={{ color: '#b2b2b2', marginRight: '15px'}} >b. shop your mall <i class="fas fa-shopping-basket"></i></p>
                </Col>
                <Col className="gutter-row" style={{ textAlign: "Right"}} xs={12} sm={12} md={0} lg={0} xl={0} >
                  <Button style={{ backgroundColor: '#b2b2b2', color: "#ffffff"}} >
                  c. happy checkout <i class="fas fa-shopping-cart"></i></Button>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col className="gutter-row" xs={0} sm={0} md={0} lg={5} xl={5}>
                  <div className="gutter-box">Advance Search</div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={24} lg={19} xl={19}>
                  <Row gutter={16}>
                  <Col className="gutter-row" xs={12} sm={12} md={8} lg={8} xl={8}>
                      <ItemProduct />
                    </Col>
                    <Col className="gutter-row" xs={12} sm={12} md={8} lg={8} xl={8}>
                    <ItemProduct />
                  </Col>
                  <Col className="gutter-row" xs={12} sm={12} md={8} lg={8} xl={8}>
                      <ItemProduct />
                    </Col>
                    <Col className="gutter-row" xs={12} sm={12} md={8} lg={8} xl={8}>
                      <ItemProduct />
                    </Col>
                  </Row>  
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row" xs={0} sm={0} md={6} lg={6} xl={6}>
            <p style={{ color: '#b2b2b2', marginRight: '15px'}} >c. happy checkout <i class="fas fa-shopping-cart"></i></p>
              <SideCart />
              <SideCartSummary />
            </Col>
          </Row>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
