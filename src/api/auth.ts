import axios from "axios";

const API_URL =  'https://timebank-a9encpbdeuejaefj.brazilsouth-01.azurewebsites.net'

export const signupUser = async (name: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, { name, email, password })

        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}