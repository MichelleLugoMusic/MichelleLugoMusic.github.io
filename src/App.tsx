import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Biography from "./components/Biography";
import React from "react";
function App() {
  React.useEffect(() => {
    document.title = "Michelle Lugo Music";
    document.body.style.backgroundColor = "#5E6687";
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="biography" element={<Biography />} />
      </Routes>
    </Router>
  );
}

export default App;
