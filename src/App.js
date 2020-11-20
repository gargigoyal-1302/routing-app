import React from "react";
import {BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import NavBar from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";

import PrivateRoutes from "./components/privateroutes/privateroutes.js";

import "./App.css";


function App() {
  const isLoggedIn =()=>{
    return ( localStorage.getItem("isLogin")? true : false)
  }
  
  return <BrowserRouter>
    <Router>
         <NavBar/>
         <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
        <PrivateRoutes exact path="/private/dashboard" component={PrivateRoutes} isLoggedIn={isLoggedIn}/>
        <Route exact component={NotFound}/>
            
        </Switch>
    </Router>
        </BrowserRouter>
           
}

const NotFound = ()=>{
  return <h1>Page Not Found</h1>

}

export default App;
