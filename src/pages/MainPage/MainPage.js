import React from 'react';
import {Link} from 'react-router-dom';
import styles from './MainPage.module.scss';
import {Header} from '../../components/Header/Header';
import {Button} from '../../components/Button/Button';
import {Footer} from '../../components/Footer/Footer';
import {Slider} from '../../components/Slider/Slider';

export const MainPage = () => (
  <>
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
        <Link to="/order">
          <Button value="Забронировать" btnModifier="button_mainMobile" />
        </Link>
      </main>
      <Footer />
    </div>
    <Slider />
  </>
);
