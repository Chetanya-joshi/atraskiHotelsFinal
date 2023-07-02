import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Link} from "react-router-dom";
function Header() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-3">
          <Container fluid>
            <Navbar.Brand href="#">
              {" "}
              <b>ATRASKI | Hotels</b>{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ATRASKI | HOTELS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link
                    
                    style={{ fontSize: "15px" }}
                    className="headlink"
                  >
                    <Link to="/" style={{textDecoration:'none' }}>
                    Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="headlink">
                    <Link to="/about">
                    About
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="headlink">
                    <Link to="/reservation">
                    Reservation{" "}
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#action2" className="headlink">
                    Blogs
                  </Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ backgroundColor: "" }}
                  />
                  <NavDropdown.Item
                    
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <Link to="/contactus">
                    Contact Us
                    </Link>
                  </NavDropdown.Item>

                  {/* <Button
                    className="navBtn"
                    style={{
                      width: "10rem",
                      borderRadius: "50px",
                      backgroundColor: "teal",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </Button> */}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
