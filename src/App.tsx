import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import "./styles/colors.css";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
