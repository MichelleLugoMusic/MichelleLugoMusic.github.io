import { Grid, Typography, Stack } from "@mui/material";
import biopic from "../assets/images/cropped_biopic.jpeg";
import smallbiopic from "../assets/images/profpicsmall.jpeg";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Link from "@mui/material/Link";

const Biography = () => (
  <div>
    <Grid
      style={{
        backgroundImage: `url(${biopic})`,
        backgroundBlendMode: "multiply",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        width: "100vw",
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundColor: "lightgray",
      }}
      display="flex"
      flexDirection="column"
    >
      <Header />
      <div
        style={{
          width: "100%",
          flex: 0.9,
          backgroundColor: "clear",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "0%",
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
          Biography
        </div>
      </div>
      <div
        style={{
          width: "100%",
          flex: 1.1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      />
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
        <div style={{ display: "flex" }}>
          <img src={smallbiopic} />
        </div>
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
              fontSize: "1.5rem",
              lineHeight: "1rem",
              color: "white",
            }}
          >
            Hi!
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
            <a>My name is </a>
            <Box display="inline" style={{ fontWeight: "bold" }}>
              Michelle Lugo
            </Box>
            , and I'm a Berklee College of Music alumni. My major was
            composition, arranging and production, and I have a minor in music
            technology. I was always interested in music since I was four years
            when I begged my mother to buy me a piano. Since then, I've learned
            to play classical piano at a conservatory and picked up other
            instruments like guitar, bass and voice. Through my experience in
            music, I wanted to start composing and arranging, and I started that
            at 15. When got into Berklee, I knew that I wanted to expand my
            creativity to make music and be able to learn different stuff with
            it like recording, mixing and arranging. I have made arrangements
            for big shows at Berklee, and I want to have different projects
            involving creating for other people and for myself.
          </Box>
          <br></br>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1rem",
              color: "white",
            }}
          >
            Why do I love Music?
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
            I love music because it’s more than just a passion; it’s something
            that defines me. It brings out my creative side, and it’s something
            I don’t get tired of. Music makes the world a better place, and I
            intend to make the world a better place through music.
          </Box>
          <br></br>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1rem",
              color: "white",
            }}
          >
            Portfolio…
          </Box>
          <br></br>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1rem",
              color: "black",
            }}
          >
            Go to my portfolio
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
            {
              "If you have any questions or would like to get in touch, you can reach me via "
            }
            <Link
              style={{ color: "#9b9b9b", textDecoration: "none" }}
              href="mailto:cmlugo27@gmail.com"
            >
              Email
            </Link>
            {", "}
            <Link
              style={{ color: "#9b9b9b", textDecoration: "none" }}
              href="https://www.facebook.com/BoriPianist/"
            >
              Facebook
            </Link>
            {", or "}
            <Link
              style={{ color: "#9b9b9b", textDecoration: "none" }}
              href="https://www.instagram.com/michellelugomusic/"
            >
              Instagram
            </Link>
            .
          </Box>
        </Typography>
      </Stack>
    </Grid>
  </div>
);

export default Biography;
