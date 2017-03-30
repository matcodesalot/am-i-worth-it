import React, {Component} from "React";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Main from "./main";
import Test from "./test";

const routes = (
    <Router>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/news" component={Test} />
        </div>
    </Router>
);

export default routes;