import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Home from "./components/page/Home";
import AuthState from "./context/auth/AuthState";

function App() {
  return (
    <AuthState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regester" element={<Register />} />
        </Routes>
      </div>
    </AuthState>
  );
}

export default App;
