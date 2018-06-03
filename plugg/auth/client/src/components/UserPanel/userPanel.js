import React, { Component } from 'react';
import { InputSearch } from '../../components/uielements/input';
import UserPanelTab from './userPanelTab';

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
      <UserPanelTab
      />
    );
  }
}

export default AddressForm;