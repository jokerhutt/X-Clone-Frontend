import * as LucideIcons from "lucide-react";
import { Icon } from "../../atoms/Icon";
import { IconHasNotification } from "../../atoms/IconHasNotification";
import { Typography } from "../../atoms/Typography";
export type LucideIconName = keyof typeof LucideIcons;

type Props = {
  icon: LucideIconName;
  state?: "active" | "inactive";
  children: string;
  notification?: number;
  iconProps?: React.ComponentProps<typeof Icon>;
  typographyProps?: React.ComponentProps<typeof Typography>;
};

export function SideBarButtonServerSide({
  icon,
  state = "inactive",
  children,
  notification = 0,
  iconProps,
  typographyProps,
  ...props
}: Props) {
  return (
    <>
      <button
        {...props}
        className="p-3  my-1 gap-5
	animate hover:bg-white/25
	rounded-full
	inline-flex flex-row items-cecnter justify-start
	 "
      >
        {notification && notification > 0 ? (
          <IconHasNotification
            icon={icon}
            notification={notification}
            {...iconProps}
          />
        ) : (
          <Icon name={icon} size={24} color={"#fff"} {...iconProps} />
        )}

        <Typography
          role={`${
            state === "active" ? "sidebarButtonTextActive" : "sidebarButtonText"
          }`}
          className="inline-block mr-4"
          {...typographyProps}
        >
          {children.trim()}
        </Typography>
      </button>
    </>
  );
}
