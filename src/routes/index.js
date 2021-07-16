import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import WhoWeAre from "../pages/WhoWeAre";
import Products from "../pages/Products";
import Contacts from "../pages/Contacts";
import NavBar from '../components/NevBar';

// import { Container } from './styles';

function Routes() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/whoweare" component={WhoWeAre} />
        <Route path="/products" component={Products} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default Routes;