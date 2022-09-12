import { Meta, Story } from "@storybook/react/types-6-0";
import Main from ".";

export default {
  title: "Main",
  component: Main
} as Meta;

export const Default: Story = (args) => <Main {...args} />;

Default.args = {
  title: "Default Title",
  description: "Default Description"
};

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: "Basic Title",
  description: "Basic Description"
};
