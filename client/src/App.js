import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import NoMatch from "./pages/NoMatch";
import ProductDetail from "./pages/ProductDetail";



const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
