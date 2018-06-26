import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html: this.props.aboutUs}} />;
  }
}
