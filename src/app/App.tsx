import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { There } from "../containers/There";
import "./App.css";

export const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/there" component={There} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

