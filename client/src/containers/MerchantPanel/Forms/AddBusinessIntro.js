import React, { Component } from 'react';
import { Row, Col } from 'antd';
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

class CreateAddress extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span="12">

        <YouTube
        videoId="MXKkygPGYi0"
        opts={opts}
      />

        </Col>
        <Col span="12">
          notes to merchant is here. This address isso cool to find. I love it very much. notes to merchant is here. This address isso cool to find. I love it very much. notes to merchant is here. This address isso cool to find. I love it very much.

        </Col>
      </Row>

    );
  }
}

export default CreateAddress;
