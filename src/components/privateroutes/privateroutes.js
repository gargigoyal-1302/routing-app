import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateNav from "./privatenav";
import Profile from "./profile.js";
import Setting from "./setting.js";




const PrivateRoutes = ({props,component :component, ...rest}) => {
  const logoutHandler =()=>{
    localStorage.setItem("isLogin",false);
  }
  return (
<Router>   
      <Route
         {...rest}
         render={
           props => props.isLoggedIn ?
                   (<Component {...props}/>)
                   : (<Redirect to="/"/>)

         } 
      />
      <PrivateNav/>
      <h1>Here is your Dashboard page</h1>;
      <h2>Click login to go to your Dashboard !!</h2>
      <button onClick={logoutHandler}>Logout</button>


       <Switch>
        
        <Route path="/private/profile" component={Profile} exact></Route>
        <Route path="/private/setting" component={Setting} exact></Route>
      </Switch>
      
    
    </Router>
  )
  
};

export default PrivateRoutes;