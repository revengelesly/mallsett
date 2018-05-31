import React, { Component } from 'react';
import { Card, Icon, Avatar, Popover } from 'antd';
const { Meta } = Card;

export default class ItemFile extends Component {
  state = {
    visible: false
  };

  handleEditButton = () => {
    this.props.handleEditButton(this.props._id)
  };

  handleRemoveButton = () => {
    this.props.handleRemoveButton(this.props._id)
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const infoContent = (
      <p>
        {this.props.categories.join(', ')}
      </p>
    );
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
          [<Icon type="edit" onClick={this.handleEditButton} />, <Icon type="delete" onClick={this.handleRemoveButton }/>,
          <Popover
            content={infoContent}
            title="More Details"
            trigger="hover"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
          >
            Categories
          </Popover>,
          ]
        }
      >
        <Meta
          avatar={
            <Avatar src={this.props.profile && this.props.profile.avatar} />
          }
          title={this.props.displayName}
          description={this.props.notes}
        />
      </Card>
    )
  }
}
