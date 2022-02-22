import { Grid, Typography, Stack } from "@mui/material";
import biopic from "../assets/images/contactbiopic.jpeg";

import Box from "@mui/material/Box";
import Header from "./Header";

export const Contact = () => (
  <div>
    <Grid
      style={{
        backgroundImage: `url(${biopic})`,
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
        <div
          style={{
            fontFamily: "Merienda",
            color: "white",
            fontSize: "12vh",
            lineHeight: "10vh",
          }}
        >
          Contact
        </div>
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
              color: "white",
              fontSize: "1rem",
              letterSpacing: "0.1rem",
              wordSpacing: "0.04rem",
              lineHeight: "1.6rem",
              marginTop: "2%",
            }}
          >
            Get in touch and we’ll get back to you as soon as we can. We look
            forward to hearing from you!
          </Box>
        </Typography>
      </Stack>
    </Grid>
  </div>
);
