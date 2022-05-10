/* eslint-disable react/jsx-no-target-blank */
import * as React from "react"
import { ButtonProps } from "@/components/Button"
import clsx from "clsx"

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
   to?: HTMLAnchorElement["href"]
   isNewTab?: boolean
   isButton?: boolean
   buttonVariant?: ButtonProps["variant"]
   scale?: "small" | "medium" | "large"
}

const Link: React.FC<Props> = (props) => {
   const {
      to,
      isNewTab = false,
      isButton = false,
      buttonVariant = "outlined",
      scale = "medium",
      className,
      ...rest
   } = props
   const classes = clsx([
      { "ui-link": !isButton },
      { "ui-link-button": isButton },
      { [`ui-button--${buttonVariant}`]: isButton },
      `scale-${scale}`,
      className,
   ])

   return (
      <a
         href={to}
         className={classes}
         target={isNewTab ? "_blank" : undefined}
         rel={isNewTab ? "noreferrer" : undefined}
         {...rest}
      />
   )
}

export type { Props as LinkProps }
export default Link
