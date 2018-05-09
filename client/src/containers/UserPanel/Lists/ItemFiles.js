import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default class ItemFile extends Component {

  render(){
    return (
  <Card
    style={{ width: "100%", marginBottom: "10px" }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon type="edit" />, <Icon type="delete" />, "Categories" ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="File name"
      description="This is the description of the file"
    />
  </Card>
    );
  }
  }
