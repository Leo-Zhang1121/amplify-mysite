import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={Project} />
            </Switch>
        </Router>
    );
}

export default App;
