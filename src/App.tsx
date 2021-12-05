import React from "react";
import "./App.css";
import background from "./michellelugomusic_widecrop.jpg";

import { Grid, Typography, Stack } from "@mui/material";
import {
  Mail as MailIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";

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

type IconWithTextProps = {
  icon: JSX.Element;
  text: string;
};

const IconWithText = ({ icon, text }: IconWithTextProps) => (
  <Stack direction="row" color="white">
    {icon}
    <Typography fontFamily="Yaldevi" flexDirection="row">
      {text}
    </Typography>
  </Stack>
);

function App() {
  return (
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
      <Grid
        container
        sx={{ backgroundColor: { xs: "green", lg: "purple" } }}
        justifyContent="left"
        p={2}
      >
        <IconWithText
          icon={<LocationIcon sx={{ marginRight: 1 }} />}
          text="Boston, US"
        />
        <IconWithText
          icon={<MailIcon sx={{ marginRight: 1 }} />}
          text="michellelugomusic@gmail.com"
        />
      </Grid>
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
    </Grid>
  );
}

export default App;
