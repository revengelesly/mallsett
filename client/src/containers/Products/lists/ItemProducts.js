import React, { Component } from 'react';
import { Row, Radio, Carousel, Checkbox, Input, Select, TimePicker, Button, DatePicker, Col, Icon, Card, Avatar, Modal, Collapse } from 'antd';
import OptionWrapper from './viewProduct.style';
import ItemAssociations from './ItemMerchant';
import YouTube from 'react-youtube';
const { TextArea } = Input;
const RadioGroup = Radio.Group;
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

const opts = {
    width: '100%',
    height: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      rel: 0 ,
      showinfo: 0,
      frameborder: 0,
      modestbranding: 1
    }
  };
function ProductDescription (props){
    return(
    <Row gutter={6}>
    <Col className="gutter-row"  xs={24} sm={24} md={12} lg={8} xl={8} >
    <YouTube
        videoId="MXKkygPGYi0"
        opts={opts}
    />
        <br /><br />
        <h6><strong>Categories: </strong> </h6>
     <p>TV &lt; Electronics &lt; General Merchandize </p> 
     <p>TV &lt; Electronics &lt; General Merchandize </p> 
<h6><strong>Condition: </strong> </h6>
     <p>Like New</p> 
<h6><strong>Special Consideration: </strong> </h6>
    <ul>
     <li>Something here </li> 
     <li>Something here </li> 
     <li>Something here </li> 
     <li>Something here </li> 
    </ul>
    <h6><strong>Delivery Speed: </strong> </h6>
    <ul>
     <li>ASAP </li> 
     <li>2 HR </li> 
     <li>6 HR </li> 
     <li>Hold It </li> 
    </ul>

    </Col>
    <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
        <h6><strong>Short Pitch</strong></h6>
        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus 
            terry richardson ad squid. 3 wolf moon officia aute, 
            non cupidatat skateboard dolor brunch. </p>

            <h5> {props.title} {props.selected} </h5>  
        
    
    <h6><strong>Full Description</strong></h6>
    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
    <br />
    <br />

     single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
     
    </Col> 
  </Row>
)
}

function FieldTitle (props){
    return(
        <Col className="gutter-row" span={24}>
            <h5> {props.title} {props.selected} </h5>  
        </Col>    
    )
}


function FieldHeader (props){
    return(
    <Row style={{ marginBottom: 15, marginTop: 15  }} className="optionDashed" gutter={8}>
        <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
            {props.title}
        </Col>
        <Col className="gutter-row textRight"  xs={24} sm={24} md={12} lg={8} xl={8} >
            {props.price}
        </Col>   
    </Row>    
    )
}

function MultiSelectOneItem (props){
    return(
       
            <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
            <Select
                mode={props.Mode}
                style={{ width: '100%' }}
                placeholder={props.PlaceHolder}
                defaultValue={props.DefaultValue}
                onChange={props.OnChange}
            >
                {dependentSelected}
                {props.Selected}
            </Select>
            </Col>
            
    )
}
const PurchasingForOption = (
    <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
        <FieldHeader title={"Purchasing For:"} price={"$12.01"} /> 
        <Row gutter={8}>
        <FieldTitle title={"Purchasing For: "} selected="Lesly (Self), Lance (Son)" />
            <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please Select a Dependent"
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
        
    </OptionWrapper>
  );


const bookingOptions = (
    <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12  }}>  
        <FieldHeader title={"Booking Date and Time:"} price={"$12.01"} />       
        <Row gutter={8}>
            <FieldTitle title={"Booking Date and Time: "} selected="March 1, 2019 to March 2 2019" />
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
            <FieldTitle title={"Booking Date and Time: "} selected="March 1, 2019 to March 2 2019" />
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
    </OptionWrapper>
  );

  const deliveryOptions = (
    <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
    <FieldHeader title={"Delivery:"} price={"$12.01"} />       
            <FieldTitle title={"Delivry: "} selected="Fast from Celie Delivery to 1256 NW 849 Street, Miami, FL" />       
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
    </OptionWrapper>
  );
  
  class RadioSelected extends React.Component {
    state = {
      value: 1,
    }
    onChange = (e) => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    }
    render() {
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        width: '100%'
      };
      return (
       
        <RadioGroup onChange={this.onChange} style={{ width: "100%"}} value={this.state.value}>
            <Row gutter={8}>  
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                    <Radio style={radioStyle} value={1}>
                        Infant to 1 Year Old.
                    </Radio>
                </Col>
                <Col className="gutter-row  textRight"  xs={24} sm={24} md={12} lg={8} xl={8} >
                    $12.00
                </Col>             
            </Row>  
            <Row gutter={8}>  
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                    <Radio style={radioStyle} value={2}>
                        1 year old to 6 years old.
                    </Radio>
                </Col>
                <Col className="gutter-row  textRight"  xs={24} sm={24} md={12} lg={8} xl={8} >
                    $12.00
                </Col>             
            </Row>
            <Row gutter={8}>  
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >
                    <Radio style={radioStyle} value={"MallSettShoppersExtraField"}>
                    Customized Option: {this.state.value === "MallSettShoppersExtraField" ? 
                         <Input style={{ width: "50%", marginLeft: 10 }} /> : null}
                    </Radio>
                </Col>
                <Col className="gutter-row  textRight"  xs={24} sm={24} md={12} lg={8} xl={8} >
                    $12.00
                </Col>             
            </Row> 
        </RadioGroup>
  )
}
  }


  function RangeOptions (props){
    return (
        <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
        <FieldHeader title={props.title} price={props.totalPrice} />       
            <RadioSelected />
        </OptionWrapper>
    )
}

function handleQuantitySelected(value) {
    console.log(`selected ${value}`);
  }

class CheckboxSelected extends React.Component {
    render() {
      return (
        <Checkbox.Group style={{ width: '100%' }} >
  
            <Row gutter={8}>  
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={12} xl={12} >
                    <Checkbox value="A">Option A</Checkbox>
                </Col>
                <Col className="gutter-row  textRight"  xs={12} sm={12} md={8} lg={8} xl={8} >
                    <Select defaultValue="1" style={{ width: "100%" }} onChange={handleQuantitySelected}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                    </Select>
                </Col> 
                <Col className="gutter-row  textRight"  xs={12} sm={12} md={4} lg={4} xl={4} >
                    $12.00
                </Col>             
            </Row>
            
        </Checkbox.Group>
        )
    }
}
function CheckboxOptions (props){
    return (
        <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
        <FieldHeader title={props.title} price={props.totalPrice} />       
        <CheckboxSelected />
        </OptionWrapper>
    )
}

const dropDownChildren = [];
for (let i = 10; i < 36; i++) {
    dropDownChildren.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleDropDownChange(value) {
    console.log(`selected ${value}`);
  }
class DropDown extends React.Component {
    render() {
      return (
        <Checkbox.Group style={{ width: '100%' }} >
  
            <Row gutter={8}>  
                <Col className="gutter-row"  xs={24} sm={24} md={24} lg={24} xl={24} >
                    File Name (file category)
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={18} xl={18} >
                    <Select defaultValue="" style={{ width: "100%" }} onChange={handleQuantitySelected}>
                        <Option value="1"></Option>
                        <Option value="granted">Permision Granted</Option>
                        <Option value="denied">Permision Deny</Option>
                    </Select>
                </Col> 
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={6} xl={6} >
                    <Button className="fullWidth" >Add New File</Button>
                </Col>           
            </Row>
            <Row gutter={8}>  
                <Col className="gutter-row"  xs={24} sm={24} md={24} lg={24} xl={24} >
                   File Name (file category)
                </Col>
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={18} xl={18} >
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a10', 'c12']}
                    onChange={handleDropDownChange}
                >
                    {dropDownChildren}
                </Select>
                </Col>  
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={6} xl={6} >
                    <Button className="fullWidth" >Add New File</Button>
                </Col>          
            </Row>
              
        </Checkbox.Group>
        )
    }
}

function DropDownOptions (props){
    return (
        <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
        <FieldHeader title={props.title} price={props.totalPrice} />       
        <DropDown />
        </OptionWrapper>
    )
}

 
function DownloadableFiles (props){
    return (
        <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
        <FieldHeader title={props.title} price={props.totalPrice} />       
        <Row gutter={8}>  
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={18} xl={18} >
                   File Name (file category)
                </Col>
                
                <Col className="gutter-row"  xs={24} sm={24} md={12} lg={6} xl={6} >
                    <Button className="fullWidth" >Download</Button>
                </Col>          
            </Row>
        </OptionWrapper>
    )
}

function ConversateAboutItem (props){
    return (
        <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
            <FieldHeader title={props.title} price={props.totalPrice} /> 
            <Row gutter={8}> 
                <Col className="gutter-row textRight"  offset={6} span={18}  >
                    Me: I have a quesiton about this product
                </Col>
            </Row>
            <Row gutter={8}> 
                <Col className="gutter-row" span={18}  >
                    Merchant: hi how are you today
                </Col>
            </Row>
            <Row gutter={8}> 
                <Col className="gutter-row" span={24}  >
                <TextArea 
                placeholder="Autosize height with minimum and maximum number of lines" 
                autosize={{ minRows: 3, maxRows: 6 }} />

                </Col>
                
                <Col className="gutter-row"   span={12} offset={12} >
                    <Button className="fullWidth" >Send</Button>
                </Col>          
            </Row>
        </OptionWrapper>
    )
}


 

/*
Cards:
    sup - the about of resets.
    sub - how many time the merchant reset the ratings.
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

function onCarouselChange(a, b, c) {
    console.log(a, b, c);
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
            <OptionWrapper style={{ paddingLeft: 24, marginBottom: 12 }}>
                <Carousel autoplay afterChange={onCarouselChange}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </OptionWrapper>
          <Panel header="Full Description"  key="1">
            <ProductDescription />
          </Panel>
          <Panel header="Select Options" disabled  key="2">
            {PurchasingForOption}
            {deliveryOptions}
            {bookingOptions}
            <RangeOptions title="Age Range:" totalPrice="12.01" />
            <RangeOptions title="Date Range:" totalPrice="12.01" />
            <RangeOptions title="Time Range:" totalPrice="12.01" />
            <RangeOptions title="Class Range:" totalPrice="12.01" />
            <RangeOptions title="Other Ranges:" totalPrice="12.01" />
            <CheckboxOptions title="Select Two Sides:" totalPrice="12.01" />
            <CheckboxOptions title="Select another two Sides:" totalPrice="12.01" />
            <DownloadableFiles title="Files to Download:" totalPrice="12.01" />
            <DropDownOptions title="Required Files (you may submit later):" totalPrice="12.01" />


          </Panel>
          <Panel header="Associations " key="3">
            <Row  gutter={6} className="gutter">

                <Col className="" xs={24} sm={12} md={8} lg={6} xl={6}>
                      <ItemAssociations title="Fire Deparment" extra="Certified" 
                        cover="https://i.ytimg.com/vi/O5iZh1HSS_w/maxresdefault.jpg"  />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={6}>
                      <ItemAssociations title="Florida Department of Law Enforcement" extra="Certified" 
                        cover="http://thebluepaper.com/wp-content/uploads/SEAL.jpg"  />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={6}>
                      <ItemAssociations title="FCommission on Collegiate Nursing Education " extra="Certified" 
                        cover="https://www.mbu.edu/wp-content/uploads/2016/12/CCNE-Seal-RGB.png"  />
                    </Col>
                    <Col className="" xs={24} sm={12} md={8} lg={6} xl={6}>
                      <ItemAssociations title="Greater Miami Chamber of Commerce" extra="Unclaimed" 
                        cover="https://media.nbcmiami.com/images/652*367/042616+miami+chamber+of+commerce.jpg"  />
                    </Col>
            </Row>
          </Panel>
          <Panel header="Terms: Product Level " key="4">
            {text}
          </Panel>
          <Panel header="Privacy: Merchant Level " key="5">
            {text}
          </Panel>
          <Panel header="Ask the Merchant " key="6">
            <ConversateAboutItem title="Average Response: 2hours" />
          </Panel>
        </Collapse>
        </Modal>

        </div>
    );
  }
}

export default ProductCard;