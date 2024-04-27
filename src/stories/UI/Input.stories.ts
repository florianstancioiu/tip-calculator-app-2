import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Input from '../../components/UI/Input';
import '../../reset.css';
import '../../globals.css';
import PersonIcon from '../../images/icon-person.svg';
import DollarIcon from '../../images/icon-dollar.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    defaultValue: { control: 'number' },
    icon: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NumberOfPersons: Story = {
  args: {
    title: 'Number of persons',
    defaultValue: 0,
    icon: PersonIcon,
  },
};

export const Bill: Story = {
  args: {
    title: 'Bill',
    defaultValue: 10,
    icon: DollarIcon,
  },
};
