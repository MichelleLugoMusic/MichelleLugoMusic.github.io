import "./App.css";
import background from "./assets/images/michellelugomusic_widecrop.jpg";
import { Grid, Typography, Stack } from "@mui/material";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const backgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "auto 100%",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
};

function App() {
  return (
    <Router>
      <Grid
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
        }}
        display="flex"
        flexDirection="column"
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Grid>
    </Router>
  );
}

export default App;
