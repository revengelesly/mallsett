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
          <Row gutter={6} style={{ marginBottom: 15}}>
            <Col className="gutter-row" xs={0} sm={0} md={24} lg={24} xl={24}>
            <p style={{ color: '#b2b2b2', marginRight: '15px'}} >
            a. build your mall <i class="far fa-building"></i>
            <Search addonBefore={selectBefore} placeholder="input search text" 
            enterButton="Search" size="large" 
            style={{ width: "100%", marginTop: "10px", marginBottom: "10px"}} />
            </p> 
            <Row gutter={6}>
            <Col className="gutter-row" span={24}>
              <Row gutter={6}>
              <Col className="" xs={24} sm={12} md={8} lg={6} xl={4}>
              <ItemMerchant title="Tacology" extra="claimed"
              cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNhlljB0Ysb0YMe39BIjt-Q16QSpHGiwiweKUpPLofniAJLnq"
              />
          </Col>
          
            <Col className="" xs={24} sm={12} md={8} lg={6} xl={4}>
                        <ItemMerchant title="Target" extra="claimed" cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_Y0w2GaZHsC5_Q99E2fUT3LHwLqcFT0TqLhj3piYfxIOgk65" />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={4}>
                        <ItemMerchant title="Starbucks" extra="unclaimed" 
                        cover="https://www.downtownkingston.ca/sites/downtownkingston.ca/files/img/business/starbucks.jpg"  />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={4}>
                        <ItemMerchant title="Best Buy" extra="unclaimed" 
                        cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UHpmNNWIiDphx7_1cmRM5Ei7wCsweiI-Qgq5L98yS1KJH6d6hQ"  />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={4}>
                        <ItemMerchant title="McDonald" extra="unclaimed" 
                        cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEIPdgWJnnYQ7-l-JJQfOG_pEKGQVFYuyaead1ugoXdEY-AA-bA"  />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={4}>
                      <ItemMerchant title="Walmart" extra="populated" cover="https://vignette.wikia.nocookie.net/walmart/images/5/52/Walmart_logo.gif/revision/latest?cb=20120825214337"  />
                    </Col>
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
