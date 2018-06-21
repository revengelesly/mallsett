import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Card, Icon, Button, Input, Row, Col, Carousel, Tabs } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';
import { InputGroup } from '../../../components/uielements/input';
import BusinessCard from './BusinessCard';
import ItemMerchant from '../../Products/lists/ItemMerchant';


const { TextArea } = Input;


const TabPane = Tabs.TabPane;
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const autoplayStyle = {
  textAlign: "center",
  height: "160px",
  lineHeight: "160px",
  background:" #364d79",
  overflow: "hidden",
  color: "#fff"
}
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
function AboutUs (props){
  return(
  <Row gutter={24}>
  <Col className="gutter-row"  xs={24} sm={24} md={12} lg={8} xl={8} >

  <h3><strong>Commercials: </strong> </h3>
  <Tabs defaultActiveKey="1">
          <TabPane
              tab={
                <span>
                  <Icon type="profile" /> B2C
                </span>
              }
              key="1"
            >

             <YouTube
      videoId="MXKkygPGYi0"
      opts={opts}
  />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="profile" /> B2B
                </span>
              }
              key="2"
            >

             <YouTube
      videoId="MXKkygPGYi0"
      opts={opts}
  />
            </TabPane>
  </Tabs>
  
<h3><strong>Targeting: </strong> </h3>
  <ul>
   <li>Government </li>
  </ul>
  <h3><strong>Delivery: </strong> </h3>
  <ul>
   <li>ASAP </li>
   <li>2 HR </li>
   <li>6 HR </li>
   <li>Outsourced </li>

  </ul>

  </Col>
  <Col className="gutter-row"  xs={24} sm={24} md={12} lg={16} xl={16} >



  <h3><strong>About us</strong></h3>
  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
  <br />
  <br />

   single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
  <br />
  <br />
  <h3>Connections</h3>
  <Row gutter={24}>
  <Col className="gutter-row"  xs={24} sm={12} md={8} lg={6} xl={6} >
  <ItemMerchant title="Tacology" extra="claimed"
              cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNhlljB0Ysb0YMe39BIjt-Q16QSpHGiwiweKUpPLofniAJLnq"
              />
  </Col>
  <Col className="gutter-row"  xs={24} sm={12} md={8} lg={6} xl={6} >
  <ItemMerchant title="Tacology" extra="claimed"
              cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNhlljB0Ysb0YMe39BIjt-Q16QSpHGiwiweKUpPLofniAJLnq"
              />
  </Col>
  <Col className="gutter-row"  xs={24} sm={12} md={8} lg={6} xl={6} >
  <ItemMerchant title="Tacology" extra="claimed"
              cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNhlljB0Ysb0YMe39BIjt-Q16QSpHGiwiweKUpPLofniAJLnq"
              />
  </Col>
  <Col className="gutter-row"  xs={24} sm={12} md={8} lg={6} xl={6} >
  <ItemMerchant title="Tacology" extra="claimed"
              cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNhlljB0Ysb0YMe39BIjt-Q16QSpHGiwiweKUpPLofniAJLnq"
              />
  </Col>
  </Row>
  <br />
  <br />
  <h3>Accredation, Certifications, and Licences</h3>
  Please ask your connections to provide you the appropriate credentials.
  </Col>
</Row>
)
}

class TouchUp extends Component {
  render() {
    let merchant = this.props.merchant;
    let associates = merchant.associates;

    return (
      <Card bordered={false}>
        <Row gutter={24}>
        <Col className="gutter-row"  xs={24} sm={12} md={8} lg={6} xl={6} >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8h8IWgzeetjchV-WVQx3gGKm7v_HgUy50vNsayhNUc1DXtoYbNQ" width="100%" />
            <br/> <br/>
             <h3> Walmart  </h3> 
          <div>
            <Icon type="environment-o" /> 1126 S St Mary's St, San Antonio, TX 78210, USA
            <br/>
            <br/>
          </div>
          <div>
            {' '}
            <Icon type="phone" />  (210) 354-0690
            <br/>
            <br/>

          </div>
          <div>
   

            {' '}
            Furniture Store | Home Goods Store | StorePoint Of Interest | Establishment
          </div>     
   
             

  </Col>
  <Col className="gutter-row"  xs={24} sm={24} md={16} lg={18} xl={18} >
      <img src="https://amp.businessinsider.com/images/558b0e1369beddd37a57802a-750-375.jpg" width="100%" />
  </Col>

        </Row>

  
             

        <Row gutter={24} style={{ marginTop: 20 }}>
          <Tabs defaultActiveKey="3">
          <TabPane
              tab={
                <span>
                  <Icon type="profile" /> About Us
                </span>
              }
              key="3"
            >

             <AboutUs />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="mail" /> Contact
                </span>
              }
              key="2"
            >
              <Row>
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                    <Input placeholder="Enter Product or Reason" />
                  </Col>
                </InputGroup>
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                    <Select
                      mode="multiple"
                      style={{ width: '100%' }}
                      placeholder="Please select a category"
                      onChange={this.handleChange}
                      defaultValue={['a10', 'c12']}
                    >
                      {children}
                    </Select>
                  </Col>
                </InputGroup>
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <TextArea
                    placeholder="message"
                    autosize={{ minRows: 4, maxRows: 8 }}
                  />
                </InputGroup>
                <InputGroup style={{ marginBottom: '15px' }}>
                  <Button type="default">Submit</Button>
                </InputGroup>
              </Row>
            </TabPane>
            
            <TabPane
              tab={
                <span>
                  <Icon type="lock" /> Privacy
                </span>
              }
              key="4"
            >
              {this.props.privacy && this.props.privacy.value }
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="exception" /> Terms
                </span>
              }
              key="5"
            >
              {this.props.terms && this.props.terms.value}
            </TabPane>
          </Tabs>
        </Row>
      </Card>
    );
  }
}

export default TouchUp;
