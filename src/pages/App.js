import React, { Component, Fragment } from "react";
import GlobalStyled from "../styles/global";

import Error404 from "./Error404";

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Error404 />
                <GlobalStyled />
            </Fragment>
        );
    }
}

export default App;

