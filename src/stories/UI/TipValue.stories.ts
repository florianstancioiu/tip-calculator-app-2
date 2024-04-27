import type { Meta, StoryObj } from '@storybook/react';
import TipValue from '../../components/UI/TipValue';
import '../../reset.css';
import '../../globals.css';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/TipValue',
  component: TipValue,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    value: { control: 'number' },
  },
} satisfies Meta<typeof TipValue>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TipAmount: Story = {
  args: {
    title: 'Tip Amount',
    value: 10,
  },
};

export const Total: Story = {
  args: {
    title: 'Total',
    value: 100,
  },
};
