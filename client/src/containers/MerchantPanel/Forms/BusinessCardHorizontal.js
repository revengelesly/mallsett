import React, { Component } from 'react';
import { Row, Col, List } from 'antd';
import { InputGroup } from '../../../components/uielements/input';
import ContentHolder from '../../../components/utility/contentHolder';
import ServiceCard from './ServiceCard';
import MapComponent from '../../../components/map/mapComponent';
import LocationSearchInput from '../../../components/map/locationSearchInput';

class CreateAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: this.props.places || []
    };
  }

  handleSelect = (position, googlePlaceId) => {
    if (googlePlaceId) {
      let business = this.state.businesses.find(
        x => x.googlePlaceId === googlePlaceId
      );

      if (!business) {
        var service = new window.google.maps.places.PlacesService(
          document.createElement('div')
        );

        service.getDetails({ placeId: googlePlaceId }, (place, status) => {
          if (place) {
            let name = place.name;
            let address = place['formatted_address'];
            let phone = place['formatted_phone_number'];
            let photoSource =
              place['photos'] && place['photos'][0]
                ? place['photos'][0].getUrl({ maxWidth: 320, maxHeight: 250 })
                : '';
            let types = place['types']
              ? place['types'].map(x =>
                  x.replace(/_/g, ' ').replace(/\w\S*/g, matched => {
                    return (
                      matched.charAt(0).toUpperCase() +
                      matched.substr(1).toLowerCase()
                    );
                  })
                )
              : [];

            if (name && (address || phone || types)) {
              let newBusiness = {
                lattitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng(),
                googlePlaceId: googlePlaceId,
                businessName: name,
                address: address || '',
                phone: '' || phone,
                googlePlaceCategories: types || '',
                category: this.props.category,
                photo: photoSource
              };

              let businesses = this.state.businesses.map(x => ({ ...x }));
              businesses.push(newBusiness);
              this.setState({
                businesses
              });

              if (this.props.category === 'merchant') {
                this.props.handleUpdateMerchant(newBusiness);
              } else {
                this.props.handleUpdateAssociate(newBusiness);
              }
            }
          }
        });
      }
    }
  };

  handleRemove = googlePlaceId => {
    let businesses = this.state.businesses.filter(
      x => x.googlePlaceId !== googlePlaceId
    );
    this.setState({
      businesses
    });

    if (this.props.category === 'merchant') {
      this.props.handleUpdateMerchant({ googlePlaceId });
    } else {
      this.props.handleUpdateAssociate({ googlePlaceId });
    }
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      businesses: nextProps.places
    });
  };

  render() {
    let lastBusiness =
      this.state.businesses && this.state.businesses.length > 0
        ? this.state.businesses[this.state.businesses.length - 1]
        : null;
    let address = lastBusiness ? lastBusiness.address : '';
    let position = lastBusiness
      ? {
          lat: parseFloat(lastBusiness.lattitude),
          lng: parseFloat(lastBusiness.longitude)
        }
      : '';
    let disabled =
      this.props.category === 'merchant' &&
      this.state.businesses &&
      this.state.businesses.length > 0;

    return (
      <div>
        <Row justify="start">
          <Col md={24} sm={24} xs={24}>
            <ContentHolder>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                {this.state.businesses &&
                  this.state.businesses.length > 0 && (
                    <List
                      className="demo-loadmore-list"
                      itemLayout="horizontal"
                      split={false}
                      dataSource={this.state.businesses}
                      renderItem={business => (
                        <List.Item>
                          <ServiceCard
                            name={business.businessName}
                            address={business.address}
                            phone={business.phone}
                            types={business.googlePlaceCategories}
                            handleRemove={this.handleRemove}
                            key={business.googlePlaceId}
                            googlePlaceId={business.googlePlaceId}
                            photo={business.photo}
                          />
                        </List.Item>
                      )}
                    />
                  )}
                {(!this.state.businesses ||
                  this.state.businesses.length === 0) && (
                  <p style={{ textAlign: 'center' }}>
                    Please search and select a business
                  </p>
                )}
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                    <LocationSearchInput
                      handleSelect={this.handleSelect}
                      address={address}
                      disabled={disabled}
                    />
                  </Col>
                </InputGroup>
              </InputGroup>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <Col span="24">
                  <MapComponent isMarkerShown={true} position={position} />
                </Col>
              </InputGroup>
            </ContentHolder>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateAddress;
