"use client";

import * as LucideIcons from "lucide-react";
import { SideBarButtonClientSide } from "./SidebarButton.client";
import { SideBarButtonServerSide } from "./SidebarButton.server";
export type LucideIconName = keyof typeof LucideIcons;

type Props = {
  icon: LucideIconName;
  action?: () => void;
  state?: "active" | "inactive";
  children: string;
  notification?: number;
};

export function SideBarButton({
  icon,
  action,
  state = "inactive",
  children,
  notification = 0,
}: Props) {
  return action ? (
    <SideBarButtonClientSide
      icon={icon}
      state={state}
      action={action}
      notification={notification}
    >
      {children}
    </SideBarButtonClientSide>
  ) : (
    <SideBarButtonServerSide
      icon={icon}
      state={state}
      notification={notification}
    >
      {children}
    </SideBarButtonServerSide>
  );
}
