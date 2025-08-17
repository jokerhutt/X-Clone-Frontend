import { LucideIconName } from "../ui/atoms/Icon";

type SidebarItem = {
  el: {
    icon: LucideIconName;
    label: string;
  };
  notification?: number;
};

export const sidebarItems: SidebarItem[] = [
  {
    el: {
      icon: "House",
      label: "Home",
    },
  },
  {
    el: {
      icon: "Search",
      label: "Explore",
    },
  },
  {
    el: {
      icon: "Bell",
      label: "Notifications",
    },
  },
  {
    el: {
      icon: "MessageCircle",
      label: "Messages",
    },
  },
  {
    el: {
      icon: "ListOrdered",
      label: "Lists",
    },
  },
  {
    el: {
      icon: "Bookmark",
      label: "Bookmarks",
    },
  },
  {
    el: {
      icon: "Users",
      label: "Communities",
    },
  },
  {
    el: {
      icon: "User",
      label: "Profile",
    },
  },
  {
    el: {
      icon: "MoreHorizontal",
      label: "More",
    },
  },
];
