import React from 'react';
import './Signin.css'
const Signup=()=>
{
    return (
        <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
         
        <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>

        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Full name" />
        </div>

        <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>

        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <input type="submit" className="btn" value="Sign up" />
        <p className="social-text">Or Sign up with social platforms</p>
        <div className="social-media">
          <a href="/" class="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="/" class="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="/" class="social-icon"><i className="fab fa-google"></i></a>
          <a href="/" class="social-icon"><i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    )
}
export default Signup;