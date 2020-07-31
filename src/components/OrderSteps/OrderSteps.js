import React from 'react';
import styles from './OrderSteps.module.scss';
import map from '../../assets/img/map.jpg';

export const OrderStep1 = () => (
  <>
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
  </>
);

export const OrderStep2 = () => (
  <form className={styles.carFilter}>
    <label className={styles.carFilter__label}>
      <input
        className={styles.carFilter__radio}
        name="carClassFilter"
        type="radio"
        defaultChecked
        value="all"
      />
      <span>Все модели</span>
    </label>
    <label className={styles.carFilter__label}>
      <input
        className={styles.carFilter__radio}
        name="carClassFilter"
        type="radio"
        value="standart"
      />
      <span>Эконом</span>
    </label>
    <label className={styles.carFilter__label}>
      <input
        className={styles.carFilter__radio}
        name="carClassFilter"
        type="radio"
        value="premium"
      />
      <span>Премиум</span>
    </label>
  </form>
);
