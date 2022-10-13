import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from '../lib/components/common/typography';

export default {
  title: 'Common/typography',
  component: Typography,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'number' },
    fontWeight: { control: 'number' },
    underline: { control: 'boolean' },
    lineThrough: { control: 'boolean' },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'string',
};
