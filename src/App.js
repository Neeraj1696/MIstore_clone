import "./App.css";
import Navbar from "./Pages/Navbar";
import PreNavbar from "./Pages/PreNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./Pages/Slider";
import data from "./data/data.json";
import Offer from "./Pages/Offer";

function App() {
  return (
    <div className="App">
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start} />
        <Offer offer={data.offer} />
      </Router>
    </div>
  );
}

export default App;
