import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function FinalNavbar() {
  return (
    <Navbar bg="light" expand="md" sticky="top" className="mb-3">
      <Container>
        <Navbar.Brand href="/">From Italy, With Love</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-menu" />

        <Navbar.Collapse id="nav-menu">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown href="#" title="Gallery" id="gallery-dropdown">
              <NavDropdown.Item href="/gallery/food">Food</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/places">Places</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/gallery/">More...</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown href="#" title="Virtual Visit" id="visit-dropdown">
              <NavDropdown.Item href="/visit/atavola">
                A Tavola
              </NavDropdown.Item>
              <NavDropdown.Item href="/visit/garden">
                Nonno&rsquo;s Garden
              </NavDropdown.Item>
              <NavDropdown.Item href="/visit/roma">
                Andiamo Roma
              </NavDropdown.Item>
              <NavDropdown.Item href="/visit/strada">
                Auto Strada
              </NavDropdown.Item>
              <NavDropdown.Item href="/visit/kuduro">
                Danza Kuduro
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blogs">Blog</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/visit/booking">Book A Visit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FinalNavbar;
