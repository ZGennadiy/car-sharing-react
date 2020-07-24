import React, {useContext} from 'react';
import {OrderContext} from '../../context/OrderContext';
import styles from './OrderSteps.module.scss';
import {Button} from '../Button/Button';

export const OrderState = () => {
  const {order, goNextStep} = useContext(OrderContext);

  return (
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
  );
};
