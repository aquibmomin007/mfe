import React from  "react";
import ReactDOM from "react-dom";
import { App } from "./App.js";
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

const devRoot = document.querySelector("#_container-dev-root");
mount(devRoot)