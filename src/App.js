import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./screens/Home";
function App() {
  return (
    <div>

      <div className="container">
        <Router>
        <Route exact={true} path="/" component={Home} />
        </Router>
      </div>
    </div>
  );
}

export default App;
