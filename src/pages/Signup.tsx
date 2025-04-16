import SignupForm from "../components/SignupForm";
import { Container } from "react-bootstrap";
import pairProgramming from '../assets/Pair-programming.svg';
import NavbarComponent from "../components/Navbar";

export default function SignupPage() {
    return (
        <Container fluid style={{ display: "flex", flexDirection: "column" }}>
            <NavbarComponent />
            <div style={{ 
                display: "flex", 
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "2rem",
                marginTop: "76px"
            }}>
                <img 
                    style={{ 
                        maxWidth: "219px",
                        height: "auto",
                        objectFit: "contain"
                    }}
                    src={pairProgramming} 
                    alt="Pair Programming" 
                />
                <SignupForm />
            </div>
        </Container>
    )
}