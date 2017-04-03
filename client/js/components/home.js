import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        return(
            <div>
                <h1>Hello</h1>
                <p><Link to={"/"}>Home</Link></p>
                <p><Link to={"/news"}>Something Else</Link></p>
            </div>
        );
    }
};