import { Grid } from "@mui/material";
import Header from "./Header";
import toml from "toml";
import FilmMusicToml from "../configs/FilmMusic.toml?raw";

const maintitlestyle: React.CSSProperties = {
  fontFamily: "Merienda",
  color: "white",
  fontSize: "6vw",
  lineHeight: "10vh",
};

export const FilmAudio = () => {
  const theaterEntries = toml.parse(FilmMusicToml);
  console.log(theaterEntries);
  return (
    <div>
      <Grid
        style={{
          backgroundImage: `url(${theaterEntries["main"]["backgroundPic"]})`,
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
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
          <div style={maintitlestyle}>{theaterEntries["main"]["title"]}</div>
        </div>
      </Grid>
    </div>
  );
};
