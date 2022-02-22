import { Grid, Typography, Stack } from "@mui/material";
import background from "../assets/images/michellelugomusic_widecrop3.jpeg";
import Header from "../components/Header";

const Home = () => (
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

    <div
      style={{
        flex: 0.55,
        backgroundColor: "clear",
        display: "flex",
        alignItems: "center",
        marginTop: "15%",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontFamily: "Merienda",
          color: "white",
          fontSize: "6vw",
          lineHeight: "10vh",
          marginRight: "3vw",
        }}
      >
        Michelle Lugo
      </div>
      <div
        style={{
          // alignSelf: "center",
          // justifyContent: "center",
          fontFamily: "Yaldevi",
          color: "white",
          fontSize: "2vw",
          marginTop: "1vw",
        }}
      >
        Composer | Arranger | Producer
      </div>
    </div>
  </Grid>
);

export default Home;
