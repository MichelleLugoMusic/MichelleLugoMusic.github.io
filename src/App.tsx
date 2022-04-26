import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Biography from "./components/Biography";
import { Arrangements } from "./components/Arrangements";
import { MusicalTheater } from "./components/MusicalTheater";
import { VideoGames } from "./components/VideoGames";
import { FilmMusic } from "./components/FilmMusic";
import toml from "toml";
import HeaderToml from "./configs/Header.toml?raw";
import React from "react";
function App() {
  React.useEffect(() => {
    document.title = "Michelle Lugo Music";
    document.body.style.backgroundColor = "#5E6687";
  });
  const headerInfo = toml.parse(HeaderToml);

  return (
    <Router>
      <Routes>
        <Route
          path={`/${headerInfo["navigate"]["home"]["subpage"].trim()}`}
          element={<Home />}
        />
        <Route
          path={`/${headerInfo["navigate"]["biography"]["subpage"].trim()}`}
          element={<Biography />}
        />
        {headerInfo["navigate"]["portfolio"]["entries"].map((item) => {
          const directory = item["subpage"].trim();

          switch (directory) {
            case "arrangements":
              var page = <Arrangements />;
              break;
            case "musical_theater":
              var page = <MusicalTheater />;
              break;
            case "video_games":
              var page = <VideoGames />;
              break;
            case "film_music":
              var page = <FilmMusic />;
              break;
            default:
              throw `Couldn't construct page for passed in page directory: ${item["subpage"]}`;
          }
          return (
            <>
              <Route path={`/${directory}`} element={page} />
            </>
          );
        })}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
