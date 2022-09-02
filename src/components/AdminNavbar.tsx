import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FC } from "react";

const AdminNavbar: FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="mb-3">
      <Container>
        <Navbar.Brand href="/">From Italy, With Love</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-menu" />

        <Navbar.Collapse id="nav-menu">
          <Nav className="me-auto">
            <NavDropdown title="Images" id="image-dropdown">
              <NavDropdown.Item href="/admin/add/image">
                Add Image
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/manage/image">
                Manage Images
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blogs" id="blog-dropdown">
              <NavDropdown.Item href="/admin/add/blog">
                Add Blog
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/manage/blog">
                Manage Blogs
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Recipes" id="recipe-dropdown">
              <NavDropdown.Item href="/admin/add/recipe">
                Add Recipe
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/manage/recipe">
                Manage Recipes
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="User" id="user-dropdown">
              <NavDropdown.Item href="/admin/add/user">
                Add User
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/manage/user">
                Manage Users
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
