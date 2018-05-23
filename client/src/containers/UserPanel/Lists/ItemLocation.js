import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Card from '../card.style';
import Button from '../../../components/uielements/button';

class CreateAddress extends Component {
  constructor(props) {
    super(props);
  }

  handleEditButton = () => {
    this.props.handleEditButton(this.props._id);
  }

  handleRemoveButton = () => {
    this.props.handleRemoveButton(this.props._id);
  }

  render() {
    return (
      <Card style={{ marginBottom: '15px' }}>
        <Row gutter={24}>
          <Col span="12">
            <p>{this.props.address}</p>
            <Icon type="home" /> {this.props.apartment}
            <br /> {this.props.ownerPhone && <Icon type="phone" /> && this.props.ownerPhone}
          </Col>
          <Col span="12">
            <p>{this.props.notes}</p>
            <p>
              { this.props.ownerName && <Icon type="usergroup-add" /> && this.props.ownerName}
            </p>
          </Col>
        </Row>
        <Row style={{ marginTop: '15px' }}>
          <Col className="textLeft">
            <Button
              type="dashed"
              style={{ width: '50%', borderRadius: '0%' }}
              size={'small'}
              ghost
              onClick={this.handleEditButton}
            >
              Edit
            </Button>
            <Button
              type="dashed "
              style={{ width: '50%', borderRadius: '0%' }}
              size={'small'}
              ghost
              onClick={this.handleRemoveButton}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default CreateAddress;
