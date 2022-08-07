import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from '../Components/Ui/Alert';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Abra-Weather-common/Box',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
      backgroundColor: { control: 'color' },
    //   validError: { control: "boolean" }
  },
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const InputUi = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputUi.args = {
    children: "Connection is lost. Please check your connection device and try again.",
};

