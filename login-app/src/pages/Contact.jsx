import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <h1>Contact Us</h1>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="your@email.com" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Your message" />
            </Form.Group>
            <Button variant="primary" type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
