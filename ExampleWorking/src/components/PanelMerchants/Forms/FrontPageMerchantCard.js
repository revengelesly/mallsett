import React, { Component } from 'react';

import { Row, Col } from 'antd';
import { Icon } from 'antd';
import YouTube from 'react-youtube';
import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';
import TopbarModal from '../../topbar/topbarModal.style';
import MerchantPage from './MerchantPage'

const Option = SelectOption;
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

class CreateAddress extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.showModal = this.showModal.bind(this);
    this.state = {
      visiblity: false
    };
  }

  handleOk() {
    this.setState({
      visible: false
    });
  }
  handleCancel() {
    this.setState({
      visible: false
    });
  }
  showModal() {
    this.setState({
      visible: true
    });
  }
  render() {
   const { visible } = this.state;
    return (
      
        <Row gutter={0}>
              <Col span="24" >
          <div className="card-image-holder"  onClick={this.showModal}>
            <img src="https://www.greenbiz.com/sites/default/files/styles/panopoly_image_full/public/images/articles/featured/walmart-950x578_0.jpg?itok=hxrZ_UDy" className="card-image" />
          </div>
          <div className="card-intro-holder"  onClick={this.showModal}>
            <div className="ellipsis uppercase strong small-title"> <Icon type="info-circle-o" /> Walmart </div>
            <div  className="ellipsis capitalize small-title">1.2 miles away</div>
            
          </div>
          <div className="card-info-holder-background">
          </div>
          <div className="">
            <div  type="primary" className="card-shop-button"  icon="shopping-cart"> <Icon type="shop" /> Add to Mall
            </div>  
          </div>
          </Col>
          <TopbarModal
          title="User Panel Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName="isoSearchModal"
          width="50%"
          footer={null}
        >
          <div className="isoSearchContainer">
            {visible ? <MerchantPage /> : ''}
          </div>
        </TopbarModal>
        </Row>
    
    );
  }
}

export default CreateAddress;