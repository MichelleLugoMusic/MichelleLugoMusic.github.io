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
import toml from "toml";
import HeaderToml from "../configs/Header.toml?raw";
const titleFontStyle: React.CSSProperties = {
  textDecoration: "none",
  fontFamily: "Yaldevi",
  color: "white",
  userSelect: "none",
};

const portfolioOptionsFontStyle: React.CSSProperties = {
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
  const headerInfo = toml.parse(HeaderToml);

  return (
    <Grid>
      <Grid
        container
        sx={{ backgroundColor: "common.lavender" }}
        justifyContent="space-around"
        alignItems="center"
        p={"1.3vh"}
      >
        <Stack direction="row">
          <IconWithText
            icon={<LocationIcon sx={{ width: "5vw", marginRight: 1 }} />}
            text="Boston, US"
            marginRight={5}
            width="40%"
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
            link={headerInfo["contact"]["instagram"]}
          />
          <SocialMediaButton
            icon={<FacebookIcon />}
            hoverColor="#3c5798"
            link={headerInfo["contact"]["facebook"]}
          />
          <SocialMediaButton
            icon={<YouTubeIcon />}
            hoverColor="#cc181e"
            link={headerInfo["contact"]["youtube"]}
          />
        </Stack>
      </Grid>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography mr={3}>
            <Link
              to={`/${headerInfo["navigate"]["home"]["subpage"]}`}
              style={titleFontStyle}
            >
              {headerInfo["navigate"]["home"]["text"]}
            </Link>
          </Typography>
          <Typography mr={3}>
            <Link
              to={`/${headerInfo["navigate"]["biography"]["subpage"]}`}
              style={titleFontStyle}
            >
              {headerInfo["navigate"]["biography"]["text"]}
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
            <div style={titleFontStyle}>
              {headerInfo["navigate"]["portfolio"]["text"]}
            </div>
          </Typography>
          <Menu
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
            {headerInfo["navigate"]["portfolio"]["entries"].map(
              (item: { subpage: string; text: string }) => (
                <>
                  <MenuItem onClick={handleClose}>
                    <Link
                      to={`/${item["subpage"]}`}
                      style={portfolioOptionsFontStyle}
                    >
                      {item["text"]}
                    </Link>
                  </MenuItem>
                </>
              )
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
