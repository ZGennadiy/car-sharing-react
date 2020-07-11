import React from 'react';
import styles from './Button.module.scss';

export const Button = ({value, disabled = false}) => {
  return (
    <button disabled={disabled} className={styles.button} value={value}>
      {value}
    </button>
  );
};
