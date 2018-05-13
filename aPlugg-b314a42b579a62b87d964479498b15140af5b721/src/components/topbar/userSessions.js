import React, { Component } from 'react';
import { InputSearch } from '../../components/uielements/input';

class UserSessions extends Component {
  componentDidMount() {
    setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
  }
  render() {
    return (
      <InputSearch
        id="InputTopbarSearch"
        size="large"
        placeholder="Enter search text"
      />
    );
  }
}

export default UserSessions;
