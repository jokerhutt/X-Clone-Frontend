import clsx from "clsx";
import * as LucideIcons from "lucide-react";
import { Icon } from "./Icon";
export type LucideIconName = keyof typeof LucideIcons;

type Props = {
  readonly icon: LucideIconName;
  notification: number;

  classNames?: {
    readonly icon?: string;
    readonly notification?: number;
  };
};

export function IconHasNotification({
  icon,
  notification = 1,
  classNames,
}: Props) {
  return (
    <section className="inline-blox relative p-[2px]">
      <Icon
        name={icon}
        size={26}
        color={"#fff"}
        className={clsx(classNames?.icon)}
        aria-hidden
      />
      <span
        className="absolute top-[-4.19px] right-[-2.19px] rounded-full text-white bg-primary-blue
	inline-flex items-center justify-center
	size-[18.21px]
	border-[2px] border-solid border-black
	select-none
	font-normal
	text-[11px] leading-[12px]
 	 "
        aria-label={`You have notifications ${notification}`}
        translate="yes"
      >
        {encodeURIComponent(notification.toString())}
      </span>
    </section>
  );
}
