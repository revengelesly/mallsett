import React, { Component } from 'react';
import { Row, Select, TimePicker, Button, DatePicker, Col, Icon, Card, Avatar, Modal, Collapse } from 'antd';
import OptionWrapper from './viewProduct.style';

const { Meta } = Card;
const Panel = Collapse.Panel;
const Option = Select.Option;
const dependentSelected = [];

for (let i = 10; i < 36; i++) {
    dependentSelected.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handlePurchasingForChange(value) {
  console.log(`selected ${value}`);
}

function onDateChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onTimeChange(time, timeString) {
    console.log(time, timeString);
  }


const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  </p>
);

const purchasingForOption = (
    <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
        <Row style={{ marginBottom: 15, marginTop: 15  }} className="optionDashed" gutter={8}>
            <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                Purchasing For:
            </Col>
            <Col className="gutter-row textRight"  xs={24} sm={24} md={12} lg={8} xl={8} >
                $12.00
            </Col>   
        </Row>
        <Row gutter={16}>
            <Col className="gutter-row" span={24}>
               <h5> Selected: Lesly Simpson (Self) <Icon type="minus-circle-o" />,  
               James Simpson (Son) <Icon type="minus-circle-o" /> ,  
               Jessica Simpson (Daughter) <Icon type="minus-circle-o" /> </h5> 
            </Col>
            <Row gutter={8}>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={handlePurchasingForChange}
                >
                    {dependentSelected}
                </Select>
                </Col>
                <Col className="gutter-row "  xs={24} sm={24} md={12} lg={8} xl={8} >
                    <Button className="fullWidth" >Add New Dependent</Button>
                </Col>
            </Row>
        </Row>
    </OptionWrapper>
  );
const bookingOptions = (
    <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12  }}>        
        <Row style={{ marginBottom: 15, marginTop: 15  }} className="optionDashed" gutter={8}>
            <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                Booking Date and Time:
            </Col>
            <Col className="gutter-row textRight"  xs={24} sm={24} md={12} lg={8} xl={8} >
                $12.00
            </Col>   
        </Row>
        <Row gutter={16}>
            <Row gutter={8}>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={5} xl={5} >
                    <DatePicker  className="fullWidth"  placeholder="Date Start" onChange={onDateChange} />
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={5} xl={5} >
                    <DatePicker className="fullWidth" placeholder="Date End" onChange={onDateChange} />
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={5} xl={5} >
                    <TimePicker  className="fullWidth"  placeholder="Time Start" use12Hours format="h:mm a" onChange={onTimeChange} />
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={5} xl={5} >
                    <TimePicker  className="fullWidth"  placeholder="Time End" use12Hours format="h:mm a" onChange={onTimeChange} />
                </Col>
                <Col className="gutter-row "  xs={24} sm={24} md={24} lg={4} xl={4} >
                    <Button className="fullWidth" icon="minus-circle-o">Remove</Button>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={5} xl={5} >
                    <DatePicker  className="fullWidth"  placeholder="Date Start" onChange={onDateChange} />
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={5} xl={5} >
                    <DatePicker className="fullWidth" placeholder="Date End" onChange={onDateChange} />
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={5} xl={5} >
                    <TimePicker  className="fullWidth"  placeholder="Time Start" use12Hours format="h:mm a" onChange={onTimeChange} />
                </Col>
                <Col className="gutter-row"  xs={24} sm={12} md={12} lg={5} xl={5} >
                    <TimePicker  className="fullWidth"  placeholder="Time End" use12Hours format="h:mm a" onChange={onTimeChange} />
                </Col>
                <Col className="gutter-row "  xs={24} sm={24} md={24} lg={4} xl={4} >
                    <Button className="fullWidth" icon="plus-circle-o">Add New</Button>
                </Col>
            </Row>
        </Row>
    </OptionWrapper>
  );

  const deliveryOptions = (
    <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
        <Row style={{ marginBottom: 15, marginTop: 15  }} className="optionDashed" gutter={8}>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                    Delivery:
                </Col>
                <Col className="gutter-row textRight"  xs={24} sm={24} md={12} lg={8} xl={8} >
                    $12.00
                </Col>   
            </Row>
        <Row gutter={16}>
            <Col className="gutter-row" span={24}>
               <h5> Speed: Fastest <Icon type="minus-circle-o" />,  
               Company: Celie Delivery <Icon type="minus-circle-o" /> ,  
               Address: 1256 NW 849 Street, Miami, FL </h5> 
            </Col>
            <Row gutter={8}>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Select an Address"
                    defaultValue={['a10', 'c12']}
                    onChange={handlePurchasingForChange}
                >
                    {dependentSelected}
                </Select>
                </Col>
                <Col className="gutter-row "  xs={24} sm={24} md={12} lg={8} xl={8} >
                    <Button className="fullWidth" >Add New Address</Button>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Delivery Speed"
                    defaultValue={['Fast']}
                    onChange={handlePurchasingForChange}
                >
                    {dependentSelected}
                </Select>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Delivery Service"
                    defaultValue={['Fast']}
                    onChange={handlePurchasingForChange}
                >
                    {dependentSelected}
                </Select>
                </Col>
            </Row>

            
        </Row>
    </OptionWrapper>
  );
  
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

const Title = () => {   
    return (
        <div>
            Air Jordan #405 by Air Jordan <br />
            <small>Walmart - 111 East Flagler, Miami, FL 33142</small>
        </div>

    ) 
}



class ProductCard extends Component {
    state = { visible: false }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  render() {
    return (
        <div>
        <Card
            style={{ width: '100%', marginBottom: "10px"}}
            cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPuPvGq0g4NzOJkSlMmRt6soecxGklZjsl1odxiekC6m1UsCV" />}
            actions={[<Rating />, <Pricing />]}
            extra={<Distance />}
            hoverable={true}
            onClick={this.showModal}
        >
            <Meta
            //avatar is the icon of the product brand..
            avatar={<Avatar src="data:image/png;base64,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" />}
            title="Footlocker"            
            />
           <small> Air Jordan XXII </small> 
        </Card>

        <Modal
          title= {<Title />}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={800}
        >
          <Collapse bordered={false} showArrow={false} defaultActiveKey={['2']}>
          <Panel header="Full Description"  key="1">
            {text}
          </Panel>
          <Panel header="Select Options" disabled  key="2">
            {purchasingForOption}
            {deliveryOptions}
            {bookingOptions}
            
            
          </Panel>
          <Panel header="Associations " key="3">
            {text}
          </Panel>
          <Panel header="Terms: Product Level " key="4">
            {text}
          </Panel>
          <Panel header="Privacy: Merchant Level " key="5">
            {text}
          </Panel>
          <Panel header="Ask the Merchant " key="6">
            {text}
          </Panel>
        </Collapse>
        </Modal>

        </div>
    );
  }
}

export default ProductCard;