import { Container, Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container style={{ backgroundColor: "var(--color-bg)", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ color: "var(--color-danger)", fontSize: "5rem" }}>404</h1>
      <h3 style={{ color: "var(--color-text)" }}>Página no encontrada</h3>
      <Button style={{ backgroundColor: "var(--color-accent)", border: "none", marginTop: "1rem" }} href="/">
        Volver al Inicio
      </Button>
    </Container>
  );
};

export default Error404;
