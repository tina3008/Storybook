import React, { useState, useCallback } from 'react';
import { Toast, ToastProps } from './Toast';
import styles from './toast.module.css';
import { v4 as uuidv4 } from 'uuid';

export type NewToast = Omit<Partial<ToastProps>, 'id' | 'onClose'> & {
  message: React.ReactNode;
};

export const useToasts = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const add = useCallback((t: NewToast) => {
    const id = uuidv4();
    setToasts(s => [...s, { id, onClose: () => {}, ...t } as ToastProps]);
    return id;
  }, []);

  const remove = useCallback((id: string) => {
    setToasts(s => s.filter(t => t.id !== id));
  }, []);

  return { toasts, add, remove };
};

export const ToastContainer: React.FC<{
  toasts: ToastProps[];
  onRemove: (id: string) => void;
}> = ({ toasts, onRemove }) => {
  return (
    <div className={styles.container} aria-live="polite" aria-atomic="false">
      {toasts.map(t => (
        <Toast key={t.id} {...t} onClose={() => onRemove(t.id)} />
      ))}
    </div>
  );
};
