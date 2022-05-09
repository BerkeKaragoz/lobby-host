import * as R from "@radix-ui/react-checkbox"
import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import clsx from "clsx"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
   size?: "small" | "medium" | "large"
   variant?: "contained" | "outlined" | "text"
}

const Checkbox: React.FC<Props> = (props) => {
   const { size = "medium", variant = "contained", className, ...rest } = props
   const classes = clsx([`ui-checkbox--${variant}`, className])

   return (
      <R.Root className={classes}>
         <R.Indicator>
            <CheckIcon width="25px" height="25px" />
         </R.Indicator>
      </R.Root>
   )
}

export type { Props as CheckboxProps }
export default Checkbox
