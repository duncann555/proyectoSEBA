import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import "../styles/AddSongModal.css"; // 👈 Importa estilos

const AddSongModal = ({ show, handleClose, handleAdd }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ title, artist, category, duration });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Agregar Canción</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Artista</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el artista"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Rock"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Duración</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 3:30"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="btn-save">
            Guardar Canción
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddSongModal;
