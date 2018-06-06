import React, { Component } from 'react';
import UserLogin from '../../components/UserPanel/Forms/UserLogin';
import {connect} from 'react-redux';
import AuthActions from './../../store/actions/authActions';

class SignIn extends Component {
    render() {
        return (
           <UserLogin {...this.props} userLoginData={this.props.authObj} loginSubmit={this.props.handleLoginSubmit} /> 
        );
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        authObj: state.auth,
        isAuthenticated: state.auth.isAuthenticated,
        authUser: state.auth.authUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginSubmit: (userObj) => dispatch(AuthActions.signin(userObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);