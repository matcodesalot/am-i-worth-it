import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

class Login extends Component {
    onLoginPress(e) {
        e.preventDefault();
        const user = e.target.querySelector("[name=username]").value;
        const pass = e.target.querySelector("[name=password]").value;
        this.props.dispatch(actions.logInAsync({
            username: user,
            password: pass,
        }));
        e.target.reset();
        //this.props.router.push("/");
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <p>Want to run away?<Link to={"/"}> Go Home</Link></p>
                <p><Link to={"/register"}>I don't have an account</Link></p>

                <form className="form-signin" action="/" method="post" onSubmit={this.onLoginPress.bind(this)}>
                    <input className="form-control" type="text" name="username" placeholder="Username" required />
                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                    <input className="btn btn-primary btn-block btn-large" type="submit" value="Let me in" />
                </form>
            </div>
        );
    }
};

export default withRouter(connect()(Login));