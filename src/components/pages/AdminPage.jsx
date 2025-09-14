import { Container, Table, Button } from "react-bootstrap";
import "../../styles/AdminPage.css";  // Importa la hoja de estilos propia

const AdminPage = () => {
  return (
    <Container className="admin-container d-flex flex-column">
      <h2 className="admin-title text-center">Panel de Administración</h2>

      {/* Hacemos la tabla responsive */}
      <div className="table-responsive">
        <Table bordered hover className="admin-table align-middle">
          <thead>
            <tr>
              <th>Título</th>
              <th>Artista</th>
              <th>Categoría</th>
              <th>Duración</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Canción 1</td>
              <td>Artista 1</td>
              <td>Rock</td>
              <td>3:30</td>
              <td>
                <Button size="sm" className="btn-edit me-2">
                  Editar
                </Button>
                <Button size="sm" className="btn-delete">
                  Eliminar
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Botón centrado */}
      <div className="d-flex justify-content-center mt-3">
        <Button className="btn-add">Agregar Canción</Button>
      </div>
    </Container>
  );
};

export default AdminPage;
