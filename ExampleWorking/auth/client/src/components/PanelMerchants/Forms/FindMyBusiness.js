import React, { Component } from 'react';
import { Row, Col, AutoComplete } from 'antd';
import Input, { InputGroup } from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from './findLocation';
import MerchantItemCard from './MerchantItemCard';



class CreateAddress extends Component {
  constructor(props){
    super(props);
    this.state = {
      geocodeResults: '',
      loading: true
    }
  }
  componentWillMount() {
    var address = 'kolachi';
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng })
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          geocodeResults: error,
          loading: false
        })
      })
  }
  
  render() {
    console.log(this.state.geocodeResults);
    return (
      <div>
        <Row  justify="start" >
          <Col md={24} sm={24} xs={24} >
              <ContentHolder>
              <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                    <Input placeholder="Type business name" />
                    {/* <AutoComplete
                      dataSource={dataSource}
                      style={{ width: 200 }}
                      onSelect={onSelect}
                      onSearch={this.handleSearch}
                      placeholder="input here"
                    /> */}
                  </Col>
                </InputGroup>
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                  <Col span="24">
                    <img src="../../images/googleMap.png" className="imageFullWidth" />
                  </Col>
                </InputGroup>
                <InputGroup size="large" style={{ marginBottom: '15px' }}>
                <MerchantItemCard />
                </InputGroup>
            
              </ContentHolder>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateAddress;