import React from 'react';
import Login from './component/Auth/Login'
import Signup from './component/Auth/Signup';
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
import FirstUpdate from './component/Auth/FirstUpdate';
const App=()=>
{
    return (
      <AuthProvider>
      <div className="App">
      <Navbar/>
      <Switch>
      <PrivateRoute exact path="/" component={Navbar}/>
      <PrivateRoute path="/Stories" component={Stories} />
      <PrivateRoute path="/Trending" component={Stories} />
      <PrivateRoute path="/Notification" component={Notification}/>
      <PrivateRoute path="/Profile" component={Profile}/>
      <PrivateRoute path="/ProfileUpdate" component={ProfileUpdate}/>
      <PrivateRoute path="/ChangePassword" component={ChangePassword}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/FirstUpdate" component={FirstUpdate}/>
      <Route path="/Forgot-password" component={ForgotPassword}/>
    </Switch>
      </div>
      </AuthProvider>
    );
}

export default App;
