import { Grid, Typography, Stack } from "@mui/material";
import biopic from "../assets/images/MusicMenusPic.jpeg";
import Box from "@mui/material/Box";
import Header from "./Header";
import Link from "@mui/material/Link";
import ReactPlayer from "react-player";

export const MusicalTheater = () => (
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
          Musical Theater
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
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1rem",
              color: "white",
            }}
          >
            Rings come and go
          </Box>
          <br></br>

          <Box
            sx={{
              color: "white",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
              wordSpacing: "0.04rem",
              lineHeight: "1.6rem",
            }}
          >
            I have made a musical, called Bathroom Breakup, of just three songs
            about two girls on elementary school fighting over a boy. On the
            first song, she enters the bathroom, and goes through her TikTok
            only to see her ex making a new TikTok with another girl, which is
            his new girlfriend. She starts singing of the shock.
          </Box>
        </Typography>
        <ReactPlayer
          height={"10vh"}
          url="https://michellelugomusic.github.io/MichelleLugoMusicResources/Rings-come-and-go.mp3"
          controls={true}
        />
        <br></br>

        <Typography
          component="div"
          sx={{
            fontFamily: "Yaldevi",
            color: "white",
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1rem",
              color: "white",
            }}
          >
            You better duck
          </Box>
          <br></br>

          <Box
            sx={{
              color: "white",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
              wordSpacing: "0.04rem",
              lineHeight: "1.6rem",
            }}
          >
            In the second song, she enters the bathroom and they start fighting
            about him.
          </Box>
        </Typography>
        <ReactPlayer
          height={"10vh"}
          url="https://michellelugomusic.github.io/MichelleLugoMusicResources/You-better-duck.mp3"
          controls={true}
        />
        <br></br>

        <Typography
          component="div"
          sx={{
            fontFamily: "Yaldevi",
            color: "white",
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1rem",
              color: "white",
            }}
          >
            Sister for life
          </Box>
          <br></br>

          <Box
            sx={{
              color: "white",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
              wordSpacing: "0.04rem",
              lineHeight: "1.6rem",
            }}
          >
            In the third song, another girl enters the bathroom and tells them
            to not fight over a boy, that there are more important things out
            there than fight for a boy. And the story ends there.
          </Box>
        </Typography>
        <ReactPlayer
          height={"10vh"}
          url="https://michellelugomusic.github.io/MichelleLugoMusicResources/Sister-for-life-2.mp3"
          controls={true}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Box
          sx={{
            // fontWeight: "bold",
            fontSize: "1rem",
            lineHeight: "2rem",
            color: "white",
          }}
        >
          I have also made a second musical, in which it’s still in progress but
          you can follow along on our instagram:
        </Box>
        <br></br>

        <Link
          href="mailto:cmlugo27@gmail.com"
          sx={{
            fontWeight: "bold",
            fontSize: "1.4rem",
            lineHeight: "1rem",
            color: "black",
            textDecoration: "none",
            ":hover": { color: "white" },
          }}
        >
          https://www.instagram.com/willwilsonsavestheworldmusical/
        </Link>
      </Stack>
    </Grid>
  </div>
);
