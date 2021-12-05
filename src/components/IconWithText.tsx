import { Stack, Typography } from "@mui/material";

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

export default IconWithText;
