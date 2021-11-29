import React from 'react';

import FormImage from './components/FormImage/';

import Link from './components/FormImage/link';
import Dwonload from './components/FormImage/Dwonload';
import Name from './components/FormImage/Name';

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
              <Route path="/name/:id" exact>
                <Name />
              </Route>
              <Route path="/dwonload" exact>
                <Dwonload />
              </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
