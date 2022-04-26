import { Grid } from "@mui/material";
import Header from "./Header";
import toml from "toml";
import ArrangementsToml from "../configs/Arrangements.toml?raw";

const maintitlestyle = {
  fontFamily: "Merienda",
  color: "white",
  fontSize: "6vw",
  lineHeight: "10vh",
};

export const Arrangements = () => {
  const arrangementsInfo = toml.parse(ArrangementsToml);
  console.log(arrangementsInfo);
  return (
    <div>
      <Grid
        style={{
          backgroundImage: `url(${arrangementsInfo["main"]["backgroundPic"]})`,
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
          <div style={maintitlestyle}>{arrangementsInfo["main"]["title"]}</div>
        </div>
      </Grid>
    </div>
  );
};
