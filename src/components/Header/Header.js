import React from 'react';
import styles from './Header.module.scss';
import {LocationMarkIcon} from '../../assets/icons/icons';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>Need for drive</div>
      <div className={styles.header__location}>
        <LocationMarkIcon />
        <div className={styles.header__city}>Ульяновск</div>
      </div>
    </header>
  );
};
