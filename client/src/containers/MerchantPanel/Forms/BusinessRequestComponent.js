import React, { Component } from 'react';
import { 
  Pagination,
  Select,
  Input,
  Icon
} from 'antd';
import BusinessRequestCard from './BusinessRequestCard';

const { Option, OptGroup } = Select;

const indentSelectAfter = (
  <Select defaultValue="" style={{ width: 150 }}>
    <Option value="supplier">Suppliers</Option>
    <Option value="association">Assoication</Option>
  </Select>
);


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
    let { title, type, businesses } = this.props;
    let total = businesses && businesses.length;

    return (
      <div>
        <h4>{title}</h4>  
        <small>you have 0 connections</small>      
        <Input
        autoComplete=""
        addonAfter={indentSelectAfter}
        prefix={
          <Icon type="profile" style={{ color: 'rgba(0,0,0,.25)' }} />
        }
        placeholder="Enter Business Name"
      />

        {this.props.businesses &&
          this.props.businesses.length > 0 && (
            <div>
              {this.props.businesses[this.state.pageNumber - 1] && (
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
              )}
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
          )}
      </div>
    );
  }
}

export default BusinessRequestComponent;
