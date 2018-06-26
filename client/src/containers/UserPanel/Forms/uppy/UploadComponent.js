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
    config.restrictions = {
      maxFileSize: this.props.maxFileSize || 3000000,
      maxNumberOfFiles: this.props.maxNumberOfFiles || 1,
      minNumberOfFiles: this.props.minNumberOfFiles || 1,
      allowedFileTypes: ['image/*']
    }
    this.uppy = Uppy(config, this.onSuccess);
  }

  onSuccess(fileList) {
    if (fileList.successful) {
      if (fileList.successful.length === 1) {
        this.props.handleUploadFileSuccess(fileList.successful[0].uploadURL);
      } else if (fileList.successful.length > 1) {
        this.props.handleUploadFileSuccess(fileList.successful.map(x => x.uploadURL));
      }
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
