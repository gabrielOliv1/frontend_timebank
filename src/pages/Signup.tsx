import { useState } from "react"
import { signupUser } from "../api/auth"
import { Button, Container, Form } from "react-bootstrap"

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
        <Container className="mt-5">
            <h2>Crie sua conta!</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                                    placeholder="Digite seu nome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                                        placeholder="Digite seu email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password"
                                        placeholder="Digite sua senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form.Group>
                <Button variant="primary" onClick={handleSignup}>Registrar</Button>
            </Form>
        </Container>
    )
}