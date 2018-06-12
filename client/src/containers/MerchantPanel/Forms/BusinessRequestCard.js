import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card, Icon, Button } from 'antd';

class BusinessRequestCard extends Component {
  handleAccept = () => {
    this.props.handleAccept(this.props.business.id);
  }

  handleReject = () => {
    this.props.handleReject(this.props.business.id);
  }

  handleRequest = () => {
    this.props.handleRequest(this.props.business.id);
  }

  render() {
    let business = this.props.business || {};
    let cardContent = business.businessName ? (
      <div>
        {business.address && (
          <div>
            <Icon type="environment-o" /> {business.address || 'Address'}
          </div>
        )}
        {business.phone && (
          <div>
            {' '}
            <Icon type="phone" /> {business.phone || 'Phone number'}
          </div>
        )}
        {business.googlePlaceCategories && (
          <div>
            {' '}
            <Icon type="idcard" /> {business.googlePlaceCategories}
          </div>
        )}
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

    let actions = null;
    switch (this.props.type) {
      case 'received':

        actions = (
          <span>
            <Button
              icon="heart-o"
              shape="circle"
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={this.handleAccept}
            />
            <Button
              icon="close-circle-o"
              shape="circle"
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={this.handleReject}
            />
          </span>
        );
        break;
      case 'accepted':
        actions = (
          <span>
            <Icon type="heart" style={{ color: 'red' }} /> {' '}
            <Button
              icon="close-circle-o"
              shape="circle"
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={this.handleReject}
            />
          </span>
        );
        break;
      case 'rejected':
        actions = (
          <span>
            <Button
              icon="heart-o"
              shape="circle"
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={this.handleAccept}
            /> {' '}
            <Icon type="close-circle" style={{ color: 'red' }} /> {' '}
          </span>
        );
        break;
      case 'requested':
        actions = (
          <span>
            <Icon type="question-circle-o" style={{ color: 'red' }} /> {' '}
          </span>
        );
        break;
      case 'denied':
        actions = (
          <span>
            <Button
              icon="heart-o"
              shape="circle"
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={this.handleRequest}
            />
          </span>
        );
        break;
      default:
        break;
    }
    return (
      <Card
        style={{ width: '100%', border: '1px solid #e8e8e8' }}
        bordered={true}
      >
        <Row gutter={8}>
          <Col span="6">
            <img
              src={business.photo || 'http://via.placeholder.com/350x250g'}
              style={{ width: '100%' }}
              alt="avatar"
            />
          </Col>
          <Col span="18">
            <h4>
              {business.businessName || 'Company name'}{' '}
              {actions}
            </h4>
            {cardContent}
          </Col>
        </Row>
      </Card>
    );
  }
}

export default BusinessRequestCard;
