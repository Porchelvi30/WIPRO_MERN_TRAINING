import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body className="p-5">
              <h3 className="mb-4">Login</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3">Login</Button>
                <div className="text-center">
                  <span>Don't have an account? </span>
                  <a href="#register">Register</a>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
