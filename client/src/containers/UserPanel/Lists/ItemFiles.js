import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default class ItemFile extends Component {
  constructor(props) {
    super(props);
  }

  handleEditButton = () => {
    this.props.handleEditButton(this.props._id)
  }

  handleRemoveButton = () => {
    this.props.handleRemoveButton(this.props._id)
  }

  render() {
    return (
      <Card
        style={{ width: '100%', marginBottom: '10px' }}
        cover={
          <img
            alt="example"
            src={this.props.directory}
          />
        }
        actions={
          [<Icon type="edit" onClick={this.handleEditButton} />, <Icon type="delete" onClick={this.handleRemoveButton }/>, 'Categories']
        }
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={this.props.displayName}
          description={this.props.notes}
        />
      </Card>
    );
  }
}
