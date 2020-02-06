import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./utils/privateRoute";
import Landing from "./components/Landing";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { LearnMore } from "./components/LearnMore/learnMore";
import Player from "./components/TheGame/player/index"
import Game from "./components/TheGame/Game";


function App() {
  return (
    <div className="App">
      <Navbar />

   <Game />
      
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/learnmore" component={LearnMore} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
