import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FromInput from '../Components/FromInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Abra-Weather-common/Inputs',
  component: FromInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //   backgroundColor: { control: 'color' },
    //   validError: { control: "boolean" }
  },
} as ComponentMeta<typeof FromInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FromInput> = (args) => <FromInput {...args} />;

export const InputUi = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputUi.args = {
    label: "Input",
    placeholder: "User Name",
    type: "text",
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
