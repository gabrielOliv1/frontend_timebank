import { Logo } from "../styles/components/Logo"
import { SignupForm } from "../styles/components/SignupForm"
import "../styles/Signup.css"
import "../styles/colors.css"
import { SignupButton } from "../styles/components/SignupButton"
import { SocialLogos } from "../styles/components/SocialLogos"
import { useState } from "react"
import { signupUser } from "../api/auth"

export const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Dados sendo enviados: ', {name, email, password})
        try {
            const data =await signupUser(name, email, password)
            alert('Usuário registrado com sucesso!')

            console.log(data)
        } catch (error) {
            alert('Erro ao registrar usuário. Por favor, tente novamente.')
        }
    }

    return (
        <div className="main-container">
            <section className="headline" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
                <div className="logo-container" style={{ height: "44px" }}>
                    <Logo />
                </div>
                <h1 className="main-text"
                    style={{ color: "var(--grey)", fontWeight: "bold", fontSize: "18px", margin: 0 }}>
                    Crie sua conta!
                </h1>
            </section>
            <SignupForm 
                onSubmit={handleSignup}
                name={name} setName={setName}
                email={email} setEmail={setEmail}
                password={password} setPassword={setPassword}
            />
            <SocialLogos />
            <div className="signup-btn-container">
                <SignupButton onClick={handleSignup}/>
                <div className="login-redirect">
                    <p className="login-text">Já possui uma conta? Faça</p>
                    <a className="login-link" href="/login">login</a>
                </div>
            </div>
        </div>
    )
}