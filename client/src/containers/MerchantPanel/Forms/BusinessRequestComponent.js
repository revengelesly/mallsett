import React, { Component } from 'react';
import { Pagination, Select, Input, Icon, Row, Col } from 'antd';
import BusinessRequestCard from './BusinessRequestCard';
import LocationSearchInput from '../../../components/map/locationSearchInput';
import { createBusiness } from '../../../services/merchantServices';
import { InputGroup } from '../../../components/uielements/input';
import ContentHolder from '../../../components/utility/contentHolder';

const { Option, OptGroup } = Select;

class BusinessRequestComponent extends Component {
  state = {
    pageNumber: 1,
    category: 'supplier',
    address: ''
  };

  onChange = pageNumber => {
    this.setState({
      pageNumber
    });
  };

  getContentStatement = () => {
    if (this.props.contentStaments && this.props.businesses) {
      let length = this.props.businesses.length;
      if (length === 0) {
        return this.props.contentStaments['0'].join('\n');
      } else if (length <= 5) {
        return this.props.contentStaments['5'].join('\n');
      } else {
        return this.props.contentStaments['6'].join('\n');
      }
    }

    return '';
  };

  handleSelect = (place, googlePlaceId) => {
    if (place && googlePlaceId && this.state.category) {
      let newBusiness = createBusiness(
        place,
        googlePlaceId,
        this.props.category
      );
      if (newBusiness) {
        this.props.handleAddAssociate(newBusiness);
      }
    }
  };

  handleCategoryChange = value => {
    this.setState({
      category: value
    });
  };

  render() {
    let { title, type, businesses } = this.props;
    let total = businesses && businesses.length;
    let statement = this.getContentStatement();
    let business =
      this.props.businesses && this.props.businesses[this.state.pageNumber - 1];

    return (
      <div>
        <h4>{title}</h4>
        <small>{statement}</small>
        <ContentHolder style={{ minHeight: 231 }}>
          <InputGroup>
            <Col span={18}>
              <LocationSearchInput handleSelect={this.handleSelect} />
            </Col>
            <Col span={5} offset={1}>
              <Select
                style={{ width: 120 }}
                onChange={this.handleCategoryChange}
                value={this.state.category}
              >
                <Option value="supplier">Suppliers</Option>
                <Option value="association">Assoication</Option>
              </Select>
            </Col>
          </InputGroup>
          {this.props.businesses &&
            this.props.businesses.length > 0 && (
              <div>
                {this.props.businesses[this.state.pageNumber - 1] && (
                  <BusinessRequestCard
                    business={business}
                    type={type}
                    handleAccept={this.props.handleAccept}
                    handleReject={this.props.handleReject}
                    handleRequest={this.props.handleRequest}
                    key={business.id}
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
        </ContentHolder>
      </div>
    );
  }
}

export default BusinessRequestComponent;
