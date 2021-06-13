import React from 'react';
import Signin from './component/Auth/Signin'
import PrivateRoute from "./component/PrivateRoute"
import './App.css';
import { AuthProvider } from "./Context/AuthContext";
import { Route,Switch } from "react-router-dom";
import Stories from './component/stories/Stories'
import Profile from './component/Profile/Profile'
import ProfileUpdate from './component/Profile/ProfileUpdate/ProfileUpdate'
import ChangePassword from './component/Profile/ChangePassword/ChangePassword'
import Notification from './component/Notification/Notification'
import Navbar from "./component/Navbar/Navbar"
import ForgotPassword from "./component/Auth/ForgotPassword"
const App=()=>
{
    return (
      <AuthProvider>
      <div className="App">
      <Switch>
      <PrivateRoute exact path="/" component={Navbar}/>
      <PrivateRoute path="/Stories" component={Stories} />
      <PrivateRoute path="/Trending" component={Stories} />
      <PrivateRoute path="/Notification" component={Notification}/>
      <PrivateRoute path="/Profile" component={Profile}/>
      <PrivateRoute path="/ProfileUpdate" component={ProfileUpdate}/>
      <PrivateRoute path="/ChangePassword" component={ChangePassword}/>
      <Route path="/Signin" component={Signin}/>
      <Route path="/Forgot-password" component={ForgotPassword}/>
    </Switch>
      </div>
      </AuthProvider>
    );
}

export default App;
