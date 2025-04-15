import { useState } from "react"
import { signupUser } from "../api/auth"
import { Button, Container, Form } from "react-bootstrap"
import '../styles/Signup.css';
import linkedinIcon from '../assets/Linkedin.svg';
import facebookIcon from '../assets/Facebook.svg';
import githubIcon from '../assets/Github.svg';
import instagramIcon from '../assets/Instagram.svg';

export default function SignupPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async () => {
        try {
            const data = await signupUser(name, email, password)
            alert('Usuário registrado com sucesso!')
            
            console.log(data)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Container fluid className="body">
            <Container className="form-container">
                <h2 className="headline">Crie sua conta!</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="text">Nome</Form.Label>
                        <Form.Control className="placeholder-text" type="text"
                                        placeholder="Digite seu nome"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text">Email</Form.Label>
                        <Form.Control className="placeholder-text" type="email"
                                        placeholder="Digite seu email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text">Senha</Form.Label>
                        <Form.Control className="placeholder-text" type="password"
                                        placeholder="Digite sua senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Container className="social-icons-container">
                        <img src={linkedinIcon} alt="Ícone Linkedin" className="social-icon" />
                        <img src={facebookIcon} alt="Ícone Facebook" className="social-icon" />
                        <img src={githubIcon} alt="Ícone Github" className="social-icon" />
                        <img src={instagramIcon} alt="Ícone Instagram" className="social-icon" />
                    </Container>
                    <Button className="register-btn" onClick={handleSignup}>Registrar</Button>
                </Form>
            </Container>
        </Container>
    )
}