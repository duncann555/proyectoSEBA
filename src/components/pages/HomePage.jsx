import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import "../../styles/HomePage.css";

const HomePage = () => {
  // Lista de canciones falsas con imágenes de música
  const songs = [
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80", // micrófono
    },
    {
      title: "Billie Jean",
      artist: "Michael Jackson",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=80", // auriculares
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=80", // auriculares
    },
  ];

  return (
    <Container className="home-container">
      <h2 className="home-title text-center mb-5">Catálogo de Canciones</h2>

      <Form className="home-search">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre o artista..."
          className="home-search-input"
        />
      </Form>

      <Row>
        {songs.map((song, i) => (
          <Col md={4} key={i}>
            <Card className="home-card">
              <Card.Img variant="top" src={song.img} alt={song.title} />
              <Card.Body>
                <Card.Title className="home-card-title">{song.title}</Card.Title>
                <Card.Text className="home-card-artist">{song.artist}</Card.Text>
                <Button className="btn-detail">Ver Detalle</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
