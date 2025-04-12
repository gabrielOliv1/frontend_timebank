import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import SignupPage from "./pages/Signup"
import './styles/colors.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
}

export default App
