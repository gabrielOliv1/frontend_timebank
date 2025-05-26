import "../FormsInput.css"

interface FormsInputProps {
    name: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormsInput = ({ name, placeholder, type = "text", value, onChange }: FormsInputProps) => {
    return (
        <input 
            className="input" 
            type={type} 
            name={name} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}