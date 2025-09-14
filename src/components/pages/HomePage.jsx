import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container style={{ backgroundColor: "var(--color-bg)", minHeight: "80vh", padding: "2rem" }}>
      <h2 style={{ color: "var(--color-primary)" }}>Catálogo de Canciones</h2>
      <Form className="mb-4">
        <Form.Control 
          type="text" 
          placeholder="Buscar por nombre o artista..." 
          style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text)" }}
        />
      </Form>

      <Row>
        {[1,2,3].map((_, i) => (
          <Col md={4} key={i}>
            <Card style={{ backgroundColor: "var(--color-surface)", marginBottom: "1rem" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title style={{ color: "var(--color-text)" }}>Título Canción</Card.Title>
                <Card.Text style={{ color: "var(--color-muted)" }}>Artista</Card.Text>
                <Button style={{ backgroundColor: "var(--color-accent)", border: "none" }}>Ver Detalle</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
