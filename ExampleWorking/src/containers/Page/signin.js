import React, { Component } from "react";
import axios from "axios"
import apiUrl from "../../config"
import classnames from "classnames";
import auth from "../../redux/auth/reducer"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import jwt from "jsonwebtoken"
import { setCurrentUser } from "../../redux/auth/actions"
import setAuthorizationToken from "../../auth"
import { bindActionCreators } from "redux";
function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setCurrentUser: setCurrentUser
  }, dispatch)
}
class Signin extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      isLoading: false
    }
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/dashboard")
  }

  typing(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  submit(e) {
    e.preventDefault();
    console.log("'submited")
    this.setState({ isLoading: true, error: {} })
    setTimeout(function () {
      axios.post(`${apiUrl.apiUrl}/api/login`, this.state).then((res) => {

        if (res.data.token) {
          var token = res.data.token;
          localStorage.setItem("jwToken", token);
          setAuthorizationToken(token);
          // var url = window.location.pathname;
          window.location.assign('/dashboard')
        }
        this.setState({ error: res.data, isLoading: false });
      }).catch((err) => { this.setState({ isLoading: false,error:{network:"An error has occured"} }); console.log(err) });
    }.bind(this), 1000)
  }
  render() {
    return (
      <div className="row" style={{ margin: "100px 0px" }}>
        <div className="col-sm-4 col-sm-offset-4">
          < div className={classnames("slideInDown", "animated")}>

            <div className="row" style={{ margin: "0px" }}>
              <div className="    ">
                <div className="box">
                  <form action="" method="POST" onSubmit={this.submit.bind(this)}>
                    <div className="form-group" >

                    </div>
                    <div className={classnames("form-group", this.state.error.email ? "has-error" : null)}>
                      <input type="email" name="email" onChange={this.typing.bind(this)} className="form-control" placeholder="Email" />
                    </div>
                    {this.state.error.email ?
                      <div className="form-group has-error">
                        <p className="text-danger">{this.state.error.email}</p>
                      </div>
                      : null}
                    <div className={classnames("form-group", this.state.error.password ? "has-error" : null)}>
                      <input type="password" name="password" onChange={this.typing.bind(this)} className="form-control" placeholder="password" />
                    </div>

                    {this.state.error.password ?
                      <div className="form-group has-error">
                        <p className="text-danger">{this.state.error.password}</p>
                      </div>
                      : null}
                    {this.state.error.network ?
                      <div className="form-group has-error">
                        <p className="text-danger text-center">{this.state.error.network}</p>
                      </div>
                      : null}
                    <div className="form-group">
                      <p>Not a user? <Link to="/register">click here to register</Link></p>
                    </div>


                    <button type="submit" className={classnames("btn", "btn-primary",
                      "btn-block", this.state.isLoading ? "disabled" : null)}> {this.state.isLoading ?
                        <i className="fa fa-spinner fa-spin"></i>
                        : "Signin"}</button>



                  </form>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }

}

export default connect(mapStateToProps, matchDispatchToProps)(Signin);