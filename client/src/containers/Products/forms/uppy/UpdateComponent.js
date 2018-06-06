import React, { Component } from "react";
import Uppy from "../../../../components/uielements/uppy";
import config from "./config";
import UppyStyleWrapper from "./uppy.style";

export default class extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
  }

  componentDidMount() {
    Uppy(config, this.onSuccess);
  }

  onSuccess(fileList) {
    if (fileList.successful && fileList.successful[0]) {
      this.props.handleUploadFileSuccess(fileList.successful[0].uploadURL);
    }
  }

  render() {
    return (
      <UppyStyleWrapper id="uppyHolder" />
    );
  }
}
