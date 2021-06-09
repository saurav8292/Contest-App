import React from 'react';
import Signin from './component/Auth/Signin'
import Signup from './component/Auth/Signup'
import Navbar from "./component/Navbar/Navbar"
import './App.css';
import { Route,Switch } from "react-router-dom";
import Stories from './component/stories/Stories'
import Profile from './component/Profile/Profile'
import ProfileUpdate from './component/Profile/ProfileUpdate/ProfileUpdate'
import ChangePassword from './component/Profile/ChangePassword/ChangePassword'
import Notification from './component/Notification/Notification'
const App=()=>
{
    return (
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Signin}/>
      <Route path="/Stories" component={Stories} />
      <Route path="/Trending" component={Stories} />
       <Route path="/Notification" component={Notification}/>
       <Route path="/Profile" component={Profile}/>
      <Route path="/ProfileUpdate" component={ProfileUpdate}/>
      <Route path="/ChangePassword" component={ChangePassword}/>
    </Switch>
      </div>
    );
}

export default App;
