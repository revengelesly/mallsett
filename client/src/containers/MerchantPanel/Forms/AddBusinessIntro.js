import React, { Component } from 'react';
import { Row, Col } from 'antd';
import YouTube from 'react-youtube';

const opts = {
  width: '100%',
  height: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    controls: 0,
    rel: 0,
    showinfo: 0,
    frameborder: 0,
    modestbranding: 1
  }
};

class CreateAddress extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span="12">
          <YouTube videoId="MXKkygPGYi0" opts={opts} />
        </Col>
        <Col span="12">
          <span dangerouslySetInnerHTML={{__html: this.props.content}} />
        </Col>
      </Row>
    );
  }
}

export default CreateAddress;
