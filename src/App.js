import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Playground from "./pages/Playground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Playground/> */}
      <Authentication />
      <Footer />
    </div>
  );
}

export default App;
