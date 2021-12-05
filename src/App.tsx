import "./App.css";
import background from "./assets/images/michellelugomusic_widecrop.jpg";
import { Grid, Typography, Stack, Avatar } from "@mui/material";
import {
  Mail as MailIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

const backgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "auto 100%",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
};

const titleFontStyle = {
  textDecoration: "none",
  fontFamily: "Yaldevi",
  color: "white",
  fontSize: "3.3vh",
};

type IconWithTextProps = {
  icon: JSX.Element;
  text: string;
  marginRight?: number | string;
};

const IconWithText = ({ icon, text, ...props }: IconWithTextProps) => (
  <Stack direction="row" color="white" {...props}>
    {icon}
    <Typography fontFamily="Yaldevi" flexDirection="row">
      {text}
    </Typography>
  </Stack>
);

type SocialMediaButtonProps = { icon: JSX.Element; link?: string };

const SocialMediaButton = ({ icon, link }: SocialMediaButtonProps) => {
  return (
    <Avatar sx={{ bgcolor: "common.grayLighter", marginRight: 3 }}>
      {icon}
    </Avatar>
  );
};

function App() {
  return (
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
      <Grid
        container
        sx={{ backgroundColor: "common.gray" }}
        justifyContent="space-around"
        alignItems="center"
        p={2}
      >
        <Stack direction="row">
          <IconWithText
            icon={<LocationIcon sx={{ marginRight: 1 }} />}
            text="Boston, US"
            marginRight={5}
          />
          <IconWithText
            icon={<MailIcon sx={{ marginRight: 1 }} />}
            text="michellelugomusic@gmail.com"
          />
        </Stack>
        <Stack direction="row">
          <SocialMediaButton icon={<InstagramIcon />} />
          <SocialMediaButton icon={<FacebookIcon />} />
          <SocialMediaButton icon={<YouTubeIcon />} />
        </Stack>
      </Grid>
      <div
        style={{
          width: "100%",
          flex: 3,
          marginTop: "0%",
          backgroundColor: "clear",
        }}
      >
        <Grid container justifyContent="center" spacing={4}>
          <Grid item>
            <a href="" style={titleFontStyle}>
              Home
            </a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>
              Biography
            </a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>
              Portfolio
            </a>
          </Grid>
          <Grid item>
            <a href="" style={titleFontStyle}>
              Contact
            </a>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          width: "100%",
          flex: 0.9,
          backgroundColor: "clear",
          display: "flex",
          alignItems: "center",
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
        <div
          style={{ fontFamily: "Yaldevi", color: "white", fontSize: "4.5vh" }}
        >
          Composer | Arranger | Producer
        </div>
      </div>
    </Grid>
  );
}

export default App;
