import {Container, Navbar, Nav} from "react-bootstrap";
import './NavBar.css';

function NavBar() {
    return (
        <>
            <Navbar id="navbar">
                <Container>
                    <Navbar.Brand href="/">Service Manager</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;
