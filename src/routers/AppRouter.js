import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect 
    } from "react-router-dom";


import { Login } from "../components/Login";
import Register from "../components/Register";
import { Heroes } from "../components/Heroes";

export const AppRouter = () => {
    return (
        <Router>
        <Switch>
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/Registro" component={ Register } />

                <Route exact path="/Heroes" component={Heroes} />
            </Router >
            <Redirect to="/" />
        </Switch>
    </Router>
    )
}
