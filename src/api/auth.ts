import axios from "axios";

const API_URL = 'http://localhost:3000/auth'

export const signupUser = async (name: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { name, email, password })

        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}