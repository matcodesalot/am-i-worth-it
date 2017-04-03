import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return(
            <div>
                <h1>Register</h1>
                <p>Want to run away?<Link to={"/"}> Go Home</Link></p>
                <p><Link to={"/login"}>Wait a second, I already have an account</Link></p>

                <form className="form-signin" action="/" method="post">
                    <div className="form-group">
						<input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" required />
					</div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password" required />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <input type="submit" name="register-submit" id="register-submit" tabindex="4" className="form-control btn btn-register" value="Register Now" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};