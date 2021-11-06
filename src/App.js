import React from 'react';

import FormImage from './components/FormImage/';

import Hello from './components/Hello';

import Link from './pages/link';

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
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
