import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { SidebarMenu, MenuItem } from '../components/SidebarMenu/SidebarMenu';
import styles from './button.css'
export default {
  title: 'Navigation / SidebarMenu',
  component: SidebarMenu,
} as Meta;

const items: MenuItem[] = [
  { id: '1', label: 'Home', onClick: () => alert('Home clicked') },
  {
    id: '2',
    label: 'Products',
    children: [
      { id: '2-1', label: 'New' },
      { id: '2-2', label: 'Popular' },
    ],
  },
  { id: '3', label: 'About' },
];

export const OneLevel = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='button'
      >
        Open sidebar
      </button>
      <SidebarMenu open={open} onClose={() => setOpen(false)} items={items} />
    </>
  );
};

export const TwoLevel = () => {
  const nested: MenuItem[] = [
    {
      id: 'a',
      label: 'Dashboard',
    },
    {
      id: 'b',
      label: 'Settings',
      children: [
        { id: 'b-1', label: 'Profile' },
        {
          id: 'b-2',
          label: 'Security',
          children: [
            { id: 'b-2-1', label: '2FA' }, // You can adjust component to support deeper nesting if needed
          ],
        },
      ],
    },
  ];

  const [open, setOpen] = useState(true);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <SidebarMenu open={open} onClose={() => setOpen(false)} items={nested} />
    </>
  );
};
