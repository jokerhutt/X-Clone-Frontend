import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { default as JSX, default as React } from "react";

// TODO: Add more typography variants
// TODO: SOURCE https://www.figma.com/design/HzbnAwkoFv9yEMoD0u75z6/xdotcom?node-id=4-37723&m=dev
// TODO: ADD STATES

export const typographyVariants = cva("text-white", {
  variants: {
    role: {
      sidebarButtonText: "text-[20px] leading-[24px] font-normal ",
      sidebarButtonTextActive: "text-[20px] leading-[24px] font-bold",

      //

      postButtonMain: "text-[17px] leading-[20px] font-bold ",
      postButtonTop: "text-[15px] leading-[20px] font-bold ",
      //
      suggestion: "text-[14px] leading-[16px] font-bold ",
      cardTitle: "text-[15px] leading-[20px] font-bold ",
      cardUserTag: "text-[15px] leading-[20px] font-normal ",
      blogTheme: "text-[13px] leading-[16px] font-normal ",
      postText: "text-[15px] leading-[20px] font-normal ",
      tab: "text-[15px] leading-[20px] font-bold ",
      commentInput: "text-[20px] leading-[24px] font-normal ",
    },
  },
  defaultVariants: {
    role: "postText",
  },
});

export type TypographyRole = VariantProps<typeof typographyVariants>["role"];

type AsTag =
  | "p"
  | "span"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "label"
  | "small"
  | "figcaption"
  | "cite"
  | "time"
  | "a"
  | keyof JSX.IntrinsicElements;

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  as?: AsTag;
  children?: React.ReactNode;
  className?: string;
}

type PropsToOmit<T extends AsTag> = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  "color" | keyof TypographyProps
>;
type PolymorphicProps<T extends AsTag> = TypographyProps &
  PropsToOmit<T> & { as?: T };

const Typography = React.forwardRef<HTMLElement, PolymorphicProps<AsTag>>(
  ({ as, role, children, className, ...props }, ref) => {
    const Component = as || "p";

    return (
      <TypographyInner
        as={Component}
        role={role}
        className={className}
        {...props}
        ref={ref}
      >
        {children}
      </TypographyInner>
    );
  }
);

const TypographyInner = React.forwardRef<HTMLElement, PolymorphicProps<AsTag>>(
  ({ as: Component = "p", role, className, ...props }, ref) => {
    const Comp = Component as React.ElementType;
    return (
      <Comp
        ref={ref}
        className={clsx(typographyVariants({ role }), className)}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";
TypographyInner.displayName = "TypographyInner";

export { Typography };
