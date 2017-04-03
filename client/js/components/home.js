import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        return(
            <div>
                <h1>Am I Worth It?</h1>
                <h2>Constantly pushing your limits</h2>
                <h3>What is this about?</h3>
                <p>The premise is simple: we ask you a question (completely hypothetical), and you tell us how much money it would take you to complete the task. Gather your friends, gather your family, gather your cats, and let it become a party game! You'll also learn quite a bit about yourself. As you see, our motto is "Constantly pushing your limits" and we stand by that. Are you ready to learn? Are you ready to answer some ridiculous questions? Get started now!</p>

                <p><Link to={"/login"}>Log In</Link></p>
                <p><Link to={"/register"}>Register</Link></p>
            </div>
        );
    }
};