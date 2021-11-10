import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import HeaderButtons from "./components/HeaderButtons";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img className="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS296Z65wNn-E1ya2LssFUr2aAFHdGFuz-edg&usqp=CAU" alt="Logo"/> </Navbar.Brand>
        <Nav className="justify-content-end">
        <HeaderButtons/>
        </Nav>
      </Container>
      
    </Navbar>
  );
};

export default Header;
