import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Input } from "ui"

export default {
   title: "UI/Input",
   component: Input,
   argTypes: {
      onChange: () => {},
      size: { type: "number" },
   },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
   placeholder: "Primary",
   type: "text",
   scale: undefined,
   size: undefined,
}
