import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "ui"

export default {
   title: "UI/Button",
   component: Button,
   argTypes: {
      //backgroundColor: { control: "color" },
      onClick: () => {},
   },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
   children: "Primary",
}
