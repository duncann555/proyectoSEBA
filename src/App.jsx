import { Container } from "react-bootstrap";
import Menu from "./shared/Menu";
import Footer from "./shared/Footer";
import AdminPage from "./components/pages/AdminPage";
import DetailPage from "./components/pages/DetailPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Error404 from "./components/pages/Error404";

export default function AppLayout() {
  return (
    <>
      <Menu />
      <main style={{ padding: "2rem 0", flex: "1" }}>
        <Container>
          <AdminPage></AdminPage>
        </Container>
      </main>
      <Footer />
    </>
  );
}
