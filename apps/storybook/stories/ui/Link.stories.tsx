import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "ui";

export default {
  title: "UI/Link",
  component: Link,
  argTypes: {
    to: {},
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Link",
  to: "https://berkekaragoz.com/",
};
