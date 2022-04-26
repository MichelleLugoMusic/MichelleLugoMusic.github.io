import { Grid } from "@mui/material";
import Header from "../components/Header";
import HomeToml from "../configs/Home.toml?raw";
import toml from "toml";

const Home = () => {
  const HomeEntries = toml.parse(HomeToml);
  return (
    <Grid
      style={{
        backgroundImage: `url(${HomeEntries["main"]["backgroundPic"]})`,
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
          {HomeEntries["main"]["name"]}
        </div>
        <div
          style={{
            fontFamily: "Yaldevi",
            color: "white",
            fontSize: "2vw",
            marginTop: "1vw",
          }}
        >
          {HomeEntries["main"]["title"]}
        </div>
      </div>
    </Grid>
  );
};

export default Home;
