import React from 'react';
import styles from './Button.module.scss';

export const Button = ({value, btnModifier = '', disabled = false}) => {
  const stylesList = btnModifier
    ? `${styles.button} ${styles[btnModifier]}`
    : styles.button;

  return (
    <button disabled={disabled} className={stylesList} value={value}>
      {value}
    </button>
  );
};
