import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Playground from './pages/Playground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Playground/>
      <Footer/>
    </div>
  );
}

export default App;
