import React from 'react';
import styles from './OrderSteps.module.scss';
import imgElantra from '../../assets/img/cars/elantra.png';
import imgI30 from '../../assets/img/cars/i30n.png';
import imgCreta from '../../assets/img/cars/creta.png';
import imgSonata from '../../assets/img/cars/sonata.png';
import imgMercedes from '../../assets/img/cars/mercedes.png';
import imgAudi from '../../assets/img/cars/audi.png';

export const OrderStep2 = () => {
  const categories = [
    {value: 'all', txt: 'Все модели', defaultChecked: true},
    {value: 'standart', txt: 'Эконом'},
    {value: 'premium', txt: 'Премиум'},
  ];

  const cars = [
    {
      model: 'Elantra',
      categorie: 'standart',
      price: '12 000 - 25 000 ₽',
      imgPath: imgElantra,
    },
    {
      model: 'i30 N',
      categorie: 'standart',
      price: '10 000 - 32 000 ₽',
      imgPath: imgI30,
    },
    {
      model: 'CRETA',
      categorie: 'standart',
      price: '12 000 - 25 000 ₽',
      imgPath: imgCreta,
    },
    {
      model: 'SONATA',
      categorie: 'premium',
      price: '15 000 - 35 000 ₽',
      imgPath: imgSonata,
    },
    {
      model: 'Mercedes',
      categorie: 'premium',
      price: '15 000 - 35 000 ₽',
      imgPath: imgMercedes,
    },
    {
      model: 'Audi',
      categorie: 'premium',
      price: '15 000 - 35 000 ₽',
      imgPath: imgAudi,
    },
  ];

  return (
    <>
      <div className={styles.radioInputs}>
        {categories.map(({value, txt, defaultChecked}, index) => (
          <label key={String(index)} className={styles.radioInputs__label}>
            <input
              className={styles.radioInputs__input}
              name="carClassFilter"
              type="radio"
              defaultChecked={defaultChecked}
              value={value}
            />
            <span>{txt}</span>
          </label>
        ))}
      </div>
      <div className={styles.catalogue}>
        {cars.map(({model, categorie, price, imgPath}, index) => (
          <label key={String(index)} datacategorie={categorie}>
            <input
              className={styles.catalogue__carInput}
              type="radio"
              name="car"
              value={model}
            />
            <div className={styles.catalogue__car}>
              <div className={styles.catalogue__aboutCar}>
                <p className={styles.catalogue__model}>{model}</p>
                <p className={styles.catalogue__price}>{price}</p>
              </div>
              <div className={styles.catalogue__view}>
                <img
                  src={imgPath}
                  alt={model}
                  className={styles.catalogue__img}
                />
              </div>
            </div>
          </label>
        ))}
      </div>
    </>
  );
};
