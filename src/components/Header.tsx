import { AppBar, Grid, Stack, Toolbar } from "@mui/material";
import IconWithText from "./IconWithText";
import SocialMediaButton from "./SocialMediaButton";
import {
  Mail as MailIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const titleFontStyle = {
  textDecoration: "none",
  fontFamily: "Yaldevi",
  color: "white",
  //   fontSize: "3.3vh",
};

const Header = () => (
  <>
    <Grid
      container
      sx={{ backgroundColor: "common.gray" }}
      justifyContent="space-around"
      alignItems="center"
      p={1}
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
    {/* <AppBar>
      <Toolbar>
        <Link to="/" style={titleFontStyle}>
          Home
        </Link>
        <Link to="/biography" style={titleFontStyle}>
          Biography
        </Link>
        <Link to="/portfolio" style={titleFontStyle}>
          Portfolio
        </Link>
        <Link to="contact" style={titleFontStyle}>
          Contact
        </Link>
      </Toolbar>
    </AppBar> */}
  </>
);

export default Header;
