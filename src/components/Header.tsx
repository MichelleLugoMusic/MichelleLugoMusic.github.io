import {
  AppBar,
  Grid,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
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
import React from "react";

const titleFontStyle = {
  textDecoration: "none",
  fontFamily: "Yaldevi",
  color: "white",
  userSelect: "none",

  //   fontSize: "3.3vh",
};

const portfolioOptionsFontStyle = {
  textDecoration: "none",
  fontFamily: "Yaldevi",
  color: "black",
  userSelect: "none",
};

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      <Grid
        container
        sx={{ backgroundColor: "common.lavender" }}
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
          <SocialMediaButton
            icon={<InstagramIcon />}
            hoverColor="#cd42e7"
            link="https://www.instagram.com/michellelugomusic/"
          />
          <SocialMediaButton
            icon={<FacebookIcon />}
            hoverColor="#3c5798"
            link="https://www.facebook.com/BoriPianist/"
          />
          <SocialMediaButton
            icon={<YouTubeIcon />}
            hoverColor="#cc181e"
            link="https://www.youtube.com/channel/UC2l5sd_oygx9-e5aCSSs87g"
          />
        </Stack>
      </Grid>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography mr={3}>
            <Link to="/" style={titleFontStyle}>
              Home
            </Link>
          </Typography>
          <Typography mr={3}>
            <Link to="/biography" style={titleFontStyle}>
              Biography
            </Link>
          </Typography>
          <Typography
            mr={3}
            onMouseEnter={handleMouseOver}
            style={{
              cursor: "pointer",
            }}
            onClick={handleMouseOver}
          >
            <div style={titleFontStyle}>Portfolio</div>
          </Typography>
          <Menu
            // classes={{ paper: classes.menuPaper }} https://v3.mui.com/demos/menus/ change color
            color="common.gray"
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              onMouseLeave: handleClose,
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/film_music" style={portfolioOptionsFontStyle}>
                Film Music
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/musical_theater" style={portfolioOptionsFontStyle}>
                Musical Theater
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/video_games" style={portfolioOptionsFontStyle}>
                Video Games
              </Link>
            </MenuItem>
          </Menu>
          <Typography>
            <Link to="/contact" style={titleFontStyle}>
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
