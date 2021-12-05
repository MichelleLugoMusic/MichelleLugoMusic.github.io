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
  //   fontSize: "3.3vh",
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
          <Typography mr={3} onMouseEnter={handleMouseOver}>
            <Link
              to="/portfolio"
              style={titleFontStyle}

              // onMouse={handleClose}
            >
              Portfolio
            </Link>
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <Typography>
            <Link to="contact" style={titleFontStyle}>
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
