import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return(
            <div>
                <h1>Login</h1>
                <p>Want to run away?<Link to={"/"}> Go Home</Link></p>
                <p><Link to={"/register"}>I don't have an account</Link></p>

                <form className="form-signin" action="/" method="post">
                    <input className="form-control" type="text" name="username" placeholder="Username" required />
                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                    <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
            </div>
        );
    }
};