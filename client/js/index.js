import 'babel-polyfill';
import React from "React";
import ReactDOM from "react-dom";

import Main from "./components/main";

console.log(`Client running in ${process.env.NODE_ENV} mode`);

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Main />,
        document.getElementById("app")
    );
});