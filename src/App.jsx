import "./App.css";
import background from "./michellelugomusic_widecrop.jpg";

import { Grid, Typography } from "@mui/material";

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

const titleFontStyle = {
  textDecoration: "none",
  fontFamily: "Yaldevi",
  color: "white",
  fontSize: "3.3vh",
};
function App() {
  return (
    <div style={backgroundStyle}>
      <div
        style={{
          width: "100%",
          flex: 0.5,
          marginTop: "0%",
          backgroundColor: "lavender",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "100%",
            margin: "0 auto",
            backgroundColor: "green",
          }}
        >
          <div
            style={{ fontFamily: "Yaldevi", color: "white", fontSize: "4.5vh" }}
          >
            <span>Boston, US</span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          flex: 3,
          marginTop: "0%",
          backgroundColor: "clear",
        }}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid item>
            <a href="" style={titleFontStyle}>
              Home
            </a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>
              Biography
            </a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>
              Portfolio
            </a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>
              Contact
            </a>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          width: "100%",
          flex: 0.9,
          backgroundColor: "clear",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <div
          style={{
            fontFamily: "Merienda",
            color: "white",
            fontSize: "12vh",
            lineHeight: "10vh",
          }}
        >
          Michelle Lugo
        </div>
      </div>
      <div
        style={{
          width: "100%",
          flex: 1.1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        <div
          style={{ fontFamily: "Yaldevi", color: "white", fontSize: "4.5vh" }}
        >
          Composer | Arranger | Producer
        </div>
      </div>
    </div>
  );
}

export default App;
