import { Typography } from "@/shared/ui/atoms/Typography";
import { Icon } from "../shared/ui/atoms/Icon";

export default function Home() {
  return (
    <Typography
      as={"h1"}
      role={"tab"}
      className="flex items-center  gap-[15px]"
    >
      <Icon name="ActivityIcon" size={24} color={"#fff"} />
      <span>Activity</span>
    </Typography>
  );
}
