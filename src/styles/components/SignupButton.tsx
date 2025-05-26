import "../SignupButton.css"

interface SignupButtonProps {
    onClick: (e: React.FormEvent) => Promise<void>;
}

export const SignupButton = ({ onClick }: SignupButtonProps) => {
    return (
        <button type="submit" className="signup-button" onClick={onClick}>
            Registre-se
        </button>
    )
}