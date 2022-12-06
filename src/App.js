import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Auth from './Auth'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Auth />}  />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
