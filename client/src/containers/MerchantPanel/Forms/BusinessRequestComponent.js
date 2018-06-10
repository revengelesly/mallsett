import React, { Component } from 'react';
import { Pagination } from 'antd';
import BusinessRequestCard from './BusinessRequestCard';

class BusinessRequestComponent extends Component {
  state = {
    pageNumber: 1
  };

  onChange = pageNumber => {
    this.setState({
      pageNumber
    });
  };

  render() {
    let { title, type, total, businesses } = this.props;
    total = total || 50;

    return (
      <div>
        <h4>{title}</h4>
        <BusinessRequestCard
          business={
            this.props.businesses &&
            this.props.businesses[this.state.pageNumber - 1]
          }
          type={type}
          handleAccept={this.props.handleAccept}
          handleReject={this.props.handleReject}
          handleRequest={this.props.handleRequest}
        />
        <Pagination
          showQuickJumper
          pageSize={1}
          size="small"
          total={total}
          showTotal={() => `Total ${total} items`}
          current={this.state.pageNumber}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default BusinessRequestComponent;
