import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { Menu } from 'antd';
import Input from '../../components/uielements/input';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.address
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = (address, placeId) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.handleSelect(latLng, placeId))
      .catch(error => console.error('Error', error));
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      address: nextProps.address
    });
  }

  render() {
    const resultStyle = {
      position: 'absolute',
      zIndex:  2,
      width: '100%',
      top: '35px',
    };

    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <Input
              {...getInputProps({
                placeholder: 'Type business name',
              })}
              value={this.state.address}
              disabled={this.props.disabled}
            />
            <div style={resultStyle}>
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                let style = {border: '1px solid', borderTop: 'none', padding: '7px'};
                style = suggestion.active
                ? { ...style, backgroundColor: '#fafafa', cursor: 'pointer' }
                : { ...style, backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
