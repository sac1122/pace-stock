import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Auth from './Auth'
import Signup from './signup'
import ForgotPassword from './forgot'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Auth />}  />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
