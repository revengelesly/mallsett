import React, { Component } from 'react';

export default class Terms extends Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html: this.props.terms}} />;
  }
}
