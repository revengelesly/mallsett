import React, { Component } from 'react';
import { InputSearch } from '../../components/uielements/input';
import PlugBusiness from './PlugBusiness';

class AddressForm extends Component {
  componentDidMount() {
    setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
  }
  render() {
    return (
      <PlugBusiness
      />
    );
  }
}

export default AddressForm;