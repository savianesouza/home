import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { theme } from '../../pallet';

function MyNavbar() {
    return (
        <Navbar expand="sm" className="mb-3" style={{
            backgroundColor: theme.primary, color: 'white', padding: 20
        }}>
            <Container>
                <Navbar.Brand style={{color: theme.textColor.light}} as={Link} to="/">Saviane</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{color: theme.textColor.light}}  as={Link} to="/">Home</Nav.Link>
                        <Nav.Link style={{color: theme.textColor.light}} as={Link} to="/reservas">Reservas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
