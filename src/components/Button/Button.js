import React from 'react';
import styles from './Button.module.scss';

export const Button = ({
  value = 'Подробнее',
  btnModifier = '',
  disabled = false,
  onClick,
}) => {
  const stylesList = btnModifier
    ? `${styles.button} ${styles[btnModifier]}`
    : styles.button;

  return (
    <button
      disabled={disabled}
      className={stylesList}
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
