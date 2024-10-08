import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          SmartLens AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ fontSize: "18px" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ fontSize: "18px" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing" style={{ fontSize: "18px" }}>
              Plans
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ fontSize: "18px" }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
