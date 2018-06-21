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
    console.log(this.props);
    this.state = {
      businesses: this.props.places || [],
      suggestions: [],
      orginalSuggestions: this.props.suggestions || []
    };
  }

  createBusiness = (place, googlePlaceId) => {
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
        return {
          lattitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
          googlePlaceId: googlePlaceId,
          businessName: name,
          address: address || '',
          phone: phone || '',
          googlePlaceCategories: types || '',
          category: this.props.category,
          photo: photoSource
        };
      }

      return null;
    }
  };

  handleSelect = (position, googlePlaceId) => {
    if (googlePlaceId) {
      let business = this.state.businesses.find(
        x => x.googlePlaceId === googlePlaceId
      );

      if (!business) {
        let service = new window.google.maps.places.PlacesService(
          document.createElement('div')
        );

        service.getDetails({ placeId: googlePlaceId }, (place, status) => {
          if (place) {
            let newBusiness = this.createBusiness(place, googlePlaceId);
            if (newBusiness) {
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

  handleRemove = (id, googlePlaceId) => {
    let businesses = this.state.businesses.filter(
      x => x.googlePlaceId !== googlePlaceId
    );
    this.setState({
      businesses
    });

    if (this.props.category === 'merchant') {
      this.props.handleUpdateMerchant({ id, googlePlaceId });
    } else {
      this.props.handleUpdateAssociate({ id, googlePlaceId });
    }
  };

  handleAddSuggestion = (googlePlaceId) => {
    let suggestion = this.state.suggestions.find(x => x.googlePlaceId === googlePlaceId);

    if (suggestion) {
      let business = this.state.businesses.find(
        x => x.googlePlaceId === googlePlaceId
      );

      if (!business) {
        this.handleSelect('', googlePlaceId);

        this.setState({
          suggestions: this.state.suggestions.filter(x => x.googlePlaceId !== googlePlaceId)
        })
      }
    }
  }

  handleRemoveSuggestion = (id, googlePlaceId) => {
    this.handleRemove(id, googlePlaceId);

    if (this.state.orginalSuggestions && this.state.orginalSuggestions.length > 0) {
      let business = this.state.businesses.find(x => x.id === id);
      let suggestion = this.state.orginalSuggestions.find(x => x.googlePlaceId === googlePlaceId);

      if (suggestion && business) {
        if (this.state.suggestions.map(x => x.googlePlaceId).indexOf(googlePlaceId) < 0) {
          this.setState({
            suggestions: [...this.state.suggestions, business]
          })
        }
      }
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      businesses: nextProps.places
    });
  };

  componentDidMount = () => {
    if (this.props.suggestions && this.props.suggestions.length > 0) {
      let service = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );

      for (let i = 0; i < this.props.suggestions.length; i++) {
        let googlePlaceId = this.props.suggestions[i].googlePlaceId;
        service.getDetails({ placeId: googlePlaceId }, (place, status) => {
          if (place) {
            let newBusiness = this.createBusiness(place, googlePlaceId);
            if (newBusiness) {
              let suggestions = this.state.suggestions.map(x => ({ ...x }));
              suggestions.push(newBusiness);
              this.setState({
                suggestions
              });
            }
          }
        });
      }
    }
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

    let businessGooglePlaceId = this.state.businesses.map(x => x.googlePlaceId);
    let suggestions = this.state.suggestions.filter(x => businessGooglePlaceId.indexOf(x.googlePlaceId) < 0);

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
                            key={business.googlePlaceId}
                            googlePlaceId={business.googlePlaceId}
                            photo={business.photo}
                            handleRemove={this.handleRemove}
                            handleMinus={this.handleRemoveSuggestion}
                            id={business.id}
                            isAddedSuggestion={this.state.orginalSuggestions.find(x => x.googlePlaceId === business.googlePlaceId)}
                            hasOwner={this.props.category === 'merchant' || business.owner}
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
                {suggestions &&
                  suggestions.length > 0 && (
                    <List
                      className="demo-loadmore-list"
                      itemLayout="horizontal"
                      split={false}
                      dataSource={suggestions}
                      renderItem={suggestion => suggestion && (
                        <List.Item>
                          <ServiceCard
                            name={suggestion.businessName}
                            address={suggestion.address}
                            phone={suggestion.phone}
                            types={suggestion.googlePlaceCategories}
                            key={suggestion.googlePlaceId}
                            googlePlaceId={suggestion.googlePlaceId}
                            photo={suggestion.photo}
                            handleRemove={this.handleRemove}
                            handleMinus={this.handleRemoveSuggestion}
                            handlePlus={this.handleAddSuggestion}
                            id={suggestion.id}
                            isSuggestion={true}
                          />
                        </List.Item>
                      )}
                    />
                  )}
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
