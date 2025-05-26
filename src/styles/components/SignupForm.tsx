import { useState } from "react"
import "../SignupForm.css"
import { FormsInput } from "./FormsInput"

interface SignupFormProps {
    onSubmit: (e: React.FormEvent) => Promise<void>;
    name: string;
    email: string;
    password: string;
    setName: (value: string) => void;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
}

export const SignupForm = ({ 
    onSubmit,
    name, setName,
    email, setEmail,
    password, setPassword
 }: SignupFormProps) => {
    return (
        <form className="form-container" onSubmit={onSubmit}>
            <div className="input-container">
                <p className="label" style={{ marginBottom: "4px" }}>Nome</p>
                <FormsInput 
                    name="name" 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <p className="label" style={{ marginBottom: "4px" }}>Email</p>
                <FormsInput 
                    name="email" 
                    placeholder="Digite seu email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-container">
                <p className="label" style={{ marginBottom: "4px" }}>Senha</p>
                <FormsInput 
                    name="password" 
                    placeholder="Digite sua senha" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </form>
    )
}