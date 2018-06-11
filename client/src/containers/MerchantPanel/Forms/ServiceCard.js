import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card, Icon, Button } from 'antd';

class MerchantTitle extends Component {
  handleRemove = () => {
    this.props.handleRemove(this.props.id, this.props.googlePlaceId);
  }

  render() {
    return (
      <span onClick={this.handleRemove} style={{color: "red", cursor: "pointer"}}>

       {' '} <Button style={{color: "red", cursor: "pointer"}}  shape="circle" icon="delete"></Button>


      </span>
    );
  }
}

class ServiceCard extends Component {
  handlePlus = () => {
    if (this.props.isSuggestion) {
      this.props.handlePlus(this.props.googlePlaceId);
    }
  }

  handleMinus = () => {
    this.props.handleMinus(this.props.id, this.props.googlePlaceId);
  }

  render() {
    let cardContent = this.props.name ? (
      <div>
        {this.props.address &&
          <div>
            <Icon type="environment-o" /> {this.props.address || 'Address'}
          </div>
        }
        {this.props.phone &&
          <div>
            {' '}
            <Icon type="phone" /> {this.props.phone || 'Phone number'}
          </div>
        }
        {this.props.types &&
          <div>
            {' '}
            <Icon type="idcard" /> {this.props.types}
          </div>
        }
      </div>
    ) : (
      <div>
          <div>
            <Icon type="environment-o" /> Address
          </div>
          <div>
            {' '}
            <Icon type="phone" /> Phone number
          </div>
          <div>
            {' '}
            <Icon type="idcard" /> Business services
          </div>
      </div>
    );
    return (
      <Card
        style={{width:'100%', border:'1px solid #e8e8e8'}}
        bordered={true}
      >
        <Row gutter={8}>
          <Col span="6">
            <img
              src={this.props.photo || "http://via.placeholder.com/350x250g"}
              style={{ width: '100%' }}
              alt='avatar'
            />
          </Col>
          <Col span="18">
            <h4>{this.props.name || 'Company name'}
            {this.props.isSuggestion}
            <MerchantTitle
              isDisplayButton={this.props.name ? true : false}
              handleRemove={this.props.handleRemove}
              googlePlaceId={this.props.googlePlaceId}
              isAdded={this.props.isAdded}
              id={this.props.id}
            /> <Button icon="check-circle-o"   shape="circle"
            style={{color: "green", cursor: "pointer"}}>
            </Button> <Button icon="check-circle"  shape="circle"
            style={{color: "green", cursor: "pointer"}}>
            </Button> <Button icon="plus-circle"  shape="circle"
            style={{color: "blue", cursor: "pointer"}} onClick={this.handlePlus}>
            </Button> <Button icon="minus-circle-o"  shape="circle"
            style={{color: "blue", cursor: "pointer"}} onClick={this.handleMinus}>
            </Button>
            </h4>
            {cardContent}
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ServiceCard;
