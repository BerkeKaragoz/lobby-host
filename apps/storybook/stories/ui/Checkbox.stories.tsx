import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Checkbox } from "ui"

export default {
   title: "UI/Checkbox",
   component: Checkbox,
   argTypes: {
      onChange: () => {},
   },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
   placeholder: "Primary",
}
