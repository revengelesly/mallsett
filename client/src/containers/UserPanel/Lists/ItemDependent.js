import React, { Component } from 'react';
import { Card, Icon, Popover } from 'antd';
const { Meta } = Card;

export default class ItemFile extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    visible: false
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  handleEdit = () => {
    this.props.handleEditDependent(this.props._id);
  }

  handleRemoveDependent = () => {
    this.props.handleRemoveDependent(this.props._id);
  }

  render() {
    let now = new Date();
    let dob = new Date(this.props.dob);
    const infoContent = (
      <div>
        <p>
          <Icon type="user" /> {this.props.displayName}
        </p>
        {this.props.dob &&
          <p>
            <Icon type="calendar" /> {now.getFullYear() - dob.getFullYear()}
          </p>
        }
        {this.props.locations && this.props.locations[0] &&
          <p>
            <Icon type="environment-o" /> {this.props.locations[0].address}
          </p>
        }
        {this.props.considerations && this.props.considerations.length > 0 &&
          <p>
            <Icon type="medicine-box" /> {this.props.considerations.join(',')}
          </p>
        }
        {this.props.bio &&
          <p>
            <Icon type="idcard" /> {this.props.bio}
          </p>
        }
      </div>
    );
    return (
      <Card
        hoverable
        style={{ width: '100%', marginBottom: '10px' }}
        cover={
          <img
            alt="example"
            src={this.props.avatar || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
          />
        }
        actions={[
          <Popover
            content={infoContent}
            title="More Details"
            trigger="hover"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
          >
            <Icon type="info-circle-o" />
          </Popover>,
          <Icon type="edit" onClick={this.handleEdit} />,
          <Icon type="delete" onClick={this.handleRemoveDependent} />
        ]}
      >
        <Meta title={this.props.displayName} description={this.props.bio} />
      </Card>
    );
  }
}
