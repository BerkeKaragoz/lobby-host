import * as React from "react"
import clsx from "clsx"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
   size?: "small" | "medium" | "large"
   variant?: "contained" | "outlined" | "text"
}

const Button: React.FC<Props> = (props) => {
   const { size = "medium", variant = "contained", className, ...rest } = props
   const classes = clsx([`ui-button--${variant}`, className])

   return <button className={classes} {...rest} />
}

export type { Props as ButtonProps }
export default Button
