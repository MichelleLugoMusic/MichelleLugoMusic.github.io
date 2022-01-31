import { Grid, Typography, Stack } from "@mui/material";
import background from "../assets/images/michellelugomusic_widecrop.jpg";
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
        width: "100%",
        flex: 0.9,
        backgroundColor: "clear",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
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
      }}
    >
      <div style={{ fontFamily: "Yaldevi", color: "white", fontSize: "4.5vh" }}>
        Composer | Arranger | Producer
      </div>
    </div>
  </Grid>
);

export default Home;
