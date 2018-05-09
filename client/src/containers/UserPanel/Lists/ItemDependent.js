import React, { Component } from 'react';
import { Card, Icon, Popover } from 'antd';
const { Meta } = Card;

const infoContent = (
  <div>
    <p><Icon type="user" /> Daughter</p>
    <p><Icon type="calendar" /> 18</p>
    <p><Icon type="environment-o" /> 1280 NW 1865 Street Miami, FL 33142</p>
    <p><Icon type="medicine-box" /> Diabeties, Prety, Friendly</p>
    <p><Icon type="idcard" /> This is the description of the work. It is pretty cool. You should know that.</p>
  </div>
);
      
export default class ItemFile extends Component {
  state = {
    visible: false,
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  render(){
    return (
  <Card
    hoverable
    style={{ width: "100%", marginBottom: "10px" }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    actions={[ <Popover
        content={infoContent}
        title="More Details"
        trigger="hover"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Icon type="info-circle-o" />
      </Popover>, <Icon type="edit" />, <Icon type="delete" /> ]}
  >
    <Meta
      title="Dependent Name"
      description="This is the description"
    />
  </Card>
    );
  }
  }
