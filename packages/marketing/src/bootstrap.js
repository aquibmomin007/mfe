import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App";

const mount = (el) => {
    if(el){
        ReactDOM.render(
            <App />,
            el
        )
    }
}

//dev
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#_marketing-dev-root");
    mount(devRoot)
}

//prod
export { mount };