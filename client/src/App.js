import React from 'react';
import './App.css';
import Nav from './Nav';
import Feed from "./Feed"
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="blah">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        </Switch>        
        <Switch>
        <Route path="/Login" component={Login}/>
        </Switch>
        
        <Switch>
        <Route path="/Feed" component={Feed}/>
        </Switch>       
      </div>
    </Router>
  );
}

export default App;
