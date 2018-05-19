import React, { Component } from 'react';
import { Row, Col, Button, List } from 'antd';
import axios from 'axios';
import Input, { InputGroup } from '../../../components/uielements/input';
import ContentHolder from '../../../components/utility/contentHolder';
import ServiceCard from './ServiceCard';
import MapComponent from '../../../components/map/mapComponent';
import LocationSearchInput from '../../../components/map/locationSearchInput';
import { FusionTablesLayer } from 'react-google-maps';

const key = 'AIzaSyDOY-nnP74UzLSbgqm7UlfuTLc2WJkSKzw';

class CreateAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: props.businesses || [],
      disabled: false
    };
  }

  resetState = () => {
    this.setState({
      businesses: [],
      disabled: false
    });
  };

  handleRemove = (googlePlaceId) => {
    let businesses = this.state.businesses.map(x => ({...x}));
    businesses = businesses.filter(x => x.googlePlaceId !== googlePlaceId);
    this.setState({
      businesses: businesses,
      disabled: false
    });
    this.props.handleUpdateBusiness(businesses);
  };

  handleSelect = (position, googlePlaceId) => {
    if (googlePlaceId) {
      var service = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );

      service.getDetails({ placeId: googlePlaceId }, (place, status) => {
        let name = place.name;
        let address = place['formatted_address'];
        let phone = place['formatted_phone_number'];
        let types = place['types']
          ? place['types']
              .map(x =>
                x.replace(/_/g, ' ').replace(/\w\S*/g, matched => {
                  return (
                    matched.charAt(0).toUpperCase() +
                    matched.substr(1).toLowerCase()
                  );
                })
              )
              .join(', ')
          : [];
        if (name && (address || phone || types)) {
          this.setState({
            businesses: [
              ...this.state.businesses,
              {
                position: position,
                googlePlaceId: googlePlaceId,
                name: name,
                address: address || '',
                phone: '' || phone,
                types: types || '',
                categories: [this.props.category]
              }
            ]
          });

          this.props.handleUpdateBusiness(this.state.businesses);
        }
      });
    }
  };

  componentWillReceiveProps = (nextProps) => {
    console.log(this.props.category, nextProps.businesses);
    if (nextProps.businesses && nextProps.businesses.length > 0) {
      this.setState({
        businesses: nextProps.businesses,
        disabled: this.props.category === 'merchant' ? true : false
      });
    } else {
      this.resetState();
    }
  };

  render() {
    console.log(this.state);
    let address =
      this.state.businesses.length > 0
        ? this.state.businesses[this.state.businesses.length - 1].address
        : '';
    let position =
      this.state.businesses.length > 0
        ? this.state.businesses[this.state.businesses.length - 1].position
        : '';
    let overflowY = this.state.businesses && this.state.businesses.length > 1 ? 'scroll' : 'initial';
    return (
      <div>
        <Row justify="start">
          <Col md={24} sm={24} xs={24}>
            <ContentHolder>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <Col span="24">
                  <LocationSearchInput
                    handleSelect={this.handleSelect}
                    address={address}
                    disabled={this.state.disabled}
                  />
                </Col>
              </InputGroup>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <Col span="24">
                  <MapComponent isMarkerShown={true} position={position} />
                </Col>
              </InputGroup>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <List
                  style={{ height: '250px', overflowY: overflowY}}
                  className="demo-loadmore-list"
                  itemLayout="horizontal"
                  split={false}
                  dataSource={this.state.businesses}
                  renderItem={business => (
                    <List.Item>
                      <ServiceCard
                        name={business.name}
                        address={business.address}
                        phone={business.phone}
                        types={business.types}
                        handleRemove={this.handleRemove}
                        key={business.googlePlaceId}
                        googlePlaceId={business.googlePlaceId}
                      />
                    </List.Item>
                  )}
                />
              </InputGroup>
            </ContentHolder>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateAddress;
