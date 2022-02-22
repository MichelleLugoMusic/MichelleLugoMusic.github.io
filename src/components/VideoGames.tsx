import { Grid, Typography, Stack } from "@mui/material";
import biopic from "../assets/images/MusicMenusPic.jpeg";
import GourdGetaway from "../assets/images/GourdGetaway.png";
import BobTheBomber from "../assets/images/BobTheBomber.png";
import BoomerangAttack from "../assets/images/BoomerangAttack.png";
import Catapultimals from "../assets/images/Catapultimals.png";
import Doughmentum from "../assets/images/Doughmentum.png";
import IHaveSeenYourDog from "../assets/images/IHaveSeenYourDog.png";
import LostColors from "../assets/images/LostColors.png";
import Pancakescape from "../assets/images/Pancakescape.png";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Header from "./Header";
import Link from "@mui/material/Link";
import ReactPlayer from "react-player";

export const VideoGames = () => (
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
          Video Games
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
            marginBottom: "10%",
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "3rem",
              lineHeight: "1rem",
              color: "white",
            }}
          >
            Video game compositions
          </Box>
        </Typography>
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
            The Audioventure
          </Box>
          <Box
            sx={{
              color: "white",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
              wordSpacing: "0.04rem",
              lineHeight: "1.6rem",
              marginTop: "2%",
            }}
          >
            Check out my latest video game project, a playlist-themed game in
            which I composed a theme for the places “Beach”, “Party”, and
            “Through the clouds”.
          </Box>
        </Typography>
        <iframe
          title="Inline Frame Example"
          src={"https://the-audioventure.github.io/The-Audioventure/#/Home"}
          style={{
            width: "70vw",
            height: "50vh",
            borderStyle: "inset",
            borderWidth: "0.2vw",
            marginTop: "2%",
          }}
        />

        <VideoGame
          imgSrc={GourdGetaway}
          title="Gourd Getaway"
          desc="My track is on the last two levels of the game."
          link="https://elijahcobb.itch.io/gourdgetaway"
        />
        <VideoGame
          imgSrc={Pancakescape}
          title="Pancakescape"
          desc="There are three composers on this track, and our tracks play randomly."
          link="https://caiojmini.itch.io/pancakescape"
        />
        <VideoGame
          imgSrc={Doughmentum}
          title="Doughmentum"
          desc="I did the main menu music and all the sfx on this game."
          link="https://ahrtxv.itch.io/dough-mentum"
        />
        <VideoGame
          imgSrc={BobTheBomber}
          title="Bob the Bomber"
          desc="Was responsible for all music and sfx on this game."
          link="https://restartgame.itch.io/bob-the-bomber"
        />
        <VideoGame
          imgSrc={BoomerangAttack}
          title="Boomerang attack"
          desc="I did all the music and sfx on this game, as well as gave most of the ideas to create this game."
          link="https://devpenguingames.itch.io/boomerang-attack"
        />
        <VideoGame
          imgSrc={LostColors}
          title="Lost colors"
          desc="I did all music/sfx."
          link="https://globalgamejam.org/2021/games/lost-colors-2-0"
        />
        <VideoGame
          imgSrc={IHaveSeenYourDog}
          title="I have seen your dog"
          desc="I did music"
          link="https://v3.globalgamejam.org/2021/games/i-have-seen-your-dog-7"
        />
        <br></br>
      </Stack>
    </Grid>
  </div>
);

// /**
//  *
//  * @param {{imgSrc: string, title: string, desc: string, link: string}} props
//  */
const VideoGame = ({ imgSrc, title, desc, link }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "70vw",
        height: "50vh",
        marginTop: "5%",
      }}
    >
      <div
        style={{
          width: "70%",
          flex: 1,
          objectFit: "contain",
          borderStyle: "inset",
          borderWidth: "0.2vw",
          boxSizing: "content-box",
          lineHeight: 0,
          display: "block",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={imgSrc}
        ></img>
      </div>
      <div style={{ width: "50%", flex: 1, margin: "auto" }}>
        <Typography
          component="div"
          sx={{
            fontFamily: "Yaldevi",
            color: "white",
            flexWrap: "wrap",
            display: "flex",
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1rem",
              color: "white",
              marginLeft: "10%",
              width: "100%",
            }}
          >
            {title}
          </Box>
          <Box
            sx={{
              color: "white",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
              wordSpacing: "0.04rem",
              lineHeight: "1.6rem",
              marginLeft: "10%",
              marginTop: "4vh",
              width: "100%",
            }}
          >
            {desc}
          </Box>
          <Link
            href={link}
            sx={{
              color: "black",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
              wordSpacing: "0.04rem",
              lineHeight: "1.6rem",
              marginLeft: "10%",
              ":hover": { color: "white" },
              textDecoration: "none",
              marginTop: "4vh",
              width: "100%",
            }}
          >
            {link}
          </Link>
        </Typography>
      </div>
    </div>
  );
};

VideoGame.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
