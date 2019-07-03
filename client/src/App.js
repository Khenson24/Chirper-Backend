import React from 'react';
import './App.css';
import Nav from './Nav';
import Feed from "./Feed"
// import Chirp from './Chirp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="blah">
        <Nav />
        <Switch>
        <Route path="/Feed" component={Feed}/>
        </Switch>
        <h1>WELCOME TO CHIRPER</h1>
        <input placeholder="email"/>  <button>submit</button><br></br>
        <input placeholder="password"/>  <button>submit</button>        
      </div>
    </Router>
  );
}

export default App;
