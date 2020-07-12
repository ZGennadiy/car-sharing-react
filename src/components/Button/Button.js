import React from 'react';
import styles from './Button.module.scss';

export const Button = ({value, btnModifier = '', disabled = false}) => {
  const stylesList = (modifier) => {
    return modifier ? `${styles.button} ${styles[modifier]}` : styles.button;
  };

  return (
    <button
      disabled={disabled}
      className={stylesList(btnModifier)}
      value={value}
    >
      {value}
    </button>
  );
};
