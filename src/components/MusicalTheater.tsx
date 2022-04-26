import { Grid, Typography, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Header from "./Header";
import Link from "@mui/material/Link";
import ReactPlayer from "react-player";
import toml from "toml";
import MusicalTheaterToml from "../configs/MusicalTheater.toml?raw";

const maintitlestyle: React.CSSProperties = {
  fontFamily: "Merienda",
  color: "white",
  fontSize: "6vw",
  lineHeight: "10vh",
};

const titleStyle: React.CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.8vw",
  lineHeight: "1rem",
  color: "white",
};

const bodyStyle: React.CSSProperties = {
  color: "white",
  fontSize: "1.1vw",
  letterSpacing: "0.1rem",
  wordSpacing: "0.04rem",
  lineHeight: "1.6rem",
  marginTop: "1.5%",
};

export const MusicalTheater = () => {
  const theaterEntries = toml.parse(MusicalTheaterToml);
  console.log(theaterEntries);
  return (
    <div>
      <Grid
        style={{
          backgroundImage: `url(${theaterEntries["main"]["backgroundPic"]})`,
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
          <div style={maintitlestyle}>Musical Theater</div>
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
          {theaterEntries["entries"].map(
            (item: { title: string; desc: string; link: string }) => (
              <>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Yaldevi",
                    color: "white",
                  }}
                >
                  <Box sx={titleStyle}>{item["title"]}</Box>
                  <br></br>

                  <Box sx={bodyStyle}>{item["desc"]}</Box>
                </Typography>
                <ReactPlayer
                  height={"10vh"}
                  url={item["link"]}
                  controls={true}
                />
                <br></br>
              </>
            )
          )}

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {theaterEntries["extras"].map(
            (item: { desc: string; linkText: string; linkUrl: string }) => (
              <>
                <Typography
                  component="div"
                  sx={{
                    fontFamily: "Yaldevi",
                    color: "white",
                  }}
                >
                  <Box sx={bodyStyle}>{item["desc"]}</Box>

                  <br></br>

                  <Link
                    href={item["linkText"]}
                    sx={{
                      ...bodyStyle,
                      fontWeight: "bold",
                      fontSize: "1.3vw",
                      color: "black",
                      textDecoration: "none",
                      ":hover": { color: "white" },
                    }}
                  >
                    {item["linkText"]}
                  </Link>
                  <br></br>
                </Typography>
              </>
            )
          )}
        </Stack>
      </Grid>
    </div>
  );
};
