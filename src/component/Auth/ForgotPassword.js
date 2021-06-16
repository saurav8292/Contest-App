import React, { useRef, useState } from "react"
import { Form, Button,Alert,Container,Col,Row} from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { Link,useHistory} from "react-router-dom"
import loginIcon from './images/avtar.png'
import uiImg from './images/setup.png'
export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Kindly check your email")
      setTimeout(()=>{
        history.push('/login');
      },2500);
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
    <Container className="mt-5" style={{background:"white"}}>
    {error && <Alert variant="danger">{error}</Alert>}
    {message && <Alert variant="danger">{message}</Alert>}
        <Row>
            <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
            <h3 style={{color:"#00008b"}}>Welcome Back</h3>
                <img className="icon-img" src={loginIcon} alt="icon"/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                    </Form.Group>

                    <Button disabled={loading} variant="primary btn-block pk" type="submit">Reset PassWord</Button>
                </Form>
                <div className="w-100 text-center mt-3">
            Log In Now <Link to="/login">Log In</Link>
          </div>
          <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
            </Col>

            <Col lg={8} md={6} sm={12}>
                <img className="w-100" src={uiImg} alt=""/>
            </Col>
        </Row>
        
    </Container>
    </>
  )
}