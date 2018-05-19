import React, { Component } from "react";
import axios from "axios";
import apiUrl from "../../config"
import classnames from "classnames";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            error: "",
            success: "",
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
        this.setState({ isLoading: true, error: "" });
        setTimeout(function () {
            axios.post(`${apiUrl.apiUrl}/api/signup`, this.state).then((res) => {
                if (res.data.success) {
                    this.setState({ success: res.data.success, isLoading: false, password: "", email: "", name: "" })

                    setTimeout(() => {
                        this.props.history.push('/signin')

                    }, 3000)
                }

                else if (res.data.error) this.setState({ error: res.data.error, isLoading: false })

            }, () => this.setState({ isLoading: false, error:{ network:"An error has occured" }}));
        }.bind(this), 1000);
    }

    render() {
        console.log(this.state)
        return (


            <div className="row" style={{ margin: "100px 0px" }}>
                <div className="col-sm-4 col-sm-offset-4">
                    <div className="slideInDown animated">
                        <form action="" method="POST" onSubmit={this.submit.bind(this)}>

                            <div className={classnames("form-group", this.state.error.name ? "has-error" : null)}>
                                <input type="text" className="form-control" name="username" onChange={this.typing.bind(this)} placeholder="Full Name" />
                            </div>
                            {this.state.error.name ?
                                <div className="form-group has-error">
                                    <p className="text-danger">{this.state.error.name}</p>
                                </div>
                                : null}
                            {this.state.success ?
                                <div className="form-group">
                                    <p className="text-success">{this.state.success}</p>
                                </div>
                                : null}
                            <div className={classnames("form-group", this.state.error.email ? "has-error" : null)}>
                                <input type="email" className="form-control" name="email" onChange={this.typing.bind(this)} placeholder="Email" />
                            </div>
                            {this.state.error.email ?
                                <div className="form-group has-error">
                                    <p className="text-danger">{this.state.error.email}</p>
                                </div>
                                : null}
                            <div className={classnames("form-group", this.state.error.password ? "has-error" : null)}>
                                <input type="password" className="form-control" name="password" onChange={this.typing.bind(this)} placeholder="Password" />
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
                                Already registered? <Link to="signin"> Sign in </Link>

                            </div>

                            <button type="submit" className={classnames("btn", "btn-primary",
                                "btn-block", "bg-sm", this.state.isLoading ? "disabled" : null)}> {this.state.isLoading ?
                                    <i className="fa fa-spinner fa-spin"></i>
                                    : "Sign Up"}</button>

                        </form>
                    </div>
                </div>
            </div>

        )
    }

}

export default connect(mapStateToProps)(Signup)