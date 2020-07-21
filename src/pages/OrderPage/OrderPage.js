import React, {useState} from 'react';
import styles from './OrderPage.module.scss';
import {Header} from '../../components/Header/Header';
import {Breadcrumbs} from '../../components/Breadcrumbs/Breadcrumbs';
import {Button} from '../../components/Button/Button';
import map from '../../assets/img/map.jpg';

export const OrderPage = () => {
  const [order, setOrder] = useState({
    stepOrder: 1,
  });

  const goNextStep = ({stepOrder}) =>
    setOrder({...order, stepOrder: stepOrder + 1});

  return (
    <>
      <div className={styles.orderpage}>
        <Header />
        <main className={styles.orderpage__mainContent}>
          <Breadcrumbs step={order.stepOrder} />
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
              <Button
                value="Выбрать модель"
                btnModifier="button_mobileFullWidth"
                onClick={() => goNextStep(order)}
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
};
