import React from 'react';
import styles from './MainPage.module.scss';
import {Header} from '../Header/Header';
import {Button} from '../Button/Button';
import {Footer} from '../Footer/Footer';

export const MainPage = () => {
  const isMobileDevice = document.documentElement.clientWidth <= 767;

  return (
    <div className={styles.mainpage}>
      <Header />
      <main className={styles.mainpage__mainContent}>
        <h1 className={styles.mainpage__h1}>
          <span>Каршеринг</span>
          <span className={styles.mainpage__companyName}>Need for drive</span>
        </h1>
        <p className={styles.mainpage__descr}>
          Поминутная аренда авто твоего города
        </p>
        <Button
          value="Забронировать"
          btnModifier={isMobileDevice ? 'button_mainMobile' : ''}
        />
      </main>
      <Footer />
    </div>
  );
};
