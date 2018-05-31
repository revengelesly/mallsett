import React, { Component } from "react";
import Uppy from "../../../../components/uielements/uppy";
import config from "./config";

export default class extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }

  uppy = null;
  componentDidMount() {
    config.target = `#${this.props.id}`;
    this.uppy = Uppy(config, this.onSuccess);
  }

  onSuccess(fileList) {
    if (fileList.successful && fileList.successful[0]) {
      this.props.handleUploadFileSuccess(fileList.successful[0].uploadURL);
    }
  }

  onReset() {
    this.uppy.reset();
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isReset !== this.props.isReset) {
      this.onReset();
    }
  }

  render() {
    return (
      <div id={this.props.id} />
    );
  }
}
