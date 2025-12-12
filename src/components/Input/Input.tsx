import React, { InputHTMLAttributes, useState, forwardRef } from 'react';
import styles from './Input.module.css';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends NativeInputProps {
  clearable?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', clearable = false, className = '', ...rest }, ref) => {
    const [showPwd, setShowPwd] = useState(false);
    const inputType =
      type === 'password' ? (showPwd ? 'text' : 'password') : type;

    const handleClear = (e: React.MouseEvent) => {
      e.preventDefault();

      const input =
        ref && 'current' in ref && ref.current
          ? (ref.current as HTMLInputElement)
          : null;
      if (input) {
        input.value = '';
        const ev = new Event('input');
        input.dispatchEvent(ev);
      }
    };

    return (
      <div className={`${styles.wrapper} ${className}`}>
        <input
          ref={ref as any}
          type={inputType}
          className={styles.input}
          {...rest}
        />
        {type === 'password' && (
          <button
            aria-label={showPwd ? 'Hide password' : 'Show password'}
            className={styles.iconButton}
            onClick={() => setShowPwd(s => !s)}
            type="button"
          >
            {showPwd ? (
              <FiEye size={19} className={styles.eye} />
            ) : (
              <FiEyeOff size={19} className={styles.eye} />
            )}
          </button>
        )}
        {clearable && (
          <button
            aria-label="Clear"
            className={styles.clearButton}
            onClick={handleClear}
            type="button"
          >
            X
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
