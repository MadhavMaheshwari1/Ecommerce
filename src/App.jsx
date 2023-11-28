import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="app">
      <HomePage/>
    </div>
  );
}

export default App;
