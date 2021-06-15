import React, { useRef, useState } from "react"
import { Button, Col,Container,Form,Row,Alert} from "react-bootstrap"
import { useAuth } from "../../Context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./Signin.css"
import loginIcon from './images/avtar.png'
import uiImg from './images/setup.png'

export default function Login() {
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
      history.push("/Stories")
    } catch {
      setError("Incorrect Email or PassWord")
    }

    setLoading(false)
  }

  return (
    <>
    <>
    <Container className="mt-5">
    {error && <Alert variant="danger">{error}</Alert>}
        <Row>
            <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                <img className="icon-img" src={loginIcon} alt="icon"/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                    </Form.Group>

                    <Button disabled={loading} variant="primary btn-block pk" type="submit">Login</Button>
                </Form>
                <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
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
    </>
  )
}