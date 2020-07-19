import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import {LocationMarkIcon} from '../../assets/icons/icons';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link className={styles.header__linkHome} to="/">
          Need for drive
        </Link>
      </div>
      <div className={styles.header__location}>
        <LocationMarkIcon />
        <div className={styles.header__city}>Ульяновск</div>
      </div>
    </header>
  );
};
