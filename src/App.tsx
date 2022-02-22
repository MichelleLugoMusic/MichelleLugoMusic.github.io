import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Biography from "./components/Biography";
import { FilmMusic } from "./components/FilmMusic";
import { MusicalTheater } from "./components/MusicalTheater";
import { VideoGames } from "./components/VideoGames";
import { Contact } from "./components/Contact";
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
        <Route path="film_music" element={<FilmMusic />} />
        <Route path="musical_theater" element={<MusicalTheater />} />
        <Route path="video_games" element={<VideoGames />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
