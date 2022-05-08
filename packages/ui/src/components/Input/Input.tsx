import * as React from "react"
import clsx from "clsx"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
   size?: "small" | "medium" | "large"
   variant?: "contained" | "outlined" | "text"
}

const Input: React.FC<Props> = (props) => {
   const { size = "medium", variant = "contained", className, ...rest } = props
   const classes = clsx([`ui-input--${variant}`, className])

   return <input className={classes} {...rest} />
}

export type { Props as InputProps }
export default Input
