import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // (Demos um nome para o BrowserRouter que é Router [BrowserRouter as Router])
import Home from "./containers/Home"
import Users from "./containers/Users"

function Routes() {
 return(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/> {/*Pega o index.js de pasta Home*/}
            <Route exact path="/usuarios" component={Users}/> {/*Pega o index.js de pasta Users*/}
        </Switch>
    </Router>
 )
}

export default Routes