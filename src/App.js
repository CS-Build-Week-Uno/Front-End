import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import PrivateRoute from './utils/privateRoute'
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
    </div>
  );
}

export default App;
