import React, {Component} from "React";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import {BrowserHistory, Route} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Main from "./main";

const history = createBrowserHistory();

const routes = (
    <Router history={history}>
        <Route exact path="/" component={Main} />
    </Router>
);

export default routes;