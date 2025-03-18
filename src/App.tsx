import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import SignupPage from "./pages/Signup"


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
