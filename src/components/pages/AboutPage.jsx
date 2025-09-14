import { Container, Row, Col, Card } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container style={{ backgroundColor: "var(--color-bg)", minHeight: "80vh", padding: "2rem" }}>
      <h2 style={{ color: "var(--color-primary)", textAlign: "center" }}>Acerca de Nosotros</h2>
      <p style={{ color: "var(--color-text)", textAlign: "center" }}>
        Somos un equipo apasionado por la música y el desarrollo web. 🎶
      </p>

      <Row className="mt-4">
        {[1,2,3].map((_, i) => (
          <Col md={4} key={i}>
            <Card style={{ backgroundColor: "var(--color-surface)", textAlign: "center", marginBottom: "1rem" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" style={{ borderRadius: "50%" }} />
              <Card.Body>
                <Card.Title style={{ color: "var(--color-text)" }}>Integrante {i+1}</Card.Title>
                <Card.Text style={{ color: "var(--color-muted)" }}>Rol</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutPage;
