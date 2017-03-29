import 'babel-polyfill';
import React from "React";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./redux/store";
import Routes from "./components/routes";

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Provider store={store}>{Routes}</Provider>,
        document.getElementById("app")
    );
});