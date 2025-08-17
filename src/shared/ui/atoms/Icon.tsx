import * as LucideIcons from "lucide-react";
import React from "react";
export type LucideIconName = keyof typeof LucideIcons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name?: LucideIconName;
  className?: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = 24,
  color = "currentColor",
  ...props
}) => {
  if (!name || !LucideIcons[name]) {
    return null;
  }

  const IconComponent = LucideIcons[name] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;

  return (
    <IconComponent
      width={size}
      height={size}
      color={color}
      className={className}
      {...props}
    />
  );
};

Icon.displayName = "Icon";
