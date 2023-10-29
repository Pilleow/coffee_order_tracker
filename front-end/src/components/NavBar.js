import {Container, Navbar, Nav} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './NavBar.css';

function NavBar() {
    let navigator = useNavigate();
    const navTo = (urlExt) => navigator(urlExt, {replace: true});
    return (
        <>
            <Navbar id="navbar">
                <Container>
                    <Navbar.Brand>Coffee Order Tracker</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navTo("/openOrder")}}>Open Order</Nav.Link>
                        <Nav.Link onClick={()=>{navTo("/closeOrder")}}>Close Order</Nav.Link>
                        <Nav.Link onClick={()=>{navTo("/orderHistory")}}>History</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;
