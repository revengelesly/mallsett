import React, { Component } from 'react';

import App from './App/index';

class Dashboard extends Component {
    componentWillMount() {
    	const data = localStorage.getItem('accesstoken');
		  console.log(data);
		  if (!data) {
		      this.props.history.push('/signin')
		  }
    }	
    render() {
        return (
			<App />            
        );
    }
}

export default Dashboard;
