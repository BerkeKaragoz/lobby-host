import * as R from "@radix-ui/react-checkbox"
import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import clsx from "clsx"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
   scale?: "small" | "medium" | "large"
   variant?: "contained" | "outlined" | "text"
}
const Checkbox: React.FC<Props> = (props) => {
   const { scale = "medium", variant = "contained", className, ...rest } = props
   const classes = clsx([`ui-checkbox--${variant}`, `scale-${scale}`, className])

   const checkIconSizes = {
      width: clsx([
         { "18px": scale === "small" },
         { "24px": scale === "medium" },
         { "36px": scale === "large" },
      ]),
      height: clsx([
         { "18px": scale === "small" },
         { "24px": scale === "medium" },
         { "36px": scale === "large" },
      ]),
   }

   return (
      <R.Root className={classes} {...rest}>
         <R.Indicator>
            <CheckIcon {...checkIconSizes} />
         </R.Indicator>
      </R.Root>
   )
}

export type { Props as CheckboxProps }
export default Checkbox
