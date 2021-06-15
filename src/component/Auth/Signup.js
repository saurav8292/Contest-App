import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,Container,Row,Col} from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import loginIcon from './images/avtar.png'
import uiImg from './images/snap.png'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match Try Again")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/ProfileUpdate")
    } catch {
      setError("This Email is already registerd Please Log in to continue..")
    }

    setLoading(false)
  }

  return (
    <>
    <Container className="mt-5" style={{background:"white"}}>
    {error && <Alert variant="danger">{error}</Alert>}
        <Row>
            <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3" >
            <h3 style={{color:"#00008b"}}>Welcome</h3>
                <img className="icon-img" src={loginIcon} alt="icon"/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password (must be atleast of 6 characters)" ref={passwordRef} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required/>
                </Form.Group>

                    <Button disabled={loading} variant="primary btn-block pk" type="submit">Login</Button>
                </Form>
                <div className="w-100 text-center mt-3">
          </div>
          <div className="w-100 text-center mt-2">
          Need an account? <Link to="/login">Log In</Link>
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