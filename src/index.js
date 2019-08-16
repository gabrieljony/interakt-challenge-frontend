import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from './apollo'
import App from "./pages/App";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Products from "./pages/Products";
import Error404 from "./pages/Error404";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <ApolloProvider client={client}>
          <App>
              <Route path="/" exact={true} component={Home} />
              <Route path="/delivery" exact={true} component={Delivery} />
              <Route path="/products" exact={true} component={Products} />
          </App>
        </ApolloProvider>
        <Route path="*" exact={true} component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

