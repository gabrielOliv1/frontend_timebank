import SignupForm from "../components/SignupForm";
import { Container, Navbar } from "react-bootstrap";
import pairProgramming from '../assets/Pair-programming.svg';

export default function SignupPage() {
    return (
        <Container fluid style={{ display: "flex", flexDirection: "column", gap: "76px" }}>
            <Navbar />
            <div style={{ 
                display: "flex", 
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "2rem"
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