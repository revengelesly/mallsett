import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import { Popover } from 'antd';
import YouTube from 'react-youtube';
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
const content = (
  <div>
    <YouTube
        videoId="9FyIEXDJrvA"
        opts={opts}
      />
  </div>
);

const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class CreateAddress extends Component {
  render() {
    return (
      <Row  justify="start" >
  <Col md={24} sm={24} xs={24} >
      <ContentHolder>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
        <Col span="24">
             <h2 className="textLeft">305-892-9637 </h2>
          </Col>
          <Col span="24">
            <Input placeholder="Your City" />
          </Col>
        </InputGroup>
        <InputGroup  style={{ marginBottom: '15px' }}>
        <Col span="16">
          </Col>
          <Col span="8">
            <Button size="small" type="primary" className="fullButton square">Next</Button>
          </Col>
          
        </InputGroup>
      </ContentHolder>
  </Col>
</Row>
    );
  }
}

export default CreateAddress;