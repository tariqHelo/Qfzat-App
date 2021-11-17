import React from 'react';

import FormImage from './components/FormImage/';

import Hello from './components/Hello';

import Link from './pages/link';
import Dwonload from './pages/Dwonload';
import Name from './pages/Name';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div id="App">
        <Switch>
              <Route path="/" exact>
                <FormImage />
              </Route>
              <Route path="/link" exact>
                <Link />
              </Route>
              <Route path="/Name/:id" exact>
                <Name />
              </Route>
              <Route path="/Dwonload" exact>
                <Dwonload />
              </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
