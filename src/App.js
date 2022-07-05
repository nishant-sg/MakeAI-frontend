import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';  
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'  
import HomePage from './pages/homePage';
import SignUp from './pages/signUp.js';
import SignIn from './pages/signIn.js';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/signup"><SignUp/></Route>
        <Route exact path="/signin"><SignIn/></Route>
        
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
