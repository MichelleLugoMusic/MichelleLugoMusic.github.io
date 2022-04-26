import { Grid, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Header from "./Header";
import Link from "@mui/material/Link";
import ReactPlayer from "react-player";
import VideoGamesToml from "../configs/VideoGames.toml?raw";
import toml from "toml";

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

export const VideoGames = () => {
  const VideoGamesInfo = toml.parse(VideoGamesToml);
  return (
    <div>
      <Grid
        style={{
          backgroundImage: `url(${VideoGamesInfo["main"]["backgroundPic"]})`,
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
          <div style={maintitlestyle}>{VideoGamesInfo["main"]["title"]}</div>
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
                fontSize: "3.5vw",
                lineHeight: "1rem",
                color: "white",
              }}
            >
              {VideoGamesInfo["main"]["subtitle"]}
            </Box>
          </Typography>
          <Typography
            component="div"
            sx={{
              fontFamily: "Yaldevi",
              color: "white",
            }}
          >
            <Box sx={titleStyle}>
              {VideoGamesInfo["theAudioventure"]["title"]}
            </Box>
            <Box sx={bodyStyle}>
              {VideoGamesInfo["theAudioventure"]["body"]}
            </Box>
          </Typography>
          <iframe
            title="The Audioventure"
            src={VideoGamesInfo["theAudioventure"]["linkUrl"]}
            style={{
              width: "70vw",
              height: "50vh",
              borderStyle: "inset",
              borderWidth: "0.2vw",
              marginTop: "1.5%",
              marginBottom: "2%",
            }}
          />
          <div
            style={{
              display: "flex",
              width: "70vw",
              height: "50vh",
              marginTop: "2%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "50%",
                height: "100%",
              }}
            >
              <ReactPlayer
                url={VideoGamesInfo["soundcloud"]["playerUrl"]}
                config={{
                  soundcloud: {
                    options: {
                      single_active: false,
                    },
                  },
                }}
              />
            </div>
            <div style={{ width: "50%", flex: 1, margin: "auto" }}>
              <Caption
                title={VideoGamesInfo["soundcloud"]["title"]}
                desc={VideoGamesInfo["soundcloud"]["body"]}
                linkUrl={VideoGamesInfo["soundcloud"]["linkUrl"]}
                linkText={VideoGamesInfo["soundcloud"]["linkText"]}
              />
            </div>
          </div>

          {VideoGamesInfo
            ? VideoGamesInfo["games"].map(
                (entry: {
                  picUrl: string;
                  title: string;
                  body: string;
                  linkUrl: string;
                  linkText: string;
                }) => (
                  <>
                    <VideoGame
                      imgSrc={entry["picUrl"]}
                      title={entry["title"]}
                      desc={entry["body"]}
                      linkUrl={entry["linkUrl"]}
                      linkText={entry["linkText"]}
                    />
                  </>
                )
              )
            : null}
          <br></br>
        </Stack>
      </Grid>
    </div>
  );
};

const VideoGame = (props: {
  imgSrc: string;
  title: string;
  desc: string;
  linkUrl: string;
  linkText: string;
}) => {
  const { imgSrc, title, desc, linkUrl, linkText } = props;
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
        <Caption
          title={title}
          desc={desc}
          linkUrl={linkUrl}
          linkText={linkText}
        />
      </div>
    </div>
  );
};

const Caption = (props: {
  title: string;
  desc: string;
  linkUrl: string;
  linkText: string;
}) => {
  const { title, desc, linkUrl, linkText } = props;
  return (
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
          ...titleStyle,
          marginLeft: "10%",
        }}
      >
        {title}
      </Box>
      <Box
        sx={{
          ...bodyStyle,
          marginLeft: "10%",
          marginTop: "4vh",
          width: "100%",
        }}
      >
        {desc}
      </Box>
      <Link
        href={linkUrl}
        sx={{
          ...bodyStyle,
          color: "black",
          marginLeft: "10%",
          ":hover": { color: "white" },
          textDecoration: "none",
          marginTop: "4vh",
          width: "100%",
        }}
      >
        {linkText}
      </Link>{" "}
    </Typography>
  );
};

VideoGame.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
