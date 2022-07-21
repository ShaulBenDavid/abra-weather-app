import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorBox from '../Components/ErrorBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Abra-Weather-common/Inputs',
  component: ErrorBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //   backgroundColor: { control: 'color' },
    //   validError: { control: "boolean" }
  },
} as ComponentMeta<typeof ErrorBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorBox> = (args) => <ErrorBox {...args} />;

export const InputUi = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputUi.args = {
    children: "Connection is lost. Please check your connection device and try again.",
};

// export const White = Template.bind({});
//   White.args = {
//     variant: "white",
//     children: 'White',
// };

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
