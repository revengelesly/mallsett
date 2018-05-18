import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import axios from 'axios';
import Input, { InputGroup } from '../../../components/uielements/input';
import ContentHolder from '../../../components/utility/contentHolder';
import ServiceCard from './ServiceCard';
import MapComponent from '../../../components/map/mapComponent';
import LocationSearchInput from '../../../components/map/locationSearchInput';

const key = 'AIzaSyDOY-nnP74UzLSbgqm7UlfuTLc2WJkSKzw';

class CreateAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      business: props.business || {
        placeId: null,
        name: '',
        address: '',
        phone: '',
        types: '',
        positon: null
      },
      disabled: false
    }
  }

  resetState = () => {
    this.setState({
      business: {
        placeId: null,
        name: '',
        address: '',
        phone: '',
        types: '',
        positon: ''
      },
      disabled: false
  });
  };

  handleRemove = () => {
    this.resetState();
  };

  handleSelect = (position, placeId) => {
    this.setState({
      business: {
        ...this.state.business,
        position: position,
        placeId: placeId,
    }});

    if (placeId) {
      var service = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );

      service.getDetails({ placeId: placeId }, (place, status) => {
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
            business: {
              ...this.state.business,
              name: name,
              address: address || '',
              phone: '' || phone,
              types: types || ''
            }
          });

          this.props.handleAddBusiness(this.state.business);
        }
      });
    }
  };

  componentWillReceiveProps = (nextProps, nextState) => {
    if (nextProps.business) {
      this.setState({
        business: {...nextProps.business},
        disabled: true
      })
    } else {
      this.resetState();
    }
  }

  render() {
    return (
      <div>
        <Row justify="start">
          <Col md={24} sm={24} xs={24}>
            <ContentHolder>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <Col span="24">
                  <LocationSearchInput
                    handleSelect={this.handleSelect}
                    address={this.state.business.address}
                    disabled={this.state.disabled}
                  />
                </Col>
              </InputGroup>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <Col span="24">
                  <MapComponent
                    isMarkerShown={true}
                    position={this.state.business.position}
                  />
                </Col>
              </InputGroup>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <ServiceCard
                  name={this.state.business.name}
                  address={this.state.business.address}
                  phone={this.state.business.phone}
                  types={this.state.business.types}
                  handleRemove={this.handleRemove}
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
