import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const NavbarHome = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Prueba-Microservicios</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
