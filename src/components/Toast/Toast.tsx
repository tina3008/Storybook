import React, { useEffect } from 'react';
import styles from './toast.module.css';

export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface ToastProps {
  id: string;
  type?: ToastType;
  message: React.ReactNode;
  duration?: number; // ms
  onClose: (id: string) => void;
  closable?: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  type = 'info',
  message,
  duration = 3000,
  onClose,
  closable = false,
}) => {
  useEffect(() => {
    if (duration === 0) return;
    const t = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(t);
  }, [duration, id, onClose]);

  return (
    <div
      className={`${styles.toast} ${styles[type]}`}
      role="status"
      aria-live="polite"
    >
      <div className={styles.content}>
        <div className={styles.message}>{message}</div>
        {closable && (
          <button
            aria-label="Close"
            className={styles.close}
            onClick={() => onClose(id)}
          >
           X
          </button>
        )}
      </div>
    </div>
  );
};
