import { Container, Table, Button } from "react-bootstrap";
import { useState } from "react";
import AddSongModal from "../AddSongModal"; // 👈 importa el modal
import "../../styles/AdminPage.css";

const AdminPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [songs, setSongs] = useState([
    { title: "Canción 1", artist: "Artista 1", category: "Rock", duration: "3:30" },
  ]);

  const handleAddSong = (newSong) => {
    setSongs([...songs, newSong]);
  };

  return (
    <Container className="admin-container d-flex flex-column">
      <h2 className="admin-title text-center">Panel de Administración</h2>

      <Table bordered hover className="admin-table">
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>ARTISTA</th>
            <th>CATEGORÍA</th>
            <th>DURACIÓN</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.category}</td>
              <td>{song.duration}</td>
              <td>
                <Button size="sm" className="btn-edit me-2">
                  Editar
                </Button>
                <Button size="sm" className="btn-delete">
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Botón para abrir el modal */}
      <div className="text-center mt-3">
        <Button
          className="btn-add"
          onClick={() => setShowModal(true)}
          style={{
            backgroundColor: "var(--color-accent)",
            border: "none",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Agregar Canción
        </Button>
      </div>

      {/* Modal */}
      <AddSongModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleAdd={handleAddSong}
      />
    </Container>
  );
};

export default AdminPage;
