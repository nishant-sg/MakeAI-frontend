import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import HomePage from './pages/homePage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
