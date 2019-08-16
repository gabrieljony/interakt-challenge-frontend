import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./pages/App";
import Error404 from "./pages/Error404";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="*" exact={true} component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

