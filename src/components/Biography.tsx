import { Grid, Typography, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Link from "@mui/material/Link";
import ReactMarkdown from "react-markdown";
import toml from "toml";
import BiographyToml from "../configs/Biography.toml?raw";

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

const Biography = () => {
  const biographyInfo = toml.parse(BiographyToml);

  console.log(biographyInfo);
  console.log(biographyInfo["contact"]["links"].length);

  return (
    <div>
      <Grid
        style={{
          backgroundImage: `url(${biographyInfo["main"]["backgroundPic"]})`,
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
          <div style={maintitlestyle}>{biographyInfo["main"]["title"]}</div>
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
          <div style={{ display: "flex" }}>
            <img src={biographyInfo["main"]["profilePic"]} />
          </div>
          <Typography
            component="div"
            sx={{
              fontFamily: "Yaldevi",
              color: "white",
            }}
          >
            <Box sx={bodyStyle}>
              <ReactMarkdown>{biographyInfo["main"]["text"]}</ReactMarkdown>
            </Box>
            <a
              href={biographyInfo["portfolio"]["link"]["url"]}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  ...titleStyle,
                  color: "black",
                  textDecoration: "none",
                  ":hover": { color: "white" },
                }}
              >
                {biographyInfo["portfolio"]["link"]["text"]}
              </Box>
            </a>
            <br></br>
            <Box sx={bodyStyle}>
              {biographyInfo["contact"]["text"]}
              {biographyInfo["contact"]["links"].map(
                (item: { url: string; text: string }, idx: number) => (
                  <>
                    {idx == 0
                      ? " "
                      : idx == biographyInfo["contact"]["links"].length - 1
                      ? ", or "
                      : ", "}
                    <Link
                      style={{ color: "#9b9b9b", textDecoration: "none" }}
                      href={item["url"]}
                    >
                      {item["text"]}
                    </Link>
                  </>
                )
              )}
            </Box>
          </Typography>
        </Stack>
      </Grid>
    </div>
  );
};

export default Biography;
