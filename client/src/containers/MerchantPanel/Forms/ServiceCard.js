import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card, Icon, Button } from 'antd';

class ServiceCard extends Component {
  handlePlus = () => {
    if (this.props.isSuggestion) {
      this.props.handlePlus(this.props.googlePlaceId);
    }
  };

  handleMinus = () => {
    this.props.handleMinus(this.props.id, this.props.googlePlaceId);
  };

  handleRemove = () => {
    this.props.handleRemove(this.props.id, this.props.googlePlaceId);
  };

  render() {
    let cardContent = this.props.name ? (
      <div>
        {this.props.address && (
          <div>
            <Icon type="environment-o" /> {this.props.address || 'Address'}
          </div>
        )}
        {this.props.phone && (
          <div>
            {' '}
            <Icon type="phone" /> {this.props.phone || 'Phone number'}
          </div>
        )}
        {this.props.types && (
          <div>
            {' '}
            <Icon type="idcard" /> {this.props.types.join(' | ')}
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
    return (
      <Card
        style={{ width: '100%', border: '1px solid #e8e8e8' }}
        bordered={true}
      >
        <Row gutter={8}>
          <Col span="6">
            <img
              src={this.props.photo || 'http://via.placeholder.com/350x250g'}
              style={{ width: '100%' }}
              alt="avatar"
            />
          </Col>
          <Col span="18">
            <h4>
              {this.props.name || 'Company name'}{' '}
              {!this.props.isSuggestion &&
                !this.props.isAddedSuggestion && (
                  <span>
                    <Button
                      icon="delete"
                      shape="circle"
                      style={{ color: 'red', cursor: 'pointer' }}
                      onClick={this.handleRemove}
                    />{' '}
                  </span>
                )}
              {!this.props.isSuggestion && (
                <span>
                  {this.props.hasOwner ? (
                    <Button
                      icon="check-circle-o"
                      shape="circle"
                      style={{ color: 'green', cursor: 'pointer' }}
                    />
                  ) : (
                    <Icon
                      type="warning"
                      style={{ color: 'yellow', cursor: 'pointer' }}
                    />
                  )}
                  {' '}
                </span>
              )}
              {''}
              {this.props.isSuggestion && (
                <Button
                  icon="plus-circle"
                  shape="circle"
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onClick={this.handlePlus}
                />
              )}
              {this.props.isAddedSuggestion && (
                <Button
                  icon="minus-circle-o"
                  shape="circle"
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onClick={this.handleMinus}
                />
              )}
            </h4>
            {cardContent}
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ServiceCard;
