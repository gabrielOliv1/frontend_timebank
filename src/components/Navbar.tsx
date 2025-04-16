import { Navbar } from "react-bootstrap";
import logo from '../assets/Logo.svg';
import '../styles/Navbar.css';

export default function NavbarComponent() {
    return (
        <Navbar fixed="top" 
        style={{ backgroundColor: "var(--space-cadet)",
            padding: "1rem",
            minHeight: "100px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            }} 
            variant="light" 
            expand="lg">
                <Navbar.Brand className="ms-4" href="/">
                    <img src={logo} alt="Timebank" />
                </Navbar.Brand>
                <a className="btn btn-outline-secondary me-4" href="/login" role="button">Entrar</a>
        </Navbar>

    )
}