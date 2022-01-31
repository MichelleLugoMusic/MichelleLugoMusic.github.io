import { Avatar } from "@mui/material";
import Link from "@mui/material/Link";
type SocialMediaButtonProps = {
  icon: JSX.Element;
  link?: string;
  hoverColor: string;
};

const SocialMediaButton = ({
  icon,
  link,
  hoverColor,
}: SocialMediaButtonProps) => {
  return (
    <Link href={link}>
      <Avatar
        sx={{
          bgcolor: "common.grayLighter",
          marginRight: 3,
          "&:hover": {
            bgcolor: hoverColor,
          },
          transition: "all 0.2s ease-in-out",
        }}
      >
        {icon}
      </Avatar>
    </Link>
  );
};

export default SocialMediaButton;
