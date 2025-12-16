import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Book Explorer</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <LinkContainer to="/">
                            <Nav.Link>Accueil</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/books">
                            <Nav.Link>Livres</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;