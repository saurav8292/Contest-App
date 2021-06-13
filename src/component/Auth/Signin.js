import React,{useRef,useState}from 'react';
import { useAuth  } from '../../Context/AuthContext';
import "./Signin.css"
import Signup from './Signup'
import img1 from './images/Signin.png'
import {Link,useHistory} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Signin=()=>
{
  const classes = useStyles();

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

window.onload=function(){
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
      });

      sign_in_btn.addEventListener("click", () => {
        container.classList.remove("sign-up-mode");
      });
    
  }
    return (
        
    <div className="container ct">
    <div className="forms-container fct">
      <div className="signin-signup">
        <form onSubmit={handleSubmit} className="sign-in-form">
          <h2 className="title">Sign in</h2>
          {error && <Alert className={classes.root} severity="error">This is an error alert — check it out!</Alert>}

          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="Email" ref={emailRef} />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" ref={passwordRef}/>
          </div>
          <input type="submit" value="Login" class="btn solid" disabled={loading}/>
          <div><Link to="/Forgot-password">Frogot password ?</Link></div>
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="/" className="social-icon"><i className="fab fa-google"></i></a>
            <a href="/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </form>
        <Signup/>
      </div>
    </div>     
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,ex ratione. Aliquid!</p>
          <button className="btn transparent" id="sign-up-btn">Sign up</button>
        </div>
        <img src={img1} style={{height:"150px",width:"150px"}} className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
         <h3>One of us ?</h3> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumlaboriosam ad deleniti.</p>
          <button className="btn transparent" id="sign-in-btn">Sign in</button>
        </div>
        <img src={img1} style={{height:"150px",width:"150px"}} className="image" alt="" />
      </div>
    </div>
  </div>
    )
}
export default Signin;