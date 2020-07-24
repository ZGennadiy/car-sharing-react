import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import styles from './Navbar.module.scss';
import {
  FacebookIcon,
  TelegramIcon,
  InstagramIcon,
} from '../../assets/icons/socialIcons';

export const Navbar = () => {
  const [lang, setLang] = useState('Рус');
  const {pathname} = useLocation();

  return (
    <div className={styles.navbar}>
      <input
        className={styles.navbar__toggle}
        id="navbarToggle"
        type="checkbox"
      />
      <label className={styles.navbar__btn} htmlFor="navbarToggle">
        <span className={styles.navbar__hamburger}> </span>
      </label>
      <nav
        className={
          pathname !== '/car-sharing-react'
            ? styles.navbar__wrapper
            : `${styles.navbar__wrapper} ${styles.navbar__wrapper_mainPage}`
        }
      >
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <a href="#parking" className={styles.menu__link}>
              ПАРКОВКА
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#insurance" className={styles.menu__link}>
              СТРАХОВКА
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#petrol" className={styles.menu__link}>
              БЕНЗИН
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#service" className={styles.menu__link}>
              ОБСЛУЖИВАНИЕ
            </a>
          </li>
          <div className={styles.social}>
            <a className={styles.social__link} href="#facebook">
              <TelegramIcon />
            </a>
            <a className={styles.social__link} href="#facebook">
              <FacebookIcon />
            </a>
            <a className={styles.social__link} href="#instagram">
              <InstagramIcon />
            </a>
          </div>
        </ul>
      </nav>
      <button
        onClick={() => setLang(lang === 'Рус' ? 'Eng' : 'Рус')}
        id="langBtn"
        value={lang}
        className={styles.langBtn}
      >
        {lang}
      </button>
    </div>
  );
};
