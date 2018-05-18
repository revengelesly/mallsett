import React, { Component } from 'react';
import CreateAddress from './../../components/UserPanel/Forms/CreateUser';
import { connect } from 'react-redux';
import AuthActions from './../../store/actions/authActions';

class SignUp extends Component {
	
	handleSignUp(formData){
		console.log(formData);
	}

    render() {
        return (
            <CreateAddress userData={this.props.authObj} submit={this.props.handleSignUp} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authObj: state.auth,
        // isAuthenticated: state.auth.isAuthenticated,
        // authUser: state.auth.authUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleSignUp: (userObj) => dispatch(AuthActions.signup(userObj))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
