import React, {Component} from "React";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Register from "./register";

const routes = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    </Router>
);

export default routes;