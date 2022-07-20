import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ToggleSwitch from '../Components/ToggleSwitch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Abra-Weather-common/SwitchButton',
  component: ToggleSwitch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //   backgroundColor: { control: 'color' },
    //   validError: { control: "boolean" }
  },
} as ComponentMeta<typeof ToggleSwitch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch {...args} />;

export const SwitchMode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SwitchMode.args = {
    switchType: "mode",
};

export const SwitchTemp = Template.bind({});
SwitchTemp.args = {
    switchType: "temp",
};

// export const Inverted = Template.bind({});
// Inverted.args = {
//   variant: "inverted",
//   children: 'Inverted',
// };

// export const Link = Template.bind({});
// Link.args = {
//   variant: "link",
//   children: 'Link',
// };
