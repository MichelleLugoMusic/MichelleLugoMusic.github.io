import { Grid, Typography, Stack } from "@mui/material";
import biopic from "../assets/images/MusicMenusPic.jpeg";
import Box from "@mui/material/Box";
import Header from "./Header";
import Link from "@mui/material/Link";
import ReactPlayer from "react-player";

export const FilmMusic = () => (
  <div>
    <Grid
      style={{
        backgroundImage: `url(${biopic})`,
        backgroundBlendMode: "multiply",
        // backgroundSize: "auto 100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgray",
        // objectFit: "fill",
      }}
      display="flex"
      flexDirection="column"
    >
      <Header />
      <div
        style={{
          width: "100%",
          flex: 3,
          backgroundColor: "clear",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "0%",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
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
          Media Composition
        </div>
      </div>
    </Grid>
    <Grid
      style={{
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        width: "100vw",
        height: "140vh",
        backgroundRepeat: "no-repeat",
      }}
      sx={{ backgroundColor: "common.dark_lavender" }}
      display="flex"
      flexDirection="column"
    >
      <Stack
        direction="column"
        sx={{
          marginTop: "8%",
          marginLeft: "8.5%",
          marginRight: "35%",
          alignItems: "left",
        }}
      >
        <div style={{ display: "flex" }}></div>
        <Typography
          component="div"
          sx={{
            fontFamily: "Yaldevi",
            color: "white",
          }}
        >
          <br></br>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "2rem",
              lineHeight: "1rem",
              color: "white",
            }}
          >
            Compositions
          </Box>
          <br></br>
          <br></br>

          <ReactPlayer
            url={`https://soundcloud.com/michelle-lugo-386819351/sets/best-tracks?color=${"#FFFFFF"}`}
            config={{
              soundcloud: {
                options: {
                  single_active: false,
                },
              },
            }}
          />

          <br></br>
        </Typography>
      </Stack>
    </Grid>
  </div>
);
