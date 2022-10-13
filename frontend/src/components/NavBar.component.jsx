import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <Navbar.Brand>Employee Manager</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
