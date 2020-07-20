import React from 'react';
import styles from './OrderPage.module.scss';
import {Header} from '../../components/Header/Header';
import map from '../../assets/img/map.jpg';
import {Button} from '../../components/Button/Button';

export const OrderPage = () => {
  return (
    <>
      <div className={styles.orderpage}>
        <Header />
        <main className={styles.orderpage__mainContent}>
          <ul className={styles.orderpage__breadcrumbs}>
            <li className={styles.orderpage__crumb}>
              <a className={styles.orderpage__crumbLink} href="#location">
                Местоположение
              </a>
            </li>
            <li className={styles.orderpage__crumb}>
              <a className={styles.orderpage__crumbLink} disabled href="#car">
                Модель
              </a>
            </li>
            <li className={styles.orderpage__crumb}>
              <a
                className={styles.orderpage__crumbLink}
                disabled
                href="#options"
              >
                Дополнительно
              </a>
            </li>
            <li className={styles.orderpage__crumb}>
              <a
                className={styles.orderpage__crumbLink}
                disabled
                href="#summary"
              >
                Итого
              </a>
            </li>
          </ul>
          <div className={styles.orderpage__container}>
            <section className={styles.orderpage__orderMake}>
              <div className={styles.orderpage__choiceLocation}>
                <label>
                  Город
                  <input
                    className={styles.orderpage__input}
                    placeholder="Начните вводить город ..."
                    type="text"
                  />
                </label>
                <label>
                  Пункт выдачи
                  <input
                    className={styles.orderpage__input}
                    placeholder="Начните вводить пункт ..."
                    type="text"
                  />
                </label>
              </div>
              <div className={styles.orderpage__map}>
                <p>Выберите на карте:</p>
                <img src={map} alt="map" />
              </div>
            </section>
            <section className={styles.orderpage__orderState}>
              <h2 className={styles.orderpage__h2}>Ваш заказ:</h2>
              <div className={styles.orderpage__detailes}>
                <div className={styles.orderpage__orderOption}>
                  <p className={styles.orderpage__optionName}>Пункт выдачи</p>
                  <div className={styles.orderpage__optionDivider} />
                  <p className={styles.orderpage__optionValue}>
                    Ульяновск, Нариманова 42
                  </p>
                </div>
              </div>
              <p className={styles.orderpage__price}>
                Цена:&nbsp;
                <span className={styles.orderpage__priceValue}>
                  от 8 000 до 12 000 ₽
                </span>
              </p>
              <Button value="Выбрать модель" disabled />
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
