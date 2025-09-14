import { Container, Card, Button } from "react-bootstrap";

const DetailPage = () => {
  return (
    <Container style={{ backgroundColor: "var(--color-bg)", minHeight: "80vh", padding: "2rem" }}>
      <Card style={{ backgroundColor: "var(--color-surface)" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/400" />
        <Card.Body>
          <Card.Title style={{ color: "var(--color-text)" }}>Título de la Canción</Card.Title>
          <Card.Text style={{ color: "var(--color-muted)" }}>
            <strong>Artista:</strong> Nombre <br />
            <strong>Categoría:</strong> Rock <br />
            <strong>Duración:</strong> 3:45 <br />
            <strong>Código:</strong> 1234
          </Card.Text>
          <Button style={{ backgroundColor: "var(--color-success)", border: "none" }}>Reproducir</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailPage;
