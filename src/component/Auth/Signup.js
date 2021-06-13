import React,{useRef,useState}from 'react';
import './Signin.css'
import { Link, useHistory } from "react-router-dom"
import { useAuth  } from '../../Context/AuthContext';
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
const Signup=()=>
{
  const classes = useStyles();
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const {signup}=useAuth();
    const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
    
    return (
        <form onSubmit={handleSubmit} className="sign-up-form">
        <h2 className="title">Sign up</h2>
        {error && <Alert className={classes.root} severity="error">This is an error alert — check it out!</Alert>}
        <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" ref={emailRef}/>
      </div>

        <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" ref={passwordRef}/>
      </div>

        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Confirm Password" ref={passwordConfirmRef}/>
        </div>
        <input type="submit" className="btn" value="Sign up" disabled={loading}/>
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