import React from 'react';
import { Meta } from '@storybook/react';
import { ToastContainer, useToasts } from '../components/Toast/ToastContainer';
import { ToastProps } from '../components/Toast/Toast';

export default {
  title: 'Feedback / Toast',
  component: ToastContainer,
} as Meta;

export const Demo = () => {
  const { toasts, add, remove } = useToasts();

  const addToast = (type: ToastProps['type'], duration = 3000) => {
    const id = Date.now().toString();
    const t = {
      id,
      type,
      message: `This is a ${type} toast`,
      duration,
      closable: true,
      onClose: () => {},
    } as any;

    (add as any)({
      message: `This is ${type}`,
      type,
      duration,
      closable: true,
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => addToast('info')}>Show info</button>{' '}
      <button onClick={() => addToast('success')}>success</button>{' '}
      <button onClick={() => addToast('error', 0)}>error (sticky)</button>
      <ToastContainer
        toasts={toasts as any}
        onRemove={(id: string) => remove(id)}
      />
    </div>
  );
};
