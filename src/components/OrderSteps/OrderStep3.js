import React from 'react';
import styles from './OrderSteps.module.scss';

export const OrderStep3 = () => {
  const colors = [
    {value: 'any', txt: 'Любой', defaultChecked: true},
    {value: 'red', txt: 'Красный'},
    {value: 'blue', txt: 'Голубой'},
  ];
  const tariff = [
    {value: 'minute', txt: 'Поминутно, 7₽/мин', defaultChecked: true},
    {value: 'day', txt: 'На сутки, 1999 ₽/сутки'},
  ];

  const options = [
    {value: 'fullTank', txt: 'Полный бак, 500р'},
    {value: 'childSeat', txt: 'Детское кресло, 200р'},
    {value: 'rightЦheel', txt: 'Правый руль, 1600р'},
  ];

  return (
    <>
      <p className={styles.sectionName}>Цвет</p>
      <div className={styles.radioInputs}>
        {colors.map(({value, txt, defaultChecked}, index) => (
          <label key={String(index)} className={styles.radioInputs__label}>
            <input
              className={styles.radioInputs__input}
              name="carColor"
              type="radio"
              defaultChecked={defaultChecked}
              value={value}
            />
            <span>{txt}</span>
          </label>
        ))}
      </div>
      <p className={styles.sectionName}>Дата аренды</p>
      <div className={styles.textInputs}>
        <label>
          <span>С</span>
          <input
            className={styles.orderpage__input}
            placeholder="Введите дату и время"
            type="text"
          />
        </label>
        <label>
          <span>По</span>
          <input
            className={styles.orderpage__input}
            placeholder="Введите дату и время"
            type="text"
          />
        </label>
      </div>
      <p className={styles.sectionName}>Тариф</p>
      <div className={`${styles.radioInputs} ${styles.radioInputs_col}`}>
        {tariff.map(({value, txt, defaultChecked}, index) => (
          <label key={String(index)} className={styles.radioInputs__label}>
            <input
              className={styles.radioInputs__input}
              name="tariff"
              type="radio"
              defaultChecked={defaultChecked}
              value={value}
            />
            <span>{txt}</span>
          </label>
        ))}
      </div>
      <p className={styles.sectionName}>Доп услуги</p>
      <div className={`${styles.checkboxInputs} ${styles.checkboxInputs_col}`}>
        {options.map(({value, txt}, index) => (
          <label key={String(index)} className={styles.checkboxInputs__label}>
            <input
              className={styles.checkboxInputs__input}
              type="checkbox"
              value={value}
            />
            <span>{txt}</span>
          </label>
        ))}
      </div>
    </>
  );
};
