import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Categories from './Components/Categories';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
