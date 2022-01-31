import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  type CustomCommonColors = typeof colors;
  interface CommonColors extends CustomCommonColors {}
}

const colors = {
  lavender: "#5e6687aa",
  dark_lavender: "#5E6687",
  grayLighter: "rgba(255, 255, 255, 0.10)",
};

const theme = createTheme({
  palette: {
    common: colors,
  },
});

export default theme;
