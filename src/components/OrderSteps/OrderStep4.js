import React from 'react';
import styles from './OrderSteps.module.scss';
import imgI30 from '../../assets/img/cars/i30n.png';

export const OrderStep4 = () => (
  <>
    <div className={styles.orderSummury}>
      <div className={styles.catalogue__aboutCar}>
        <p className={styles.catalogue__model}>Hyndai, i30 N</p>
        <p className={styles.catalogue__carNumber}>K 761 HA 73</p>
        <p className={styles.catalogue__option}>
          Топливо <span className={styles.catalogue__optionValue}>100%</span>
        </p>
        <p className={styles.catalogue__option}>
          Доступна с{' '}
          <span className={styles.catalogue__optionValue}>
            12.06.2019 12:00
          </span>
        </p>
      </div>
      <div className={styles.catalogue__view}>
        <img src={imgI30} alt="" className={styles.catalogue__img} />
      </div>
    </div>
  </>
);
