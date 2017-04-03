import React, {Component} from "React";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./home";
import Test from "./test";

const routes = (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={Test} />
        </div>
    </Router>
);

export default routes;