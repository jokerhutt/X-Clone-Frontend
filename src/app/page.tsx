"use client";

import useSimplePopup from "@/entities/ui/atoms/Xpopup";
import { IconHasNotification } from "@/shared/ui/atoms/IconHasNotification";
import { Typography } from "@/shared/ui/atoms/Typography";
import { SideBarButton } from "@/shared/ui/molecules/SidebarButton/SidebarButton";

export default function Home() {
  const { toOpenPopup, Popup } = useSimplePopup();

  return (
    <div className="flex">
      <Typography
        as={"h1"}
        role={"tab"}
        className="flex items-center  gap-[15px]"
      >
        <IconHasNotification icon="BellIcon" notification={3} />
        <span>Activity</span>
      </Typography>
      <SideBarButton icon="Home">Home</SideBarButton>

      <div id="rootx">
        <button onClick={toOpenPopup}>Открыть модалку</button>
        <Popup />
      </div>
    </div>
  );
}
