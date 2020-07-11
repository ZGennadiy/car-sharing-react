import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return <footer className={styles.footer}>
    <div className={styles.footer__copywrite}>© 2016-2019 «Need for drive»</div>
    <a href="tel:+74952342244" className={styles.footer__phone}>8 (495) 234-22-44</a>
  </footer>;
};
