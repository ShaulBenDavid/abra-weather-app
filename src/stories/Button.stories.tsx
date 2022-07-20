import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Abra-Weather-common/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: 'Primary',
};

export const White = Template.bind({});
  White.args = {
    variant: "white",
    children: 'White',
};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: "inverted",
  children: 'Inverted',
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  children: 'Link',
};
