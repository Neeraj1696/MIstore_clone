import "./App.css";
import Navbar from "./Pages/Navbar";
import PreNavbar from "./Pages/PreNavbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <PreNavbar />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
