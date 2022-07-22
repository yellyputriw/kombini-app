import { Switch, Route } from "react-router-dom";
import React from "react";

import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Layout>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
