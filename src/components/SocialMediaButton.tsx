import { Avatar } from "@mui/material";

type SocialMediaButtonProps = { icon: JSX.Element; link?: string };

const SocialMediaButton = ({ icon, link }: SocialMediaButtonProps) => {
  return (
    <Avatar sx={{ bgcolor: "common.grayLighter", marginRight: 3 }}>
      {icon}
    </Avatar>
  );
};

export default SocialMediaButton;
