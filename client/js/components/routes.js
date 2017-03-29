import React, {Component} from "React";
import ReactDOM from "react-dom";

import Main from "./main";

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Main />,
        document.getElementById("app")
    );
});