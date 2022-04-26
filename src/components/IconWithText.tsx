import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

type IconWithTextProps = {
  icon: JSX.Element;
  text: string;
  marginRight?: number | string;
};

const IconWithText = ({ icon, text, ...props }: IconWithTextProps) => (
  <Stack direction="row" color="white" alignItems="center" {...props}>
    {icon}
    <Typography
      style={{
        fontSize: "100%",
        lineHeight: "1vw",
        color: "white",
      }}
      fontFamily="Yaldevi"
      flexDirection="row"
    >
      {text}
    </Typography>
  </Stack>
);

IconWithText.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default IconWithText;
