import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Input / Form controls',
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'number'] },
    clearable: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: { type: 'text', placeholder: 'Your name', clearable: true },
};

export const Password: Story = {
  args: { type: 'password', placeholder: 'Password', clearable: true },
};

export const Number: Story = {
  args: { type: 'number', placeholder: 'Quantity', clearable: false },
};
